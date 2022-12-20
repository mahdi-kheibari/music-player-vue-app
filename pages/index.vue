<template>
  <div>
    <current-song></current-song>
    <song-list v-if="getWidth > 778"></song-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CurrentSong from '../components/CurrentSong.vue'
import SongList from '../components/songlist/SongList.vue'
export default {
  created() {
    if (this.getCurrentSong.name==='') {
        const current = this.$store.state.AllSongList[0]
        this.$store.commit('changeCurrentSong', current)
    }
  },
  components: {
    CurrentSong,
    SongList,
  },
  computed: {
    ...mapGetters(['getWidth', 'getCurrentSong']),
  },
}
</script>
