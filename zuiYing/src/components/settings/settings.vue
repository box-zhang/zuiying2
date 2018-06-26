<template>
  <div>
    <div class="main">
      <div class="content">
        <div class="settings">
          <Row>
            <i-col span="5">
              <div class="settings-nav">
                <div class="settings-user">
                  <Avatar size="large" />
                  <p class="settings-user-name">xiaobai<span class="icon-p"><img src="./icon_per.png" height="100%" width="100%" alt=""></span></p>
                </div>
                <hr>
                <div class="settings-nav-list">
                  <ul>
                    <router-link tag="li" class="settings-nav-tab" to="/settings/homepage">个人主页</router-link>
                    <router-link tag="li" class="settings-nav-tab" to="/settings/video-set">视频管理</router-link>
                    <router-link tag="li" class="settings-nav-tab" to="/settings/personal">个人设置</router-link>
                    <router-link tag="li" class="settings-nav-tab" to="/settings/activity-order">电影节</router-link>
                    <router-link tag="li" class="settings-nav-tab" to="/settings/account">我的账户</router-link>
                    <router-link tag="li" class="settings-nav-tab" to="/settings/password">修改密码</router-link>
                  </ul>
                </div>
              </div>
            </i-col>
            <i-col span="19">
              <router-view></router-view>
            </i-col>
          </Row>

        </div>
      </div>
    </div>
    <v-footer class="bg-pink"></v-footer>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vFooter from 'components/footer/footer';
  export default {
    components:{
      vFooter,
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
@import "~common/stylus/variable";
@import "~common/stylus/mixin";
.settings
  margin: 65px 0 0
  .icon-p
    display: inline-block
    margin: 0 5px
    width: 12px
    height: 12px
    img
      width: 100%
  .s-c-box
    display: inline-block
    margin: 10px
    width: 260px
    .s-c-pic
      position: relative
      padding: 10px
      height: 180px
      border-radius: 10px
      a,.s-c-pic-in
        display: block
        width: 100%
        height: 100%
        border-radius: 5px
        background: $color-positive-background-d
      .s-c-btn
        position: absolute
        right: 20px
        bottom: 20px
        padding: 5px 10px
        .btn-gray:hover
          color: $color-white
          background: $color-negative-background
    .s-c-text
      margin: 10px
      padding: 5px
      .collection-name
        font-weight: bold
        line-height: 24px
      .collection-time
        font-size: 12px
        color: $color-text-article
        line-height: 24px
      .collection-works-num
        text-align: right
        .ivu-icon,span
          font-size: 12px
          padding: 5px 3px
.settings-nav
  margin-right: -1px
  text-align: center
  line-height: 18px
  border-right: 1px solid #eaeaea;
  .settings-user
    padding: 10px 10px 30px
    .ivu-avatar
      margin: 15px auto
      circle(70px)
  .settings-nav-list
    padding: 20px 10px
    .settings-nav-tab
      margin: 10px 15px
      padding: 15px 20px
      border-radius: 100px
      cursor: pointer
      &:hover,&:active,&.active,&.router-link-exact-active
        display: block
        color: $color-white
        background: $color-positive-background-ll
        background-image: linear-gradient(-90deg, #FF4259 0%, #413F57 100%);
.set-account
  .ivu-input-number
    margin: 20px
    width: 80%
.settings-router
  border-left: 1px solid $color-line
  padding: 0 0 100px 50px
  .choose
    margin: 40px auto 40px
  .form-reset
      margin: 20px auto
      width: 50%
      h2
          margin: 20px 0
          font-size: 18px
          font-weight: bold
      h3
          margin: 20px 0
      .ivu-btn
          width: 120px
  .settings-video-nav
    margin-bottom: 30px
    width: 100%
    border-bottom: 1px solid $color-line
    .settings-video-nav-tab
      float: left
      margin-right: 10px
      margin-bottom: -1px
      width: 120px
      height: 46px
      line-height: 46px
      text-align: center
      border-bottom: 2px solid transparent
      cursor: pointer
      &:hover,
      &:active,
      &.active
        border-bottom: 2px solid $color-theme
        font-weight: bold
.password-re .ivu-form-item-label
    display: none

</style>