<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <audio
        :src="getCurrentSong.address"
        ref="audioRef"
        @ended="goNext(getAllMusicList)"
      ></audio>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'DefaultLayout',
  created() {
    this.$nuxt.$on('changeRange', (currentTime) => {
      this.$refs.audioRef.currentTime = currentTime
    })
  },
  mounted() {
    console.log(this.$vuetify.breakpoint)
    this.$store.commit('changeWidth', window.innerWidth)
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.$store.commit('changeWidth', window.innerWidth)
      })
    })
  },
  data() {
    return {
      currentDuration: 0,
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentSong',
      'getSongHandler',
      'getAllMusicList',
      'getFullTime',
    ]),
    forWatchSongHandler() {
      return `${this.getSongHandler}|${JSON.stringify(this.getCurrentSong)}`
    },
  },
  methods: {
    ...mapActions(['goNext']),
    ...mapMutations(['changeCurrentTime', 'changeFullTime']),
  },
  watch: {
    forWatchSongHandler: {
      handler: async function (newVal, oldval) {
        let currentTimeInterval
        const [newValHandle, newCurrent] = newVal.split('|')
        const [oldValHandle, oldCurrent] = oldval.split('|')
        if (newValHandle === 'true') {
          //for play and pause song
          let playPromise = await this.$refs.audioRef.play()
          if (newCurrent !== oldCurrent && JSON.parse(oldCurrent).name !== '') {
            if (playPromise !== undefined) {
              playPromise.then(async (_) => {
                await this.$refs.audioRef.pause()
              })
            }
            await this.$refs.audioRef.play()
          }

          //for time
          currentTimeInterval = setInterval(async () => {
            await this.changeCurrentTime(this.$refs.audioRef.currentTime)
            if (
              this.$refs.audioRef.paused ||
              this.$refs.audioRef.currentTime == this.$refs.audioRef.duration
            ) {
              clearInterval(currentTimeInterval)
            }
          }, 1000)
        } else {
          await this.$refs.audioRef.pause()
        }
      },
      deep: true,
    },
    getCurrentSong() {
      const duration = setInterval(async () => {
        const currentDuration = await this.$refs.audioRef.duration
        this.changeFullTime(currentDuration)
        if (this.getFullTime !== 0 && currentDuration !== undefined) {
          clearInterval(duration)
        }
      }, 1000)
    },
  },
}
</script>
