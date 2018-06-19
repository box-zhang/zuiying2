<template>
	<div class="activity">
    <v-header-focus></v-header-focus>
			<div class="main">
				<div class="content-list">
					<div class="title-active">
						<h3>电影节</h3>
						<span class="active-more link-a"><a href="#">更多</a></span>
					</div>
					<div class="good-work">
						<v-card-video></v-card-video>
						<v-card-video></v-card-video>
						<v-card-video></v-card-video>
						<v-card-video></v-card-video>
						<v-card-video></v-card-video>
						<v-card-video></v-card-video>
					</div>
					<div class="title-active">
						<h3>明星用户</h3>
						<span class="active-more link-a"><a href="#">更多</a></span>
					</div>
					<div class="good-work">
						<v-card-user></v-card-user>
						<v-card-user></v-card-user>
						<v-card-user></v-card-user>
						<v-card-user></v-card-user>
						<v-card-user></v-card-user>
						<v-card-user></v-card-user>
						<v-card-user></v-card-user>
						<v-card-user></v-card-user>
					</div>
				</div>
    </div>
    <v-footer :style="{background:'#F6F6F6'}"></v-footer>
	</div>
</template>

<script type="text/ECMAScript-6">
  import vHeaderFocus from 'components/header/headerFocus';
  import vFooter from 'components/footer/footer';
  import vCardVideo from 'components/card/cardVideo';
  import vCardUser from 'components/card/cardUser';
  export default {
    components:{
      vHeaderFocus,
      vFooter,
      vCardVideo,
      vCardUser
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.activity
	background: $color-positive-background-m
	.content-list
		margin: 40px 40px 80px
.good-work
	display: flex
	flex-wrap: wrap
	justify-content: space-between
	align-items: flex-start
.ivu-card
	box-shadow: 0 0 8px 0 rgba(220,220,236,0.40);
</style>
