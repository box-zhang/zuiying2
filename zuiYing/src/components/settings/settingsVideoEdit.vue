<template>
  <div class="set1">
    <Table border ref="selection" :columns="columns4" :data="data1"></Table>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {
    data () {
        return {
          columns4: [
              {
                  type: 'selection',
                  width: 60,
                  align: 'center'
              },
              {
                  title: '视频截图',
                  width: 320,
                  key: 'name',
                  render: (h, params) => {
                      return h('div', [
                          h('p', {
                              style: {
                                  margin: '5px',
                              },
                          }, '视频名称'),
                          h('div', {
                              style: {
                                  widht: '150px',
                                  height: '120px',
                                  background: '#FFF4F5',
                                  marginRight: '50px'
                              },
                          }, ''),
                      ]);
                  }
              },
              {
                  title: '指数',
                  width: 120,
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
    created(){
      this.menu();
    },
    methods: {
      menu() {
        window.scrollTo(0,0);
      },
      handleSelectAll (status) {
          this.$refs.selection.selectAll(status);
      },
      show (index) {
          this.$Modal.info({
              title: '视频信息',
              content: `视频名称：${this.data1[index].name}<br>视频长度：${this.data1[index].age}<br>视频发布时间：${this.data1[index].date}`
          });
      },
      remove (index) {
          this.data1.splice(index, 1);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable";
@import "~common/stylus/mixin";
.settings-router
  .settings-video-nav
    width: 100%
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
</style>