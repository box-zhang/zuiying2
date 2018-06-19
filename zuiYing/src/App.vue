<template>
  <div class="layout">
    <Layout>
      <v-menu></v-menu>
      <Content>
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vMenu from 'components/nav/nav';
  import vMain from 'components/home/home';

  export default {
    name: 'Main',
    components:{
      vMenu,
      vMain,
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/base"
@import "./common/stylus/variable"
@import "./common/stylus/mixin"
.layout
  position: relative
  background: none
  width: 100%
  font-size: 14px
.ivu-layout
  background: none
.wrapper-main
  padding-top: 100px
.main
  position: relative
  z-index: 2
  display: block
  max-width: 1180px
  min-width: 900px
  padding: 0 10px
  margin:0 auto
  overflow:hidden
  &:after
    display: block
    content: "."
    height: 0
    line-height: 0
    clear: both
    visibility: hidden

.title-black
  text-align: center
  h2
    font-size: 28px
    line-height: 48px
  p
    margin-top: 15px
    font-size: 12px
    line-height: 20px

.title-active
  position: relative
  line-height: 24px
  h3,.active-more
    padding: 20px 0
  h3
    font-size: 18px
    color: $color-text-l
  .active-more
    position: absolute
    top: 0
    right: 10px
    font-size: 14px

.link-a a
  color: $color-emphasis-l
  &:hover
    color: $color-emphasis-ll


.positive
  positive()
.negative
  negative()

.ivu-input-group-prepend
  position: absolute
  z-index: 5
  top: 0
  left: 0
  border: 0
.ivu-icon
  font-size: 18px
  color: $color-text-d
.ivu-input
  padding: 4px 7px 4px 32px
.ivu-input, .ivu-input-group-append, .ivu-input-group-prepend
  border-radius: 15px
.form-wrapper .ivu-input-group-prepend
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  border: 0;
  margin: 2px;
  border-radius: 15px;
  background: transparent;
  width: 28px;
  height: 28px;
  line-height: 24px;
  text-align: center;
.ivu-form-item-error .ivu-input
  border: 1px solid $color-positive-background-l;
.ivu-form-item-error-tip
  color: $color-positive-background
</style>
