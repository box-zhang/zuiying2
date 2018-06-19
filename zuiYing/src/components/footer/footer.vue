<template>
	<div class="footer-wrapper">
		<div class="footer-main">
			<div class="main">
				<Row>
					<i-col span="12">
						<div class="footer-nav">
							<dl>
								<dt><a href="javascript:;"><img src="./logo_footer.jpg" height="50" width="50" alt=""></a></dt>
								<dd>
									<p><b>最影</b> <span>向世界说你好</span></p>
								</dd>
							</dl>
						</div>
						<div class="footer-introduce">
							<p>最影秉持“原创、分享、主流、快乐”的品牌理念，致力于培养有爱心、有责任感、有使命感的原创影视人，以为创作者提供从全产业链服务，为用户提供优质内容作品，为战略目标，打造新媒体影视，新型产业模式为己任。愿中国影视的明天越来越好，愿全球大文化环境越来越好，最影在路上......</p>
						</div>
					</i-col>
					<i-col span="12">
						<div class="footer-list">
							<Row>
								<i-col span="8">
									<dl>
										<dt>下载APP</dt>
										<dd>
											<div class="code-2d">
												<img src="./code_2d.jpg" height="88" width="88" alt="">
											</div>
										</dd>
									</dl>
								</i-col>
								<i-col span="8">
									<dl>
										<dt>关于我们</dt>
										<dd>
											<ul>
											    <li><router-link tag="span" class="nav-item" to="/about"><a href="javascript:;">联系我们</a></router-link></li>
											    <li><router-link tag="span" class="nav-item" to="/about"><a href="javascript:;">使用帮助</a></router-link></li>
											    <li><router-link tag="span" class="nav-item" to="/about"><a href="javascript:;">责任声明</a></router-link></li>
											</ul>
										</dd>
									</dl>
								</i-col>
								<i-col span="8">
									<dl>
										<dt>企业服务</dt>
										<dd>
											<ul>
											    <li><router-link tag="span" class="nav-item" to="/activity-movie"><a href="javascript:;">电影节</a></router-link></li>
											    <li><router-link tag="span" class="nav-item" to="/propagandize"><a href="javascript:;">电影节宣发</a></router-link></li>
											    <li><router-link tag="span" class="nav-item" to="/marketing"><a href="javascript:;">电影节营销</a></router-link></li>
											</ul>
										</dd>
									</dl>
								</i-col>
							</Row>
						</div>
					</i-col>
				</Row>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="main">
				<Row>
					<i-col span="12">
						<div class="fb-l"><p>京ICP备15041417号-1Copyright @2010-2015 ZUIYINGTV 版权所有</p></div>
					</i-col>
					<i-col span="12">
						<div class="fb-r">
							<ul>
									<li><span><img src="./icons-wechart-100.png" height="20" width="20" alt=""></span></li>
									<li><span><img src="./icons-weibo-100.png" height="20" width="20" alt=""></span></li>
									<li class="fb-text"><span><img src="./icons-CHN-96.png" height="20" width="20" alt=""></span><span>中文</span></li>
							</ul>
						</div>
					</i-col>
				</Row>
			</div>
		</div>
	</div>
</template>

<script type="text/ECMAScript-6">
	export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
.footer-wrapper
	width: 100%
	.footer-main
		padding: 85px 10px 20px
		.footer-nav
			dd
				margin-top: -50px
				margin-left: 60px
				line-height: 50px
				b
					margin: 0 10px
					font-weight: bold
				span
					font-size: 13px
		.footer-introduce
			margin: 20px 0
			width: 400px
			font-size: 12px
			line-height: 20px
			text-align: justify;
		.footer-list
			text-align: center
			dt
				margin-bottom: 20px
				font-weight: bold
			dd	li
					margin-bottom: 20px
					font-size: 13px
			.code-2d
				display: inline-block
				width: 88px
				height: 88px
				img
					display: inline-block
	.footer-bottom
		background: #F8F8F8
		padding: 15px 10px
		font-size: 12px
		line-height: 20px
		.fb-l
			float: left
		.fb-r
			float: right
			li
				display: inline-block
				margin: 0 10px
				&.fb-text
					span
						float: left
						display: inline-block
						margin: 0 1px
</style>
