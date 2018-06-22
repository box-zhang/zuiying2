<template>
  <div class="activity">
    <v-header-focus></v-header-focus>
    <div class="main">
      <div class="content">
        <article class="video-article">
          <h1>电影节的标题</h1>
          <p>2017 年充满各种让脑粉期盼多年的重启与科幻巨作。听到「科幻」二字可别只会想到超级英雄电影。继年初的《生化危机：终章》《黑夜传说5：血战》、与获得 8 项金奖提名的《降临》，接下来除了人人都想得到的《攻壳机动队》等年度强档，目前也还有几部讨论度较低的作品非常值得期待。以下就今年的科幻片做预测分析，你自己最期待哪部电影呢？</p>
          <h2>必看强档：</h2>
          <dl>
            <dt><div class="text-red">《攻壳机动队》</div></dt>
            <dd>
              <div class="v-pic"><img src="" alt=""></div>
              <p>过去我们已经在《2017 强片特搜：明年将引爆话题的17部巨作》介绍了不少年度强片，排除超级英雄电影后，2017 年半最让人期待又怕受伤害的科幻电影，绝对是《攻壳机动队》。改编自士郎正宗同名漫画，并由科幻片女神约翰逊·斯嘉丽饰演「上校」草薙素子，绮丽的背景设定、酷炫的预告，让连非原著粉丝的观众都无比期待；此外，让老影迷等了好久的《异形：契约》《银翼杀手 2049》也是万众注目的焦点，无疑都能为春季的票房带来可观数字。之后由吕克·贝松暑期档《星际特工：千星之城》，更是集巨星与梦幻原著设定之大成的必看巨作，就是要科幻迷今年荷包防守不能。</p>
            </dd>
          </dl>
          <dl>
            <dt><div class="text-red">《攻壳机动队》</div></dt>
            <dd>
              <div class="v-pic"><img src="" alt=""></div>
              <div class="v-pic"><img src="" alt=""></div>
            </dd>
          </dl>
        </article>
        <div class="activity-sign">
          <div class="activity-sign-h">
            <router-link to="/activity-sign"><Button type="primary" shape="circle" class="positive">立即报名￥200</Button></router-link>
          </div>
          <div class="activity-sign-h">
            <Checkbox>报名即代表同意 <router-link to="/activity-treaty">《最影上传用户协议》</router-link></Checkbox>
          </div>
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
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.activity
  .video-article
    padding: 40px
    line-height: 30px
    h1,h2,h3,h4
      padding: 20px
      text-align: center
    h1
      font-size: 24px
      text-align: center
    h2
      font-size: 20px
    p
      margin: 30px 0
      text-indent: 2rem
    dt
      font-size: 18px
      text-align: center
    .v-pic
      margin: 30px auto
      width: 86%
      min-height: 10px
      border-radius: 2px
      background:$color-positive-background-m
      overflow: hidden
  .activity-sign
    margin: 50px
    text-align: center
    .activity-sign-h
      margin: 20px
</style>