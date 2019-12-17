<template>
  <div class="search">
    <form @submit.prevent="search">
      <input type="date" v-model="query" />
      <button class="btn btn-primary">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("searchNasaApi", this.query);
    }
  },
  computed: {}
};
</script>