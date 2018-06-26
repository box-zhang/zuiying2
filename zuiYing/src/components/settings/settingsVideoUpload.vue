<template>
  <div class="set-collection-item">
    <Upload
      multiple
      type="drag"
      action="//jsonplaceholder.typicode.com/posts/">
      <div class="upload-box">
          <Icon type="ios-cloud-upload" size="52"></Icon>
          <p class="text-hint">很遗憾，此专辑目录为空<br/>请点击我添加视频</p>
      </div>
    </Upload>
    <div class="set-hint-read">
      <Checkbox v-model="single">我已阅读并同意遵守 <router-link class="link-underline" to="/activity/activity-treaty">《最影上传服务规则》</router-link></Checkbox>
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
.set-collection-item
  margin: 60px 0
  .set-hint-read
    margin: 20px
    text-align: center
  .upload-box
    line-height: 20px
    p
      padding: 5px 0
</style>