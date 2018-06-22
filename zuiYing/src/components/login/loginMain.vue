<template>
  <div class="login-wrapper">
    <div class="wrapper-main">
      <div class="main form-icon">
        <div class="login-header">
          <div class="logo">
            <img src="./logo_login.png" height="31" width="154" alt="">
          </div>
          <p>向世界说，你好！ Say hello to the world</p>
        </div>
        <router-view></router-view>
      </div>
      <div class="login-bottom">
          <ul>
              <li>帮助</li>
              <li>隐私</li>
              <li>条款</li>
          </ul>
          <p>2018 &copy; 京ICP备15041417号-1Copyright  ZUIYINGTV 版权所有</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
.login-wrapper
  display: flex
  flex-flow: column
  min-height: 100vh
  background: $color-pink
  text-align: center
  .main
    min-height: calc(90vh - 2.5em - 7em);
    /* Avoid padding/borders screwing up our height: */
    box-sizing: border-box;
.login-header
  font-size: 14px
  color: $color-text-dd
  .logo
    margin: 25px 0
    text-align: center
    img
      display: inline-block
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
.form-wrapper
  margin: 60px auto
  width: 300px
  font-size: 12px
  .positive
    width: 100%
    line-height: 1.6
.login-choose
  margin-bottom: 24px
  padding: 0 5px
  width: 100%
  .choose-l
    float: left
    text-align: left
    width: 50%
  .choose-r
    float: right
    text-align: right
    width: 50%
    a
      color: $color-text-dd
      &:hover
        color: $color-text-ll
</style>
