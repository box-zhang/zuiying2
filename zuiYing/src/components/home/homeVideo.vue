<template>
  <div class="discover-video">
    <div class="main">
      <div class="content-lr">
        <Row>
          <i-col span="12">
            <div class="video-list">
              <ul>
                <li>
                  <v-discover-video-card></v-discover-video-card>
                </li>
                <li>
                  <v-discover-video-card></v-discover-video-card>
                </li>
                <li>
                  <v-discover-video-card></v-discover-video-card>
                </li>
                <li>
                  <v-discover-video-card></v-discover-video-card>
                </li>
              </ul>
            </div>
          </i-col>
          <i-col span="12">
            <div class="video-nav">
              <div class="title-black">
                <h2>中国最优秀的达人视频</h2>
                <p>创意广告、影视混剪、美食制作、美妆达人、健身教学</p>
              </div>
              <div class="video-link">
                <ul>
                  <li><a href="javascript:;"><i-button type="primary" shape="circle">广告/宣传片</i-button></a></li>
                  <li><a href="javascript:;"><i-button type="primary" shape="circle">剧情短片</i-button></a></li>
                  <li><a href="javascript:;"><i-button type="primary" shape="circle">纪录片</i-button></a></li>
                  <li><a href="javascript:;"><i-button type="primary" shape="circle">网剧</i-button></a></li>
                  <li><a href="javascript:;"><i-button type="primary" shape="circle">MV</i-button></a></li>
                  <li class="more"><router-link tag="span" class="nav-item" to="/show/videos">了解详情 &nbsp;&gt;</router-link></li>
                </ul>
              </div>
            </div>
          </i-col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script type="text/ECMAScript-6">
  import vDiscoverVideoCard from './homeVideoCard';
  export default {
     components:{
      vDiscoverVideoCard,
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';
.discover-video
  margin: 120px 0 50px
  .video-list ul
    display: -webkit-flex
    display: flex
    flex-wrap: nowrap
    align-content: center
    justify-content: space-between
    li
      display: inline-block
      position: relative
      flex: 1
      flex-grow: 1
      margin: 0 1px
      img
        width: 100%
      :hover:before,:focus:before,:active:before
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
      :hover.user-information
        opacity: 1
        -webkit-transition-duration: 2.5s
        transition-duration: 2.5s
        -webkit-transition-timing-function: ease-out
        transition-timing-function: ease-out
        .user-information-text
          position: absolute
          top: 50%;
          margin: -20px 0 0
          width: 100%
  .video-nav
    margin-left: 100px
  .video-link
    margin: 30px auto 0
    width: 400px
    text-align: center
    ul
      display: flex
      flex-wrap: wrap
      li
        margin: 15px 0
        flex: auto
        width: 30%
        &.more
          padding: 10px 9px
          line-height: 1.5
        a
          width: 100%
          .ivu-btn-primary
            width: 86%
            positive()
</style>