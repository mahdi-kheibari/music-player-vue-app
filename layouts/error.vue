<template>
  <v-app dark>
    <div class="mt-3 text-center">
      <h1 v-if="error.statusCode === 404">
        <img src="/img/404.png" :alt="pageNotFound" />
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <v-btn color="primary" outlined class="home-btn mt-2"
        ><NuxtLink class="text--secondary text-decoration-none" to="/">
          Home page
        </NuxtLink></v-btn
      >
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
