<template>
  <div class="settings-router">
    <div class="settings-video-nav clearfix">
        <router-link tag="span" class="settings-video-nav-tab" to="/settings/video-set/video-edit">视频(2)</router-link>
        <router-link tag="span" class="settings-video-nav-tab" to="/settings/video-set/collections">作品集(2)</router-link>
    </div>
    <div class="settings-video-main">
        <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {
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
</style>