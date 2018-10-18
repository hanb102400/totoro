<template>
   <div id="app">
    {{ deployId }}
    </div>
</template>

<script>
import Net from "@/utils/net";
import Router from "@/utils/router";

export default {
  computed: {
   name () {
      console.log(this.$router.query)
      return this.$route.query.deployId
    }
  },
  created:  function() {
    console.log(this.$route)
    this.deployId = this.$route.query.deployId
  }
};
</script>
