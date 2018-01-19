import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageMain',
      component (resolve) {
        require(['@/views/pageMain'], resolve);
      }
    }, {
      path: '/testvue',
      name: 'testvue',
      component (resolve) {
        require(['@/views/testvue'], resolve);
      }
    }, {
      path: '/pageDetail',
      name: 'pageDetail',
      component (resolve) {
        require(['@/views/pageDetail'], resolve);
      }
    }, {
      path: '*',
      redirect: '/'
    }
  ]
});
