<template>
	<div class="step-pay">
        <div class="order-inf">
            <Row>
                <i-col span="16">
                    <div class="order-id"><span>请您及时付款，以便订单尽快处理！</span><span>订单号 ：<i>1221341234123412</i></span></div>
                </i-col>
                <i-col span="8">
                    <div class="order-price">
                        <p>应付金额<span class="text-red">1985.00</span>元</p>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="order-rule">
            <Row>
                <i-col span="16">
                    <div class="order-rule-text"><p>请您在提交订单后 <span class="text-red">60分钟</span> 之内完成支付，否则订单会自动取消。</p></div>
                </i-col>
                <i-col span="8">
                    <div class="order-in">
                        <a href="#">订单详情 &gt;</a>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="pay-code">
            <Row>
                <i-col span="12">
                    <h2>微信支付</h2>
                    <div class="content-circle-bg">
                        <div class="code-2d"><img src="./code_wechat.png" width="100%" height="100%" alt=""></div>
                        <div class="code-use">
                            <p>打开微信-发现</p>
                            <p>扫一扫</p>
                        </div>
                    </div>
                </i-col>
                <i-col span="12">
                    &nbsp;
                </i-col>
            </Row>
        </div>
	</div>
</template>

<script type="text/ECMAScript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';
.step-pay
    i
        font-style: normal
    .order-inf
        margin: 20px 0
        line-height: 36px
        .order-id
            font-size: 16px
            font-weight: bold
        .order-price
            margin-top: -6px
            text-align: right
            .text-red
                padding: 0 10px
                font-size: 32px
                font-weight: bold
        .order-in
            font-size: 12px
    .order-rule
        font-size: 12px
        .order-in
            text-align: right
    .pay-code
        margin: 50px 0
        h2
            padding: 20px 0
            font-size: 18px
            font-weight: bold
            text-align: center
        .content-circle-bg
            margin: 20px auto
            padding: 0
            width: 280px
            overflow: hidden
        .code-2d
            margin: 0 auto
            width: 280px
            height: 280px
        .code-use
            padding: 8px 10px
            border-radius: 0 0 15px 15px
            background: $color-positive-background-ll
            color: #fff
            text-align: center
            font-size: 12px
            line-height: 16px
</style>