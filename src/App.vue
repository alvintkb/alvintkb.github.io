<template>
  <div id="app">
    <!-- Debugging info -->
    <!-- <p>URL Param: {{ urlParam }}</p> -->

    <!-- Render HelloWorld component if urlParam is 'tm' -->
    <div v-if="normalizedUrlParam === 'tm'">
      <HelloWorld msg="tm" />
    </div>

    <!-- Render HelloWorld2 component if urlParam is 'eum' -->
    <div v-else-if="normalizedUrlParam === 'eum'">
      <HelloWorld2 projectCode="eum" />
    </div>

    <div v-else-if="normalizedUrlParam === 'cheras'">
      <HelloWorld2 projectCode="cheras" />
    </div>

    <!-- Display a message if the urlParam is neither 'tm' nor 'eum' -->
    <div v-else>
      <h1>nothing here</h1>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloWorld2 from "./components/HelloWorld2.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HelloWorld2,
  },
  data() {
    return {
      urlParam: "",
    };
  },
  computed: {
    normalizedUrlParam() {
      return this.urlParam.toLowerCase();
    },
  },
  created() {
    // Fetch URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    this.urlParam = urlParams.get("p") || "";
    console.log("URL Param:", this.urlParam); // Debugging log
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
