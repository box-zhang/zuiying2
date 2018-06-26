<template>
  <div class="login-wrapper">
    <div class="wrapper-main">
      <div class="main form-icon">
        <v-login-header></v-login-header>
        <div class="form-wrapper">
            <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
              <FormItem prop="userName">
                <i-input type="text" v-model="formCustom.userName" placeholder="用户名">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </i-input>
              </FormItem>
                <FormItem prop="passwd">
                    <i-input type="password" v-model="formCustom.passwd" placeholder="密码">
                      <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </i-input>
                </FormItem>
                <FormItem prop="passwdCheck">
                    <i-input type="password" v-model="formCustom.passwdCheck" placeholder="确认密码">
                      <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </i-input>
                </FormItem>
                <FormItem>
                  <Button type="primary" shape="circle" @click="handleSubmit('formCustom')">注册</Button>
                </FormItem>
            </Form>
            <div class="login-choose">
                <router-link tag="span" class="nav-item" to="/login"><a href="#">使用已有账户登录</a></router-link>
            </div>
        </div>
      </div>
      <v-login-footer></v-login-footer>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  import vLoginFooter from 'components/login/loginFooter';
  import vLoginHeader from 'components/login/loginHeader';
  export default {
    data () {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.formCustom.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formCustom.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入您的密码'));
            } else if (value !== this.formCustom.passwd) {
                callback(new Error('两次输入的密码不一致!'));
            } else {
                callback();
            }
        };

        return {
            formCustom: {
                userName: '',
                passwd: '',
                passwdCheck: ''
            },
            ruleCustom: {
                userName: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                passwd: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    { validator: validatePassCheck, trigger: 'blur' }
                ]
            }
        };
    },
    created(){
      this.menu();
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
<style lang="stylus" rel="stylesheet/stylus" scoped>
.login-choose
	margin: 40px 0
</style>
