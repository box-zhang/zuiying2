<template>
  <div>
    <div class="good-work">
      <v-card-collection></v-card-collection>
      <v-card-collection></v-card-collection>
      <v-card-collection></v-card-collection>
      <v-card-collection></v-card-collection>
      <v-card-collection></v-card-collection>
      <v-card-collection></v-card-collection>
      <v-card-collection></v-card-collection>
    </div>
    <v-page></v-page>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vCardCollection from 'components/card/cardUserCollection.vue';
  import vPage from 'components/page/page';
  export default {
    components:{
      vCardCollection,
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
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
</style>