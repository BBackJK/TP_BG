<template>
  <v-app id="app">
    <header-component />
    <v-content>
      <v-container class="fill-height" fluid>
        Hi! This Component Container
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
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
