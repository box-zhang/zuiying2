<template>
  <div class="settings-router">
    <div class="form-reset">
        <div class="form-reset-avator">
          <Avatar size="large" />
          <p class="settings-user-name">（仅支持JPG、PNG文件小于6M）</p>

        </div>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="昵称" prop="userName">
                <Input v-model="formValidate.userName" placeholder="请输入昵称"></Input>
            </FormItem>
            <FormItem label="性别" prop="userGender">
                <RadioGroup v-model="formValidate.userGender">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="所在地区" prop="city">
                <Cascader :data="data" trigger="hover" placeholder="请选择坐在地区"></Cascader>
            </FormItem>
            <FormItem label="出生日期">
              <DatePicker type="date" multiple placeholder="请选择出生年月" style="width: 100%"></DatePicker>
            </FormItem>
            <FormItem label="个性签名" prop="desc">
                <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="个性签名"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" shape="circle" @click="handleSubmit('formValidate')">保存</Button>
                <Button type="ghost" shape="circle" @click="handleReset('formValidate')" class="btn-gray" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
export default {
    data () {
        return {
            formValidate: {},
            ruleValidate: {},
            data: [{
                value: 'beijing',
                label: '北京',
                children: [
                    {
                        value: 'gugong',
                        label: '故宫'
                    },
                    {
                        value: 'tiantan',
                        label: '天坛'
                    },
                    {
                        value: 'wangfujing',
                        label: '王府井'
                    }
                ]
            }, {
                value: 'jiangsu',
                label: '江苏',
                children: [
                    {
                        value: 'nanjing',
                        label: '南京',
                        children: [
                            {
                                value: 'fuzimiao',
                                label: '夫子庙',
                            }
                        ]
                    },
                    {
                        value: 'suzhou',
                        label: '苏州',
                        children: [
                            {
                                value: 'zhuozhengyuan',
                                label: '拙政园',
                            },
                            {
                                value: 'shizilin',
                                label: '狮子林',
                            }
                        ]
                    }
                ],
            }]
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
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/variable'
@import '../../common/stylus/mixin'
.form-reset-avator
    margin: 0 auto 50px
    text-align: center
    .ivu-avatar
        margin: 20px 0
        circle(100px)
</style>
