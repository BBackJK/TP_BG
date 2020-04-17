<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="10" md="4">
      <v-card class="elevation-12">
        <sign-up-form />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SignUpForm from './SignUpForm';

export default {
  name: 'SignUpCard',
  components: {
    SignUpForm,
  },
};
</script>

<style scoped></style>
