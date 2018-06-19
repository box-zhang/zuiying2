<template>
  <div class="login-wrapper">
    <div class="wrapper-main">
      <div class="main">
        <div class="login-header">
          <div class="logo">
            <img src="./icon7_password.png" height="50" width="50" alt="">
          </div>
          <h2>找回密码</h2>
          <p>我们将发送激活邮件到你的注册邮箱</p>
        </div>
        <div class="form-wrapper">
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
            <FormItem prop="mail">
              <i-input v-model="formValidate.mail" placeholder="请输入你的邮箱">
                <Icon type="ios-email-outline" slot="prepend"></Icon>
              </i-input>
            </FormItem>
            <FormItem>
              <Button type="primary" shape="circle" class="positive" @click="handleSubmit('formValidate')">发送</Button>
            </FormItem>
          </Form>
        </div>
      </div>
      <div class="login-bottom">
        <p>如果收不到验证码,可发邮件至 help@zuiying.com 给我们</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {
      data () {
          return {
              formValidate: {
                  mail: '',
              },
              ruleValidate: {
                  mail: [
                      { required: true, message: '邮箱不能为空', trigger: 'blur' },
                      { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                  ]
              }
          };
      },
      methods: {
          handleSubmit (name) {
              this.$refs[name].validate((valid) => {
                  if (valid) {
                      this.$Message.success('Success!');
                  } else {
                      this.$Message.error('Fail!');
                  }
              });
          },
          handleReset (name) {
              this.$refs[name].resetFields();
          }
      }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/variable';
.login-wrapper
  display: flex
  flex-flow: column
  min-height: 100vh
  background: $color-positive-background-m
  text-align: center
  .main
    min-height: calc(98vh - 2.5em - 7em);
    box-sizing: border-box;
.login-header
  font-size: 14px
  color: $color-text-dd
  .logo
    margin: 25px 0
    text-align: center
    img
      display: inline-block
  h2
    margin: 20px 0
    font-size: 18px
    color: $color-text-ll
.login-bottom
  display: block
  min-width: 900px
  color: $color-text-dd
  font-size: 12px
.form-wrapper
  margin: 60px auto
  width: 300px
  font-size: 12px
  .positive
    margin: 80px 0
    width: 60%
    line-height: 1.6
</style>
