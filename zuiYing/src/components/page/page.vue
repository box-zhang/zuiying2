<template>
	<div class="page">
		<Page :total="100" show-elevator show-sizer></Page>
		<!-- <Page :total="100" show-elevator show-sizer></Page> -->
	</div>
</template>

<script type="text/ECMAScript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin";
.page
	position: relative
	z-index: 999
	margin: 100px 0
	font-size: 12px
	text-align: center
	a
		display: inline
	.ivu-page-item
		line-height: 32px
	.ivu-page-item,
	.ivu-page-item-jump-next,
	.ivu-page-item-jump-prev,
	.ivu-page-next,
	.ivu-page-prev,
	.ivu-select-single .ivu-select-selection,
	.ivu-page-options-elevator input
		border-color: $color-negative-background-m
	.ivu-page-item:hover,
	.ivu-page-item:hover a,
	.ivu-page-item-jump-next:hover,
	.ivu-page-next:hover,
	.ivu-page-prev:hover,
	.ivu-select-single .ivu-select-selection:hover,
	.ivu-select-visible .ivu-select-selection,
	.ivu-select-selection-focused,
	.ivu-select-selection:hover,
	.ivu-page-options-elevator input:hover
		border-color: $color-positive-background-d
		color: $color-positive-background-l
	.ivu-select-visible .ivu-select-selection,
	.ivu-page-options-elevator input:hover
		box-shadow: 0 0 0 2px $color-positive-background-m
	.ivu-select-item-selected,
	.ivu-select-item-selected:hover
		background: $color-positive-background-l
	.ivu-page-item-active
		background: $color-positive-background-ll
		&:hover a
			color: $color-white-ll
	.ivu-icon
		font-size: 12px
</style>
