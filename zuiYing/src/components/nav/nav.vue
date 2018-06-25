<template>
  <div class="layout-ceiling">
    <div class="main">
      <Row>
        <i-col span="12">
          <div class="layout-logo"><img src="./logo.png" height="24" width="24" alt=""></div>
          <div class="layout-ceiling-nav">
              <router-link tag="span" class="nav-item" to="/home"><a href="#">最影</a></router-link>
              <router-link tag="span" class="nav-item" to="/activity"><a href="#">电影节</a></router-link>
              <router-link tag="span" class="nav-item" to="/propagandize"><a href="#">宣传发布</a></router-link>
              <router-link tag="span" class="nav-item" to="/marketing"><a href="#">电影营销</a></router-link>
          </div>
        </i-col>
        <i-col span="12">
          <div class="layout-ceiling-main logining">
              <router-link tag="span" class="nav-item" to="/upload">上传作品</router-link>
              <router-link tag="span" class="nav-item" to="/download">下载APP</router-link>
              <!-- <router-link tag="span" class="nav-item" to="/login"><a href="#">登陆/注册</a></router-link> -->
              <Dropdown placement="bottom-end">
                <a href="javascript:void(0)">
                   <div class="user-head-pic"><img src="./card_user.jpg" height="100%" width="100%" alt=""></div>
                </a>
                <DropdownMenu slot="list">
                  <router-link tag="span" class="nav-item" to="/works"><DropdownItem>个人主页</DropdownItem></router-link>
                  <router-link tag="span" class="nav-item" to="/video-set"><DropdownItem>视频管理</DropdownItem></router-link>
                  <router-link tag="span" class="nav-item" to="/personal"><DropdownItem>个人设置</DropdownItem></router-link>
                  <router-link tag="span" class="nav-item" to="/activity-order"><DropdownItem>电影节</DropdownItem></router-link>
                  <router-link tag="span" class="nav-item" to="/account"><DropdownItem>我的账户</DropdownItem></router-link>
                  <router-link tag="span" class="nav-item" to="/password"><DropdownItem>修改密码</DropdownItem></router-link>
                  <router-link tag="span" class="nav-item" to="/export"><DropdownItem>退出</DropdownItem></router-link>
                </DropdownMenu>
              </Dropdown>
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
@import '../../common/stylus/mixin'
.layout-ceiling
  position: fixed
  top: 0
  left: 0
  z-index: 99
  width: 100%
  padding: 10px 0
  line-height: 24px
  // overflow: hidden
  background-image: linear-gradient(-90deg, #FF4259 0%, #413F57 100%);
  border-top: 1px solid #fff
  .nav-item
    cursor: pointer
    color: $color-white
    &:hover
      color: $color-white-ll
  a
    padding: 0 8px
    color: $color-white
    &:hover
      color: $color-white-ll
  .layout-ceiling-main
    float: right
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

.ivu-dropdown
  float: right
  margin-left: 20px
  .user-head-pic
    position: absolute
    top: 0
    right: 0
    circle(28px)
    overflow: hidden
    background: #FFF4F5
</style>