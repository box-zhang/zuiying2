<template>
	<div class="step-c">
    <Form  ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
      <!--   <FormItem
            v-for="(item, index) in formDynamic.items"
            v-if="item.status"
            :key="index"
            :label="'Item ' + item.index"
            :prop="'items.' + index + '.value'"
            :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}">
            注意：key必须唯一，不然会报错
             -->
        <FormItem
            v-for="(item, index) in formValidate.items"
            v-if="item.status"
            :key="index"
            :label="'No.'+item.index + ' 导演姓名 '"
            :prop="'regisseurName' + index"
            :rules="{required: true, message: 'No.'+ item.index +' 导演的姓名不能为空', trigger: 'blur'}">
            <i-input v-model="item.value" :placeholder="'请输入No.'+ item.index + '导演的姓名'"></i-input>
            <!-- <i-input v-model="formValidate.regisseurName" placeholder="请输入影片全称"></i-input> -->
        </FormItem>
        <FormItem
            v-for="(item, index) in formValidate.items"
            v-if="item.status"
            :key="index"
            :label="'No.'+item.index + ' 性别 '"
            :prop="'regisseurGender' + index"
            :rules="{required: true, message: '请选择导演' + item.index +'的性别', trigger: 'blur'}">
            <RadioGroup v-model="item.value">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </RadioGroup>

            <Button type="ghost" @click="handleRemove(index)">Delete</Button>
        </FormItem>
        <FormItem label="首都:" prop="regisseurCapital">
            <i-input v-model="formValidate.regisseurCapital" placeholder="请输入首都名称"></i-input>
        </FormItem>
        <FormItem label="国籍:" prop="regisseurNationality">
            <i-input v-model="formValidate.regisseurNationality" placeholder="请输入影片全称"></i-input>
        </FormItem>
        <FormItem label="生日:" prop="regisseurBirthday">
            <DatePicker type="date" placeholder="请选择出生日期" v-model="formValidate.regisseurBirthday" style="width: 100%"></DatePicker>
        </FormItem>
        <FormItem label="地址:" prop="regisseurAddr">
            <i-input v-model="formValidate.regisseurAddr" placeholder="请输入常用地址"></i-input>
        </FormItem>
        <FormItem>
            <Row>
                <i-col span="6">
                    <Button type="dashed" long @click="handleAdd" icon="plus-round">添加导演</Button>
                </i-col>
            </Row>
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
            index: 1,
            formValidate: {
                regisseurName: '',
                regisseurGender: '',
                regisseurCapital: '',
                regisseurNationality: '',
                regisseurBirthday: '',
                regisseurAddr: '',
                items: [
                    {
                        value: '',
                        index: 1,
                        status: 1
                    }
                ]
            },
            ruleValidate: {
                regisseurName: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                regisseurGender: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                regisseurCapital: [
                    { required: true, message: '请填写首都', trigger: 'blur' }
                ],
                regisseurNationality: [
                    { required: true, message: '请填写户口所在国籍', trigger: 'blur' }
                ],
                regisseurBirthday: [
                    { required: true, type: 'date', message: '请选择出生日期', trigger: 'change' }
                ],
                regisseurAddr: [
                    { required: true, message: '请填写常用地址', trigger: 'blur' }
                ]
            }
        };
    },
    created(){
      this.menu();
    },
    methods: {
        menu() {
            window.scrollTo(0,0);
        },
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
        handleAdd () {
            this.index++;
            this.formValidate.items.push({
                value: '',
                index: this.index,
                status: 1
            });
        },
        handleRemove (index) {
            this.formValidate.items[index].status = 0;
        }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
</style>