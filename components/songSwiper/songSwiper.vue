<template>
  <!-- Slider main container -->
  <swiper
    :slides-per-view="1.5"
    :space-between="30"
    :scrollbar="{ draggable: true }"
    mousewheel
    freeMode
    navigation
    class="grabCursor"
  >
    <slot></slot>
  </swiper>
</template>
<script>
import { Scrollbar, Navigation } from 'swiper'
import { SwiperCore, Swiper } from 'swiper-vue2'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Scrollbar, Navigation])

export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1.5,
        spaceBetween: 30,
        freeMode: true,
        scrollbar: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  components: {
    Swiper,
  },
}
</script>
<style lang="scss" scoped>
.grabCursor {
  cursor: grab;
}
</style>
