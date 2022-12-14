<template>
  <div>
    <v-navigation-drawer
      app
      :mobile-breakpoint="0"
      v-model="drawer"
      temporary
      color="primary"
    >
      <v-list nav>
        <v-list-item-group class="info--text">
          <v-list-item>
            <nuxt-link to="/">
              <logo></logo>
            </nuxt-link>
          </v-list-item>
          <v-list-item class="info--text">
            <v-list-item-title>
              <nuxt-link to="/" exact class="text-decoration-none nav-link">
                All songs
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item class="info--text">
            <v-list-item-title>
              <nuxt-link
                to="/favorite"
                exact
                class="text-decoration-none nav-link"
              >
                Favorite songs
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app short color="primary">
      <v-app-bar-nav-icon
        v-show="$vuetify.breakpoint.mobile"
        @click.stop="drawer = !drawer"
        color="info"
      ></v-app-bar-nav-icon>
      <div v-if="!$vuetify.breakpoint.mobile" class="d-flex align-center">
        <nuxt-link to="/" class="py-1 pt-2 px-2 mx-3">
          <logo></logo>
        </nuxt-link>
        <nuxt-link to="/" exact class="text-decoration-none pa-2 nav-link"
          >All songs</nuxt-link
        >
        <nuxt-link
          to="/favorite"
          exact
          class="text-decoration-none pa-2 nav-link"
          >Favorite songs</nuxt-link
        >
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
}
</script>
