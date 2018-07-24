<template>
  <div class="home-view">
    <div class="login mw1200">
      <div class="login_left"></div>
      <div class="login_right">
        <p class="f20 c333 pb45">登录</p>

        <span>
          <i class="user_phone"></i>
          <input
            v-model="loginUser.username"
            type="text"
            name="username"
            placeholder="手机号或邮箱"
            v-validate="'required|username'">
           <p>
            <template v-show="errors.has('username')">{{ errors.first('username') }}</template>
           </p>
          </span>

        <span>
          <i class="user_pwd"></i>
          <input
            v-model="loginUser.password"
            type="password"
            name="password"
            placeholder="密码"
            v-validate="'required|min:6'">
          <p>
            <template v-show="errors.has('password')">{{ errors.first('password') }}</template>
            <template v-show="error">{{ error }}</template>
           </p>
          </span>
        <p>
          <input
            class="login_btn "
            type="button"
            :disabled="isDisabled"
            :class="{disabled: isDisabled}"
            v-model="loginState" @click="login()">
        </p>
        <p class="forget_pwd"><img src="../assets/img/forget_pwd.png" alt="">忘记密码</p>
        <span class="login_line"></span>
        <p class="f16 c666 pb5">您还没有账号，点击注册新用户</p>
        <p class="f14 c999">注册新用户可以观看更多视频！</p>
        <p><input class="to_register_btn"
                  type="button"
                  @click="toRegister()"
                  value="注册新用户"></p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {setStore, getStore, removeStore} from '@/utils/storage.js'
  import {userLogin} from '../api/index.js'

  export default {
    name: 'home-view',
    data() {
      return {
        loginState: '登录',
        isDisabled: false,    // Disabled submit button
        isShow: 0,            // Show pwd
        passType: 'password',
        error: ''             // Verification results
      }
    },
    computed: {
      ...mapState({
        loginUser: state => state.userInfo
      })
    },
    methods: {
      dislogin() {
        this.loginState = '登录'
        this.isDisabled = false
      },
      login() {
        this.$validator.validateAll().then(result => {
          if (result) {
            this.isDisabled = true
            this.loginState = '正在登录...'
            var params = {
              userName: this.loginUser.username,
              passWord: this.loginUser.password
            }
            userLogin(params).then(res => {
              if (res.c === 0) {
                setStore('token', res.result.token)
                // 登录后添加当前缓存中的购物车
                this.$router.push({path: '/pages/home'})
              } else {
                this.error = '账号或密码错误'
                // this.error = res.c + "" + res.m
                this.dislogin()
                return false
              }
            })
          } else {
            this.dislogin()
            return false
          }
        })
          .catch((x) => {
          console.log(x)
        })

      },
      toRegister(){
        this.$router.push({path: '/pages/register'})
      }
    }
  }
</script>

<style scoped>

  .login {
    margin: 70px auto;
    height: 620px;
    background: white;
    border-radius: 24px;
    box-shadow: 0px 0px 40px -5px rgba(0, 0, 0, 0.2);
  }

  .login div {
    float: left;
  }

  .login .login_left {
    width: 600px;
    height: 620px;
    background: url("../assets/img/login_left.png") no-repeat;
    border-radius: 24px 0 0 24px;
  }

  .login .login_right {
    width: 600px;
    text-align: center;
    padding: 50px 0;

  }

  .login .login_right span {
    margin: 0 auto;
    display: block;
    width: 420px;
    position: relative;
  }

  .login .login_right span i {
    position: absolute;
    top: 15px;
    left: 20px;
    width: 16px;
    height: 16px;
  }

  .user_phone {
    background: url("../assets/img/user_phone.png") no-repeat;
  }

  .user_pwd {
    background: url("../assets/img/user_pwd.png") no-repeat;
  }

  .login .login_right span p {
    display: block;
    height: 30px;
    text-align: left;
    line-height: 35px;
    color: red;
    font-size: 12px;
  }

  .login input {
    width: 220px;
    height: 45px;
    border: 1px solid #c3c5c3;
    border-radius: 10px;
  }

  .login .login_right input[type =text], .login .login_right input[type =password] {
    box-sizing: border-box;
    padding-left: 50px;
    width: 420px;
  }

  .login .login_btn {
    width: 420px;
  }

  .login input[type=button] {
    background: #7cb358;
    color: #fff;
  }

  .forget_pwd {
    color: #999;
    padding: 15px 0 40px 0;
  }

  .login_line {
    height: 54px;
    width: 420px;
    border-top: 1px solid #c7c7c7;
  }

  .forget_pwd img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    vertical-align: middle;
  }

  .to_register_btn {
    margin-top: 30px;
  }
</style>
