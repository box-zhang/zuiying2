<template>
  <div>
    <v-header-home></v-header-home>
    <v-discover-person></v-discover-person>
    <v-discover-video></v-discover-video>
    <v-home-show></v-home-show>
    <v-home-service></v-home-service>
    <v-footer :style="{background:'rgba(255,66,89,0.08)'}"></v-footer>
  </div>
</template>
<script type="text/ECMAScript-6">
  import vHeaderHome from 'components/header/headerHome';
  import vDiscoverPerson from './homePerson';
  import vDiscoverVideo from './homeVideo';
  import vHomeShow from './homeShow';
  import vHomeService from './homeService';
  import vFooter from 'components/footer/footer';

  export default {
     components:{
      vHeaderHome,
      vDiscoverPerson,
      vDiscoverVideo,
      vHomeShow,
      vHomeService,
      vFooter
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';
.title-white
  margin: 90px 0
  font-size: 36px
  font-weight: bold
  text-align: center
  color: $color-white-ll
.discover-person,.discover-video
  position: relative
  z-index: 2
  margin: 60px 0
.choice
    margin: 94px auto 50px
    width: 340px
    text-align: center
    .ivu-btn
      width: 150px
</style>