<template>
  <div class="label-list clearfix">
    <ul>
        <li class="active"><span>全部</span></li>
        <li><span>广告</span></li>
        <li><span>短片</span></li>
        <li><span>短视频</span></li>
        <li><span>MV</span></li>
        <li><span>系列短视频</span></li>
        <li><span>动画</span></li>
        <li><span>纪录片</span></li>
    </ul>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
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
