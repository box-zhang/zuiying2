<template>
  <div class="home-show">
    <div class="show-top"></div>
    <div class="show-content">
      <div class="main">
        <div class="content-lr">
          <div class="show-bright">
            <h2 class="title-white">个性化展示空间</h2>
            <Row>
              <i-col span="12">
                <div class="show-img">
                  <img src="./user_video_pic.jpg" height="410" width="380" alt="">
                </div>
              </i-col>
              <i-col span="12">
                <div class="show-list">
                  <ul>
                    <li>个性化展示空间</li>
                    <li>功能全面的影像作品集</li>
                    <li>流程的视频播放体验</li>
                    <li>无广告无水印视频</li>
                  </ul>
                </div>
                <div class="create-btn">
                  <router-link tag="span" class="nav-item" to="/login"><a href="#"><i-button type="ghost" shape="circle" class="hollow">创建我的主页</i-button></a></router-link>
                </div>
              </i-col>
            </Row>
          </div>
          <div class="show-activity">
            <h2 class="title-white">电影节</h2>
            <div class="show-workers">
              <ul>
                <li>
                  <v-discover-show-card></v-discover-show-card>
                </li>
                <li>
                  <v-discover-show-card></v-discover-show-card>
                </li>
                <li>
                  <v-discover-show-card></v-discover-show-card>
                </li>
              </ul>
            </div>
            <div class="create-btn">
              <router-link tag="span" class="nav-item" to="/activity"><a href="#"><i-button type="ghost" shape="circle" class="hollow">浏览更多赛事</i-button></a></router-link>
            </div>
          </div>

        </div>
      </div>
      <v-circle2></v-circle2>
    </div>
    <div class="show-bottom"></div>
  </div>
</template>
<script type="text/ECMAScript-6">
  import vCircle2 from '../parts/circleMassive';
  import vDiscoverShowCard from './homeShowCard';
  export default {
    components:{
      vCircle2,
      vDiscoverShowCard
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';
.home-show
  position: relative
  z-index: 2
  width: 100%
  .show-top
    height: 75px
    background: url(./show_bg_top.png) no-repeat top center
    background-size: 100% 100%
  .show-bottom
    height: 100px
    background: url(./show_bg_bottom.png) no-repeat top center
    background-size: 100% 100%
  .show-content
    padding: 20px 0
    background-image: linear-gradient(-180deg, #f64159 0%, #4e3f57 100%);
  .show-img
    margin: 0 auto
    width: 380px
    height: 410px
    background: $color-white-l
    img
      width: 100%
  .show-list
    margin: 0 auto
    width: 300px
    font-size: 24px
    line-height: 32px
    color: $color-white-ll
    li
      margin: 22px 0
      line-height: 48px
      list-style: disc
  .create-btn
    margin: 45px auto
    text-align: center
    width: 400px
    a
      display: block
      width: 100%
  .hollow
    height: 50px
    font-size: 18px
    hollow()
  .show-workers ul
    display: flex
    justify-content: space-between
    li
      display: inline-block
      margin: 0 20px 30px
      width: 300px
      border-radius: 10px
      box-shadow: 0 28px 10px -10px rgba(220,220,236,0.4)
      overflow: hidden
      background: #FFF0F2

</style>