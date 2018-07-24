<template>
  <!--底部-->
  <div class="footer">

    <div class="mw1200">


      <div class="footer_logo "></div>


      <div class="copyright_links">
        <ul>
          <li><a href="">关于我们</a></li>
          <li><a href="">新手指南</a></li>
          <li><a href="">媒体联系</a></li>
          <li><a href="">加入我们</a></li>
          <li class=""><a href="">联系我们</a></li>
          <li><a href="">隐私服务与协议</a></li>
        </ul>
        <span>上海瑜易网络科技有线公司 | Copyright &copy; yogaeasy.cn 沪ICP备17016158号</span>
      </div>


      <div class="footer_spread">
        <i></i><i class="wechat"></i>
        <img class="wechat_code" src="../assets/img/wechat_code.png">

      </div>

    </div>

  </div>
  <!--底部结束-->
</template>

<script>
export default {
  name: 'footer-view'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*底部*/
  .footer {
    height: 180px;
    background: #838075;
    /*position: fixed;*/
    /*left: 0px;*/
    /*bottom: 0px;*/
    width: 100%;
    text-align: center;
    color: #fefbfb;
    font: 14px "MicrosoftYaHei";
  }

  .footer .footer_logo {
    width: 300px;
    height: 100%;
    background: red;
    float: left;
    background: url("../assets/img/logo-bottom.png") no-repeat 0 40px;
  }

  .footer .copyright_links {
    float: left;
    height: 100%;
    position: relative;
  }

  .footer .copyright_links ul {

    margin-top: 65px;

  }

  .footer .copyright_links ul li {
    float: left;
    padding: 0 20px;
    border-right: 1px solid #fefbfb;
  }

  .footer .copyright_links ul li a {
    color: #fefbfb;
  }

  .footer .copyright_links ul li:last-child {
    border: 0;
  }

  .footer .copyright_links span {
    display: block;
    width: 100%;
    position: absolute;
    bottom: 20px;
  }

  .footer .footer_spread {
    box-sizing: border-box;
    float: right;
    padding-right: 50px;
    height: 100%;
    position: relative;
    padding-top: 65px;
  }

  .footer .footer_spread i {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-left: 20px;
  }

  .footer .footer_spread .wechat_code {
    display: none;
    position: absolute;
    left: 10px;
    top: -110px;
  }

  .footer .footer_spread i:first-child {
    background: url("../assets/img/weibo.png") no-repeat;
  }

  .footer .footer_spread .wechat {
    background: url("../assets/img/wechat.png") no-repeat;
  }

  .wechat:hover + .wechat_code {
    display: block;
  }

  /*底部结束*/

</style>
