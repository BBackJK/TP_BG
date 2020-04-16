<template>
  <v-app id="app">
    <header-component />
    <v-content>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { Layout } from './components';

const { HeaderComponent } = Layout;

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  methods: {},
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
