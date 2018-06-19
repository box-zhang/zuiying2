<template>
  <div class="form-wrapper">
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="user">
        <i-input type="text" v-model="formInline.user" placeholder="用户名">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </i-input>
      </FormItem>
      <FormItem prop="password">
        <i-input type="password" v-model="formInline.password" placeholder="密码">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </i-input>
      </FormItem>
      <div class="login-choose clearfix">
        <div class="choose-l"><Checkbox v-model="single">自动登录</Checkbox></div>
        <div class="choose-r"><router-link tag="span" class="nav-item" to="/passwordRetrieve"><a href="#">忘记密码</a></router-link></div>
      </div>
      <FormItem>
        <Button type="primary" shape="circle" class="positive" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>
    <div class="login-choose">
      <div class="choose-r">
        <router-link tag="span" class="nav-item" to="/signin"><a href="#">注册账户</a></router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {
      data () {
          return {
              formInline: {
                  user: '',
                  password: ''
              },
              ruleInline: {
                  user: [
                      { required: true, message: '请输入姓名', trigger: 'blur' }
                  ],
                  password: [
                      { required: true, message: '请输入密码', trigger: 'blur' },
                      { type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
                  ]
              },
              single: false
          };
      },
      methods: {
          handleSubmit(name) {
              this.$refs[name].validate((valid) => {
                  if (valid) {
                      this.$Message.success('Success!');
                  } else {
                      this.$Message.error('Fail!');
                  }
              });
          }
      }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
.other-way
  text-align: right

</style>