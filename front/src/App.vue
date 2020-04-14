<template>
  <v-app id="app">
    <v-app-bar app clipped-left>
      <v-toolbar-title>BBack Ground</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn depressed>Normal</v-btn>
        </div>
        <div class="my-2">
          <v-btn depressed color="primary">Primary</v-btn>
        </div>
        <div class="my-2">
          <v-btn depressed color="error">Error</v-btn>
        </div>
        <div class="my-2">
          <v-btn depressed disabled>Disabled</v-btn>
        </div>
      </v-col>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
