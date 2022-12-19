<template>
  <div>
    <h1 v-if="favList.length === 0" class="text-center mt-3 text--secondary">
      There is no favorite song
      <v-icon color="primary" size="4rem">sentiment_dissatisfied</v-icon>
    </h1>
    <current-song
      v-else
      :favorite="true"
      :favList="favList"
      :songHandlerFav.sync="songHandler"
      :differentCurrent="checkCurrentSong()?undefined:favList[0]"
    ></current-song>
    <SongList
      v-if="getWidth > 778"
      :favorite="true"
      :favList="favList"
    ></SongList>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SongList from '~/components/songlist/SongList.vue'

export default {
  data() {
    return {
      favList: [],
      songHandler: false,
    }
  },
  created() {
    this.setFavList()
    if (this.favList.length !== 0) {
      if (this.checkCurrentSong()) {
        this.songHandler = this.getSongHandler
      }
    }
  },
  computed: {
    ...mapGetters([
      'getWidth',
      'getAllSongList',
      'getSongHandler',
      'getCurrentSong',
    ]),
  },
  methods: {
    checkCurrentSong() {
      return this.favList.find((item) => item.id === this.getCurrentSong.id)
    },
    setFavList() {
      this.favList = this.getAllSongList.filter((item) => item.favorite)
    },
  },
  watch: {
    getAllSongList: {
      handler: function () {
        this.setFavList()
      },
      deep: true,
    },
  },
  components: { SongList },
}
</script>
