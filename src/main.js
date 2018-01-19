// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
// import bookstore from 'src/bookstore';

// 关闭生产模式下的提示
Vue.config.productionTip = false;

// 错误信息打印
Vue.config.errorHandler = (err) => {
  console.error(err);
};
Vue.component('global', {
  props: ['message'],
  template: '<div>我是全局组件{{message}}</div>'
})

window.vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

// window.vm = new Vue({
//   el: '#bookstore',
//   router,
//   store,
//   template: '<bookstore/>',
//   components: { bookstore }
// });
