<template>
  <div>
    <v-container>
      <div @click="alert = !alert">
        <v-alert
          v-model="alert"
          color="cyan"
          border="left"
          elevation="2"
          colored-border
          icon="mdi-check"
        >
          Game saved
        </v-alert>
      </div>
      <v-row justify="center">
        <v-col cols="12" md="3" v-for="(player, index) in players" :key="index">
          <Cards
            :player="player.name"
            :score="player.score"
            :starter="player.starter"
            :turn="player.turn"
            :index="index"
          ></Cards>
        </v-col>
      </v-row>
    </v-container>

    <appInfo />
    <appFooter />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import appFooter from "@/components/Footer";
import appInfo from "@/components/info";

export default {
  name: "Home",
  data() {
    return {

    };
  },
  components: {
    Cards,
    appFooter,
    appInfo,
  },
  methods: {},
  computed: {
    players() {
      return this.$store.state.players;
    },
    alert(){
      return this.$store.state.alert;
    }
  },
};
</script>

