<template>
  <div class="show-wrapper">
    <router-view></router-view>
    <v-footer :style="{background:'#fff'}"></v-footer>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vHeaderFocus from 'components/header/headerFocus';
  import vFooter from 'components/footer/footer';
  import vCardVideo from 'components/card/cardVideo';
  import vCardUser from 'components/card/cardUser';
  export default {
    components:{
      vHeaderFocus,
      vFooter,
      vCardVideo,
      vCardUser
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable";
@import "~common/stylus/mixin";
.show-wrapper
  margin-top: 45px
  background: $color-positive-background-m
  .content-list
    margin: 40px 40px 80px
</style>
