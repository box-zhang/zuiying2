<template>
	<div class="card card-video">
			<Card :bordered="false">
				<div slot="title">
					<router-link tag="span" class="nav-item" to="/videoID">
						<div class="card-pic">
							<img src="./card_video.jpg" alt="">
							<span class="card-label">5:06</span>
						</div>
				  </router-link>
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
							<router-link to="/works">
			          <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"  icon="person" />
			        </router-link>
						</dt>
						<dd>
							<p class="user-name"><router-link to="/works">尹小白</router-link></p>
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
	width: 30%
	dd
		margin-top: -30px
		padding-left: 40px
		line-height: 30px
		font-size: 12px
		color:$color-theme
</style>