<template>
  <div class="wrapper-main">
    <div class="main form-icon">
      <v-login-header></v-login-header>
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
            <div class="choose-r"><router-link tag="span" class="nav-item" to="/login/password-retrieve"><a href="#">忘记密码</a></router-link></div>
          </div>
          <FormItem>
            <Button type="primary" shape="circle" class="positive" @click="handleSubmit('formInline')">登录</Button>
          </FormItem>
        </Form>
        <div class="login-choose">
          <div class="choose-r">
            <router-link tag="span" class="nav-item" to="/login/signin"><a href="#">注册账户</a></router-link>
          </div>
        </div>
      </div>
    </div>
    <v-login-footer></v-login-footer>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vLoginFooter from 'components/login/loginFooter';
  import vLoginHeader from 'components/login/loginHeader';
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
      created(){
        this.menu();
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
        },
        menu() {
          window.scrollTo(0,0);
        }
      },
      components:{
        vLoginHeader,
        vLoginFooter
      }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';
.other-way
  text-align: right

</style>