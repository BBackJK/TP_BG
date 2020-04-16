<template>
  <dashboard-component />
</template>

<script>
import { Dashboard } from '../components';

const { DashboardComponent } = Dashboard;

export default {
  name: 'DashboardPage',
  components: {
    DashboardComponent
  }
};
</script>
