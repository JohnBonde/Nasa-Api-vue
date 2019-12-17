<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>Mars Rover Database</h1>
        <search />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Results />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Results from "@/components/Results.vue";
import Search from "../components/Search";

export default {
  name: "home",
  components: {
    Results,
    Search
  }
};
</script>
