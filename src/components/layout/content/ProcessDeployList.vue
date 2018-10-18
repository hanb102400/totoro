<template>
   <div id="app">
      <table class="table">
          <thead>
              <tr>
                  <th>序号</th>
                  <th>部署名称</th>
                  <th>部署ID</th>
                  <th>部署时间</th>
                  <th>操作</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for ="(deploy,index) in deploys" :key="index">
                <td>{{index+1}}</td>
                <td>{{deploy.name}}</td>
                <td><a @click="nav(deploy.deployId)">{{deploy.deployId}}</a></td>
                <td>{{deploy.deployTime}}</td>
                <td><button @click="remove(index)">删除</button></td>
              </tr>
          </tbody>
      </table>
    </div>
</template>

<script>
import Net from "@/utils/net";
import Router from "@/utils/router";

export default {
  name: "deployList",
  data: function() {
    return {
      deploys: []
    };
  },
  methods: {
    remove: function(index) {
      this.deploys.splice(index, 1);
    },
    nav: function(deployId) {
      //Router.push("/layout/processDeploy", { deployId: deployId });
      this.$router.push({path:"/layout/processDeploy",query: { deployId: 1111 } })
    }
  },
  created: async function() {
    const res = await Net.get("api/deploy/list");
    this.deploys = res.data;
  }
};
</script>
