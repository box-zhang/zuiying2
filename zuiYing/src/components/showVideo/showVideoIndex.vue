<template>
  <div class="video-detailed bg-pink">
    <div class="video-detailed-top">
      <div class="main">
        <div class="video-play"></div>
      </div>
    </div>
    <div class="main">
      <div class="content">
        <Row :gutter="16">
            <i-col span="17">
              <div class="video-inf">
                <div class="video-title">
                  <h2>标题标题标题</h2>
                  <p class="label"><span class="label-i">系列短视频</span><span class="label-i">纪录</span><span class="label-i">励志</span><span class="label-i">03-29 17:34</span></p>
                </div>
                <hr>
                <div class="video-introduce-text">
                  <p>
                    【作品介绍】地球上最酷的Move， 最强的少年力 一说滑板，就想到自由。 1960年代，纽约是滑板的天堂，人人都玩滑板。《LIFE》有一组黑白照片：有人穿着西装革履滑，有人穿着连衣裙滑，有人在滑板上倒立，有人在滑板上抱小狗……更重要的是，每一个滑板上的人，看上去都很快乐。 滑板成了城市的表情。 如果“滑板”有具体的模样，
                  </p>
                </div>
                <hr>
                <div class="video-others">
                  <h3>作品集其他作品<span>（共20集）</span></h3>
                  <div class="video-others-list">
                    <ul>
                        <li><div class="others-i"></div></li>
                        <li><div class="others-i"></div></li>
                        <li><div class="others-i"></div></li>
                        <li><div class="others-i"></div></li>
                        <li><div class="others-i"></div></li>
                    </ul>
                  </div>
                </div>
              </div>
            </i-col>
            <i-col span="7">
              <div class="video-inf">
                <div class="user-inf">
                  <h3>本片创作人</h3>
                  <div class="user-discribe">
                    <router-link to="/works">
                      <Avatar style="background-color: #eee" src="https://i.loli.net/2017/08/21/599a521472424.jpg"  icon="person" size="large"/>
                    </router-link>
                    <p class="user-name"><router-link to="/works">尹小白</router-link></p>
                    <p class="user-area">北京</p>
                    <div class="enjoy"><Button type="primary" shape="circle" size="small" class="btn-small" disabled>已关注</Button></div>
                    <p class="user-autograph">个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名…</p>
                  </div>
                </div>
              </div>
            </i-col>
        </Row>
      </div>
    </div>
    <v-footer class="bg-white"></v-footer>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vFooter from 'components/footer/footer';
  export default {
    components:{
      vFooter
    },
    created(){
      this.menu();
    },
    methods: {
      menu() {
        window.scrollTo(0,0);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.video-detailed
  margin-top: 45px
  font-size: 14px
  line-height: 28px
  overflow-hidden
  .video-detailed-top
    background: $color-theme
    .video-play
      margin: 0 auto
      width: 900px
      height: 500px
      background: $color-negative-background-d
  .video-inf
    padding: 20px 30px
    background: #fff
    overflow: hidden
    box-shadow: 0 0 8px 0 rgba(220,220,236,0.40)
    border-radius: 20px
    .video-title
      padding: 10px 5px
      h2
        padding: 10px 0
        font-size: 18px
        line-height: 24px
        font-weight: bold
      .label
        margin-bottom: 5px
        color: $color-text-article
      .label-i
        margin-right: 15px
    .video-introduce-text
      padding: 10px 100px 20px 10px
      text-indent: 2rem
      color: $color-text-article
    .video-others
      padding: 10px 5px
      .video-others-list
        margin: 20px -8px
        overflow: hidden
        li
          float: left
          margin: 2px 8px
          border-radius: 2px
          overflow: hidden
          border: 1px solid $color-theme-d
          background: #FFF4F5
          .others-i
            width: 116px
            height: 80px
    .user-inf h3
      margin: 30px 0
      text-align: center
    .ivu-avatar
      circle(60px)
    .user-name,.user-area
      margin: 10px 0
    .user-discribe
      font-size: 12px
      line-height: 18px
      .user-autograph
        padding: 0 10px
        text-align: left
</style>
