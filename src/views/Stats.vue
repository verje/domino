<template>
  <div>
    <v-col>
      <v-container rounded class="mx-auto" style="background: #cfd8dc; border: 2px solid #00E5FF">
        <h3 class="mb-2" style="color: white">Head-to-Head</h3>
        <v-row>
          <div v-for="(won, index) in wons" :key="index">
            <v-chip class="ma-2" color="#2E404F" text-color="white">
              <v-icon left>mdi-trophy</v-icon>
              {{ won.name }}
              <v-avatar right color="blue-grey darken-2">
                {{ won.total }}
              </v-avatar>
            </v-chip>
          </div>
        </v-row>
      </v-container>
    </v-col>

    <v-col>
      <v-container rounded class="mx-auto" style="background: #cfd8dc; border: 2px solid #00E5FF">
        <h3 style="color: white">Statistics by day</h3>
        <div v-for="element in winners" :key="element.id">
          <v-chip class="ma-1">
            <h4 style="color: #2e404f">Winner: {{ element.name }}</h4>
            <span style="color: #2e404f">/{{ element.date }}</span>
          </v-chip>
        </div>
      </v-container>
    </v-col>
  </div>
</template>

 


<script>
import { db } from "../main";
export default {
  name: "Dashboard",
  data() {
    return {
      winners: [],
      winner: [{ name: "", date: "" }],
      players: [],
      wons: [],
    };
  },
  created() {
    this.getStats();
  },
  mounted() {
    this.players = this.$store.state.players;
  },
  methods: {
    async getStats() {
      try {
        const queryStats = await db.collection("domino").get();
        //const queryPlayer = await db.collection("domino").where('winner', '==', 'Jesus').get();
        //console.log(queryPlayer.docs.length)
        this.players.forEach((player) => {
          const queryPlayer = db
            .collection("domino")
            .where("winner", "==", player.name)
            .get();
          //this.wons.push({ name: player.name, total: queryPlayer.docs.length });
          //console.log(queryPlayer)
          queryPlayer.then((val) =>
            this.wons.push({
              name: player.name,
              total: val.docs.length,
            })
          );
        });
        const a_stats = [];
        queryStats.forEach((doc) => {
          let data = doc.data();
          data.id = doc.id;
          a_stats.push({
            name: data.winner,
            date: data.createdAt.toDate().toString().slice(0, 16),
          });
        });
        this.winners = a_stats;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>