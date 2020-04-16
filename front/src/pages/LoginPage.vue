<template>
  <login-component />
</template>

<script>
import { Login } from '../components';

const { LoginComponent } = Login;

export default {
  name: 'LoginPage',
  components: {
    LoginComponent
  }
};
</script>

<style scoped></style>
