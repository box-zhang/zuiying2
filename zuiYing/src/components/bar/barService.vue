<template>
  <div class="bar-service">
    <div class="content-circle-bg service-list">
      <h2>我们的服务</h2>
      <ul>
          <li><a class="about-link" href="javascript:;">片场服务</a></li>
          <li><a class="about-link" href="javascript:;">片场服务</a></li>
          <li><a class="about-link" href="javascript:;">片场服务</a></li>
          <li><a class="about-link" href="javascript:;">片场服务</a></li>
      </ul>
    </div>
    <div class="content-circle-bg marketing-list">
      <h2>企业商业视频服务</h2>
      <ul>
          <li>
            <a href="javascript:;" target="_blank">
              <div class="service-icon"><img src="" alt=""></div>
              <p>品牌微电影</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" target="_blank">
              <div class="service-icon"><img src="" alt=""></div>
              <p>TVC</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" target="_blank">
              <div class="service-icon"><img src="" alt=""></div>
              <p>病毒视频</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" target="_blank">
              <div class="service-icon"><img src="" alt=""></div>
              <p>动画短片</p>
            </a>
          </li>
      </ul>
      <div class="more"><a class="about-link" href="javascript:;">商业视频营销</a></div>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vFooter from 'components/footer/footer';
  export default {
    components:{
      vFooter
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';
.ivu-tabs-nav .ivu-tabs-tab-active, .ivu-tabs-nav .ivu-tabs-tab-active:hover
  color: $color-positive-background
.ivu-tabs-ink-bar
  background-color: $color-positive-background
.ivu-tabs-bar
  border-bottom: 0
.ivu-tabs-tabpane
  padding: 0 10px
  font-size: 12px
  line-height: 20px
  h3
    margin: 15px 0
    font-size:16px
    line-height: 20px
    font-weight: bold
  ul li
    margin: 15px 10% 15px 0
    float: left
    width: 40%
  .addr
    clear: both
.service-list,.marketing-list
  margin-left: 30px
  margin-bottom: 10px
  h2
    margin-bottom: 20px
  li
    margin: 15px 5px
  a.about-link
    padding: 10px
    width: 100%
    background-image: linear-gradient(-90deg, #FF4259 0%, #413F57 100%)
    border-radius: 100px
    text-align: center
    color: #fff
    line-height: 20px
    &:hover
      background-image: linear-gradient(-90deg, #ec2039 0%, #2d2952 100%)
.service-list
  h2
    font-weight: bold
.marketing-list
  h2
    text-align: center
  ul li
    margin: 5px 1% 30px
    float: left
    width: 23%
    font-size: 12px
    text-align: center
    .service-icon
      margin: 10px auto
      circle(50px)
      background: #eee
      overflow: hidden
      img
        width: 100%
</style>