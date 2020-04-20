<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="10" md="5">
      <v-card class="elevation-12">
        <login-form />
      </v-card>
      <router-link to="/find-account">
        <span>forgot email or password ?</span>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
import LoginForm from './LoginForm';

export default {
  name: 'LoginCard',
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
span {
  float: right;
  color: tomato;
}
</style>
