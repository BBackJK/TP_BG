<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <nav-list-component />
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="onClickNav" />
      <v-toolbar-title>BBack's Ground</v-toolbar-title>
      <v-spacer></v-spacer>

      <router-link to="/login">
        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
import NavListComponent from './NavListComponent';

export default {
  name: 'Header',
  components: {
    NavListComponent
  },
  data() {
    return {
      drawer: null
    };
  },
  methods: {
    onClickNav() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style scoped></style>
