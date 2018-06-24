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
                  <p class="settings-user-name">xiaobai<span class="icon-p"><img src="icon_per.png" height="100%" width="100%" alt=""></span></p>
                </div>
                <hr>
                <div class="settings-nav-list">
                  <ul>
                    <li class="active"><router-link to="/video">视频管理</router-link></li>
                    <li><router-link to="/personal">个人设置</router-link></li>
                    <li><router-link to="/activity-order">电影节</router-link></li>
                    <li><router-link to="/account">我的账户</router-link></li>
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
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable";
@import "~common/stylus/mixin";
.settings
  margin: 65px 0
.settings-nav
  margin-right: -1px
  text-align: center
  line-height: 18px
  border-right: 1px solid #eaeaea;
  .settings-user
    padding: 10px 10px 30px
    .ivu-avatar
      margin: 5px auto
      circle(70px)
  .settings-nav-list
    padding: 20px 10px
    li
      margin: 10px 15px
      border-radius: 100px
      a
        padding: 15px 20px
        border-radius: 100px
      &:hover a,&:active a,&.active a
        display: block
        color: $color-white
        background: $color-positive-background-ll
.set-account
  .ivu-input-number
    margin: 20px
    width: 80%
.settings-router
  .choose
    margin: 40px auto 40px
</style>