<template>
  <div class="settings-router">
    <div class="form-reset">
        <h2>修改密码</h2>
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
            <FormItem label="输入旧密码" prop="passwdOld">
                <Input type="password" v-model="formCustom.passwdOld" placeholder="输入旧密码"></Input>
            </FormItem>
            <h3>请输入新密码</h3>
            <FormItem label="输入新密码" prop="passwdNew">
                <Input type="password" v-model="formCustom.passwdNew" placeholder="输入新密码"></Input>
            </FormItem>
            <FormItem label="确认新密码" prop="passwdCheck">
                <Input type="password" v-model="formCustom.passwdCheck" placeholder="确认新密码"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" shape="circle" @click="handleSubmit('formCustom')">保存</Button>
                <Button type="ghost" shape="circle" @click="handleReset('formCustom')" class="btn-gray"  style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
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
                    callback(new Error('请输入密码'));
                } else if (value !== this.formCustom.passwdNew) {
                    callback(new Error('两次输入的密码不一致!'));
                } else {
                    callback();
                }
            };

            return {
                formCustom: {
                    passwdOld: '',
                    passwdNew: '',
                    passwdCheck: '',
                },
                ruleCustom: {
                    passwdOld: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdNew: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('保存成功!');
                    } else {
                        this.$Message.error('保存失败!');
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
@import "~common/stylus/variable";
@import "~common/stylus/mixin";
.ivu-form .ivu-form-item-label
    display: none
</style>