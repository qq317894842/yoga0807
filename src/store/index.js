import Vue from 'vue'
import Vuex from 'vuex'

// import user from './modules/user'

Vue.use(Vuex)

// export default new Vuex.Store({
//   modules: {
//     user
//   }
// })

const state = {
  login: false,   // 是否登录
  userInfo: {} // 用户信息
}

export default new Vuex.Store({
  state
  // ,
  // action,
  // mutations
})
