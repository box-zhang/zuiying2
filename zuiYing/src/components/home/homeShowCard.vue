<template>
    <div class="show-discover-card">
      <router-link class="nav-item" to="/show/userID/introduce">
        <div class="workers-pic">
          <img src="./works_pic.jpg" alt="">
        </div>
      </router-link>
      <div class="workers-information">
        <h3><router-link tag="span" class="nav-item" to="/show/userID/introduce">NEW ERA 青年电影季</router-link></h3>
        <p>NEW ERA NEW ERA 青年电影季，是一个为未来而建的青年影展，其使命是发现未成名的好电影，鼓励纯粹的创作，扶植优秀青年创作人。</p>
      </div>
    </div>
</template>
<script type="text/ECMAScript-6">
  import circle2 from '../parts/circleMassive';
  export default {
    components:{
      'v-circle2': circle2
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';
.show-discover-card
  .workers-pic
    img
      width: 100%
  .workers-information
    padding: 28px
    h3
      margin-bottom: 20px
      font-size: 18px
      text-align: center
      color: #000
      font-weight: bold
    p
      font-size: 14px
      line-height: 20px

</style>