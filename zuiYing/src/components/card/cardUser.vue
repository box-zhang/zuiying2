<template>
  <div class="card card-user">
      <Card :bordered="false">
        <div slot="title">
          <div class="user-bg"><img src="./card_user_bg.jpg" alt=""></div>
        </div>
        <div class="user-inf">
          <div class="user-discribe">
            <router-link to="/show/userID/works">
              <Avatar style="background-color: #eee" src="https://i.loli.net/2017/08/21/599a521472424.jpg"  icon="person" size="large"/>
            </router-link>
            <p class="user-name"><router-link tag="span" to="/show/userID/works">尹小白</router-link></p>
            <p class="user-area">北京</p>
            <div class="enjoy"><Button type="primary" shape="circle" size="small" class="btn-small" disabled>已关注</Button></div>
            <p class="user-autograph">个性签名个性签名个性签名个性签名个性签名个性签名个性签名…</p>
          </div>
        </div>
      </Card>
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
    .user-name
      margin: 10px 0 5px
    .user-discribe
      margin-top: -50px
      text-align: center
      .ivu-avatar
        circle(60px)
        border: 1px solid #eee
      .user-autograph
        text-align: left

</style>
