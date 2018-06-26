<template>
  <div class="user-i">
    <v-header-user></v-header-user>
    <div class="main">
      <div class="">
        <div class="user-inf user-main">
          <div class="user-discribe">
            <v-avatar></v-avatar>
            <p class="user-name">尹小白</p>
            <p class="user-area">北京</p>
            <p class="user-autograph">个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名…</p>
            <div class="enjoy"><Button type="primary" shape="circle" size="small" class="btn-small" disabled>已关注</Button></div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-works-tab">
      <ul>
        <li><router-link to="works">作品</router-link></li>
        <li><router-link to="collections">作品集</router-link></li>
        <li><router-link to="introduce">简介</router-link></li>
      </ul>
    </div>
    <div class="main">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <v-footer class="bg-pink"></v-footer>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vHeaderUser from 'components/header/headerUser';
  import vFooter from 'components/footer/footer';
  import vAvatar from 'components/card/avatar';
  export default {
    components:{
      vHeaderUser,
      vFooter,
      vAvatar
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
.user-i
  .good-work
    justify-content: flex-start
.user-main
  font-size: 18px
  line-height: 24px
  .user-discribe
    margin-top: -80px
    text-align: center
  .ivu-avatar
    circle(160px)
  .user-name
    margin: 20px 0
    font-size: 24px
.user-works
  margin: 50px auto
  max-width: 1440px
.user-works-tab
  margin: 40px 0
  display: flex
  justify-content: center
  box-shadow: 0 2px 2px 0 rgba(220,220,236,0.80);
  li
    display: inline-block
    margin: 0 20px
    height: 50px
    line-height: 50px
    width: 100px
    text-align: center
    cursor: pointer
    border-bottom: 3px solid transparent
    a
      display: block
      &:hover,
      &.active
        border-bottom: 3px solid $color-positive-background
.user-works-tab-content
  margin:10px 0
</style>