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
      :differentCurrent="checkCurrentSong ? undefined : favList[0]"
      :favCurrentDuration="checkCurrentSong ? undefined : currentDuration"
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
      currentDuration: 0,
    }
  },
  created() {
    this.$nuxt.$on('endedSongFav', () =>
      this.$store.dispatch('goNext', this.favList)
    )
    this.$nuxt.$on(
      'changeHandlerFav',
      () => (this.songHandler = !this.songHandler)
    )

    this.setFavList()
    if (this.favList.length !== 0 && this.checkCurrentSong) {
      this.songHandler = this.getSongHandler
    }

    if (this.checkCurrentSong === undefined && this.favList.length !== 0) {
      this.fullTimeInterval()
    }
  },
  computed: {
    ...mapGetters([
      'getWidth',
      'getAllSongList',
      'getSongHandler',
      'getCurrentSong',
    ]),
    checkCurrentSong() {
      return this.favList.find((item) => item.id === this.getCurrentSong.id)
    },
  },
  methods: {
    setFavList() {
      this.favList = this.getAllSongList.filter((item) => item.favorite)
    },
    fullTimeInterval() {
      const currentAudio = new Audio()
      currentAudio.src = this.favList[0].address
      const duration = setInterval(async () => {
        const currentDuration = await currentAudio.duration
        this.currentDuration = currentDuration
        if (this.currentDuration !== 0 && currentDuration !== undefined) {
          clearInterval(duration)
        }
      }, 1000)
    },
  },
  watch: {
    getAllSongList: {
      handler: function () {
        this.setFavList()
        if (this.checkCurrentSong) {
          this.songHandler = this.getSongHandler
        } else {
          this.songHandler = false
        }
      },
      deep: true,
    },
    checkCurrentSong(newVal) {
      if (this.songHandler != this.getSongHandler && newVal) {
        this.songHandler = this.getSongHandler
      }
      if (newVal === undefined && this.favList.length !== 0) {
        this.fullTimeInterval()
      }
    },
  },
  components: { SongList },
}
</script>
