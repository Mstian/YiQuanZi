<template>
  <div class='wrap'>
      <div class="bar">
          <div class="left">
            <div class="logo">
              <img src="../assets/logo.png" alt="">
          </div>
          <!-- <div class="txt">亿邦健康</div> -->
          </div>
          <div @click="todownload()" class="openbtn">打开</div>
      </div>
  </div>
</template>

<script>


export default {
  name:'topbar',
 
  components: {},
  data() {
    return {

    };
  },
  
  computed: {},
  
  watch: {},
  
  methods: {
      todownload(){
          window.location.href='http://download.ybhealth.com/app/index.html'
      }
  },
 
  created() {},

  mounted() {},
  beforeCreate() {}, 
  beforeMount() {}, 
  beforeUpdate() {}, 
  updated() {}, 
  beforeDestroy() {},
  destroyed() {}, 
  activated() {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.bar{
    width: 100%;
    height: 13vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
    box-shadow: 0px 3px 7px 0px rgba(119,119,119,0.35);
}
.left{
    display: flex;
    align-items: center;
    color: #333333;
}
.logo{
    width:30vw;
    height: 9vw; 
    margin-right: 10px;
}
.logo img{
    width: 100%;
    height: 100%;
}
.txt{
    font-size: 16px;
    color: #333333;
}
.openbtn{
    width:20vw;
    height: 7vw;
    background: #68DBED;
    border-radius: 999px;
    color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>