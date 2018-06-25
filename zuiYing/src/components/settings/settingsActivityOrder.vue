<template>
  <div class="settings-router set-card-box">
    <Tabs :animated="false">
      <TabPane label="未支付（1）">
        <div class="set2 set-activity">
          <div class="settings-card-box">
            <div class="s-c-box">
              <div class="content-circle-bg s-c-pic">
                <div class="s-c-pic-in"><img src="" alt=""></div>
                <div class="s-c-btn">
                </div>
              </div>
              <div class="s-c-text">
                <Row>
                  <i-col span="12">
                    <div class="collection-inf">
                      <p class="collection-name">***电影节</p>
                      <p class="collection-time">2018/09/09</p>
                    </div>
                  </i-col>
                  <i-col span="12">
                    <div class="collection-works-num">
                      <Button type="primary" shape="circle">立即支付</Button>
                    </div>
                  </i-col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="已完成（2）">
        <div class="set2 set-activity">
          <div class="settings-card-box">
            <div class="s-c-box">
              <div class="content-circle-bg s-c-pic">
                <div class="s-c-pic-in"><img src="" alt=""></div>
                <div class="s-c-btn">
                </div>
              </div>
              <div class="s-c-text">
                <Row>
                  <i-col span="12">
                    <div class="collection-inf">
                      <p class="collection-name">***电影节</p>
                      <p class="collection-time">2018/09/09</p>
                    </div>
                  </i-col>
                  <i-col span="12">
                    <div class="collection-works-num">
                      已完成
                    </div>
                  </i-col>
                </Row>
              </div>
            </div>
            <div class="s-c-box">
              <div class="content-circle-bg s-c-pic">
                <div class="s-c-pic-in"><img src="" alt=""></div>
                <div class="s-c-btn">
                </div>
              </div>
              <div class="s-c-text">
                <Row>
                  <i-col span="12">
                    <div class="collection-inf">
                      <p class="collection-name">***电影节</p>
                      <p class="collection-time">2018/09/09</p>
                    </div>
                  </i-col>
                  <i-col span="12">
                    <div class="collection-works-num">
                      已完成
                    </div>
                  </i-col>
                </Row>
              </div>
            </div>
            <div class="s-c-box">
              <div class="content-circle-bg s-c-pic">
                <div class="s-c-pic-in"><img src="" alt=""></div>
                <div class="s-c-btn">
                </div>
              </div>
              <div class="s-c-text">
                <Row>
                  <i-col span="12">
                    <div class="collection-inf">
                      <p class="collection-name">***电影节</p>
                      <p class="collection-time">2018/09/09</p>
                    </div>
                  </i-col>
                  <i-col span="12">
                    <div class="collection-works-num">
                      已完成
                    </div>
                  </i-col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script type="text/ECMAScript-6">
  import SettingsPopUpload from 'components/settings/settingsPopUpload';
  import SettingsPopWorkSet from 'components/settings/settingsPopWorkSet';
  export default {
    components:{
      SettingsPopUpload,
      SettingsPopWorkSet
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable";
@import "~common/stylus/mixin";

</style>