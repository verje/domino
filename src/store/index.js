import {db} from '../main';  
import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [
      { name: 'Jesus', score: 0, starter: false, turn: false },
      { name: 'Claudia', score: 0, starter: false, turn: false },
    ],
    save: false,
    winner: '',
    round: 0,
    indexTurn: 0, //to Control who is putting the first card in the round
    alert: false
  },
  mutations: {
    incrementScore: (state, params) => {
      var set_it = 0
      state.players.forEach(player => {
        if (player.starter === false) {
          set_it++
        }
      });
      if (set_it === state.players.length) {
        console.log('No Starter set it yet!. Can not continue until a Starter be setted')
      } else {
        state.players[params.index].score += params.inc
      }
    },
    setWinner: (state, name) => {
      state.winner = name
      state.save = true
    },
    setStarter: (state, idx) => {

      state.players[idx].starter = !state.players[idx].starter
      state.players[idx].turn = !state.players[idx].turn
      state.indexTurn = idx

    },
    setTurn: (state) => {
      if (state.indexTurn == state.players.length - 1) {
        state.indexTurn = 0
      } else {
        state.indexTurn++
      }
      state.round++
      state.players.forEach((player, index) => {
        if (state.indexTurn == index) {
          player.turn = true
        } else {
          player.turn = false
        }
      });
    },
    newGame: (state) => {
      state.winner = '',
        state.round = 0,
        state.indexTurn = 0,
        state.save = false,
        state.players.forEach((player, index) => {
          player.score = 0
          player.starter = false
          player.turn = false
          state.alert = false
        });
    },
    addPlayer(state, name) {
      if (state.players.length < 4) {
        state.players.push({ name: name, score: 0, starter: false, turn: false });
        console.log(state.players)
      } else {
        console.log('Players limit reached!');
      }
    },
    deletePlayer(state, index) {
      state.players.splice(index, 1)
    },
    async saveGame(state, winner) {
      try{
        await db.collection("domino").add({
          winner: winner,
          createdAt : new Date()
        })
        state.alert = true
      } catch (error) {
        console.log(error)
      }

    },
  },
  actions: {
    incrementScore: (context, data) => {
      var index = data.index
      var inc = data.scoreRound
      context.commit("incrementScore", { index, inc });
      context.commit("setTurn", index);
    },
    setWinner: (context, name) => {
      context.commit("setWinner", name);
    },
    setStarter: (context, index) => {
      context.commit("setStarter", index);
    },
    newGame: (context) => {
      context.commit("newGame");
    },
    addPlayer: (context, name) => {
      context.commit("addPlayer", name)
    },
    deletePlayer: (context, index) => {
      context.commit("deletePlayer", index)
    },
    saveGame: (context, winner) => {
      context.commit("saveGame", winner)
    }
  },
  modules: {
  }
})
