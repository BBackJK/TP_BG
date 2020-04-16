<template>
  <v-btn v-bind:color="this.color" @click="clickButton">
    {{ buttonName }}
  </v-btn>
</template>

<script>
import { EventBus } from '../../util';

export default {
  name: 'Button',
  props: {
    color: String,
    buttonName: String,
    eventMethods: String
  },
  methods: {
    clickButton() {
      EventBus.$emit(this.eventMethods);
    }
  }
};
</script>

<style scoped></style>
