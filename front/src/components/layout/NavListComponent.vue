<template>
  <v-list dense>
    <router-link to="/">
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>
    <router-link to="/dashboard">
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>
    <router-link to="/calendar">
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-calendar</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Calendars</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>
    <router-link to="/corna">
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-biohazard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Corna-19</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>
    <router-link to="/fashion">
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-tshirt-crew-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Fashion Information</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>
    <router-link to="/game">
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-gamepad-variant-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Game</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>
    <router-link to="/about">
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-information-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>
  </v-list>
</template>

<script>
export default {
  name: 'NavList'
};
</script>
