<template>
  <!-- Slider main container -->
  <swiper
    :slides-per-view="2.5"
    :space-between="10"
    :scrollbar="{ draggable: true }"
    mousewheel
    freeMode
    navigation
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
        slidesPerView:2.5,
        spaceBetween:10,
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
