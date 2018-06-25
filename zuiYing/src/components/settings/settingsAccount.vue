<template>
	<div  class="settings-router">
		<div class="set-account bg-pink">
			<div class="account-num">¥ 1,000,000</div>
	    <div class="choose">
	      <Button type="primary" :loading="loading" shape="circle" @click="modal1 = true">立即提现</Button>
	    </div>
		</div>
    <Modal v-model="modal1" class="set-account" >
      <h2 slot="header">请输入体现金额</h2>
      <div>
	      <InputNumber
	        :max="1000"
	        v-model="value9"
	        :formatter="value => `${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
	        :parser="value => value.replace(/$s?|(,*)/g, '')"></InputNumber>
	      <p class="text-red">提现金额不能大于1000</p>
	      <p>提现成功，稍后我们的运营人员将会联系您，请您耐心等待</p>
      </div>
      <div class="choose">
        <Button type="primary" :loading="loading" @on-ok="ok" shape="circle">确定</Button>
        <Button type="ghost" shape="circle" @on-cancel="cancel" class="btn-gray">取消</Button>
      </div>
    </Modal>
	</div>
</template>

<script type="text/ECMAScript-6">
  export default {
		data () {
			return {
				value9: 1000,
				modal1: false
			};
		}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable";
@import "~common/stylus/mixin";
.set-account
	padding: 80px
	text-align: center
	.account-num
		font-size: 36px
		font-weight: bold
		color:$color-theme-ll
	.choose
		margin: 20px 0
	.ivu-input-number
		margin: 20px
		width: 80%
</style>
