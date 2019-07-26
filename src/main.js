import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() {
    console.log("beforeCreate!!!!!!!!!!!!!!!!!!!!!!!!!!!"+store.state.isLogin)
    this.$store.dispatch("getmemberInfo")
    console.log("아싸라뿅" + store.state.isLogin)
  },
  render: h => h(App)
}).$mount('#app')
