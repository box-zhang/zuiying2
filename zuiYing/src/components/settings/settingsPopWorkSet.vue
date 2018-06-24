<template>
    <div class="pop-work-set">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="50">
        <FormItem label="标题" prop="workSetName">
            <i-input v-model="formValidate.workSetName" placeholder="撰写作品集标题" autofocus></i-input>
        </FormItem>
        <FormItem label="分类:" prop="workSetClassification">
            <Select v-model="formValidate.workSetClassification" placeholder="选择专辑类别">
                <Option value="no1">故事片</Option>
                <Option value="no2">动漫片</Option>
                <Option value="no3">实验片</Option>
            </Select>
        </FormItem>
        <FormItem label="标签" prop="workSetLabel">
          <CheckboxGroup v-model="formValidate.workSetLabel">
            <Checkbox label="标签1"></Checkbox>
            <Checkbox label="标签2"></Checkbox>
            <Checkbox label="标签3"></Checkbox>
          </CheckboxGroup>
          <p class="text-hint">我的标签：标签1 标签2 标签3</p>
        </FormItem>
        <FormItem label="简介" prop="workSetIntroduce">
          <Input v-model="formValidate.workSetIntroduce" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder='简单介绍一下此专辑'></Input>
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
                fruit: [],
                formValidate: {
                    workSetName: '',
                    workSetClassification: '',
                    workSetLabel: '',
                    workSetIntroduce: '',
                },
                ruleValidate: {
                    workSetName: [
                        { required: true, message: '专辑名称不能为空', trigger: 'blur' }
                    ],
                    workSetClassification: [
                      { required: true, message: '请为专辑选择类别', trigger: 'change' }
                    ],
                    workSetLabel: [
                      { required: true, type: 'array', min: 1, message: '请为专辑添加标签', trigger: 'change' },
                      { type: 'array', max: 1, message: '请至少选择一个标签', trigger: 'change' }
                    ],
                    workSetIntroduce: [
                        { required: true, message: '请输入专辑简介', trigger: 'blur' },
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
@import "~common/stylus/variable";
@import "~common/stylus/mixin";
.pop-work-set
  padding: 10px 60px
  text-align: left
  .text-hint
    margin: 0
    color: $color-theme-d
  .choose
    margin: 50px 0 30px
</style>