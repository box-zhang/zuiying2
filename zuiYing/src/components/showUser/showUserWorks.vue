<template>
  <div>
    <div class="good-work">
      <v-card-user-works></v-card-user-works>
      <v-card-user-works></v-card-user-works>
      <v-card-user-works></v-card-user-works>
      <v-card-user-works></v-card-user-works>
      <v-card-user-works></v-card-user-works>
      <v-card-user-works></v-card-user-works>
      <v-card-user-works></v-card-user-works>
      <v-card-user-works></v-card-user-works>
    </div>
    <v-page></v-page>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vCardUserWorks from 'components/card/cardUserWorks';
  import vPage from 'components/page/page';
  export default {
    components:{
      vCardUserWorks,
      vPage,
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
</style>