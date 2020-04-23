<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="#121212">
          <v-btn outlined class="mr-4" color="grey darken-2">
            Today
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prevMonth">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="nextMonth">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title> {{ title }} </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          color="primary"
          v-model="focus"
          :type="type"
          @change="updateRange"
          @click:day="showEventList"
        >
        </v-calendar>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-toolbar dark>
              <v-toolbar-title> {{ seletedDate }}</v-toolbar-title>
            </v-toolbar>
            <br />
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Single-line item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CalendarComponent',
  data() {
    return {
      focus: '',
      type: 'month',
      start: null,
      end: null,
      dialog: false,
      seletedDate: null,
    };
  },
  computed: {
    title() {
      const { start, end } = this;

      if (!start || !end) {
        return '';
      }

      const startMonth = this.monthFormatter(start);

      const startYear = start.year;

      switch (this.type) {
        case 'month':
          return `${startMonth} ${startYear}`;
      }

      return '';
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC',
        month: 'long',
      });
    },
  },
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    updateRange({ start, end }) {
      this.start = start;
      this.end = end;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    prevMonth() {
      this.$refs.calendar.prev();
    },
    nextMonth() {
      this.$refs.calendar.next();
    },
    showEventList(e) {
      console.log(e);
      this.seletedDate = e.date;
      this.dialog = true;
    },
  },
};
</script>
