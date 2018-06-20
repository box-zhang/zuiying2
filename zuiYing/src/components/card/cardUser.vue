<template>
	<div class="card card-user">
		<router-link tag="span" class="nav-item" to="/show/user">
			<Card :bordered="false">
				<div slot="title">
					<div class="user-bg"><img src="./card_user_bg.jpg" alt=""></div>
				</div>
				<div class="user-inf">
					<div class="user-discribe">
			      <Avatar style="background-color: #eee" src="https://i.loli.net/2017/08/21/599a521472424.jpg"  icon="person" size="large"/>
						<p class="user-name">尹小白</p>
						<p class="user-area">北京</p>
						<div class="enjoy"><Button type="primary" shape="circle" size="small" class="btn-small" disabled>已关注</Button></div>
						<p class="user-autograph">个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名…</p>
					</div>
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
.card-user
	width: 22%
	.user-bg
		height: 90px
		border-radius: 10px 10px 0 0
		overflow: hidden
		background-color: $color-negative-background-m
	.user-inf
		font-size: 12px
		line-height: 18px
		color: $color-theme-ll
		.user-discribe
			margin-top: -50px
			text-align: center
			.ivu-avatar
				circle(60px)
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
