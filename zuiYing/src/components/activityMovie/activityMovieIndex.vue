<template>
  <router-view></router-view>
</template>

<script type="text/ECMAScript-6">
  export default {
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

.activity
  .activity-content
    padding: 45px 40px 80px
    width: auto
    overflow: hidden
  .content-list
    margin: 40px 40px 80px
</style>