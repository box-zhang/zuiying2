<template>
  <div class="discover-person">
    <div class="main">
      <div class="content-lr">
        <div class="title-black">
          <h2>发现中国最优秀的领域达人</h2>
          <p>达人聚集地、百万级达人分享、寻找生活、寻找创意</p>
        </div>
        <div class="discover-nav">
          <ul>
            <li>
              <a href="javascript:;">
                  <span class="icon"><img src="./icon1.png" alt=""></span>
                  <div class="discover-nav-text">
                    <p>创意</p>
                    <p class="more"><a href="javascript:;">了解详情 &nbsp;&gt;</a></p>
                  </div>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                  <span class="icon"><img src="./icon2.png" alt=""></span>
                  <div class="discover-nav-text">
                    <p>趣味</p>
                    <p class="more"><a href="javascript:;">了解详情&nbsp;&gt;</a></p>
                  </div>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                  <span class="icon"><img src="./icon3.png" alt=""></span>
                  <div class="discover-nav-text">
                    <p>运动</p>
                    <p class="more"><a href="javascript:;">了解详情&nbsp;&gt;</a></p>
                  </div>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                  <span class="icon"><img src="./icon4.png" alt=""></span>
                  <div class="discover-nav-text">
                    <p>美食</p>
                    <p class="more"><a href="javascript:;">了解详情&nbsp;&gt;</a></p>
                  </div>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                  <span class="icon"><img src="./icon5.png" alt=""></span>
                  <div class="discover-nav-text">
                    <p>生活</p>
                    <p class="more"><a href="javascript:;">了解详情&nbsp;&gt;</a></p>
                  </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="discover-person-list">
          <ul>
            <li>
              <v-discover-person-card></v-discover-person-card>
            </li>
            <li>
              <v-discover-person-card></v-discover-person-card>
            </li>
            <li>
              <v-discover-person-card></v-discover-person-card>
            </li>
            <li>
              <v-discover-person-card></v-discover-person-card>
            </li>
            <li>
              <v-discover-person-card></v-discover-person-card>
            </li>
            <li>
              <v-discover-person-card></v-discover-person-card>
            </li>
            <li>
              <v-discover-person-card></v-discover-person-card>
            </li>
            <li>
              <v-discover-person-card></v-discover-person-card>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <v-circle1></v-circle1>
  </div>
</template>
<script type="text/ECMAScript-6">
  import vCircle1 from 'components/parts/circleSimple';
  import vDiscoverPersonCard from './homePersonCard';
  export default {
    components:{
      vCircle1,
      vDiscoverPersonCard
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
.discover-person
  position: relative
  .discover-nav
    margin: 40px 0
    ul
      display: -webkit-flex
      display: flex
      width: 100%
      li
        flex: 1
        text-align: center
        a:hover .icon
          transform: scale(1.1)
          transition: ease 0.6s;
    .icon
      display: block
      width: 60px
      height: 60px
      transition: ease 0.7s;
      img
        width: 100%
    .discover-nav-text
      margin: 25px 0
      font-size: 18px
      color: #30383B
      .more a
        margin: 6px 0
        font-size: 12px
        color: $color-emphasis
        &:hover
          color:$color-emphasis-l
  .discover-person-list ul
    display: -webkit-flex
    display: flex
    flex-wrap: nowrap
    align-content: center
    justify-content: space-between
    li
      display: inline-block
      position: relative
      flex: 1
      flex-grow: 1
      margin: 0 1px
      :hover:before,:focus:before,:active:before
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
      :hover.user-information
        opacity: 1
        -webkit-transition-duration: 2.5s
        transition-duration: 2.5s
        -webkit-transition-timing-function: ease-out
        transition-timing-function: ease-out
        p
          position: absolute
          bottom: 0
          margin: 20px 0
          width: 100%

</style>