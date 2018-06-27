<template>
  <div class="bg-pink">
    <div class="main service">
        <Row>
          <i-col span="16">
            <h1>关于我们</h1>
            <div class="content-circle-bg about-content">
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
                            <li><p>1. 北京市朝阳区朝阳北路11号首开东都汇A座611-612</p></li>
                            <li><p>2. 国家高新区保定市高开区兴业路259号5楼</p></li>
                        </ol>
                      </dd>
                    </dl>
                  </div>
                </TabPane>
                <TabPane label="使用帮助" name="name2">
                  <h3>账号注册</h3>
                  <div class="service-help">
                    <ol class="text-level2">
                        <li><span class="level-none">1、</span>如何注册最影？
                          <p>未登录状态下，在最影登录首页可以看见“注册”的按钮，点击它并填写相关信息就能完成注册。</p>
                        </li>
                        <li>注册过程中一直没有收到短信验证码怎么办？
                          <ol class="text-level3">
                              <li><span class="level-none">(1) </span>检查手机的安全设置是否屏蔽了陌生的电话号码。</li>
                              <li><span class="level-none">(2) </span>稍等几分钟，若发送验证码倒计时结束后依旧没收到验证码，请点击重新发送。</li>
                              <li><span class="level-none">(3) </span>如果一直收不到短信验证码，请联系我们的微信客服：最影小助手 id：zuiying。</li>
                          </ol>
                        </li>
                    </ol>
                  </div>
                </TabPane>
                <TabPane label="责任声明" name="name3">责任声明</TabPane>
              </Tabs>
            </div>
          </i-col>
          <i-col span="8">
            <v-bar-service></v-bar-service>
          </i-col>
        </Row>
    </div>
    <v-footer class="bg-white"></v-footer>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vFooter from 'components/footer/footer';
  import vBarService from 'components/bar/barService';
  export default {
    components:{
      vFooter,
      vBarService
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
@import '../../common/stylus/mixin';
.service
  padding: 100px 0
  h1
    margin: 15px 0 20px
    font-size: 24px
    font-weight: bold
  .about-content
    padding: 35px 40px 100px
  dl,dl dt
    margin: 0
.service-help
  line-height: 2
  >ol>li
    margin: 20px 0
  p,.text-level3
    margin: 10px 1rem
</style>