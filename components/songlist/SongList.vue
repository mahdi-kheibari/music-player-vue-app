<template>
  <v-row no-gutters>
    <v-col cols="7" lg="9" offset="5" offset-lg="3">
      <div class="songList mt-2 ml-2 d-flex">
        <SongListItem></SongListItem>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import SongListItem from '@/components/songlist/SongListItem.vue'
export default {
    components:{
        SongListItem
    }
}
</script>
