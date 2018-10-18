import Vue from "vue";
import Router from "vue-router";
import Layout from "./components/layout/Layout.vue";
import HelloWorld from "./components/HelloWorld.vue";
import processDeployList from "./components/layout/content/ProcessDeployList.vue";
import processDeploy from "./components/layout/content/ProcessDeploy.vue";
Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "helloWorld",
      component: HelloWorld
    },
    {
      path: "/layout",
      name: "layout",
      component: Layout,
      children: [
        {
          path: "processDeployList",
          name: "processDeployList",
          component: processDeployList
        },
        {
          path: "processDeploy",
          name: "processDeploy",
          component: processDeploy
        }
      ]
    }
    /*,
    {
      path: '/content',
      name: 'Content',
      component: Content,
      children: [
        { path: '/singleorder', component: SingleOrder, name: 'SingleOrder' },
        { path: '/teamorder', component: TeamOrder, name: 'TeamOrder' },
        { path: '/orderstat', component: OrderStat, name: 'OrderStat' },
        { path: '/feedback', component: FeedBack, name: 'FeedBack' },
        { path: '/housesearch', component: HouseSearch, name: 'HouseSearch' },
        { path: '/housedetail', component: HouseDetail, name: 'HouseDetail' },
        { path: '/addorder', component: AddOrder, name: 'AddOrder' }
      ]
    }*/
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
