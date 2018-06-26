<template>
	<div class="bg-pink">
		<div class="main">
			<div class="content">
				<div class="content-circle-bg treaty-box">
					<h1>场景服务及电影节服务相关条款</h1>
					<ol class="text-level1">
					    <li>总则
								<dl>
									<dt>服务条款</dt>
									<dd>
										<p>在最影，我们像对待自己隐私一般重视客户的隐私。此隐私政策的制定，为您提供保证，我们将不会使用您的个人信息，我们会反对其他网站使用我们的信息。所以您提供给我们的个人信息会得到尊重和保护，我们的隐私政策包括四个不同的类别：</p>
										<ol class="text-level2">
									    <li>
										    <dl>
										    	<dt>一般公众</dt>
										    	<dd>
										    		<p>最影收集用户提交的信息，如姓名、电子邮箱地址、年龄，对用户进行身份验证和发送通知给用户有关的最影服务。最影还收集用于与网站连接的其他资料。</p>
										    	</dd>
										    </dl>
										  </li>
									    <li>
									    	<dl>
									    		<dt>制作人与作品提交者</dt>
									    		<dd>
									    			<p>
									    				通过申请场地、报名电影节，您授予的所有提交的信息和/或提交材料的权利。您也给了这个场地提供方和竞赛主办方权限来共享与他们合作的组织和个人去共享您的信息。最影不控制场地主／竞赛主办组织方如何使用或公布您授权我们提供给他们的信息。如果您有所顾虑，您应该与场地主／大赛组织方核实，以确定他们它打算如何使用您的信息和/或提交材料。我们不会向除您之外的第三方披露您申请信息及参加的大赛名单。无论您的提交材料被接受或拒绝，我们将对此保密。
									    			</p>
									    		</dd>
									    	</dl>
									    </li>
										</ol>
									</dd>
								</dl>
								<dl>
									<dt>退费政策</dt>
									<dd>
										<p>
											通用服务条款下提交者的退款政策，最影不为您和任何您所提交、申请的场地、电影节比赛之间所签订任何协议、承诺或保证承担责任。您明白申请场地及提交作品参赛的风险。
											如果您与场地主、大赛组委会发生纠纷，请您直接联系场地主、电影节组委会来解决问题。发起退款，为了尽可能保障您的利益，请您提前一周与最影工作人员联系（联系信息见相关服务页面）。
										</p>
									</dd>
								</dl>
					    </li>
					</ol>
					<div>
						<ul>
						    <li>
						    	<p>如果您在申请服务生效前4天或者更早发起退款，需要与最影工作人员联系（联系信息见相关服务页面），我们将扣除10%手续费，支付90%退款。</p>
						    </li>
						    <li>
						    	<p>如果您在申请服务生效前1-3天发起退款、退出服务，我们将按支付费用的50%退款。</p>
						    </li>
						    <li>
						    	<p>如果您在申请的服务生效后发起退款，最影网不予退费。</p>
						    </li>
						</ul>
					</div>
				</div>

        <div class="choice">
          <router-link tag="span" class="nav-item" to="/show"><a href="javascript:;"><Button type="ghost" shape="circle" class="negative">返回</Button></a></router-link>
          <router-link tag="span" class="nav-item" to="/login"><Button type="ghost" shape="circle" class="positive">同意</Button></router-link>
        </div>
			</div>
		</div>
	</div>
</template>

<script type="text/ECMAScript-6">
  export default {
    created(){
      this.menu();
    },
    methods: {
      menu() {
        window.scrollTo(0,0);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
</style>