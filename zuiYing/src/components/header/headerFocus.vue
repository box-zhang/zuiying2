<template>
  <div class="head-focus">
    <Carousel
        v-model="value2"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
      <CarouselItem>
          <div class="demo-carousel">
            <div class="focus-img"><img src="./header_bg.jpg" alt=""></div>
            <div class="focus-text">
              <h4>标题</h4>
              <p>文字文字文字</p>
            </div>
          </div>
      </CarouselItem>
      <CarouselItem>
          <div class="demo-carousel">
            <div class="focus-img"><img src="./focus1.jpg" alt=""></div>
            <div class="focus-text">
              <h4>标题</h4>
              <p>文字文字文字</p>
            </div>
          </div>
      </CarouselItem>
      <CarouselItem>
          <div class="demo-carousel">
            <div class="focus-img"><img src="./header_bg.jpg" alt=""></div>
            <div class="focus-text">
              <h4>标题</h4>
              <p>文字文字文字</p>
            </div>
          </div>
      </CarouselItem>
      <CarouselItem>
          <div class="demo-carousel">
            <div class="focus-img"><img src="./header_bg.jpg" alt=""></div>
            <div class="focus-text">
              <h4>标题</h4>
              <p>文字文字文字</p>
            </div>
          </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {
        data () {
            return {
                value2: 0,
                setting: {
                  autoplay: false,
                  autoplaySpeed: 3500,
                  dots: 'inside',
                  radiusDot: false,
                  trigger: 'click',
                  arrow: 'hover'
                }
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" >
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.head-focus
  position: relative
  margin-top: 45px
  background: #3E3D54
  .focus-img
    height: 100%
  .focus-text
    position: absolute
    bottom: 10%
    left: 0
    margin: 0 15%
    width: 70%
    color: $color-white-ll
    font-size: 14px
    line-height: 24px
    text-align: left
    h4
      font-size: 18px
      line-height: 32px
.ivu-carousel-list
  margin: 0 auto
  max-width: 1440px
  min-width: 1200px
.demo-carousel
  position: relative
  margin: 0 auto
  max-height: 540px
  text-align: center
  color: #fff
  font-size: 20px
  overflow: hidden
  img
    margin: 0 auto
    width: 100%
</style>