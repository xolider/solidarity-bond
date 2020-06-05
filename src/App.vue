<template>
  <v-app>
    <v-app-bar color="primary" app dark hide-on-scroll>
      <v-toolbar-title>Solidarity Bond</v-toolbar-title>
      <v-spacer></v-spacer>
      <BarButtons/>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="primary" dark>
      <h4>Solidarity Bond</h4>
    </v-footer>
  </v-app>
</template>

<script>

import BarButtons from "./components/BarButtons";
export default {
  name: 'App',
  components: {BarButtons},
};
</script>
