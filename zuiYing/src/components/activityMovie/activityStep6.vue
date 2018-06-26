<template>
	<div class="step-c">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="0">
        <FormItem label="" prop="desc">
            <i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 12,maxRows: 5}" placeholder="请添加百度网盘链接或在线链接"></i-input>
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
                desc: '',
            },
            ruleValidate: {
                desc: [
                    { required: true, message: '请输入网盘或在线链接，以方便联系', trigger: 'blur' },
                    { type: 'string', min: 20, message: '至少输入20个字', trigger: 'blur' }
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
        }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
</style>