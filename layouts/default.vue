<template>
  <v-app>
    <app-header></app-header>
    <v-main>
        <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'DefaultLayout',
  data() {
    return {

    }
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
