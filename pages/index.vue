<template>
  <div>
    <audio
      :src="getCurrentSong.address"
      ref="audioRef"
      :id="getCurrentSong.id"
    ></audio>
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
    ...mapGetters(['getWidth', 'getCurrentSong', 'getSongHandler']),
    forWatchSongHandler() {
      return `${this.getSongHandler}|${JSON.stringify(this.getCurrentSong)}`
    },
  },
  watch: {
    forWatchSongHandler: {
      handler: async function (newVal, oldval) {
        const [newValHandle, newCurrent] = newVal.split('|')
        const [oldValHandle, oldCurrent] = oldval.split('|')
        if (newValHandle === 'true') {
          let playPromise = await this.$refs.audioRef.play()
          if (newCurrent !== oldCurrent && JSON.parse(oldCurrent).name !== '') {
            if (playPromise !== undefined) {
              playPromise.then(async (_) => {
                await this.$refs.audioRef.pause()
              })
            }
            await this.$refs.audioRef.play()
          }
        } else {
          await this.$refs.audioRef.pause()
        }
      },
      deep: true,
    },
  },
}
</script>
