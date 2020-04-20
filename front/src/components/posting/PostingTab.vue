<template>
  <v-card>
    <v-tabs dark background-color="#121212" show-arrows>
      <v-tabs-slider color="#212142"></v-tabs-slider>

      <v-tab
        v-for="(li, i) in categoryList"
        :key="i"
        @click="onClickTabs(li.name)"
      >
        {{ li.name }} ({{ li.number }})
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      categoryList: [
        { name: 'All', number: 3 },
        { name: 'Javascript', number: 2 },
        { name: 'Vue', number: 1 },
      ],
    };
  },
  methods: {
    onClickTabs(n) {
      this.$emit('tabData', n);
    },
  },
};
</script>

<style scoped></style>
