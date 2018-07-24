<template>
  <!--头部-->
  <div class="head">
    <div class="mw1200">
      <div class="logo"><img src="../assets/img/logo-top.png" alt=""></div>
      <div class="nav">


        <ul class="top-nav">
          <li><a>
            <router-link :to="{name: 'HomeView'}">首页</router-link>
          </a></li>
          <li><a href="#">瑜伽视频</a>
            <ul>
              <li><a href="#">所有视频</a></li>
              <li><a href="#">分类</a>
                <ul>
                  <li><a href="#">初级入门</a></li>
                  <li><a href="#">阳性强度</a></li>
                  <li><a href="#">阴性拉伸</a></li>
                  <li><a href="#">塑形理疗</a></li>
                  <li><a href="#">基础讲解</a></li>
                  <li><a href="#">孕产瑜伽</a></li>
                  <li><a href="#">专访花絮</a></li>
                </ul>
              </li>
              <li><a href="#">流派</a>
                <ul>
                  <li><a href="#">xx</a></li>
                  <li><a href="#">xxx</a></li>
                  <li><a href="#">xxxxx</a></li>
                </ul>
              </li>
              <li><a href="#">名师专辑</a>
                <ul>
                  <li><a href="#">xx</a></li>
                  <li><a href="#">xxx</a></li>
                  <li><a href="#">xxxxx</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">训练课程</a></li>
          <li><a href="#">瑜伽阅读</a></li>

        </ul>


      </div>

      <div class="search">
        <a href=""><i class="icon-search"></i></a>
        <input type="text" id="text" placeholder="搜索">
      </div>
      <div class="personal">
        <!--<template v-if="currentUser.name">-->
        <!--<a class="name">王二码字帅</a>-->
        <!--<ul class="user_nav">-->
          <!--<li>个人中心</li>-->
          <!--<li>注销</li>-->
        <!--</ul>-->
        <!--</template>-->
        <!--<template v-else>-->
        <a><router-link :to="{name: 'LoginView'}">登录</router-link></a>
        <!--<a href="">注册</a>-->
        <router-link :to="{name: 'RegisterView'}">注册</router-link>
        <!--</template>-->
      </div>


    </div>

  </div>
  <!--头部结束-->
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'header-nav',
    computed: {
      currentLink: function () {
        return this.currentUser.name ? 'HomeView' : 'LoginView'
      },
      holder: function () {
        return this.currentUser.name ? this.currentUser.name : '请先登录'
      },
      // Map store/user state
      ...mapGetters(['currentUser'])
    },
    created() {
      console.log(localStorage.getItem('username'))
      // Get local user filling store/user
      if (localStorage.getItem('username')) {
        this.$store.commit({
          type: 'getLocalUser'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/nav.css';

  /*头部*/
  .head {
    height: 99px;
    background: white;
    border-bottom: 1px solid #cccc;
  }

  .head .logo {
    width: 200px;
    margin-top: 20px;
    float: left;
  }

  .head .nav {
    width: 570px;
    margin-top: 45px;
    float: left;
    margin-left: 55px;
  }

  .head .search {
    float: left;
    position: relative;
    margin-top: 35px;

  }

  .head .search i {
    display: block;
    background: url("../assets/img/search.png") no-repeat 0px 10px;
    /*background: red;*/
    width: 30px;
    height: 35px;
    position: absolute;
    top: 0px;
    left: 240px;
    /*opacity: 0.1;*/
    z-index: 1;
  }

  .head .search input[type=text] {
    width: 250px;
    height: 34px;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    padding: 0 10px;

    /*background:url("../assets/img/search.png") no-repeat scroll right center transparent;*/
  }

  .head .personal {
    float: right;
    margin-top: 45px;
    position: relative;

  }

  .head .personal a {
    color: #7cb358;
    margin-left: 10px;
  }

  .user_nav {
    background: #6ea642;
    border-radius: 5px;
    width: 100px;
    position: absolute;
    z-index: 1;
    left: -10px;
    top: 30px;
    visibility: hidden; /*这里只能用hidden 不能display*/
    opacity: 0;
    transition: visibility .5s ease-in-out;
  }

  .user_nav li {
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: white;
    font-size: 12px;
    border-bottom: 1px solid white;
    cursor: pointer;
  }

  .user_nav li:nth-last-of-type(1) {
    border: 0;
  }

  .head .personal .name {
    display: block;
    height: 30px;
    cursor: pointer;
  }

  .personal .name:hover + ul, .personal ul:hover {
    opacity: 1;
    visibility: visible;
    margin: 0;
  }

  /*头部结束*/

</style>
