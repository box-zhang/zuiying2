<template>
  <div class="bg-pink">
    <div class="main">
      <div class="content">
        <div class="a-page">
        <h1>****电影节报名</h1>
        <div class="content-circle-bg">
          <div class="step-introduce">
            <dl>
              <dt>参赛须知：</dt>
              <dd>
                <ol class="text-level2">
                    <li><span class="level-none">1）</span>拍摄国家为影片拍摄所属的国家，影片格式的类型是供筛选电影节的。</li>
                    <li><span class="level-none">2）</span>完成日期通常是影片首次完成的日期，如果电影未完成给它大致的完成日期或者运行时间。</li>
                    <li><span class="level-none">3）</span>必填字段有（*）</li>
                </ol>
              </dd>
            </dl>
          </div>
          <div class="step">
            <Steps :current="current">
                <Step title="步骤1" content="影片"></Step>
                <Step title="步骤2" content="导演"></Step>
                <Step title="步骤3" content="主演"></Step>
                <Step title="步骤4" content="出品团队"></Step>
                <Step title="步骤5" content="主创信息"></Step>
                <Step title="步骤6" content="物料信息"></Step>
            </Steps>
          </div>
          <p class="step-text">当前正在进行第 {{ current + 1 }} 步</p>
          <div class="step-c">
            <router-view></router-view>
          </div>
          <div class="choose">
            <router-link class="nav-item" :to="'/activity/activity-step/step'+ currentPrev" :disabled='current0'><Button type="ghost" shape="circle"  @click="prev">返回</Button></router-link>
            <router-link class="nav-item" :to="'/activity/activity-step'+stepNum[current+1]"><Button type="primary" shape="circle" @click="next">下一步</Button></router-link>
          </div>
        </div>
        </div>
      </div>
    </div>
    <v-footer class="bg-white"></v-footer>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vFooter from 'components/footer/footer';
  export default {
    data () {
        return {
            current: 0,
            stepNum:[
              '/step1',
              '/step2',
              '/step3',
              '/step4',
              '/step5',
              '/step6',
              '/succeed',
            ],
            currentPrev: 1
        };
    },
    created(){
      this.menu();
    },
    methods: {
        menu() {
          window.scrollTo(0,0);
        },
        prev () {
          if (this.current <= 1) {
            this.currentPrev=1;
            this.current=0;
          } else {
            this.currentPrev -= 1;
            this.current -= 1;
          }
        },
        next () {
          if (this.current == 7) {
              this.current = 0;
          } else {
              this.currentPrev+=1;
              this.current += 1;
          }
        }
    },
    components:{
      vFooter
    }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';
.a-page
  margin: 30px auto
  h1
    padding: 15px 0 20px
    font-size: 24px
    font-weight: bold
  .step-introduce
    color: $color-text-article
    .text-level2
      margin: 10px
      li
        padding: 10px
  .step-text
    margin: 10px auto
    text-align: center
  .step
    margin: 60px
    .ivu-steps .ivu-steps-title
      display: none
    .ivu-steps-horizontal .ivu-steps-content
      width: 70px
      padding: 15px 0
      margin-left: -7px
      text-align: center
  .choose
     margin: 60px
  .step-c
    margin: 50px auto
    width: 80%
</style>