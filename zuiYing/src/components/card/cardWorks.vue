<template>
	<div class="card card-works">
		<Card :bordered="false">
			<div slot="title">
				<div class="card-pic">
					<img src="./card_video.jpg" alt="">
					<span class="card-label">5:06</span>
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
				<dl>
					<dt>
		          <Avatar style="background-color: #eee" src="https://i.loli.net/2017/08/21/599a521472424.jpg"  icon="person" />
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
.card-works
	width: 30%
	dd
		margin-top: -30px
		padding-left: 40px
		line-height: 30px
		font-size: 12px
</style>