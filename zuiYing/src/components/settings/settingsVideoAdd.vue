<template>
  <div class="settings-video-add">
    <div class="video-add-inf">
      <Row>
        <i-col span="20">
          <p>正在上传0个视频，已完成0个...未填写资料<span class="text-red">1</span>个，上传失败<span class="text-red">0</span>个</p>
        </i-col>
        <i-col span="4">
          <router-link tag="div" to="/settings/video-set/collections/v-add"><Button type="ghost" shape="circle" class="btn-gray" size="small">继续添加</Button></router-link>
        </i-col>
      </Row>
    </div>
    <div class="video-add-content">
      <div class="video-add-item">
        <p class="video-add-item-name">[猫砂好朋友]-淘宝详情页视频.mp4</p>
        <Progress :percent="45" status="active"></Progress>
        <p class="add-progress-hint">视频上传成功，正在进行转码和审核</p>
      </div>
      <div class="video-add-form">
        <Row>
          <i-col span="14">
            <div class="video-add-form-list">
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
                    <Checkbox label="标签4"></Checkbox>
                  </CheckboxGroup>
                  <p class="text-hint">我的标签：{{formValidate.workSetLabel}}</p>
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
          </i-col>
          <i-col span="10">
            <div class="video-add-show">
              <p>预览效果</p>
              <div class="video-add-show-img">
                <img src="../../common/images/page.jpg" width="100%" alt="">
              </div>
            </div>
          </i-col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {
    data () {
        return {
            loading: false,
            fruit: [],
            formValidate: {
                workSetName: '',
                workSetClassification: '',
                workSetLabel: [],
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
                  { type: 'array', max: 3, message: '最多选择3个标签', trigger: 'change' }
                ],
                workSetIntroduce: [
                    { required: true, message: '请输入专辑简介', trigger: 'blur' },
                    { type: 'string', min: 20, message: '介绍不少于20字', trigger: 'blur' }
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
.settings-video-add
  margin: 20px 0
  .btn-gray
    float: right
  .video-add-content
    margin: 30px 0
    content-circle-bg()
    overflow: hidden
  .video-add-item
    padding: 30px
    background: #fcfcfc
    border-bottom: 1px solid $color-line
    .video-add-item-name
      margin: 5px 0
      line-height: 20px
    .ivu-progress-bg
      background-image: linear-gradient(-90deg, #FF4259 0%, #413F57 100%)
    .ivu-progress
      margin: 5px 0
      width: 80%
    .add-progress-hint
      margin: 5px 0
      padding: 5px 0
      font-size: 12px
      color: $color-theme-l
.video-add-form
  margin: 50px 0
  .video-add-form-list
    margin: 10px auto
    width: 70%
.video-add-show
  padding: 20px
  font-size: 12px
  line-height: 16px
  text-align: center
  .video-add-show-img
    margin: 20px auto 0
    padding: 18% 4.5% 0
    width: 80%
    height: 300px
    overflow: hidden
    background: url(../../common/images/iphone.png) no-repeat top
    background-size: 100% auto


</style>