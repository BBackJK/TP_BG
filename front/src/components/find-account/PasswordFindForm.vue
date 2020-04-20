<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="10" md="5">
      <v-card class="elevation-12">
        <v-toolbar color="#212121" dark>
          <v-toolbar-title>Find Password</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              label="E-mail"
              hint="ex) test@example.com"
              required
            ></v-text-field>

            <v-text-field v-model="name" label="Name" required></v-text-field>

            <p />
            <button-component
              btnName="Submit"
              :btnDisable="!valid"
              btnColor="normal"
              btnClick="validate"
            />
            <button-component
              btnName="back"
              btnColor="normal"
              btnClick="clickBack"
              class="back-button"
            />
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { Common } from '../../components';

const { ButtonComponent } = Common;

export default {
  name: 'PasswordFindComponent',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      valid: true,
      email: '',
      name: '',
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.back-button {
  float: right;
}
</style>
