<template>
  <v-btn
    :disabled="this.btnDisable"
    v-bind:color="this.btnColor"
    @click="clickButton"
    class="mr-4"
  >
    {{ btnName }}
  </v-btn>
</template>

<script>
import { EventBus } from '../../util';

export default {
  name: 'Button',
  props: {
    btnColor: String,
    btnName: String,
    btnClick: String,
    btnDisable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickButton() {
      EventBus.$emit(this.btnClick);
    },
  },
};
</script>

<style scoped></style>
