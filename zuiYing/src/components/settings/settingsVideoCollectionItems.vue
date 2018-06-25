<template>
  <div class="set-collection-box">
    <div class="good-work">
      <div class="set-c-v-add ">
        <router-link tag="div" to="/v-add">
          <Upload
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/">
            <div class="upload-box">
                <Icon type="ios-cloud-upload" size="52"></Icon>
                <p class="text-hint">添加视频</p>
            </div>
          </Upload>
        </router-link>
      </div>
      <v-card-video></v-card-video>
      <v-card-video></v-card-video>
      <v-card-video></v-card-video>
      <v-card-video></v-card-video>
      <v-card-video></v-card-video>
      <v-card-video></v-card-video>
    </div>
    <v-page></v-page>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vCardVideo from 'components/card/cardVideo';
  import vPage from 'components/page/page';
  export default {
    components:{
      vCardVideo,
      vPage,
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable";
@import "~common/stylus/mixin";
.set-collection-box
  .card .card-pic
    height: 140px
  .ivu-card-body
    display: none
  .ivu-card-head
    border: 0
  .set-c-v-add
    margin: 10px 0
    padding: 32px 0
    width: 30%
    text-align: center
    // border: 1px solid rgba(104,104,122,0.08)
    // -webkit-box-shadow: 0 0 8px 0 rgba(220,220,236,0.4)
    // box-shadow: 0 0 8px 0 rgba(220,220,236,0.4)
    // border-radius: 10px
</style>