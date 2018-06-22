<template>
    <div class="pop-form">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="联系人" prop="name">
                <i-input v-model="formValidate.name" placeholder="请输入联系人姓名" autofocus></i-input>
            </FormItem>
            <FormItem label="联系电话" prop="phone">
                <i-input v-model="formValidate.phone" placeholder="请输入手机号码"></i-input>
            </FormItem>
            <FormItem label="微信号" prop="wechat">
                <i-input v-model="formValidate.wechat" placeholder="请填写您正在使用的微信号"></i-input>
            </FormItem>
            <FormItem label="公司名称" prop="nameCorp">
                <i-input v-model="formValidate.nameCorp" placeholder="请填写您的公司全称"></i-input>
            </FormItem>
            <FormItem label="其他" prop="desc">
                <i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></i-input>
            </FormItem>
            <div class="choose">
                <Button type="primary" :loading="loading" @click="handleSubmit('formValidate')" shape="circle">确定</Button>
                <Button type="ghost" @on-ok="asyncOK" @click="handleReset('formValidate')" shape="circle" class="btn-gray">重置</Button>
            </div>
        </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                loading: false,
                formValidate: {
                    name: '',
                    phone: '',
                    wechat: '',
                    nameCorp: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '联系人不能为空', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '联系方式不能为空', trigger: 'blur' }
                    ],
                    wechat: [
                        { required: true, message: '微信号不能为空', trigger: 'blur' }
                    ],
                    nameCorp: [
                        { required: true, message: '公司名称不能为空', trigger: 'blur' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人简介', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不少于20字', trigger: 'blur' }
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
            },
            asyncOK () {
                setTimeout(() => {
                    // this.modal6 = false;
                }, 2000);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.pop-form
    padding: 10px 30px
    .choose
        margin: 30px 0
</style>