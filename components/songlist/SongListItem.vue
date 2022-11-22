<template>
  <div class="songItem mx-3 mb-1">
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
export default {
    props:{name:String,cover:String,singer:String}
}
</script>
