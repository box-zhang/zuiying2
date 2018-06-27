<template>
  <div class="activity-sign-nav">
    <dl>
      <dt>所属类目：</dt>
      <dd :class="{ active: isActive}">
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
        <div class="btn-show" @click="isAddClass()"><span>{{isActive ? '展开':'收起'}}</span><Icon :type="[isActive?'arrow-down-b':'arrow-up-b']"></Icon></div>
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
              <Select style="width:200px">
                <Option v-for="item1 in cityList" :value="item1.value" :key="item1.value">{{ item1.label }}</Option>
              </Select>
            </label>
          </div>
          <div class="activity-sing-label">
            <label>
              <span>状态：</span>
              <Select style="width:200px">
                <Option v-for="item2 in status" :value="item2.value" :key="item2.value">{{ item2.label }}</Option>
              </Select>
            </label>
          </div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {
    data () {
      return {
      isActive: true,
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
    },
    created(){
      this.menu();
    },
    methods: {
      menu() {
        window.scrollTo(0,0);
      },
      isAddClass:function(index){
        this.isActive = !this.isActive;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.activity-sign-nav
  position: relative
  margin: 20px 0 40px
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
    padding: 10px 0 0
    dt
      margin: 0
      font-weight: bold
      text-align: left
    dd
      position: relative
      margin-top: -26px
      padding: 0 80px
      text-align: left
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
      &.active
        .activity-sign-list
          height: 30px

  .activity-sign-list
    margin-bottom: 10px
    overflow: hidden
    .activity-sing-label
      float: left
      margin: 0 10px

</style>