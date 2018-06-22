<template>
  <div class="bg-pink content-top more-user">
      <div class="main">
        <v-label-list></v-label-list>
        <div class="content-lr">
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
          <v-page></v-page>
        </div>
    </div>
    <v-footer class="bg-white"></v-footer>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vFooter from 'components/footer/footer';
  import vCardUser from 'components/card/cardUser';
  import vPage from 'components/page/page';
  import vLabelList from 'components/showAll/showLabelList';
  export default {
    components:{
      vFooter,
      vCardUser,
      vPage,
      vLabelList
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.more-user
  .good-work
    justify-content: flex-start
  .card
    margin: 10px 1%
    width: 23%
.label-list
  margin-top: 40px
  padding: 10px 30px
  width: 100%
  background: #fff;
  border-radius: 100px;
  font-size: 12px
  ul li
    float: left
    margin: 2px
    padding: 6px 18px
    &.active,
    &:hover
      background-image: linear-gradient(-90deg, #FF4259 0%, #413F57 100%);
      // background: $color-positive-background
      color: $color-white
      border-radius: 100px;
      cursor: pointer
</style>
