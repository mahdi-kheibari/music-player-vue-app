<template>
  <div class="songItem mx-3 mb-1" @click="changeCurrent(id)">
    <v-card class="songItem_box" elevation="0">
      <div class="songItem_box-img mx-auto rounded">
        <v-img :src="cover" class="rounded"></v-img>
      </div>
      <div class="pa-1 text-center primary--text">
        <div class="pa-0 font-weight-bold font-16">{{name}}</div>
        <v-card-text class="font-weight-lighter font-14 pa-0">{{singer}}</v-card-text>
      </div>
    </v-card>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    props:{name:String,cover:String,singer:String,id:String},
    methods: {
        changeCurrent(id){
            const current=this.getAllMusicList.filter((item)=>item.id==id)
            this.$store.commit('changeCurrentSong',...current)
        }
    },
    computed: {
    ...mapGetters(['getAllMusicList']),
  },
}
</script>
