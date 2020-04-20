<template>
  <v-app id="app">
    <header-component />
    <v-content>
      <v-container :class="containerClass">
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
    HeaderComponent,
  },
  data() {
    return {
      containerClass: 'fill-height',
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  updated() {
    if (this.$router.history.current.fullPath === '/posting') {
      this.containerClass = '';
    } else {
      this.containerClass = 'fill-height';
    }
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
