<template>
  <div class="settings-router">
    <div class="settings-video-nav clearfix">
      <ul>
        <li class="active"><router-link to="/video-edit">视频（2）</router-link></li>
        <li><router-link to="/collections">作品集（2）</router-link></li>
      </ul>
    </div>
    <div class="settings-video-main">
        <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable";
@import "~common/stylus/mixin";
.settings-router
  .settings-video-nav
    margin-bottom: 30px
    width: 100%
    border-bottom: 1px solid $color-line
    li
      float: left
      margin-right: 10px
      margin-bottom: -1px
      width: 150px
      height: 46px
      line-height: 46px
      text-align: center
      border-bottom: 2px solid transparent
      a
        width: 100%
      &:hover,
      &:active,
      &.active
        border-bottom: 2px solid $color-theme
        a
          font-weight: bold

</style>