<template>
	<div class="circle-massive">
		<div class="circle circle1">
			<div class="mini-circle mini1"></div>
			<div class="mini-circle mini2"></div>
			<div class="mini-circle mini5"></div>
		</div>
		<div class="circle circle2">
			<div class="mini-circle mini3"></div>
			<div class="mini-circle mini4"></div>
		</div>
	</div>
</template>

<script type="text/ECMAScript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "../../common/stylus/mixin";
	.circle-massive
		position: absolute
		top: 250px
		left: 0
		width: 100%
		.circle
			position: relative
			circle(620px)
			border: 1px solid #FFF0F2
		.circle1
			margin-left: -100px
		.circle2
			float: right
			margin-right:-120px
		.mini-circle
			position: absolute
			circle(10px)
			background: #fff
			&.mini1
				top: -5px
				left: 50%
			&.mini2
				bottom: 53px
				right: 20%
			&.mini3
				top: 51px
				left: 20%
			&.mini4
				bottom: 2px
				right: 60%
			&.mini5
				bottom: 18%
				left: 10%

</style>
