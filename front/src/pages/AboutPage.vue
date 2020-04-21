<template>
  <about-component />
</template>

<script>
import { About } from '@/components';

const { AboutComponent } = About;

export default {
  name: 'CalendarPage',
  components: {
    AboutComponent,
  },
};
</script>
