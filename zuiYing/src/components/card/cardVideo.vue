<template>
	<div class="card-video">
		<Card :bordered="false">
			<div slot="title">
				<div class="video-pic">
					<img src="./card_video.jpg" alt="">
					<span class="video-time">5:06</span>
				</div>
				<div class="video-discribe">
					<p class="video-name">标题</p>
					<div class="sign">
						<span>#短视频</span><i>/</i>
						<span>#广告</span><i>/</i>
						<span>#MV</span>
					</div>
				</div>
			</div>
			<div class="user-inf">
				<dl>
					<dt>
						<div class="user-pic"><img src="./user_pic.png" width="100%" alt=""></div>
					</dt>
					<dd>
						<p>尹小白</p>
					</dd>
				</dl>
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
.card-video
	margin: 10px 0
	display: inline-block
	border-radius: 10px
	overflow: hidden
	width: 30%
	.ivu-card-head
		padding: 0
	.video-pic
		position: relative
		height: 220px
		overflow: hidden
		img
			width: 100%
		.video-time
			position: absolute
			bottom: 10px
			right: 5px
			padding: 3px 10px
			background: $color-theme-ll
			color: $color-white
			font-size: 10px
			border-radius: 3px
	.video-discribe
		padding: 10px 16px
		line-height: 20px
		.video-name
			height: auto
			font-size: 14px
			color: $color-theme
		.sign
			font-size: 12px
			color: $color-theme-ll
			i
				padding: 0 5px
				font-style: normal
	.user-pic
		circle(30px)
		overflow: hidden
	dd
		margin-top: -30px
		padding-left: 40px
		line-height: 30px
		font-size: 12px
</style>
