<template>
  <div class="bg-pink">
    <div class="main service">
        <Row>
          <i-col span="16">
            <div class="content-circle-bg service-text">
              <h2>电影节报名</h2>
              <p class="margin-tb20">最影拥有40万+注册影视创作人，活动线上覆盖人群超过1000万，线下活动参与人数累计超过5万我们的业务品牌广告合作，结合我们的活动，帮助品牌通过线上线下联动扩大宣传曝光及产品推介承办宣传各类行业赛事活动，帮助赛事活动提升品牌影响力及参与度</p>
              <p>联系电话：010-1234567</p>
              <p>邮箱：xiaobai@gmail.com</p>
              <div class="choose">
                <router-link to="/activity-step"><Button type="primary" shape="circle" class="positive" @click="modal2 = true">申请合作</Button></router-link>
                <!-- <Button type="primary" shape="circle" class="positive" @click="modal2 = true">申请合作</Button> -->
              </div>
            </div>
          </i-col>
          <i-col span="8">
            <v-bar-service></v-bar-service>
          </i-col>
        </Row>
    </div>
    <v-footer :style="{background:'#fff'}"></v-footer>
    <Modal v-model="modal2" >
      <h2 slot="header">电影节报名</h2>
      <activity-form0></activity-form0>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vFooter from 'components/footer/footer';
  import vBarService from 'components/bar/barService';
  import ActivityForm0 from 'components/form/activityForm0';
  export default {
    data(){
      return {
          modal2: false
      };
    },
    methods: {
    },
    components:{
      vFooter,
      vBarService,
      ActivityForm0
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';
@import '~common/stylus/mixin';
.service
  padding: 100px 0
  .service-text
    padding: 35px 40px 100px
    line-height: 28px
    h2
      font-size: 18px
      font-weight: bold
    p.margin-tb20
      margin: 20px 0
  .choose
    margin: 60px 0 0
    .ivu-btn
      width: 150px
</style>