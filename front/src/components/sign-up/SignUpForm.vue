<template>
  <div>
    <v-toolbar color="#212121" dark>
      <v-toolbar-title>Sign Up</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="[Rules.emailRequired, Rules.emailValid]"
          label="E-mail"
          hint="ex) test@example.com"
          required
        ></v-text-field>

        <v-text-field
          v-model="name"
          :rules="[Rules.emailRequired, Rules.emailValid]"
          label="Name"
          hint="your name"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="[Rules.passwordRequired, Rules.passwordMin]"
          hint="at least 8 characters"
          label="Password"
          @click:append="show = !show"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          required
        ></v-text-field>

        <v-text-field
          v-model="passwordCheck"
          :rules="[Rules.passwordRequired, Rules.passwordMin]"
          hint="at least 8 characters"
          label="Password Check"
          @click:append="show = !show"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          required
        ></v-text-field>

        <v-text-field
          v-model="phone"
          :rules="[Rules.passwordRequired, Rules.passwordMin]"
          hint=" no (-) character. ex) 01012345678"
          label="Phone Number"
          :type="show ? 'text' : 'password'"
          required
        ></v-text-field>

        <p />
        <button-component
          btnName="Submit"
          :btnDisable="!valid"
          btnColor="normal"
          btnClick="validate"
        />
        <button-component
          btnName="Reset"
          btnColor="secondary"
          btnClick="reset"
          :btnDisable="valid"
        />
      </v-form>
    </v-card-text>
  </div>
</template>

<script>
import { Common } from '../../components';
import { EventBus } from '../../util';

const { ButtonComponent } = Common;

export default {
  name: 'SignUpForm',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      valid: true,
      email: '',
      password: '',
      passwordCheck: '',
      name: '',
      phone: '',
      show: false,
      Rules: {
        emailRequired: v => !!v || 'E-mail is required.',
        emailValid: v => /.+@.+\..+/.test(v) || 'E-mail must be valid.',
        passwordRequired: v => !!v || 'Password is required.',
        passwordMin: v => v.length >= 8 || 'Min 8 characters.',
      },
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
  created() {
    EventBus.$on('validate', this.validate);
    EventBus.$on('reset', this.reset);
  },
};
</script>

<style scoped></style>
