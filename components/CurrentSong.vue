<template>
  <div>
    <div
      v-show="getWidth > 778"
      class="currentSong"
      :style="{
        backgroundImage: `linear-gradient(0deg,rgba(35,53,74,0.7),rgba(35,53,74,0.85)), url(${currentSong.cover})`,
      }"
    >
      <v-row no-gutters>
        <v-col cols="5" lg="3" class="pa-0 d-flex justify-end">
          <v-card class="currentSong_box">
            <div class="currentSong_box-img mx-auto rounded">
              <v-img :src="currentSong.cover" class="rounded">
                <v-icon
                  size="5rem"
                  class="currentSong_box-icon"
                  color="primary"
                  @click="
                    differentCurrent
                      ? changeHandlersAndCurrent()
                      : changeHandlers()
                  "
                  >{{
                    favorite
                      ? songHandlerFav
                        ? 'pause_circle'
                        : 'play_arrow'
                      : getSongHandler
                      ? 'pause_circle'
                      : 'play_arrow'
                  }}</v-icon
                >
              </v-img>
            </div>
            <v-card-title class="primary--text font-weight-bold">
              {{ currentSong.name }}
            </v-card-title>
            <v-card-text>
              <div class="d-flex justify-space-between align-center">
                <span class="pr-4 pb-4 primary--text font-16">
                  {{ currentSong.singer }}
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
                      {{ currentSong.name }}
                    </h2>
                    <h4>{{ currentSong.singer }}</h4>
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
                        @click="
                          favorite ? goBack(favList) : goBack(getAllSongList)
                        "
                        >skip_previous</v-icon
                      >
                      <v-icon
                        size="3rem"
                        color="primary"
                        class="currentSong_caption-icon"
                        @click="
                          differentCurrent
                            ? changeHandlersAndCurrent()
                            : changeHandlers()
                        "
                        >{{
                          favorite
                            ? songHandlerFav
                              ? 'pause_circle'
                              : 'play_arrow'
                            : getSongHandler
                            ? 'pause_circle'
                            : 'play_arrow'
                        }}</v-icon
                      >
                      <v-icon
                        size="2.5rem"
                        color="primary"
                        class="currentSong_caption-icon"
                        @click="
                          favorite ? goNext(favList) : goNext(getAllSongList)
                        "
                        >skip_next</v-icon
                      >
                    </div>
                    <v-icon
                      size="2.25rem"
                      color="primary"
                      class="currentSong_caption-icon"
                      @click="changeFav()"
                      >{{
                        currentSong.favorite ? 'favorite' : 'favorite_outline'
                      }}</v-icon
                    >
                  </v-col>
                </v-row>
              </div>
            </v-col>
            <v-col cols="12">
              <div class="currentSong_time d-flex justify-space-between mt-4">
                <span class="ml-2">{{
                  differentCurrent ? '0:00' : time(getCurrentTime)
                }}</span>
                <span class="mr-2">{{
                  differentCurrent
                    ? time(favCurrentDuration)
                    : time(getFullTime)
                }}</span>
              </div>
              <div class="currentSong_range">
                <div class="currentSong_range-slider py-1">
                  <div
                    class="progress"
                    :style="{
                      width: differentCurrent
                        ? '0%'
                        : (getCurrentTime / getFullTime) * 100 + '%',
                    }"
                  ></div>
                  <input
                    type="range"
                    min="0"
                    :max="getFullTime"
                    :value="getCurrentTime"
                    @change="(e) => $nuxt.$emit('changeRange', e.target.value)"
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
        backgroundImage: `linear-gradient(0deg,rgba(35,53,74,0.7),rgba(35,53,74,0.85)), url(${currentSong.cover})`,
      }"
    >
      <v-row no-gutters>
        <v-col cols="11" sm="6" class="p-0 d-flex justify-center ml-1">
          <v-card class="currentSongMobile_box">
            <div class="currentSongMobile_box-img mx-auto mt-3 rounded">
              <v-img
                class="currentSongMobile_box-img-shadow mx-auto rounded"
                :src="currentSong.cover"
              >
              </v-img>
              <div class="currentSongMobile_box-img-icon d-flex align-baseline">
                <v-icon
                  :size="getWidth <= 580 ? '3.5rem' : '4rem'"
                  color="primary"
                  class="ma-2 currentSong_caption-icon"
                  @click="favorite ? goBack(favList) : goBack(getAllSongList)"
                  >skip_previous</v-icon
                >
                <v-icon
                  :size="getWidth <= 600 ? '4rem' : '4.5rem'"
                  color="primary"
                  class="ma-2 currentSong_caption-icon"
                  @click="
                    differentCurrent
                      ? changeHandlersAndCurrent()
                      : changeHandlers()
                  "
                  >{{
                    favorite
                      ? songHandlerFav
                        ? 'pause_circle'
                        : 'play_arrow'
                      : getSongHandler
                      ? 'pause_circle'
                      : 'play_arrow'
                  }}</v-icon
                >
                <v-icon
                  :size="getWidth <= 580 ? '3.5rem' : '4rem'"
                  color="primary"
                  class="ml-2 currentSong_caption-icon"
                  @click="favorite ? goNext(favList) : goNext(getAllSongList)"
                  >skip_next</v-icon
                >
              </div>
            </div>
            <v-card-title class="d-flex justify-space-between">
              <div class="font-weight-bold primary--text">
                {{ currentSong.name }}
              </div>
              <v-icon
                size="2rem"
                color="primary"
                class="currentSong_caption-icon"
                @click="changeFav()"
                >{{
                  currentSong.favorite ? 'favorite' : 'favorite_outline'
                }}</v-icon
              >
            </v-card-title>
            <v-card-text class="d-flex justify-space-between align-center pb-0">
              <span class="pr-4 pb-4 primary--text">
                {{ currentSong.singer }}
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
              <span class="ml-2">{{
                differentCurrent ? '0:00' : time(getCurrentTime)
              }}</span>
              <span class="mr-2">{{
                differentCurrent ? time(favCurrentDuration) : time(getFullTime)
              }}</span>
            </div>
            <div class="currentSongMobile_range">
              <div class="currentSongMobile_range-slider py-1">
                <div
                  class="progress"
                  :style="{
                    width: differentCurrent
                      ? '0%'
                      : (getCurrentTime / getFullTime) * 100 + '%',
                  }"
                ></div>
                <input
                  type="range"
                  min="0"
                  :max="getFullTime"
                  :value="getCurrentTime"
                  @change="(e) => $nuxt.$emit('changeRange', e.target.value)"
                />
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="11" sm="5" class="d-flex songListMobile mx-auto">
          <SongSwiper v-if="getWidth >= 600">
            <SwiperSlide
              v-for="item in favorite ? favList : getAllSongList"
              :key="item.id"
            >
              <SongListItem
                :name="item.name"
                :singer="item.singer"
                :cover="item.cover"
                :id="item.id"
              ></SongListItem>
            </SwiperSlide>
            <SwiperSlide
              v-if="favList ? (favList.length === 1 ? true : false) : false"
            >
              <SongListItem
                :style="{ visibility: 'hidden' }"
                :name="favList[0].name"
                :singer="favList[0].singer"
                :cover="favList[0].cover"
                :id="favList[0].id"
              ></SongListItem>
            </SwiperSlide>
          </SongSwiper>
          <SongSwiperSm v-else>
            <SwiperSlide
              v-for="item in favorite ? favList : getAllSongList"
              :key="item.id"
            >
              <SongListItem
                :name="item.name"
                :singer="item.singer"
                :cover="item.cover"
                :id="item.id"
              ></SongListItem>
            </SwiperSlide>
            <template
              v-if="
                favList
                  ? favList.length == 1 || favList.length == 2
                    ? true
                    : false
                  : false
              "
            >
              <SwiperSlide v-for="i in 2" :key="i">
                <SongListItem
                  :style="{ visibility: 'hidden' }"
                  :name="favList[0].name"
                  :singer="favList[0].singer"
                  :cover="favList[0].cover"
                  :id="favList[0].id"
                ></SongListItem>
              </SwiperSlide>
            </template>
          </SongSwiperSm>
        </v-col>
      </v-row>
    </div>
    <!-- End Mobile current song  -->
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import SongListItem from './songlist/SongListItem'
import { SwiperSlide } from 'swiper-vue2'
import SongSwiper from './songSwiper/songSwiper.vue'
import SongSwiperSm from './songSwiper/songSwiperSm.vue'
export default {
  props: {
    favorite: Boolean,
    favList: Array,
    songHandlerFav: Boolean,
    differentCurrent: Object,
    favCurrentDuration: Number,
  },
  mounted() {},
  computed: {
    ...mapGetters([
      'getWidth',
      'getAllSongList',
      'getSongHandler',
      'getCurrentSong',
      'getCurrentTime',
      'getFullTime',
    ]),
    currentSong() {
      return this.differentCurrent ? this.differentCurrent : this.getCurrentSong
    },
  },
  components: { SongListItem, SwiperSlide, SongSwiper, SongSwiperSm },
  methods: {
    ...mapActions(['goNext', 'goBack']),
    ...mapMutations(['changeFav', 'changeSongHandler', 'changeCurrentSong']),
    time(t) {
      return Math.floor(t / 60) + ':' + ('0' + Math.floor(t % 60)).slice(-2)
    },
    changeHandlersAndCurrent() {
      this.$emit('update:songHandlerFav', !this.songHandlerFav)
      this.changeCurrentSong(this.differentCurrent)
    },
    changeHandlers() {
      if (this.$nuxt.$route.name == 'favorite') {
        this.$emit('update:songHandlerFav', !this.songHandlerFav)
      }
      this.changeSongHandler(!this.getSongHandler)
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
