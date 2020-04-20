<template>
  <div>
    <v-card
      class="mt-4 mx-auto"
      max-width="400"
      v-for="(li, i) in lists"
      :key="i"
    >
      <v-card-text>
        <div class="title font-weight-light mb-1">
          User Registrations
        </div>
        <div class="subheading font-weight-light grey--text">
          Last Campaign Performance
        </div>
        <v-divider class="my-2"></v-divider>
        <v-icon class="mr-2" small>
          mdi-clock
        </v-icon>
        <span class="caption grey--text font-weight-light">
          last registration 26 minutes ago
        </span>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [1, 2, 3, 4],
    };
  },
};
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
