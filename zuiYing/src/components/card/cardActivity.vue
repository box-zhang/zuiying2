<template>
	<div class="card card-activity">
			<Card :bordered="false">
				<div slot="title">
					<router-link tag="span" class="nav-item" to="introduce">
						<div class="card-pic">
							<img src="./card_video.jpg" alt="">
						</div>
					</router-link>
				</div>
				<div class="activity-discribe">
					<router-link tag="span" class="nav-item" to="introduce"><p class="card-name">标题</p></router-link>
					<div class="activity-time">
						<span>5月5日</span>&nbsp;至&nbsp;<span>5月8日</span>
						<div class="activity-price">报名费 <span class="price">¥200</span></div>
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
.card-activity
	width: 30%
	.activity-discribe
		line-height: 20px
		.activity-time
			position: relative
			margin: 10px 0 0
			padding-right: 80px
			font-size: 12px
		.activity-price
			position: absolute
			top: 0
			right: 0
			text-align: right
			.price
				font-size: 18px
				color:$color-emphasis
</style>
