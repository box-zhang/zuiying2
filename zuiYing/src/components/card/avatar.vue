<template>
  <div class="avatar-box">
    <Avatar shape="square" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large" />
    <sub></sub>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.avatar-box
	position: relative
	display: inline-block
	sub
		display: inline-block
		position: absolute
		right: 5px
		bottom: 5px
		width: 40px
		height: 40px
		background: url(icon_authentication.png) no-repeat
		background-size: 100% 100%


</style>