<template>
  <v-app>
    <app-header></app-header>
    <v-main>
        <current-song></current-song>
        <SongList></SongList>
    </v-main>
  </v-app>
</template>

<script>
import SongList from '@/components/songlist/SongList.vue'
export default {
  name: 'DefaultLayout',
  data() {
    return {

    }
  },
  components:{
    SongList
  }
}
</script>
