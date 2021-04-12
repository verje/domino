<template>
  <v-footer color="#CFD8DC" inset width="auto">

      <v-row justify="center">
        <v-col lg="2" md="3" cols="12" align-self="center" class="text-center">
          <v-chip color="#2E404F" class="ma-2" width="auto"> 
             <span class="title" style="color: white;">{{message}}</span> <v-icon @click="saveGame(winner)" v-show="save" right color="#00E5FF">mdi-content-save</v-icon>
          </v-chip>
        </v-col>
      </v-row>

  </v-footer>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "Footer",
  data() {
    return {

    }
  },

  methods: {
    ...mapActions(["saveGame"])
  },
  computed:{
    message(){
      var msg = 'No winner yet...'
      if (this.$store.state.winner!=''){
        var msg = 'Winner: ' + this.$store.state.winner
      } 
      return msg
    },
    save() {
      return this.$store.state.save
    },
    winner(){
      return this.$store.state.winner
    }  
  }
};
</script>

