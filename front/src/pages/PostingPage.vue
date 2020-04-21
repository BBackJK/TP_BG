<template>
  <div>
    <posting-tab @tabData="categoryTitle" />
    <v-row align="center" justify="center">
      <h1>{{ title }}</h1>
    </v-row>
    <posting-card />
  </div>
</template>

<script>
import { Posting } from '@/components';

const { PostingCard, PostingTab } = Posting;

export default {
  name: 'DashboardPage',
  data() {
    return {
      title: 'All',
    };
  },
  components: {
    PostingCard,
    PostingTab,
  },
  methods: {
    categoryTitle(data) {
      this.title = data;
    },
  },
};
</script>
