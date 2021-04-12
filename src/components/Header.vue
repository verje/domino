<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary app clipped>
      <v-list>
        <v-container>
          <v-text-field
            v-model="player"
            filled
            label="Player name"
            rounded
            dense
          >
          </v-text-field>
        </v-container>
        <v-list-item :to="{ path: '/' }">
          <v-list-item-action>
            <v-icon>mdi-{{ icons[0] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="addPlayer(player)"
              >Add Player</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ path: '/stats' }">
          <v-list-item-action>
            <v-icon>mdi-{{ icons[1] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Stats</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="#2E404F" class="accent-4 white--text" app clipped-left>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="white--text"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Domino Score</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="#719D5A">
        <router-link class="lin" to="/"><v-icon color="#00E5FF">mdi-home</v-icon></router-link>
      </v-btn>
      <v-icon @click="newGame" color="#00E5FF">mdi-backup-restore</v-icon>
    </v-app-bar>
    <v-main id="home">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import appInfo from "@/components/info";
export default {
  name: "Header",
  components: {
    appInfo,
  },
  data: () => ({
    icons: ["account-plus", "chart-box-outline", "backup-restore"],
    drawer: false,
    player: "",
  }),
  methods: {
    ...mapActions(["newGame", "addPlayer"]),
  },
};
</script>

<style>
#home {
  background-image: url("https://estaticos.muyhistoria.es/uploads/images/pyr/54941b888c770c961fd6df86/domino.jpg");
  background-size: cover;
}
.lin{
  text-decoration: none;
}
</style>