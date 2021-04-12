<template>
  <div class="text-center">
    <v-chip class="ma-2">
      Round
      <v-avatar right class="cyan lighten-5"> {{ round }} </v-avatar></v-chip
    >
    <v-chip>
      <v-checkbox v-model="keep" label="Keep players on reset"></v-checkbox>
    </v-chip>
  </div>
</template>




<script>
export default {
  name: "Info",
  data() {
    return {
      keep: true,
    };
  },
  computed: {
    round() {
      return this.$store.state.round;
    },
  },
};
</script>