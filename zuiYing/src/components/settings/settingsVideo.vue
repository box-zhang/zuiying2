<template>
  <div class="settings-router">
    <Tabs :animated="false">
      <TabPane label="视频（2）">
        <div class="set1">
          <Table border ref="selection" :columns="columns4" :data="data1"></Table>
        </div>
      </TabPane>
      <TabPane label="作品集（2）">
        <div class="set2">
          <div><Button type="ghost" icon="ios-plus-empty"  @click="modal1 = true">创 建 专 辑</Button></div>
          <div class="settings-collection">
            <div class="s-c-box">
              <div class="content-circle-bg s-c-pic">
                <div class="s-c-pic-in"><img src="" alt=""></div>
                <div class="s-c-btn">
                  <Button type="ghost" shape="circle" class="btn-gray" size="small"  @click="modal2 = true">上传封面</Button>
                </div>
              </div>
              <div class="s-c-text">
                <Row>
                  <i-col span="12">
                    <div class="collection-inf">
                      <p class="collection-name">专辑名称</p>
                      <p class="collection-time">2018/09/09</p>
                    </div>
                  </i-col>
                  <i-col span="12">
                    <div class="collection-works-num">
                      <Icon type="ios-videocam"></Icon><span>30</span>
                    </div>
                  </i-col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
    </Tabs>
    <Modal v-model="modal1" >
      <h2 slot="header">创建作品集</h2>
      <settings-pop-work-set></settings-pop-work-set>
    </Modal>
    <Modal v-model="modal2" >
      <h2 slot="header">上传作品集封面</h2>
      <settings-pop-upload></settings-pop-upload>
    </Modal>
  </div>
</template>

