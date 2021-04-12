<template>
  <v-card id="card" class="mx-auto" max-width="400">
    <v-toolbar flat color="#CFD8DC">
      <v-btn icon>
        <v-icon color="gray" @click="deletePlayer(index)">mdi-delete</v-icon>
      </v-btn>
      <v-toolbar-title @click="setStarter(index)"
        ><span class="player">{{ player }}</span></v-toolbar-title
      >
      <v-btn icon v-show="starter">
        <v-icon color="deep-purple accent-3">mdi-flag-variant</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      <v-text-field
        v-model.number.lazy="scoreRound"
        type="number"
        filled
        label="Score by Round"
        dense
      >
        <v-icon
          slot="append"
          color="#2E404F"
          @click="incrementScore({ index, scoreRound })"
        >
          mdi-plus-circle
        </v-icon>
      </v-text-field>

      <v-chip class="ma-2" color="indigo darken-3" outlined>
        <v-icon left> mdi-bullseye-arrow </v-icon>
        <span class="font-weight-bold headline">Score: {{ score }}</span>
      </v-chip>

      <v-chip v-show="turn" class="ma-2" color="#00E5FF" text-color="white">
        <v-icon right> mdi-hand-right </v-icon>
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["player", "score", "index", "starter", "turn"],
  name: "Card",
  data() {
    return { scoreRound: 0 };
  },
  methods: {
    ...mapActions(["incrementScore", "setWinner", "setStarter", "deletePlayer"]),
  },
  updated() {
    if (this.score >= 100) {
      this.$store.dispatch("setWinner", this.player);
    }

  },
};
</script>

<style scope>
#card {
  border: 2px solid #00E5FF;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.9);
}
.player:hover {
  cursor: pointer;
  text-decoration: underline;
  color: blue;
}
</style>

