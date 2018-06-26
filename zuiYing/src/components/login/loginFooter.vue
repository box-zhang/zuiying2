<template>
  <div class="login-bottom">
      <ul>
          <li>帮助</li>
          <li>隐私</li>
          <li>条款</li>
      </ul>
      <p>2018 &copy; 京ICP备15041417号-1Copyright  ZUIYINGTV 版权所有</p>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
.login-bottom
  display: block
  min-width: 900px
  color: $color-text-dd
  font-size: 12px
  ul
    display: flex
    justify-content: center
    margin: 10px
    li
      display: inline-block
      flex: auto
      flex-grow: 0
      padding: 5px
      width: 50px
</style>
