<template>
  <calendar-component />
</template>

<script>
import { Calendar } from '../components';

const { CalendarComponent } = Calendar;

export default {
  name: 'CalendarPage',
  components: {
    CalendarComponent,
  },
};
</script>
