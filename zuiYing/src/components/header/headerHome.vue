<template>
    <div class="header-home">
      <div class="main">
        <Row>
          <i-col span="4">&nbsp;</i-col>
          <i-col span="16">
            <div class="banner-head">
              <h1>
                <p>向世界说，你好！</p>
                <p>Say hello to the world</p>
              </h1>
            </div>
            <div class="banner-text">
              <p>888,000 位达人在最影</p>
            </div>
            <div class="choice">
              <Row>
                <i-col span="12">
                  <a href="javascript:;"><Button type="ghost" shape="circle" class="negative">随便看看</Button></a>
                </i-col>
                <i-col span="12">
                  <Button type="ghost" shape="circle" class="positive">我要加入</Button>
                </i-col>
              </Row>
            </div>
          </i-col>
          <i-col span="4">&nbsp;</i-col>
        </Row>
      </div>
    </div>
</template>

<script type="text/ECMAScript-6">
  export default {
    components:{
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" >
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

.header-home
  background: url(header_bg.jpg) no-repeat top center
  background-size: auto 100%
  height: auto
  text-align: center
  .banner-head
    padding: 160px 0 0
    color: $color-white-l
    h1
      font-size: 30px
      line-height: 48px
      font-weight: normal
  .banner-text
    margin: 35px 0
    line-height: 30px
    font-size: 14px
</style>
