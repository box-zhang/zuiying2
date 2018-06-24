<template>
	<div class="step-succeed">
        <div class="succeed-hint">
            <div class="succeed-hint-icon">
                <Icon type="checkmark-circled"></Icon>
                <p>提交成功</p>
            </div>
            <div class="succeed-hint-text">
                <p>请使用微信或支付宝扫描下面二维码完成支付</p>
                <p>支付成功后我们会已短信通知你</p>
            </div>
        </div>
        <div class="succeed-pay">
            <h2>请选择支付方式：</h2>
            <p class="text-center">支付平台：现支持支付宝和微信支付</p>
            <div class="pay-choose">
                <ul>
                    <li>
                        <router-link tag="span" class="nav-item" to="/pay">
                            <div class="content-circle-bg pay-wechat">
                                <div class="pay-icon"><img src="./icon_pay_wechat.png" width="100%" height="100%" alt=""></div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="span" class="nav-item" to="/pay">
                            <div class="content-circle-bg pay-alipay">
                                <div class="pay-icon"><img src="./icon_pay_alipay.png" width="100%" height="100%" alt=""></div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
      <div class="choose">
        <router-link tag="span" class="nav-item" to="/show"><a href="javascript:;"><Button type="ghost" shape="circle" >返回</Button></a></router-link>
        <router-link tag="span" class="nav-item" to="/show"><Button type="primary" shape="circle">已完成支付</Button></router-link>
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
.step-succeed
    margin: 0 auto
    width: 600px
    line-height: 28px
.succeed-hint
    margin: 30px 0
    text-align: center
    .succeed-hint-icon
        font-size: 24px
        p
            font-weight: bold
        .ivu-icon
            margin: 25px auto
            font-size: 72px
            color: $color-positive-background
    .succeed-hint-text
        margin: 15px auto
.succeed-pay
    h2
        margin: 20px 0
        font-size: 16px
        text-align: left
        font-weight: bold
    .pay-choose
        margin: 30px auto
        display: flex
        flex-wrap: wrap
        justify-content: center
        align-items: center
        li
            margin: 0 10px
            padding: 10px
            display: inline-block
            .content-circle-bg
                background: rgba(220,220,236,0.05)
            .pay-icon
                margin: 10px auto
                circle(120px)
                overflow: hidden
            &:hover .content-circle-bg
                cursor: pointer
                background: #fff
                box-shadow: 0 0 15px 0 rgba(220,220,236,0.80)
</style>