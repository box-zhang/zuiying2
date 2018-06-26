<template>
  <router-link class="nav-item" to="/show/videoID">
    <div class="video-discover-card">
      <div class="user-pic"><img src="./user_head.jpg" alt=""></div>
      <div class="user-information">
        <div class="user-information-text">
          <p class="user-name">video Name</p>
        </div>
      </div>
    </div>
  </router-link>
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
.video-discover-card
  .user-pic
    width: 100%
    min-height: 90px
    background:rgba(220,220,236,0.4)
  .user-information
    position: absolute
    top: 0
    left: 0
    padding: 5%
    width: 100%
    height: 100%
    opacity: 0
    -webkit-transform: perspective(1px) translateZ(0)
    transform: perspective(1px) translateZ(0)
    -webkit-transition-property: color
    transition-property: color
    -webkit-transition-duration: 0.5s
    transition-duration: 0.5s
    text-align: center
    color: $color-white-ll
    &:before
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255,66,89,0.8)
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 50% 0;
      transform-origin: 50% 0;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-duration: 0.5s;
      transition-duration: 0.5s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
</style>