<template>
  <v-app>
    <v-app-bar color="primary" app dark hide-on-scroll>
      <v-btn icon href="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-toolbar-title>Solidarity Bond</v-toolbar-title>
      <v-spacer></v-spacer>
      <BarButtons/>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="primary" dark>
      <h4>Solidarity Bond &bull; {{year}}</h4>
      <v-spacer></v-spacer>
      <v-btn text to="/CGU">CGU</v-btn>
    </v-footer>
  </v-app>
</template>

<script>

import BarButtons from "./components/BarButtons";
export default {
  name: 'App',
  components: {BarButtons},
  computed: {
    year() {
      return new Date().toISOString().slice(0, 4)
    }
  }
};
</script>