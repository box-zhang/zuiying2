<template>
	<div class="card-user">
		<Card :bordered="false">
			<div slot="title">
				<div class="user-main-bg"><img src="./card_user_bg.jpg" alt=""></div>
			</div>
			<div class="user-inf">
				<div class="user-discribe">
					<div class="user-pic"><img src="./card_user.jpg" alt=""></div>
					<p class="user-name">尹小白</p>
					<p class="user-area">北京</p>
					<p class="user-autograph">个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名…</p>
				</div>
			</div>
    </Card>
	</div>
</template>

<script type="text/ECMAScript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.card-user
	margin: 10px 0
	display: inline-block
	border-radius: 10px
	overflow: hidden
	width: 22%
	img
		width: 100%
	.ivu-card-head
		padding: 0
	.user-main-bg
		height: 90px
		overflow: hidden
		background: $color-theme-d
	.user-inf
		font-size: 12px
		line-height: 18px
		color: $color-theme-ll
		.user-discribe
			text-align: center
			.user-pic
				margin-top: -100px
				display: inline-block
				circle(60px)
				overflow: hidden
				border: 1px solid #eee
			p
				margin: 5px
			.user-name
				font-weight: bold
				color: $color-theme
			.user-autograph
				margin: 20px 0
				text-align: left

</style>
