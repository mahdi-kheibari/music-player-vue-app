<template>
  <v-app>
    <app-header></app-header>
    <v-main>
        <current-song></current-song>
        <SongList v-if="getWidth > 778"></SongList>
    </v-main>
  </v-app>
</template>

<script>
import SongList from '@/components/songlist/SongList'
import { mapGetters } from 'vuex';
export default {
  name: 'DefaultLayout',
  data() {
    return {

    }
  },
  components:{
    SongList
  },
  mounted(){
    console.log(this.$vuetify.breakpoint);
    this.$store.commit("changeWidth",window.innerWidth);
    this.$nextTick(() => {
          window.addEventListener('resize',()=>{ this.$store.commit("changeWidth",window.innerWidth);});
    })
  },
  computed: {
    ...mapGetters(['getWidth']),
  },
}
</script>
