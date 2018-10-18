import Router from "@/router";

const router = {
  path: function(url, params) {
    Router.push({ path: path, query: params });
  },
  name: function(url, params) {
    Router.push({ name: path, params: params });
  },
  getParams: function(url, params) {
    Router.push({ path: path, query: params });
  },
  redirect: function(url) {
    window.location = url;
  },
  goBack: function(index) {
    if (index === undefined || index === null) {
      Router.go(-1);
    } else {
      Router.go(index);
    }
  },
  go: function(index) {
    Router.go(index);
  },
  getParam(route, key) {}
};
export default router;
