<template>
  <div class="download-box">
    <div class="wrapper-main">
      <div class="main">
        <Row>
            <i-col span="14">
              <Row>
                  <i-col span="12">
                    <div class="code-2d">
                      <dl>
                        <dt>
                          <div class="code-2d-img">
                            <img src="../../common/images/code_2d.jpg" alt="">
                          </div>
                        </dt>
                        <dd>
                          <div>
                            <p>扫描二维码</p>
                            <p>下载 iOS 版开眼</p>
                            <p>点击跳转至 App Store</p>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </i-col>
                  <i-col span="12">
                    <div class="code-2d">
                      <dl>
                        <dt>
                          <div class="code-2d-img">
                            <img src="../../common/images/code_2d.jpg" alt="">
                          </div>
                        </dt>
                        <dd>
                          <div>
                            <p>扫描二维码</p>
                            <p>下载 iOS 版开眼</p>
                            <p>点击跳转至 App Store</p>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </i-col>
              </Row>
            </i-col>
            <i-col span="10">
              <div class="show-phone">
                <div class="show-phone-img">
                  <img src="../../common/images/page.jpg" alt="">
                </div>
              </div>
            </i-col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {
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
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';
.download-box
  height: 100%
  background: #3E3D54
  color: $color-white
  font-size: 18px
  line-height: 28px
  display: flex
  flex-flow: column
  min-height: 100vh
  img
    width: 100%
  .code-2d
    margin: 80% 60px 0
    width: 200px
    text-align: left
    .code-2d-img
      margin: 30px 0
      width: 120px
      height: 120px
      background: $color-white-d
      border-radius: 2px
      overflow: hidden
  .show-phone
    margin: 5% auto 100px
    width: 350px
    height: 680px
    border-radius: 10px
    background: url(../../common/images/iphone_white.png) no-repeat
    background-size: 100% 100%
    overflow: hidden
    .show-phone-img
      width: 88%
      height: 78%
      margin: 75px auto 0
      background: #333
      border-radius: 2px
      overflow: hidden
</style>
