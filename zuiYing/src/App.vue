<template>
  <div class="layout">
    <Layout>
      <v-menu></v-menu>
      <Content>
        <router-view></router-view>
      </Content>
    </Layout>
    <template>
      <BackTop></BackTop>
    </template>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vMenu from 'components/nav/nav';
  import vMain from 'components/home/home';

  export default {
    name: 'Main',
    components:{
      vMenu,
      vMain,
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
