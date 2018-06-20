<template>
	<div class="card card-main">
		<router-link tag="span" class="nav-item" to="/show/video">
			<Card :bordered="false">
				<div slot="title">
					<div class="card-pic">
						<img src="./card_video.jpg" alt="">
						<span class="card-time">5:06</span>
					</div>
					<div class="card-discribe">
						<p class="card-name">标题</p>
						<div class="sign">
							<span>#短视频</span><i>/</i>
							<span>#广告</span><i>/</i>
							<span>#MV</span>
						</div>
					</div>
				</div>
				<div class="user-inf">
					点赞、查阅、喜欢
				</div>
	    </Card>
	  </router-link>
	</div>
</template>

<script type="text/ECMAScript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.card-main
	width: 30%
	.card-time
		position: absolute
		bottom: 10px
		right: 5px
		padding: 3px 10px
		background: $color-theme-ll
		color: $color-white
		font-size: 10px
		border-radius: 3px
	.card-discribe
		padding: 10px 16px
		line-height: 20px
		.sign
			font-size: 12px
			color: $color-theme-ll
			i
				padding: 0 5px
				font-style: normal
	dd
		margin-top: -30px
		padding-left: 40px
		line-height: 30px
		font-size: 12px
</style>