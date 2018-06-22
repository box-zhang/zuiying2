<template>
  <div class="spread">
    <v-header-focus></v-header-focus>
    <div class="main">
      <div class="spread-list spread-text">
        <ul>
            <li>
              <h3><span>宣传发售</span></h3>
              <p class="spread-discribe">TVC/微电影/病毒视频/宣传片/纪录片/动画</p>
            </li>
            <li>
              <h3><span>视频营销</span></h3>
              <p class="spread-discribe">短视频内容品牌矩阵</p>
            </li>
            <li>
              <h3><span>网络发行</span></h3>
              <p class="spread-discribe">网络大电影/网络剧/网络综艺植入</p>
            </li>
        </ul>
      </div>
      <div class="spread-list spread-data">
        <ul>
            <li>
              <dl>
                <dt>
                  <div class="data"><span class="data-num">80</span></div>
                </dt>
                <dd>
                  <p class="spread-discribe">制作团队（人）</p>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>
                  <div class="data"><span class="data-num">20</span></div>
                </dt>
                <dd>
                  <p class="spread-discribe">制作国际地区（个）</p>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>
                  <div class="data"><span class="data-num">300</span></div>
                </dt>
                <dd>
                  <p class="spread-discribe">合作品牌（个）</p>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>
                  <div class="data"><span class="data-num">600</span></div>
                </dt>
                <dd>
                  <p class="spread-discribe">制作团队（个）</p>
                </dd>
              </dl>
            </li>
        </ul>
      </div>
      <div class="title-black">
        <h2>我们的案例</h2>
      </div>
      <div class="instance-list">
        <ul>
            <li>
              <div class="instance-img"><img src="./user_words_pic.jpg" alt=""></div>
              <p class="instance-text">魔力短视频内容矩阵营销介绍</p>
            </li>
            <li>
              <div class="instance-img"><img src="./user_words_pic.jpg" alt=""></div>
              <p class="instance-text">魔力短视频内容矩阵营销介绍</p>
            </li>
            <li>
              <div class="instance-img"><img src="./user_words_pic.jpg" alt=""></div>
              <p class="instance-text">魔力短视频内容矩阵营销介绍</p>
            </li>
            <li>
              <div class="instance-img"><img src="./user_words_pic.jpg" alt=""></div>
              <p class="instance-text">魔力短视频内容矩阵营销介绍</p>
            </li>
            <li>
              <div class="instance-img"><img src="./user_words_pic.jpg" alt=""></div>
              <p class="instance-text">魔力短视频内容矩阵营销介绍</p>
            </li>
        </ul>
      </div>
      <div class="title-black">
        <h2>我们的合作伙伴</h2>
      </div>
      <div class="partner">
        <div class="partner-list">
          <ul>
              <li>
                <div class="partner-logo"><img src="../../common/images/logo_tmall.png" alt="tmall"></div>
                <p>天猫</p>
              </li>
              <li>
                <div class="partner-logo"><img src="../../common/images/logo_taobao.png" alt="taobao"></div>
                <p>淘宝</p>
              </li>
              <li>
                <div class="partner-logo"><img src="../../common/images/logo_tencent.png" alt="tencent"></div>
                <p>腾讯游戏</p>
              </li>
              <li>
                <div class="partner-logo"><img src="../../common/images/logo_fengh.png" alt="凤凰网"></div>
                <p>凤凰网</p>
              </li>
              <li>
                <div class="partner-logo"><img src="../../common/images/logo_renm.png" alt="人民日报"></div>
                <p>人民日报</p>
              </li>
          </ul>
        </div>
        <div class="button-box">
          <router-link tag="span" class="nav-item" to="/about"><Button type="primary" shape="circle" size="large">联系我们</Button></router-link>
        </div>
      </div>
    </div>
    <v-footer class="bg-pink"></v-footer>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vHeaderFocus from 'components/header/headerFocus';
  import vFooter from 'components/footer/footer';
  export default {
    components:{
      vHeaderFocus,
      vFooter,
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';
.spread
  margin-top: 45px
  >.main
    ul
      display: flex
      justify-content: center
      flex-wrap: wrap
      align-items: flex-start
  .spread-list
    margin: 60px 20px
    text-align: center
    .spread-discribe
      color: $color-text-l
  .spread-text
    li
      margin: 0 1.65%
      width: 30%
      h3
        font-size: 24px
        color: $color-text-ll
        span
          padding: 20px 0
          display: inline-block
          border-bottom: 5px solid $color-text-ll
    .spread-discribe
      margin: 34px 0
  .spread-data
    li
      width: 24%
    .data-num
      font-size: 80px
      color: $color-emphasis-ll
    .spread-discribe
      margin: 20px 0
  .spread .instance-list ul
    justify-content: flex-start
  .instance-list
    margin: 50px 0
    li
      margin: 0 1.65% 20px
      width: 30%
      .instance-img
        border-radius: 2px
        overflow: hidden
      .instance-text
        margin: 5% 0
      img
        width: 100%
  .partner
    margin: 60px 30px 150px
    font-size: 0
    line-height: 0
    img
      width: 100%
    .partner-list
      margin: 60px 0
      li
        margin: 0 2%
        width: 16%
        .partner-logo
          width: 90%
    .button-box
        text-align: center
      .ivu-btn-primary
        width: 200px
</style>