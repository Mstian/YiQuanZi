<!--  -->
<template>
  <div class>
    <div class="top">
      <img src="../assets/bindtop.jpg" alt />
    </div>
    <div class="bottom">
        <div class="title">
            温馨提示：<br> 一键绑定亲友手机，出门在外，也能随时查 看亲友的健康数据，让爱零距离。
        </div>
        <div class="botimg">
            <img src="../assets/step1.jpg" alt="">
            <img src="../assets/step2.jpg" alt="">
            <img src="../assets/step3.jpg" alt="">
            <img src="../assets/step4.jpg" alt="">
            <img src="../assets/step5.jpg" alt="">
            <img src="../assets/step6.jpg" alt="">
        </div>
        <div @click="open()" class="btn">
            <div class="icon1">
                <img src="../assets/icon1.png" alt="">
            </div>
            <div class="flash">
                <img src="../assets/flash.png" alt="">
            </div>
            <div class="button">
                立即绑定亲友
            </div>
            <div class="icon2">
                <img src="../assets/icon2.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },

  computed: {},

  watch: {},
  methods: {
      open(){
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if(isAndroid) {
          
　　　　　　//  给Android传递参数需要用 window.Android.注册的方法名({body:传输的数据} 来给native发送消息
            window.AndroidJs.toTabMine();
        }
        if(isiOS) {
            
　　　　　　//  给iOS传递参数需要用 window.webkit.messageHandlers.注册的方法名.postMessage({body:传输的数据} 来给native发送消息
            window.webkit.messageHandlers.methodsName.postMessage({"key":"parameter"});
        }
      }
  },

  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.top {
  width: 100%;
  img {
    width: 100%;
    display: block
  }
 
}
.bottom{
    background: #0198FB;
    padding: 20px 14px;
    color:#fff;
    position: relative;
    // padding-bottom:200px;
    .botimg{
        margin: 20px 0;
        width: 100%;
        padding-bottom: 200px;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        img{
            width: 100%;
            display: block;
        }
    }
}
.btn{
    width: 80%;

    position: absolute;
    img{
        width: 100%;
    }
    bottom: 60px;
    left: 50%;
    transform: translate(-50%,0);
    z-index: 44;
}
.icon1{
    width: 90px;
    position: absolute;
    top: -180%;
    left:12%;
    //  z-index:;
    transform: translate(-50%,-50%)
    img{
        width: 100%;
    }
    
}
.icon2{
     height: 44px;   
 }
.button{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}
.flash{
    width: 30px;
    height: 50px;
    position: absolute;
    left: 50%;
    top: -130px;
    margin-left: -10px;
}
</style>