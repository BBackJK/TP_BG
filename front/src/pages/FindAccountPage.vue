<template>
  <v-container>
    <v-row dense v-if="showButton">
      <v-card class="mx-auto" max-width="344" @click="onClickCard('email')">
        <v-card-text>
          <p />
          <p class="display-1 text--primary">
            Find
            <br />
            Email
          </p>
        </v-card-text>
      </v-card>
      <br />
      <v-card class="mx-auto" max-width="344" @click="onClickCard('password')">
        <v-card-text>
          <p />
          <p class="display-1 text--primary">
            Find
            <br />
            Password
          </p>
        </v-card-text>
      </v-card>
    </v-row>
    <email-find-form v-if="showEmailFlag" />
    <password-find-form v-if="showPasswordFlag" />
  </v-container>
</template>

<script>
import { EventBus } from '../util';
import { FindAccount } from '../components';

const { EmailFindForm, PasswordFindForm } = FindAccount;

export default {
  name: 'FindAccount',
  components: {
    EmailFindForm,
    PasswordFindForm,
  },
  data() {
    return {
      showButton: true,
      showEmailFlag: false,
      showPasswordFlag: false,
    };
  },
  methods: {
    onClickCard(type) {
      this.showButton = false;

      type === 'email'
        ? (this.showEmailFlag = true)
        : (this.showPasswordFlag = true);
    },
    onClickBack() {
      this.showButton = true;
      this.showEmailFlag = false;
      this.showPasswordFlag = false;
    },
  },
  created() {
    EventBus.$on('clickBack', this.onClickBack);
  },
};
</script>

<style scoped></style>
