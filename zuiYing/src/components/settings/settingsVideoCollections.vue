<template>
  <div class="set-card-box">
    <div><Button type="ghost" icon="ios-plus-empty"  @click="modal1 = true">创 建 专 辑</Button></div>
    <div class="settings-card-box">
      <div class="s-c-box">
        <div class="content-circle-bg s-c-pic">
          <router-link to="/v-items"><div class="s-c-pic-in"><img src="" alt=""></div></router-link>
          <div class="s-c-btn">
            <Button type="ghost" shape="circle" class="btn-gray" size="small"  @click="modal2 = true">上传封面</Button>
          </div>
        </div>
        <div class="s-c-text">
          <Row>
            <i-col span="12">
              <div class="collection-inf">
                <p class="collection-name">专辑名称</p>
                <p class="collection-time">2018/09/09</p>
              </div>
            </i-col>
            <i-col span="12">
              <div class="collection-works-num">
                <Icon type="ios-videocam"></Icon><span>30</span>
              </div>
            </i-col>
          </Row>
        </div>
      </div>
      <div class="s-c-box">
        <div class="content-circle-bg s-c-pic">
          <router-link to="/v-upload"><div class="s-c-pic-in"><img src="" alt=""></div></router-link>
          <div class="s-c-btn">
            <Button type="ghost" shape="circle" class="btn-gray" size="small"  @click="modal2 = true">上传封面</Button>
          </div>
        </div>
        <div class="s-c-text">
          <Row>
            <i-col span="12">
              <div class="collection-inf">
                <p class="collection-name">专辑名称</p>
                <p class="collection-time">2018/09/09</p>
              </div>
            </i-col>
            <i-col span="12">
              <div class="collection-works-num">
                <Icon type="ios-videocam"></Icon><span>30</span>
              </div>
            </i-col>
          </Row>
        </div>
      </div>
    </div>
    <Modal v-model="modal1" >
      <h2 slot="header">创建作品集</h2>
      <settings-pop-work-set></settings-pop-work-set>
    </Modal>
    <Modal v-model="modal2" >
      <h2 slot="header">上传作品集封面</h2>
      <settings-pop-upload></settings-pop-upload>
    </Modal>
  </div>

</template>

<script type="text/ECMAScript-6">
  import SettingsPopUpload from 'components/settings/settingsPopUpload';
  import SettingsPopWorkSet from 'components/settings/settingsPopWorkSet';
  // import SettingsVideoUpload from 'components/settings/settingsVideoUpload';
  export default {
    data () {
        return {
          modal1: false,
          modal2: false
        };
    },
    components:{
      SettingsPopUpload,
      SettingsPopWorkSet,
      // SettingsVideoUpload
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable";
@import "~common/stylus/mixin";
.set-card-box
  .ivu-btn-ghost
    padding: 5px 30px
  .ivu-icon-ios-plus-empty
    font-size: 14px
    font-weight: bold
  .settings-card-box
    margin: 20px 0
    display: flex
    flex-wrap: wrap
  .s-c-box
    margin: 10px
  .s-c-pic
    position: relative
    padding: 10px
    width: 268px
    height: 180px
    border-radius: 10px
    a,.s-c-pic-in
      display: block
      width: 100%
      height: 100%
      border-radius: 5px
      background: $color-positive-background-d
    .s-c-btn
      position: absolute
      right: 20px
      bottom: 20px
      padding: 5px 10px
      .btn-gray:hover
        color: $color-white
        background: $color-negative-background
  .s-c-text
    margin: 10px
    padding: 5px
    .collection-name
      font-weight: bold
      line-height: 24px
    .collection-time
      font-size: 12px
      color: $color-text-article
      line-height: 24px
    .collection-works-num
      text-align: right
      .ivu-icon,span
        font-size: 12px
        padding: 5px 3px
</style>