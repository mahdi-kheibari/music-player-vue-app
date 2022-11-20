<template>
  <div class="currentSong">
    <v-card class="currentSong_box" elevation="12">
      <v-img
        class="currentSong_box-img ma-auto"
        src="/img/Hope_cover.jpg"
      >
        <v-icon size="5rem" class="currentSong_box-icon" color="primary"
          >play_arrow</v-icon
        >
      </v-img>
      <v-card-title primary-title> Current Song name </v-card-title>
      <div class="d-flex justify-content-between align-center">
        <v-card-text> Singer </v-card-text>
        <div class="visualizer d-flex align-baseline">
          <div class="visualizer_icon"></div>
          <div class="visualizer_icon2"></div>
          <div class="visualizer_icon3"></div>
        </div>
      </div>
    </v-card>
    <div class="currentSong_caption">
      <div class="d-flex justify-space-between align-center">
        <div>
          <h2 class="font-weight-bold">Current Song name</h2>
          <h4>Singer</h4>
        </div>
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
            class="ma-2 currentSong_caption-icon"
            >skip_next</v-icon
          >
        </div>
      </div>
    </div>
    <div class="currentSong_time d-flex justify-space-between mt-4">
      <span>0:00</span>
      <span>3:00</span>
    </div>
    <input type="range" class="currentSong_slider" />
  </div>
</template>
