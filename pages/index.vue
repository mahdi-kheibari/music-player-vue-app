<template>
  <div>
    <audio :src="getCurrentSong.address" ref="audioRef"></audio>
    <current-song :current="getCurrentSong"></current-song>
    <song-list v-if="getWidth > 778"></song-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CurrentSong from '../components/CurrentSong.vue'
import SongList from '../components/songlist/SongList.vue'
export default {
  created() {
    const current = this.$store.state.AllMusicList[0]
    this.$store.commit('changeCurrentSong', current)
  },
  components: {
    CurrentSong,
    SongList,
  },
  computed: {
    ...mapGetters(['getWidth', 'getCurrentSong','getSongHandler']),
  },
  watch: {
    getSongHandler(newVal){
        if(newVal){
            this.$refs.audioRef.play();
        }else{
            this.$refs.audioRef.pause();
        }
    }
  },
}
</script>
