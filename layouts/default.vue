<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <audio :src="getCurrentSong.address" ref="audioRef" @ended="goNext(getAllMusicList)"></audio>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'DefaultLayout',
  mounted() {
    console.log(this.$vuetify.breakpoint)
    this.$store.commit('changeWidth', window.innerWidth)
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.$store.commit('changeWidth', window.innerWidth)
      })
    })
  },
  computed: {
    ...mapGetters(['getCurrentSong', 'getSongHandler','getAllMusicList']),
    forWatchSongHandler() {
      return `${this.getSongHandler}|${JSON.stringify(this.getCurrentSong)}`
    },
  },
  methods:{
    ...mapActions(['goNext'])
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
