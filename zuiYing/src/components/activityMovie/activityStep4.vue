<template>
	<div class="step-c">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <FormItem label="出品公司名称:" prop="productionCompany">
            <i-input v-model="formValidate.productionCompany" placeholder="请填写出品公司全称"></i-input>
        </FormItem>
        <FormItem label="出品公司地址:" prop="productionAddr">
            <i-input v-model="formValidate.productionAddr" placeholder="请填写出品公司地址"></i-input>
        </FormItem>
        <FormItem label="出品公司电话:" prop="productionPhone">
            <i-input v-model="formValidate.productionPhone" placeholder="请填写出品公司联系方式"></i-input>
        </FormItem>
        <FormItem label="出品公司传真:" prop="productionFaxNumber">
            <i-input v-model="formValidate.productionFaxNumber" placeholder="请填写公司传真号码"></i-input>
        </FormItem>
        <FormItem label="出品公司邮箱:" prop="productionMail">
            <i-input v-model="formValidate.productionMail" placeholder="请填写出品公司邮箱"></i-input>
        </FormItem>
        <FormItem label="联系人:" prop="productionPrincipal">
            <i-input v-model="formValidate.productionPrincipal" placeholder="请输入出品公司联系人姓名"></i-input>
        </FormItem>
        <FormItem label="性别" prop="productionGender">
            <RadioGroup v-model="formValidate.productionGender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="部门:" prop="productionDepartment">
            <i-input v-model="formValidate.productionDepartment" placeholder="请填写联系人所在部门"></i-input>
        </FormItem>
        <FormItem label="职务:" prop="productionDepartmentTitle">
            <i-input v-model="formValidate.productionDepartmentTitle" placeholder="请填写联系人所属职务名称"></i-input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
	</div>
</template>

<script type="text/ECMAScript-6">
  export default {
    data () {
        return {
            formValidate: {
                productionCompany: '',
                productionAddr: '',
                productionPhone: '',
                productionFaxNumber: '',
                productionMail: '',
                productionPrincipal: '',
                productionGender: '',
                productionDepartment: '',
                productionDepartmentTitle: '',

            },
            ruleValidate: {
                productionCompany: [
                    { required: true, message: '名称不能为空', trigger: 'blur' }
                ],
                productionAddr: [
                    { required: true, message: '地址不能为空', trigger: 'blur' }
                ],
                productionPhone: [
                    { required: true, message: '电话不能为空', trigger: 'blur' }
                ],
                productionFaxNumber: [
                    { required: true, message: '传真号码不能为空', trigger: 'blur' }
                ],
                productionMail: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
                ],
                productionPrincipal: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                productionGender: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                productionDepartment: [
                    { required: true, message: '联系人所在部门不能为空', trigger: 'blur' }
                ],
                productionDepartmentTitle: [
                    { required: true, message: '联系人所属职务不能为空', trigger: 'blur' }
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
<style lang="stylus" rel="stylesheet/stylus">
</style>