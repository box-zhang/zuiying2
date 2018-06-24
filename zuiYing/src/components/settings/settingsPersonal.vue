<template charset="utf-8">
  <div class="layout-ceiling">
    <div class="main">
      <Row>
        <i-col span="12">
          <div class="layout-logo"><img src="./logo.png" height="24" width="24" alt=""></div>
          <div class="layout-ceiling-nav">
              <a href="#">最影</a>
              <a href="#">电影节</a>
              <a href="#">宣传发布</a>
              <a href="#">电影营销</a>
          </div>
        </i-col>
        <i-col span="12">
          <div class="layout-ceiling-main">
              <a href="#">上传作品</a>
              <a href="#">下载APP</a>
              <a href="#">登陆/注册</a>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
    export default {

    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/variable'
  .layout-ceiling
    position: fixed
    top: 0
    left: 0
    z-index: 99
    width: 100%
    padding: 10px 0
    line-height: 24px
    overflow: hidden
    a
      padding: 0 8px
      color: $color-white
      &:hover
        color: $color-white-ll
    .layout-ceiling-main
      float: right
      margin-right: 15px
    .layout-ceiling-nav
      float: left
      margin-left: 10px
    .layout-logo
      float: left
      width: 24px
      height: 24px
      background: #5b6270
      img
        width: 100%

</style>