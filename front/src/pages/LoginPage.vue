<template>
  <login-card />
</template>

<script>
import { Login } from '@/components';

const { LoginCard } = Login;

export default {
  name: 'LoginPage',
  components: {
    LoginCard,
  },
};
</script>

<style scoped></style>
