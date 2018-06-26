<template>
  <div class="card card-works">
      <Card :bordered="false">
        <div slot="title">
          <router-link class="nav-item" to="/show/videoID">
            <div class="card-pic">
              <img src="./card_video.jpg" alt="">
              <span class="card-label">5:06</span>
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
        <div class="item-data">
          <Row>
            <i-col span="12">
              <span class="data-c"><Icon type="heart"></Icon>683</span>
              <span class="data-c"><Icon type="eye"></Icon>683</span>
            </i-col>
            <i-col span="12">
              <span class="icon-star active">
                <Icon type="ios-star"></Icon>
              </span>
            </i-col>
          </Row>
        </div>
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
.card-works
  margin: 1.66%
  width: 30%
  .card-discribe
    padding: 16px
  .ivu-card-body
    padding: 10px
    .item-data
      font-size: 12px
      .data-c
        padding: 0 5px
      .ivu-icon
        margin: 0 5px
        font-size: 12px
        color: $color-theme
    .icon-star
      margin: 0 5px
      float: right
      cursor: pointer
      &:hover .ivu-icon-ios-star
      &.active .ivu-icon-ios-star
        color: $color-positive-background-ll
      &:hover.active .ivu-icon-ios-star
        color: $color-theme
</style>