<template>
  <div class="activity">
    <v-header-focus></v-header-focus>
    <div class="main">
      <div class="content">
        <div class="activity-sign">
          <dl>
            <dt>所属类目：</dt>
            <dd>
              <div class="activity-sign-list clearfix">
                <ul>
                    <li class="item-sign active"><span>全部</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                    <li class="item-sign"><span>类目二</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                    <li class="item-sign"><span>类目一</span></li>
                </ul>
              </div>
              <div class="btn-show"><span>收起</span><Icon type="arrow-down-b"></Icon></div>
              <!-- <Tabs :animated="false">
                <TabPane label="标签一">标签一的内容</TabPane>
                <TabPane label="标签二">标签二的内容</TabPane>
                <TabPane label="标签三">标签三的内容</TabPane>
              </Tabs>
              <Collapse v-model="value1">
                <Panel name="1">
                    <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                </Panel>
              </Collapse> -->
            </dd>
          </dl>
          <hr>
          <dl>
            <dt>其他选项：</dt>
            <dd>
              <div class="activity-sign-list clearfix">
                <div class="activity-sing-label">
                  <label>
                    <span>国际：</span>
                    <Select v-model="model8" clearable style="width:200px">
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </label>
                </div>
                <div class="activity-sing-label">
                  <label>
                    <span>状态：</span>
                    <Select v-model="model8" clearable style="width:200px">
                      <Option v-for="item in status" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </label>
                </div>
              </div>
            </dd>
          </dl>
        </div>
        <div class="good-work">
          <v-card-activity></v-card-activity>
          <v-card-activity></v-card-activity>
          <v-card-activity></v-card-activity>
          <v-card-activity></v-card-activity>
          <v-card-activity></v-card-activity>
          <v-card-activity></v-card-activity>
        </div>
        <v-page></v-page>
      </div>
    </div>
    <v-footer :style="{background:'#FFF4F5'}"></v-footer>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vHeaderFocus from 'components/header/headerFocus';
  import vFooter from 'components/footer/footer';
  import vCardActivity from 'components/card/cardActivity';
  import vPage from 'components/page/page';
  export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                status: [
                    {
                        value: 'on',
                        label: '进行中'
                    },
                    {
                        value: 'over',
                        label: '已完成'
                    },
                    {
                        value: 'end',
                        label: '已结束'
                    }
                ],
                model8: ''
            };
        },
    components:{
      vHeaderFocus,
      vFooter,
      vCardActivity,
      vPage,
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.activity
  .content-list
    margin: 40px 40px 80px
.activity-sign
  position: relative
  margin: 50px 0 30px
  line-height: 20px
  hr
    height: 0
    line-height: 0
    border: 0
    border-top: 1px solid #E9E9E9;
  .btn-show
    position: absolute
    top: 0
    right: 0
    padding: 2px 0
    width: 80px
    text-align: center
    cursor: pointer
    color: $color-emphasis-l
    .ivu-icon
      margin: 0 5px
      font-size: 12px
      color: $color-emphasis-l
    &:hover,
    &:hover .ivu-icon
      color: $color-emphasis-ll
  dl
    margin: 25px 0 5px
    padding: 10px 0
  dt
    font-weight: bold
  dd
    position: relative
    margin-top: -26px
    padding: 0 80px
    .item-sign
      margin: 2px 5px
      padding: 2px 15px
      float: left
      text-align: center
      cursor: pointer
      &:hover,
      &.active
        background: $color-emphasis-l
        border-radius: 100px
        color: $color-white
  .activity-sign-list
    .activity-sing-label
      float: left
      margin: 0 10px

</style>