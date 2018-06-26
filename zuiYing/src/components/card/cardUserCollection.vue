<template>
  <div class="card card-collection">
      <Card :bordered="false">
        <div slot="title">
          <router-link class="nav-item" to="/show/videoID">
            <div class="card-pic">
              <img src="./card_video.jpg" alt="">
              <span class="card-label">16个作品</span>
            </div>
          </router-link>
          <div class="card-discribe">
            <p class="card-name"><router-link tag="span" class="nav-item" to="/show/videoID">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</router-link></p>
            <div class="sign">
              <span>#短视频</span><i>/</i>
              <span>#广告</span><i>/</i>
              <span>#MV</span>
            </div>
          </div>
        </div>
        <div class="enjoy"><Button type="primary" shape="circle" size="small" class="btn-small">关注作品集</Button></div>
      </Card>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.card-collection
  margin: 1%
  width: 23%
  .ivu-card
    padding: 10px
    .ivu-card-head
      border: 0
    .ivu-card-body
      padding: 0 5px 5px
      overflow: hidden
    .enjoy
      float: right
  .card-pic
    height: 130px
    border-radius: 2px 2px 0 0
  .card-discribe
    padding: 10px 5px
    line-height: 20px
</style>