<template>
  <div class="set-card-box">
    <div><Button type="ghost" icon="ios-plus-empty"  @click="modal1 = true">创 建 专 辑</Button></div>
    <div class="settings-card-box">
      <div class="s-c-box">
        <div class="content-circle-bg s-c-pic">
          <router-link to="/settings/video-set/collections/v-items"><div class="s-c-pic-in"><img src="" alt=""></div></router-link>
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
          <router-link to="/settings/video-set/collections/v-upload"><div class="s-c-pic-in"><img src="" alt=""></div></router-link>
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
</style>