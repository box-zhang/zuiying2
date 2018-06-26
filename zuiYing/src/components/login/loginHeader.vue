<template>
  <div class="login-header">
    <div class="logo">
      <img src="./logo_login.png" height="31" width="154" alt="">
    </div>
    <p>向世界说，你好！ Say hello to the world</p>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
.login-header
  font-size: 14px
  color: $color-text-dd
  .logo
    margin: 25px 0
    text-align: center
    img
      display: inline-block
</style>
