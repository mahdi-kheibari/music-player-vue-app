<template>
  <div>
    <div
      v-show="getWidth > 778"
      class="currentSong"
      :style="{
        backgroundImage: `linear-gradient(0deg,rgba(35,53,74,0.7),rgba(35,53,74,0.85)), url(${getCurrentSong.cover})`,
      }"
    >
      <v-row no-gutters>
        <v-col cols="5" lg="3" class="pa-0 d-flex justify-end">
          <v-card class="currentSong_box">
            <div class="currentSong_box-img mx-auto rounded">
              <v-img :src="getCurrentSong.cover" class="rounded">
                <v-icon
                  size="5rem"
                  class="currentSong_box-icon"
                  color="primary"
                  @click="changeSongHndler(!getSongHandler)"
                  >{{ getSongHandler ? 'pause_circle' : 'play_arrow' }}</v-icon
                >
              </v-img>
            </div>
            <v-card-title class="primary--text font-weight-bold">
              {{ getCurrentSong.name }}
            </v-card-title>
            <v-card-text>
              <div class="d-flex justify-space-between align-center">
                <span class="pr-4 pb-4 primary--text font-16">
                  {{ getCurrentSong.singer }}
                </span>
                <div class="visualizer d-flex align-baseline">
                  <div class="visualizer_icon"></div>
                  <div class="visualizer_icon2"></div>
                  <div class="visualizer_icon3"></div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="7" lg="9">
          <v-row no-gutters>
            <v-col cols="12">
              <div class="currentSong_caption">
                <v-row class="justify-space-between w-100 align-center">
                  <v-col cols="6" class="ml-3">
                    <h2 className="font-weight-bold">
                      {{ getCurrentSong.name }}
                    </h2>
                    <h4>{{ getCurrentSong.singer }}</h4>
                  </v-col>
                  <v-col
                    cols="5"
                    class="d-flex flex-column align-end mr-lg-auto"
                  >
                    <div>
                      <v-icon
                        size="2.5rem"
                        color="primary"
                        class="currentSong_caption-icon"
                        @click="goBack(getAllMusicList)"
                        >skip_previous</v-icon
                      >
                      <v-icon
                        size="3rem"
                        color="primary"
                        class="currentSong_caption-icon"
                        @click="changeSongHndler(!getSongHandler)"
                        >{{
                          getSongHandler ? 'pause_circle' : 'play_arrow'
                        }}</v-icon
                      >
                      <v-icon
                        size="2.5rem"
                        color="primary"
                        class="currentSong_caption-icon"
                        @click="goNext(getAllMusicList)"
                        >skip_next</v-icon
                      >
                    </div>
                    <v-icon
                      size="2.25rem"
                      color="primary"
                      class="currentSong_caption-icon"
                      >favorite</v-icon
                    >
                  </v-col>
                </v-row>
              </div>
            </v-col>
            <v-col cols="12">
              <div class="currentSong_time d-flex justify-space-between mt-4">
                <span class="ml-2">{{ time(getCurrentTime) }}</span>
                <span class="mr-2">{{ time(getFullTime) }}</span>
              </div>
              <div class="currentSong_range">
                <div class="currentSong_range-slider py-1">
                  <div
                    class="progress"
                    :style="{
                      width: (getCurrentTime / getFullTime) * 100 + '%',
                    }"
                  ></div>
                  <input
                    type="range"
                    min="0"
                    :max="getFullTime"
                    :value="getCurrentTime"
                  />
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <!-- Start Mobile current song -->
    <div
      class="currentSongMobile"
      v-show="getWidth <= 778"
      :style="{
        backgroundImage: `linear-gradient(0deg,rgba(35,53,74,0.7),rgba(35,53,74,0.85)), url(${getCurrentSong.cover})`,
      }"
    >
      <v-row no-gutters>
        <v-col cols="11" sm="6" class="p-0 d-flex justify-center ml-1">
          <v-card class="currentSongMobile_box">
            <div
              class="currentSongMobile_box-img mx-auto mt-3 rounded"
              ref="imgBoxRef"
            >
              <v-img
                class="currentSongMobile_box-img-shadow mx-auto rounded"
                :src="getCurrentSong.cover"
                ref="imgRef"
              >
              </v-img>
              <div class="currentSongMobile_box-img-icon d-flex align-baseline">
                <v-icon
                  :size="getWidth <= 580 ? '3.5rem' : '4rem'"
                  color="primary"
                  class="ma-2 currentSong_caption-icon"
                  @click="goBack(getAllMusicList)"
                  >skip_previous</v-icon
                >
                <v-icon
                  :size="getWidth <= 600 ? '4rem' : '4.5rem'"
                  color="primary"
                  class="ma-2 currentSong_caption-icon"
                  @click="changeSongHndler(!getSongHandler)"
                  >{{ getSongHandler ? 'pause_circle' : 'play_arrow' }}</v-icon
                >
                <v-icon
                  :size="getWidth <= 580 ? '3.5rem' : '4rem'"
                  color="primary"
                  class="ml-2 currentSong_caption-icon"
                  @click="goNext(getAllMusicList)"
                  >skip_next</v-icon
                >
              </div>
            </div>
            <v-card-title class="d-flex justify-space-between">
              <div class="font-weight-bold primary--text">
                {{ getCurrentSong.name }}
              </div>
              <v-icon
                size="2rem"
                color="primary"
                class="currentSong_caption-icon"
                >favorite</v-icon
              >
            </v-card-title>
            <v-card-text class="d-flex justify-space-between align-center pb-0">
              <span class="pr-4 pb-4 primary--text">
                {{ getCurrentSong.singer }}
              </span>
              <div class="visualizer d-flex align-baseline">
                <div class="visualizer_icon"></div>
                <div class="visualizer_icon2"></div>
                <div class="visualizer_icon3"></div>
              </div>
            </v-card-text>
            <div
              class="currentSongMobile_time d-flex justify-space-between font-weight-bold primary--text pb-4"
            >
              <span class="ml-2">{{ time(getCurrentTime) }}</span>
              <span class="mr-2">{{ time(getFullTime) }}</span>
            </div>
            <div class="currentSongMobile_range">
              <div class="currentSongMobile_range-slider py-1">
                <div
                  class="progress"
                  :style="{ width: (getCurrentTime / getFullTime) * 100 + '%' }"
                ></div>
                <input
                  type="range"
                  min="0"
                  :max="getFullTime"
                  :value="getCurrentTime"
                />
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="11" sm="5" class="d-flex songListMobile mx-auto">
          <SongSwiper v-if="getWidth >= 600">
            <SwiperSlide v-for="item in getAllMusicList" :key="item.id">
              <SongListItem
                :name="item.name"
                :singer="item.singer"
                :cover="item.cover"
                :id="item.id"
              ></SongListItem>
            </SwiperSlide>
          </SongSwiper>
          <SongSwiperSm v-else>
            <SwiperSlide v-for="item in getAllMusicList" :key="item.id">
              <SongListItem
                :name="item.name"
                :singer="item.singer"
                :cover="item.cover"
                :id="item.id"
              ></SongListItem>
            </SwiperSlide>
          </SongSwiperSm>
        </v-col>
      </v-row>
    </div>
    <!-- End Mobile current song  -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import SongListItem from './songlist/SongListItem'
import { SwiperSlide } from 'swiper-vue2'
import SongSwiper from './songSwiper/songSwiper.vue'
import SongSwiperSm from './songSwiper/songSwiperSm.vue'
export default {
  computed: {
    ...mapGetters([
      'getWidth',
      'getAllMusicList',
      'getSongHandler',
      'getCurrentSong',
      'getCurrentTime',
      'getFullTime',
    ]),
  },
  components: { SongListItem, SwiperSlide, SongSwiper, SongSwiperSm },
  methods: {
    ...mapActions(['goNext', 'goBack']),
    changeSongHndler(newVal) {
      this.$store.commit('changeSongHndler', newVal)
    },
    time(t) {
      return Math.floor(t / 60) + ':' + ('0' + Math.floor(t % 60)).slice(-2)
    },
  },
}
</script>
<style lang="scss" scoped>
.swiper-slide {
  @media (min-width: 600px) {
    top: 70%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}
</style>
