<template>
  <div class="set2 set-activity">
    <div class="settings-card-box">
      <v-settings-activity-order-card></v-settings-activity-order-card>
      <v-settings-activity-order-card></v-settings-activity-order-card>
      <v-settings-activity-order-card></v-settings-activity-order-card>
      <v-settings-activity-order-card></v-settings-activity-order-card>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vSettingsActivityOrderCard from 'components/settings/settingsActivityOrderCard';
  export default {
    components:{
      vSettingsActivityOrderCard
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable";
@import "~common/stylus/mixin";

</style>