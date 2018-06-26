<template>
  <div class="login-wrapper">
    <div class="wrapper-main">
      <div class="main form-icon">
        <v-login-header></v-login-header>
        <router-view></router-view>
      </div>
      <v-login-footer></v-login-footer>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vLoginFooter from 'components/login/loginFooter';
  import vLoginHeader from 'components/login/loginHeader';
  export default {
    components:{
      vLoginHeader,
      vLoginFooter
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
  .ivu-btn-primary
    width: 100%
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