<template>
  <div class="activity content-top">
    <v-header-focus></v-header-focus>
    <div class="main">
      <div class="activity-content">
        <v-activity-movie-search></v-activity-movie-search>
        <div class="good-work">
          <v-card-activity></v-card-activity>
          <v-card-activity></v-card-activity>
          <v-card-activity></v-card-activity>
          <v-card-activity></v-card-activity>
          <v-card-activity></v-card-activity>
          <v-card-activity></v-card-activity>
        </div>
        <div class="page">
          <!-- total:数据总数，current:当前页码，page-size每页条数 -->
          <Page
            :total="pageTotal"
            :current="pageNum"
            :page-size="pageSize"
            show-elevator
            show-sizer
            show-total
            placement="top"
            @on-change="handlePage"
            @on-page-size-change='handlePageSize'>
          </Page>
        </div>
        <!-- <v-page></v-page> -->
      </div>
    </div>
    <v-footer class="bg-pink"></v-footer>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vHeaderFocus from 'components/header/headerFocus';
  import vFooter from 'components/footer/footer';
  import vActivityMovieSearch from 'components/activityMovie/activityMovieSearch';
  import vCardActivity from 'components/card/cardActivity';
  import vPage from 'components/page/page';
  export default {
    data(){
      return{
        pageTotal:120,
        pageNum: 1,
        pageSize:10
      };
    },
    components:{
      vHeaderFocus,
      vFooter,
      vActivityMovieSearch,
      vCardActivity,
      vPage
    },
    methods: {
      handlePage(value) {
        this.pageNum = value;
        this.getTeacherMessages();
      },
      handlePageSize(value) {
        this.pageSize = value;
        this.getTeacherMessages();
      },
    }
    // created(){
    //   this.menu();
    // },
    // methods: {
    //   menu() {
    //     window.scrollTo(0,0);
    //   }
    // }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

</style>