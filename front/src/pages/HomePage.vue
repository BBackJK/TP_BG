<template>
  <home-component />
</template>

<script>
import { Home } from '../components';

const { HomeComponent } = Home;

export default {
  name: 'HomePage',
  components: {
    HomeComponent,
  },
};
</script>
