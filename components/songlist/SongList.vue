<template>
  <v-row no-gutters>
    <v-col cols="7" lg="9" offset="5" offset-lg="3">
      <div class="songList mt-2 ml-2 d-flex">
        <SongListItem
          v-for="item in favorite ? favList : getAllSongList"
          :key="item.id"
          :name="item.name"
          :singer="item.singer"
          :cover="item.cover"
          :id="item.id"
        ></SongListItem>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import SongListItem from '@/components/songlist/SongListItem'
import { mapGetters } from 'vuex'
export default {
  props: { favorite: Boolean, favList: Array },
  computed: {
    ...mapGetters(['getAllSongList']),
  },
  components: {
    SongListItem,
  },
}
</script>
