<template>
  <sign-up-card />
</template>

<script>
import { SignUp } from '../components';

const { SignUpCard } = SignUp;

export default {
  name: 'SignUp',
  components: {
    SignUpCard,
  },
};
</script>

<style scoped></style>
