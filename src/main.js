// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import { getStore } from '@/utils/storage'


const config = {
  locale: 'zh_CN'
};
Vue.use(VeeValidate,config);
const dictionary = {
  zh_CN: {
    messages:{
      required: ( field )=> "* 请输入" + field
    },
    attributes:{
      username:'账号',
      email:'邮箱',
      password:'密码',
      name: '账号',
      phone: '手机'
    }
  }
};
Validator.localize(dictionary);
// Validator.localize('zh_CN', dict);
Validator.extend('username', {
  getMessage: field => "请输入正确的手机号或邮箱",
  validate: value => (value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value))||
    (/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value))
});

// Vue.use({router: router})

Vue.config.productionTip = false

const whiteList = ['/home', '/goods', '/login', '/register', '/goodsDetails', '/thanks', '/search', '/refreshsearch', '/refreshgoods'] // 不需要登陆的页面
router.beforeEach(function (to, from, next) {
  let params = {
    params: {
      token: getStore('token')
    }
  }
  next()
  // userInfo(params).then(res => {
  //   if (res.result.state !== 1) { // 没登录
  //     if (whiteList.indexOf(to.path) !== -1) { // 白名单
  //       next()
  //     } else {
  //       next('/login')
  //     }
  //   } else {
  //     store.commit('RECORD_USERINFO', {info: res.result})
  //     if (to.path === '/login') { //  跳转到
  //       next({path: '/'})
  //     }
  //     next()
  //   }
  // })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
