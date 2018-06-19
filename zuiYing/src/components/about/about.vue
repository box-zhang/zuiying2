<template>
  <div class="about-wrapper">
    <div class="wrapper-main">
      <div class="main">
        <Row>
          <i-col span="16">
            <h1>关于我们</h1>
            <div class="about-bg about-content">
              <Tabs value="name1">
                <TabPane label="联系我们" name="name1">
                  <h3>联系我们</h3>
                  <ul>
                      <li>
                        <dl>
                          <dt>最影（北京）申请分成／发行</dt>
                          <dd>
                            <p>联系人：杨女士</p>
                            <p>QQ：3528825199</p>
                            <p>E-mail：yangyue@moviest.com</p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>最影（北京）商务／场地</dt>
                          <dd>
                            <p>联系人：李先生</p>
                            <p>联系电话：2464825507</p>
                            <p>E-mail：lige@moviest.com</p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>最影（北京）作品收录／推荐／公众号相关</dt>
                          <dd>
                            <p>联系人：肖先生</p>
                            <p>QQ：962667594</p>
                            <p>E-mail：xiaolongbo@moviest.com</p>
                          </dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt>最影（保定）广告／其他</dt>
                          <dd>
                            <p>E-mail：ad@moviest.com</p>
                          </dd>
                        </dl>
                      </li>
                  </ul>
                  <div class="addr">
                    <dl>
                      <dt>联系地址</dt>
                      <dd>
                        <ol>
                            <li><p>a. 北京市朝阳区朝阳北路11号首开东都汇A座611-612</p></li>
                            <li><p>b. 国家高新区保定市高开区兴业路259号5楼</p></li>
                        </ol>
                      </dd>
                    </dl>
                  </div>
                </TabPane>
                <TabPane label="使用帮助" name="name2">
                  <h3>账号注册</h3>
                  <div class="service-help">
                    <ol>
                        <li>
                          <dl>
                            <dt>1、如何注册最影？</dt>
                            <dd>未登录状态下，在最影登录首页可以看见“注册”的按钮，点击它并填写相关信息就能完成注册。</dd>
                          </dl>
                        </li>
                        <li>
                          <dl>
                            <dt>2、注册过程中一直没有收到短信验证码怎么办？</dt>
                            <dd>
                              <ol>
                                  <li>(1) 检查手机的安全设置是否屏蔽了陌生的电话号码。</li>
                                  <li>(2) 稍等几分钟，若发送验证码倒计时结束后依旧没收到验证码，请点击重新发送。</li>
                                  <li>(3) 如果一直收不到短信验证码，请联系我们的微信客服：最影小助手 id：zuiying。</li>
                              </ol>
                            </dd>
                          </dl>
                        </li>
                    </ol>
                  </div>
                </TabPane>
                <TabPane label="责任声明" name="name3">责任声明</TabPane>
              </Tabs>
            </div>
          </i-col>
          <i-col span="8">
            <div class="about-bg service-list">
              <h2>我们的服务</h2>
              <ul>
                  <li><a class="about-link" href="javascript:;">片场服务</a></li>
                  <li><a class="about-link" href="javascript:;">片场服务</a></li>
                  <li><a class="about-link" href="javascript:;">片场服务</a></li>
                  <li><a class="about-link" href="javascript:;">片场服务</a></li>
              </ul>
            </div>
            <div class="about-bg marketing-list">
              <h2>企业商业视频服务</h2>
              <ul>
                  <li>
                    <a href="javascript:;" target="_blank">
                      <div class="service-icon"><img src="" alt=""></div>
                      <p>品牌微电影</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" target="_blank">
                      <div class="service-icon"><img src="" alt=""></div>
                      <p>TVC</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" target="_blank">
                      <div class="service-icon"><img src="" alt=""></div>
                      <p>病毒视频</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" target="_blank">
                      <div class="service-icon"><img src="" alt=""></div>
                      <p>动画短片</p>
                    </a>
                  </li>
              </ul>
              <div class="more"><a class="about-link" href="javascript:;">商业视频营销</a></div>
            </div>
          </i-col>
        </Row>
      </div>
    </div>
    <v-footer :style="{background:'#fff'}"></v-footer>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vFooter from 'components/footer/footer';
  export default {
    components:{
      vFooter
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';
.about-wrapper
  background: $color-positive-background-m
  .about-bg
    box-shadow: 0 0 8px 0 rgba(220,220,236,0.40);
    border-radius: 20px;
    background: #fff
    padding: 25px 30px
  h1
    margin: 15px 0 20px
    font-size: 24px
    font-weight: bold
  .about-content
    padding: 35px 40px 100px
.ivu-tabs-nav .ivu-tabs-tab-active, .ivu-tabs-nav .ivu-tabs-tab-active:hover
  color: $color-positive-background
.ivu-tabs-ink-bar
  background-color: $color-positive-background
.ivu-tabs-bar
  border-bottom: 0
.ivu-tabs-tabpane
  padding: 0 10px
  font-size: 12px
  line-height: 20px
  h3
    margin: 15px 0
    font-size:16px
    line-height: 20px
    font-weight: bold
  ul li
    margin-right: 10%
    margin-bottom: 20px
    float: left
    width: 40%
  .addr
    clear: both
.service-list,.marketing-list
  margin-left: 30px
  margin-bottom: 10px
  h2
    margin-bottom: 20px
  li
    margin: 15px 5px
  a.about-link
    padding: 10px
    width: 100%
    background-image: linear-gradient(-90deg, #FF4259 0%, #413F57 100%)
    border-radius: 100px
    text-align: center
    color: #fff
    line-height: 20px
    &:hover
      background-image: linear-gradient(-90deg, #ec2039 0%, #2d2952 100%)
.service-list
  h2
    font-weight: bold
.marketing-list
  h2
    text-align: center
  ul li
    margin: 5px 1% 30px
    float: left
    width: 23%
    font-size: 12px
    text-align: center
    .service-icon
      margin: 10px auto
      circle(50px)
      background: #eee
      overflow: hidden
      img
        width: 100%
.service-help
  line-height: 2
  >ol>li
    margin: 20px 1rem
  dl dd
    padding-left: 1rem
</style>