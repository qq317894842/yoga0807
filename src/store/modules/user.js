// import request from 'superagent'
// const state = {
//   login_username: '',
//   login_password: '',
//   temp_username: '',
//   temp_password: ''
// }
//
// const getters = {
//
//   currentUser: state => {
//     return {
//       username: state.login_username,
//       password: state.login_password
//     }
//   }
// }
//
// const mutations = {
//   updateData (state, payload) {
//     switch (payload.name) {
//       case 'username':
//         state.temp_username = payload.value
//         break
//       case 'password':
//         state.temp_password = payload.value
//         break
//       default:
//         console.log('Error:Dont directly mutate Vuex store')
//     }
//   },
//   getLocalUser (state) {
//     state.login_username = localStorage.getItem('username')
//     state.login_password = localStorage.getItem('password')
//   },
//   setUser (state, payload) {
//     state.login_username = payload.username
//     state.login_password = payload.password
//   },
//   logout (state) {
//     localStorage.removeItem('username')
//     localStorage.removeItem('password')
//     state.login_username = ''
//     state.login_password = ''
//   }
// }
//
// const actions = {
//   /**
//    * Login
//    * new Promise((resolve, reject) => {})
//    * Authorization: 'Bearer ' + token
//    * email: payload.email
//    * pass: payload.pass
//    * name: payload.name
//    */
//   login ({ commit }, payload) {
//     return new Promise((resolve, reject) => {
//       request
//         .post('http://192.168.10.244:8083/user/login')
//         .set('Content-Type', 'application/json')
//         .send({
//           userName: payload.username,
//           passWord: payload.password
//         })
//         // .set('Authorization', 'Bearer ' + payload.token)
//         .then(res => {
//           console.log(res)
//           // commit({
//           //   type: 'setUser',
//           //   phone: res.body.email,
//           //   passWord: res.body.name
//           // })
//           resolve(res)
//         }, err => {
//           reject(err)
//         })
//     })
//   },
//   /**
//    * Register
//    * new Promise((resolve, reject) => {})
//    * email: payload.email
//    * pass: payload.pass
//    * name: payload.name
//    */
//   register ({ commit }, payload) {
//     return new Promise((resolve, reject) => {
//       request
//         .post('https://douban.herokuapp.com/user/')
//         .send({
//           email: payload.email,
//           pass: payload.pass,
//           name: payload.name
//         })
//         .then(res => {
//           localStorage.setItem('token', res.body.token)
//           localStorage.setItem('email', res.body.email)
//           localStorage.setItem('name', res.body.name)
//
//           commit({
//             type: 'setUser',
//             email: res.body.email,
//             token: res.body.token,
//             name: res.body.name
//           })
//           resolve(res)
//         }, err => {
//           reject(err)
//         })
//     })
//   }
// }
//
// export default {
//   state,
//   getters,
//   mutations,
//   actions
// }
