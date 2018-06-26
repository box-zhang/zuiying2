<template>
    <div class="step-c">
    <Form  ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <FormItem
            v-for="(item, index) in formValidate.items"
            v-if="item.status"
            :key="index"
            :label="'No.'+item.index + ' 演员姓名 '"
            :prop="'performerName' + index"
            :rules="{required: true, message: 'No.'+ item.index +' 演员的姓名不能为空', trigger: 'blur'}">
            <i-input v-model="item.value" :placeholder="'请输入No.'+ item.index + '演员的姓名'"></i-input>
            <!-- <i-input v-model="formValidate.performerName" placeholder="请输入影片全称"></i-input> -->
        </FormItem>
        <FormItem label="性别" prop="performerGender">
            <RadioGroup v-model="formValidate.performerGender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="首都:" prop="performerCapital">
            <i-input v-model="formValidate.performerCapital" placeholder="请输入首都名称"></i-input>
        </FormItem>
        <FormItem label="国籍:" prop="performerNationality">
            <i-input v-model="formValidate.performerNationality" placeholder="请输入影片全称"></i-input>
        </FormItem>
        <FormItem label="生日:" prop="performerBirthday">
            <DatePicker type="date" placeholder="请选择出生日期" v-model="formValidate.performerBirthday" style="width: 100%"></DatePicker>
        </FormItem>
        <FormItem label="地址:" prop="performerAddr">
            <i-input v-model="formValidate.performerAddr" placeholder="请输入常用地址"></i-input>
        </FormItem>
        <FormItem>
            <Row>
                <i-col span="6">
                    <Button type="dashed" long @click="handleAdd" icon="plus-round">添加演员</Button>
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
                performerName: '',
                performerGender: '',
                performerCapital: '',
                performerNationality: '',
                performerBirthday: '',
                performerAddr: '',
                items: [
                    {
                        value: '',
                        index: 1,
                        status: 1
                    }
                ]
            },
            ruleValidate: {
                performerName: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                performerGender: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                performerCapital: [
                    { required: true, message: '请填写首都', trigger: 'blur' }
                ],
                performerNationality: [
                    { required: true, message: '请填写户口所在国籍', trigger: 'blur' }
                ],
                performerBirthday: [
                    { required: true, type: 'date', message: '请选择出生日期', trigger: 'change' }
                ],
                performerAddr: [
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