<script type="text/ECMAScript-6">
  import SettingsPopUpload from 'components/settings/settingsPopUpload';
  import SettingsPopWorkSet from 'components/settings/settingsPopWorkSet';
  export default {
    data () {
        return {
          modal1: false,
          modal2: false,
          columns4: [
              {
                  type: 'selection',
                  width: 60,
                  align: 'center'
              },
              {
                  title: '视频截图',
                  key: 'name',
                  render: (h, params) => {
                      return h('div', [
                          h('p', {
                              style: {
                                  margin: '5px'
                              },
                          }, '视频名称'),
                          h('div', {
                              style: {
                                  widht: '150px',
                                  height: '90px',
                                  background: '#FFF4F5',
                              },
                          }, ''),
                      ]);
                  }
              },
              {
                  title: '指数',
                  key: 'age',
                  render: (h, params) => {
                    return h('div', [
                      h('div'), [
                        h('Icon', {
                            props: {
                                type: 'ios-cloud-upload',
                                size: 'large'
                            },
                            style: {
                                width: '14px',
                                fontSize: '14px',
                                textAlign: 'center',
                                margin: '0 1px',
                            },
                        }, ''),
                        h('span', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                margin: '0 5px'
                            },
                            on: {
                                click: () => {
                                    this.show(params.index);
                                }
                            }
                        }, '41'),
                      ],
                      h('div'),[
                        h('Icon', {
                            props: {
                                type: 'android-star-outline',
                                size: 'large'
                            },
                            style: {
                                width: '14px',
                                fontSize: '14px',
                                textAlign: 'center',
                                margin: '0 1px',
                            },
                        }, ''),
                        h('span', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                margin: '0 5px'
                            },
                            on: {
                                click: () => {
                                    this.show(params.index);
                                }
                            }
                        }, '5'),
                      ],
                      h('div'),[
                        h('Icon', {
                            props: {
                                type: 'ios-cloud-upload',
                                size: 'large'
                            },
                            style: {
                                width: '14px',
                                fontSize: '14px',
                                textAlign: 'center',
                                margin: '0 1px',
                            },
                        }, ''),
                        h('span', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                margin: '0 5px'
                            },
                            on: {
                                click: () => {
                                    this.show(params.index);
                                }
                            }
                        }, '42'),
                      ],
                      h('div'),[
                        h('Icon', {
                            props: {
                                type: 'android-star-outline',
                                size: 'large'
                            },
                            style: {
                                width: '14px',
                                fontSize: '14px',
                                textAlign: 'center',
                                margin: '0 1px',
                            },
                        }, ''),
                        h('span', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                margin: '0 5px'
                            },
                            on: {
                                click: () => {
                                    this.show(params.index);
                                }
                            }
                        }, '42'),
                      ],
                    ]);
                }
              },
              {
                  title: '创建时间',
                  key: 'date',
                  sortable: true
              },
              {
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                margin: '0 5px'
                            },
                            on: {
                                click: () => {
                                    this.show(params.index);
                                }
                            }
                        }, '查阅'),
                        h('Button', {
                            props: {
                                type: 'error',
                                size: 'small'
                            },
                            style: {
                                margin: '0 5px'
                            },
                            on: {
                                click: () => {
                                    this.remove(params.index);
                                }
                            }
                        }, '删除'),
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                margin: '0 5px'
                            },
                            on: {
                                click: () => {
                                    this.show(params.index);
                                }
                            }
                        }, '添加到作品集'),
                    ]);
                }
              }
          ],
          data1: [
              {
                  name: 'John Brown',
                  age: 18,
                  address: 'New York No. 1 Lake Park',
                  date: '2016-10-03 23:12:00'
              },
              {
                  name: 'Jim Green',
                  age: 24,
                  address: 'London No. 1 Lake Park',
                  date: '2016-10-03 23:10:11'
              },
              {
                  name: 'Joe Black',
                  age: 30,
                  address: 'Sydney No. 1 Lake Park',
                  date: '2016-10-03 23:00:11'
              },
              {
                  name: 'Jon Snow',
                  age: 26,
                  address: 'Ottawa No. 2 Lake Park',
                  date: '2016-10-04 10:00:00'
              }
          ]
        };
    },
    methods: {
        handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        },
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data1[index].name}<br>Age：${this.data1[index].age}<br>Address：${this.data1[index].address}`
            });
        },
        remove (index) {
            this.data1.splice(index, 1);
        }
    },
    components:{
      SettingsPopUpload,
      SettingsPopWorkSet
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable";
@import "~common/stylus/mixin";
.settings-router
  border-left: 1px solid $color-line
  padding: 0 0 0 50px
  .set1
    .ivu-icon-arrow-up-b,.ivu-icon-arrow-down-b
      font-size: 12px
    .ivu-tabs-bar
      margin-bottom: 35px
    .ivu-tabs-nav .ivu-tabs-tab
      color: $color-theme-l
    .ivu-tabs-nav .ivu-tabs-tab-active
      color: $color-theme
    .ivu-tabs-ink-bar
      background-color: $color-theme
    .ivu-btn-primary
      background: none
      border: 0
      color: $color-theme
    .ivu-btn-error
      background: none
      border: 0
      color: $color-theme
    .ivu-btn-primary:hover,.ivu-btn-error:hover
      color: $color-theme-l
      cursor: pointer
    .ivu-table-wrapper
      border: 0
    .ivu-table-border td, .ivu-table-border th
      padding: 10px 0
      border-right: 0
      line-height: 18px
    .ivu-table:after
      background: none
    .ivu-table th
      background: none
      border: 0
    .ivu-table tr
      background: $color-positive-background-m
      border-radius: 100px
      overflow: hidden
  .set2
    .ivu-btn-ghost
      padding: 5px 30px
    .ivu-icon-ios-plus-empty
      font-size: 14px
      font-weight: bold
    .settings-collection
      margin: 30px 0
      display: flex
    .s-c-box
      margin: 10px
    .s-c-pic
      position: relative
      padding: 10px
      width: 360px
      height:230px
      border-radius: 10px
      .s-c-pic-in
        width: 100%
        height: 100%
        border-radius: 5px
        background: $color-positive-background-d
      .s-c-btn
        position: absolute
        right: 20px
        bottom: 20px
        padding: 5px 10px
        .btn-gray:hover
          color: $color-white
          background: $color-negative-background
    .s-c-text
      margin: 10px
      padding: 5px
      .collection-name
        font-weight: bold
        line-height: 24px
      .collection-time
        font-size: 12px
        color: $color-text-article
        line-height: 24px
      .collection-works-num
        text-align: right
        .ivu-icon,span
          font-size: 12px
          padding: 5px 3px
</style>