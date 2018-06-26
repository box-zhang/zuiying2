<template>
  <div class="bg-pink content-top">
    <v-header-focus></v-header-focus>
    <div class="main">
      <div class="content-lr">
        <div class="show-all">
          <div class="title-active">
            <h3>每日优选</h3>
            <router-link tag="a" class="active-more link-a" to="/show/videos">更多</router-link>
          </div>
          <div class="good-work">
            <v-card-video></v-card-video>
            <v-card-video></v-card-video>
            <v-card-video></v-card-video>
            <v-card-video></v-card-video>
            <v-card-video></v-card-video>
            <v-card-video></v-card-video>
          </div>
          <div class="title-active">
            <h3>明星用户</h3>
            <router-link tag="a" class="active-more link-a" to="/show/users">更多</router-link>
          </div>
          <div class="good-work">
            <v-card-user></v-card-user>
            <v-card-user></v-card-user>
            <v-card-user></v-card-user>
            <v-card-user></v-card-user>
            <v-card-user></v-card-user>
            <v-card-user></v-card-user>
            <v-card-user></v-card-user>
            <v-card-user></v-card-user>
          </div>
        </div>
      </div>
    </div>
    <v-footer class="bg-white"></v-footer>
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
.show-wrapper
  margin-top: 45px
  background: $color-positive-background-m
  .content-list
    margin: 40px 40px 80px
.show-all
  margin: 40px 0 80px
</style>
