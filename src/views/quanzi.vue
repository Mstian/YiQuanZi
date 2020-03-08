<template>
  <div class="about">
    <topbar style=" width:100%; background:#fff; position:fixed"></topbar>
    <!-- <div class="mainPic" :style="{'backgroundImage':'url('+ articleInfo.pictures +')'}">
    </div>-->
    <div class="main">
      <!-- <div class="notetitle">{{articleInfo.dis_title}}</div> -->
      <div class="publisher">
        <div class="avatar">
          <img :src="articleInfo.user_picture" alt />
        </div>
        <div class="msg">
          <div class="name">{{articleInfo.user_name}}</div>
          <div class="date">{{articleInfo.add_time}}</div>
        </div>
      </div>
      <div v-html="articleInfo.dis_text" class="des">
        <!-- {{}} -->
      </div>
      <div class="images">
        <div v-if="articleInfo.pictures.length == 1 ">
          <div v-for="(item,index) in articleInfo.pictures" :key="index" class="single">
            <img :src="item" alt />
          </div>
        </div>
        <div v-if="articleInfo.pictures.length == 2 ">
          <div v-for="(item,index) in articleInfo.pictures" :key="index" class="double">
            <img :src="item" alt />
          </div>
        </div>
        <div v-if="articleInfo.pictures.length == 3 ">
          <div v-for="(item,index) in articleInfo.pictures" :key="index" class="triple">
            <img :src="item" alt />
          </div>
        </div>
        <div v-if="articleInfo.pictures.length == 4 ">
          <div v-for="(item,index) in articleInfo.pictures" :key="index" class="wradral">
            <img :src="item" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="bg"></div>
    <div class="comment">
      <div class="title">热门评论</div>
      <div v-if="this.commentInfo.commentlist && this.commentInfo.commentlist.length > 0">
        <div class="commentMan" v-for="(item,index) in this.commentInfo.commentlist" :key="index">
          <div class="avatar">
            <img :src="item.user_picture" alt />
          </div>
          <div class="commentInfo">
            <div class="info">
              <div class="name">{{item.user_name}}</div>
              <div class="replay">{{item.dis_text}}</div>
            </div>
            <div class="replayList" v-if="item.quote.length > 0">
              <ul>
                <li v-for="(quoteItem,quoteIndex) in item.quote.slice(0,2)" :key="quoteIndex">
                  <span class="rename">{{quoteItem.user_name}}</span>
                  <span>：</span>
                  <span class="recomment">{{quoteItem.dis_text}}</span>
                </li>
              </ul>
              <div v-if="item.quote.length > 2" class="total">共{{item.quote_count}}条回复 ></div>
            </div>
            <div class="comTime">
              <div class="pubTime">{{item.add_time}}</div>
              <div class="feedNum">评论 {{item.quote_count}} 赞 {{item.like_num}}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.commentInfo.reply_count == 0" style="text-align:center">暂无评论</div>
    </div>
  </div>
</template>
<script>
import topbar from "../components/topbar";
export default {
  data() {
    return {
      articleInfo: {},
      commentInfo: {}
    };
  },
  components: {
    topbar
  },
  methods: {
    getParams() {
      // 测试id 550// 591// 588  // 590 //communityapi.get_comment_reply 评论接口
      //809多图
      let circleId = this.$route.query.id ? this.$route.query.id : 809;
      this.getDatas(circleId);
      this.getcomment(circleId);
    },
    getDatas(id) {
      this.$axios
        .get("http://ts.ybhealth.com/api.php", {
          params: {
            app_key: "FEBCF5BA-5189-4644-9DFE-64E8109CB8DE",
            method: "communityapi.detail",
            dis_id: id
          }
        })
        .then(({ data }) => {
          this.articleInfo = data.info;
        });
    },
    getcomment(id) {
      this.$axios
        .get("http://ts.ybhealth.com/api.php", {
          params: {
            app_key: "FEBCF5BA-5189-4644-9DFE-64E8109CB8DE",
            method: "communityapi.get_comment_reply",
            dis_id: id
          }
        })
        .then(({ data }) => {
          this.commentInfo = data.info;
        });
    }
  },
  mounted() {
    this.getParams();
  }
};
</script>
<style lang="scss" scoped>
.about {
  overflow: hidden;
}
ul,
li {
  list-style: none;
  text-decoration: none;
}
.main {
  padding: 20px 15px;
  margin-top: 10vw;
}
.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}
.avatar img {
  width: 100%;
  height: 100%;
}
.publisher {
  display: flex;
  align-items: center;
  margin: 30px 0;
}
.publisher .msg .name {
  font-size: 15px;
  color: #1a1a1a;
  font-weight: bold;
}
.publisher .msg .date {
  font-size: 10px;
  color: #b1b1b1;
}
.des {
  font-size: 16px;
  text-align: justify;
  color: #1a1a1a;
  line-height: 28px;
}
.notetitle {
  color: #323232;
  font-size: 24px;
}
.bg {
  height: 10px;
  background: rgba(242, 242, 242, 1);
}

.comment {
  padding: 15px 15px;
}
.title {
  font-size: 17px;
  color: #1a1a1a;
  font-weight: bold;
  margin-bottom: 25px;
}
.commentMan {
  display: flex;
  align-items: flex-start;
}
.commentInfo {
  flex: 1;
  margin-bottom: 20px;
}
.commentInfo .info {
  display: flex;
  flex-direction: column;
}
.commentInfo .info div {
  margin-bottom: 5px;
}
.commentInfo .info .name {
  font-size: 14px;
  color: #5c5c5c;
}
.commentInfo .info .replay {
  font-size: 14px;
  color: #323232;
}
.replayList {
  padding: 12px;
  background: rgba(246, 246, 246, 1);
}
.replayList li {
  color: #303030;
  font-size: 13px;
  line-height: 20px;
  margin-bottom: 5px;
}
.replayList li .rename {
  color: #5380b0;
}
.total {
  font-size: 13px;
  color: #5380b0;
}
.comTime {
  font-size: 12px;
  color: #979797;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}
.mainPic {
  width: 100%;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 13vw;
}
.single {
  width: 240px;
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  margin: 5px 0;
}
.double {
  width: 130px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  display: inline-block;
  margin-right: 10px;
}
.triple {
  width: 110px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  display: inline-block;
  margin-right: 10px;
}
.double img {
  width: 100%;
  height: 100%;
}
.single img {
  width: 100%;
  height: 100%;
}
.triple img {
  width: 100%;
  height: 100%;
}
.wradral {
  width: 130px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  display: inline-block;
  margin-right: 5px;
}
.wradral img {
  width: 100%;
  height: 100%;
}
</style>