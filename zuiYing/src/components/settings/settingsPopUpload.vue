<template>
  <div class="pop-s-u">
    <p class="text-hint">仅支持jpg，png大小不超过2M</p>
    <div class="demo-upload-list" v-for="item in uploadList" :key="item.id">
      <template v-if="item.status === 'finished'">
        <img :src="item.url">
        <div class="demo-upload-list-cover">
          <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
          <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
        </div>
      </template>
      <template v-else>
          <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
      </template>
    </div>
    <Upload
      ref="upload"
      :show-upload-list="false"
      :default-file-list="defaultList"
      :on-success="handleSuccess"
      :format="['jpg','jpeg','png']"
      :max-size="2048"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :before-upload="handleBeforeUpload"
      type="drag"
      action="//jsonplaceholder.typicode.com/posts/"
      >
      <div>
          <Icon type="ios-cloud-upload" size="34"></Icon>
          <p class="text-hint">仅支持jpg，png大小不超过2M</p>
      </div>
    </Upload>
    <Modal title="头像" v-model="visible">
        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%; z-index:99999">
    </Modal>
    <div slot="footer">
      <div class="choose">
        <Button type="primary" shape="circle" :loading="loading" @on-ok="ok">确定</Button>
        <Button type="ghost" shape="circle" @on-cancel="cancel" class="btn-gray">取消</Button>
      </div>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
 export default {
  data () {
    return {
      modal1: false,
      defaultList: [
        {
          'name': 'a42bdcc1178e62b4694c830f028db5c0',
          'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
        }
      ],
      imgName: '',
      visible: false,
      uploadList: []
    };
  },
  created(){
    this.menu();
  },
  methods: {
    menu() {
      window.scrollTo(0,0);
    },
    handleView (name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove (file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess (res, file) {
      file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
      file.name = '7eb99afb9d5f317c912f08b5212fd69a';
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: '文件格式不正确',
        desc: '图片 ' + file.name + ' 的格式不正确, 请选择 .jpg or .png 文件再次尝试上传'
      });
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: '图片质量不符合标准',
        desc: '图片  ' + file.name + ' 的质量过大, 请上传小于 2M 的图片'
      });
    },
    handleBeforeUpload () {
      const check = this.uploadList.length < 1;
      if (!check) {
          this.$Notice.warning({
            title: '只能上传一张封面图'
          });
      }
      return check;
    },
    ok () {
      this.$Message.info('ok');
    },
    cancel () {
      this.$Message.info('取消');
    }
  },
  mounted () {
    this.uploadList = this.$refs.upload.fileList;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable";
@import "~common/stylus/mixin";
.pop-s-u
  .choose
    margin: 20px 0 30px
.text-hint
  margin: 5px 0 20px
.ivu-modal-body
  text-align: center
.demo-upload-list
  display: inline-block
  margin: 0 auto
  width: 120px
  height: 120px
  text-align: center
  line-height: 140px
  border: 1px solid transparent
  border-radius: 4px
  overflow: hidden
  background: #fff
  position: relative
  box-shadow: 0 1px 1px rgba(0,0,0,.2)
  margin-right: 4px

.ivu-upload
  position: relative
  margin: 0 auto
  padding: 15px 0 5px
  display: block
  width: 80%
  color: $color-theme-d
.demo-upload-list img
    width: 100%
    height: 100%

.demo-upload-list-cover
    display: none
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: rgba(0,0,0,.6)

.demo-upload-list:hover .demo-upload-list-cover
    display: block

.demo-upload-list-cover i
    color: #fff
    font-size: 30px
    cursor: pointer
    margin: 0 2px

</style>