<template>
  <div class="home-service">
    <div class="main">
      <div class="title-black">
        <h2>为创作人提供服务</h2>
      </div>
      <div class="service-list">
        <ul>
            <li>
              <dl>
                <dt>
                  <div class="service-icon"><img src="./icon2_1.png" alt=""></div>
                  <p>发行</p>
                </dt>
                <dd>
                  <p>NEW ERA 青年电影季，是一个为未来而建的青年影展，其使命是发现未成名的好电影，鼓励纯粹的创作，扶植优秀青年创作人。</p>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>
                  <div class="service-icon"><img src="./icon5_1.png" alt=""></div>
                  <p>营销</p>
                </dt>
                <dd>
                  <p>NEW ERA 青年电影季，是一个为未来而建的青年影展，其使命是发现未成名的好电影，鼓励纯粹的创作，扶植优秀青年创作人。</p>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>
                  <div class="service-icon"><img src="./icon6.png" alt=""></div>
                  <p>电影节</p>
                </dt>
                <dd>
                  <p>NEW ERA 青年电影季，是一个为未来而建的青年影展，其使命是发现未成名的好电影，鼓励纯粹的创作，扶植优秀青年创作人。</p>
                </dd>
              </dl>
            </li>
        </ul>
      </div>
    </div>
    <div class="home-bottom">
      <div class="main">
        <div class="bottom-text">
          <p>在这里用作品向世界说，你好！</p>
          <p>Say hello to the world</p>
        </div>
        <div class="choice">
          <Row>
            <i-col span="12">
              <router-link tag="span" class="nav-item" to="/activity-movie"><a href="javascript:;"><Button type="ghost" shape="circle" class="negative">随便看看</Button></a></router-link>
            </i-col>
            <i-col span="12">
              <router-link tag="span" class="nav-item" to="/login"><a href="#"><Button type="ghost" shape="circle" class="positive">我要加入</Button></a></router-link>
            </i-col>
          </Row>
        </div>
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
@import '../../common/stylus/mixin';
.home-service
  position: relative
  z-index: 0
  margin-top: -100px
  padding: 180px 0 20px
  background: $color-positive-background-m
  .service-list
    margin: 80px 0
    ul
      display: flex
      justify-content: center
      li
        display: inline-block
        flex: auto
        margin: 5px
        padding: 50px
        width: 360px
        background: #fff
        border-radius: 10px
        overflow: hidden
        dl dt
          padding: 10px 0
          .service-icon
            margin: 0 auto
            circle(160px)
            background: $color-positive-background
            img
              display: inline
              margin: 25%
              width: 50%
          p
            margin: 30px 0
            font-size: 18px
            color: $color-text
            text-align: center
        dl dd
          margin-top: 10px
          padding: 18px 0
          border-top: 1px solid $color-text-d
          font-size: 14px
          color: $color-text-ll
          line-height: 20px
  .home-bottom
    height: 486px
    background: url(./footer_bg.jpg) no-repeat top center
    background-size: auto 100%
    .bottom-text
      margin: 220px 0 90px
      text-align: center
      font-size: 24px
      line-height: 30px
      color: $color-text-ll
    .choice
      margin: 80px auto 80px
</style>