<template>
    <div>
        <Header />

        <Sidebar />
    
        <div class="content-warpper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
export default {
  name: "Layout",
  data() {
    return {};
  },
  components: {
    Header,
    Sidebar
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.sidebar {
  width: 220px;
  position: absolute;
  height: 100%;
  border-right: 1px solid #ddd;
}

.content-warpper {
  margin-left: 220px;
}


</style>
