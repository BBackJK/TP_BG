<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <nav-list-component />
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="onClickNav" />
      <router-link to="/">
        <v-toolbar-title class="app-title">BBack's Ground</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <router-link to="/login">
            <v-btn icon v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </router-link>
        </template>
        <span>로그인이 필요합니다</span>
      </v-tooltip>
    </v-app-bar>
  </div>
</template>

<script>
import NavListComponent from './NavListComponent';

export default {
  name: 'Header',
  components: {
    NavListComponent,
  },
  data() {
    return {
      drawer: null,
    };
  },
  methods: {
    onClickNav() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
.app-title {
  color: white;
}
</style>
