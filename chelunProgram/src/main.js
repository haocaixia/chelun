import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueLazyload from 'vue-lazyload'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
Vue.use(VueLazyload,{
  loading: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539179963525&di=2415637c4b14ab4504da86a3eb30b0e2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb3b7d0a20cf431ad95fb7f024036acaf2edd98db.jpg"
})
