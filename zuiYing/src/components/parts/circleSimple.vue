<template>
	<div class="circle-box">
		<div class="circle circle1"></div>
		<div class="circle circle2"></div>
	</div>
</template>

<script type="text/ECMAScript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "../../common/stylus/mixin";
.circle-box
	position: absolute
	top: 15%;
	width: 100%
	.circle
		circle(600px)
		border: 80px solid rgba(255,66,90,0.06)
		&.circle1
			clear: both
			float: left
			margin-left: -130px
		&.circle2
			clear: both
			float:right
			margin-right:-100px
</style>
