<template>
  <div class="bg-pink content-top more-video">
    <div class="main">
      <v-label-list></v-label-list>
      <div class="content-lr">
        <div class="good-work">
          <v-card-video></v-card-video>
          <v-card-video></v-card-video>
          <v-card-video></v-card-video>
          <v-card-video></v-card-video>
          <v-card-video></v-card-video>
          <v-card-video></v-card-video>
        </div>
        <v-page></v-page>
      </div>
    </div>
    <v-footer class="bg-white"></v-footer>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vFooter from 'components/footer/footer';
  import vCardVideo from 'components/card/cardVideo';
  import vPage from 'components/page/page';
  import vLabelList from 'components/showAll/showLabelList';
  export default {
    components:{
      vFooter,
      vCardVideo,
      vPage,
      vLabelList
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
.more-video
  .good-work
    justify-content: flex-start
    margin: 0 -2%
  .card
    margin: 10px 1.66%
    width: 30%
</style>
