<template>
  <div class="currentSong">
    <v-row no-gutters>
      <v-col cols="5" lg="3" class="pa-0 d-flex justify-end">
        <v-card class="currentSong_box">
          <div class="currentSong_box-img mx-auto rounded">
            <v-img src="/img/Hope_cover.jpg" class="rounded">
              <v-icon size="5rem" class="currentSong_box-icon" color="primary"
                >play_arrow</v-icon
              >
            </v-img>
          </div>
          <v-card-title class="primary--text font-weight-bold"> Current Song name </v-card-title>
          <v-card-text>
              <div class="d-flex justify-space-between align-center">
                <span class="pr-4 pb-4 primary--text font-16"> Singer </span>
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
                  <h2 className="font-weight-bold">Current Song name</h2>
                  <h4>Singer</h4>
                </v-col>
                <v-col cols="5" class="d-flex flex-column align-end mr-xl-auto">
                  <div>
                    <v-icon
                      size="3rem"
                      color="primary"
                      class="ma-2 currentSong_caption-icon"
                      >skip_previous</v-icon
                    >
                    <v-icon
                      size="3.5rem"
                      color="primary"
                      class="ma-2 currentSong_caption-icon"
                      >play_arrow</v-icon
                    >
                    <v-icon
                      size="3rem"
                      color="primary"
                      class="ml-2 currentSong_caption-icon"
                      >skip_next</v-icon
                    >
                  </div>
                  <v-icon
                      size="3rem"
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
              <span class="ml-2">0:00</span>
              <span class="mr-2">3:00</span>
            </div>
            <div class="currentSong_range">
              <div class="currentSong_range-slider py-1">
                <div class="progress" style="width: 100%"></div>
                <input type="range" />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
