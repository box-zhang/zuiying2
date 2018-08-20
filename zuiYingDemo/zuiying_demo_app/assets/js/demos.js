$(function () {
    'use strict';
    $('.page').scrollTop(0);
    //图片懒加载
    /*setTimeout(function () {
        for (var i = 0; i < $('.lazyload').length; i++) {
            $(".lazyload").eq(i).picLazyLoad({
                effect: "fadeIn", //渐现，show(直接显示),fadeIn(淡入),slideDown(下拉)
                threshold: 180, //预加载，在图片距离屏幕180px时提前载入
                event: 'click',  // 事件触发时才加载，click(点击),mouseover(鼠标划过),sporty(运动的),默认为scroll（滑动）
                container: $(".page"), // 指定对某容器中的图片实现效果
                failure_limit: 2 //加载2张可见区域外的图片,lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况
            });
        }
    }, 1000);*/
    //首页 tab
    var barTabBtnBox = $('.home .bar-tab');
    var barTabBtnItem = barTabBtnBox.find('.tab-item');
    //每点击一下按钮，首页头部标签名字进行对应的更替
    for (var i = 0; i < barTabBtnItem.length; i++) {
        (function (i) {
            barTabBtnItem.eq(i).click(function () {
                var barTabTitleText = barTabBtnItem.eq(i).find('.tab-label').text();
                $('.bar-nav').find('.title').html(barTabTitleText);
                $('.native-scroll').scrollTop(0);
            })
        })(i)
    }
    //关注 点击 已关注
    var attention = $('.attention');
    attention.on('click', function () {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).text('+ 关注')
        } else {
            $(this).addClass('on');
            $(this).text('取消关注')
        }
    });

    //下拉刷新页面
    $(document).on("pageInit", "#page-ptr", function (e, id, page) {
        var $content = $(page).find(".content").on('refresh', function (e) {
            // 模拟2s的加载过程
            setTimeout(function () {
                var cardHTML = '<div class="card">' +
                    '<div class="card-header">标题</div>' +
                    '<div class="card-content">' +
                    '<div class="card-content-inner">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容' +
                    '</div>' +
                    '</div>' +
                    '</div>';

                $content.find('.card-container').prepend(cardHTML);
                // $(window).scrollTop(0);
                // 加载完毕需要重置
                $.pullToRefreshDone($content);
            }, 2000);
        });
    });

    //无限滚动
    $(document).on("pageInit", "#page-infinite-scroll-bottom", function (e, id, page) {
        var loading = false;
        // 每次加载添加多少条目
        var itemsPerLoad = 10;
        // 最多可加载的条目
        var maxItems = 100;
        var lastIndex = $('.card-list .card').length;

        //我的关注-页面新条目
        function addMyAttentionItem(number, lastIndex) {
            var htmlMyAttentionItem = '';
            for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                htmlMyAttentionItem += '' +
                    '<li>' +
                    '<a href="个人主页.html" class="item-link item-content">' +
                    '<div class="item-person">' +
                    '<div class="item-person-box">' +
                    '<img class="lazyload" src="" data-original="assets/img/show_pic2.jpg">' +
                    '</div>' +
                    '</div>' +
                    '<div class="item-inner">' +
                    '<div class="item-title-row">' +
                    '<div class="item-person-title">我的名字</div>' +
                    '</div>' +
                    '<div class="item-subtitle">我的家乡</div>' +
                    '<div class="item-text item-person-love">' +
                    '我的粉丝：<span>999</span>' +
                    '</div>' +
                    '</div>' +
                    '</a>' +
                    '<div class="enjoy">' +
                    '<button type="button" class="button">关注</button>' +
                    '</div>' +
                    '</li>';
            }
            // 添加新条目
            $('.infinite-scroll .person-list ul').append(htmlMyAttentionItem);
        }

        //观看记录-页面新条目
        function addViewVideoListItem(number, lastIndex) {
            var htmlViewVideoListItem = '';
            for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                htmlViewVideoListItem += '<li>' +
                    '<a href="作品详情.html" class="item-link item-content">' +
                    '<div class="item-media">' +
                    '<div class="item-media-box">' +
                    '<img class="lazyload" src="" data-original="assets/img/show_pic2.jpg">' +
                    '<div class="time-box">' +
                    '<span>4:08</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="item-inner">' +
                    '<div class="item-title-row">' +
                    '<div class="item-title">作品名称</div>' +
                    '</div>' +
                    '<div class="item-subtitle">by：<span>尹小白</span></div>' +
                    '<div class="item-text">' +
                    '<span>#广告</span><span>#中国</span>' +
                    '</div>' +
                    '<div class="share-num">' +
                    '<span class="icon icon-share"></span>12' +
                    '</div>' +
                    '</div>' +
                    '</a>' +
                    '</li>';
            }
            // 添加新条目
            $('.infinite-scroll .media-list ul').append(htmlViewVideoListItem);
        }

        //个人主页-页面新条目
        function addUserMainVideoItem(number, lastIndex) {
            var htmlUserMainVideoItem = '';
            for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                htmlUserMainVideoItem += '<div class="card">' +
                    '<div class="card-content">' +
                    '<a href="作品详情.html">' +
                    '<img src="assets/img/show_pic.jpg" width="100%" alt="">' +
                    '</a>' +
                    '<div class="time-box">' +
                    '<span>4:08</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="card-footer clearfix">' +
                    '<div class="card-h-l">' +
                    '<div class="user-inf">' +
                    '<div class="card-avatar">' +
                    '<a href="个人主页.html">' +
                    '<img class="lazyload" src="" data-original="assets/img/avatar.jpg">' +
                    '</a>' +
                    '</div>' +
                    '<div class="user-inf-text">' +
                    '<p>作品名称</p>' +
                    '<p>尹小白 <span class="color-gray">／#广告</span></p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="card-h-r">' +
                    '<div class="user-inf-data"><a href="javascript;;"><span class="lnr lnr-thumbs-up"></span><span class="color-gray">9</span></a></div>' +
                    '<div class="user-inf-data"><a href="javascript;;"><span class="lnr lnr-exit-up"></span><span class="color-gray">100</span></a></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                ;
            }
            // 添加新条目
            $('.infinite-scroll .card-list').append(htmlUserMainVideoItem);
        }

        //作品详情-页面新条目
        function addWorksVideoItem(number, lastIndex) {
            var htmlWorksVideoItem = '';
            for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                htmlWorksVideoItem += '<li>' +
                    '<a href="作品详情.html" class="item-link item-content">' +
                    '<div class="item-media">' +
                    '<div class="item-media-box">' +
                    '<img class="lazyload" src="" data-original="assets/img/show_pic2.jpg">' +
                    '<div class="time-box">' +
                    '<span>4:08</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="item-inner">' +
                    '<div class="item-title-row">' +
                    '<div class="item-title">作品名称</div>' +
                    '</div>' +
                    '<div class="item-subtitle">by：<span>尹小白</span></div>' +
                    '<div class="item-text">' +
                    '<span>#广告</span><span>#中国</span>' +
                    '</div>' +
                    '<div class="share-num">' +
                    '<span class="icon icon-share"></span>12' +
                    '</div>' +
                    '</div>' +
                    '</a>' +
                    '</li>';
            }
            // 添加新条目
            $('.infinite-scroll .media-list ul').append(htmlWorksVideoItem);
        }

        $(page).on('infinite', function () {
            // 如果正在加载，则退出
            if (loading) return;
            // 设置flag
            loading = true;
            var _this=$(this);
            //我的关注
            if ($(this).find('.infinite-scroll').attr('id') == "myAttentionList") {
                // 模拟1s的加载过程
                setTimeout(function () {
                    // 重置加载flag
                    loading = false;
                    if (lastIndex >= maxItems) {
                        // 加载完毕，则注销无限加载事件，以防不必要的加载
                        $.detachInfiniteScroll($('.infinite-scroll'));
                        // 删除加载提示符
                        $('.infinite-scroll-preloader').remove();
                        return;
                    }
                    addMyAttentionItem(itemsPerLoad, lastIndex);
                    console.log(itemsPerLoad);
                    console.log(lastIndex);
                    for (var i = lastIndex-itemsPerLoad; i <= lastIndex; i++) {
                        _this.find('#myAttentionList').find('.person-list ul li').eq(i).find('.lazyload').picLazyLoad();
                    }
                    // 更新最后加载的序号
                    lastIndex = _this.find('#myAttentionList').find('.person-list ul li').length;
                    $.refreshScroller();
                }, 1000);

            }
            //观看记录
            if ($(this).find('.infinite-scroll').attr('id') == "viewVideoList") {
                // 模拟1s的加载过程
                setTimeout(function () {
                    // 重置加载flag
                    loading = false;
                    if (lastIndex >= maxItems) {
                        // 加载完毕，则注销无限加载事件，以防不必要的加载
                        $.detachInfiniteScroll($('.infinite-scroll'));
                        // 删除加载提示符
                        $('.infinite-scroll-preloader').remove();
                        return;
                    }
                    addViewVideoListItem(itemsPerLoad, lastIndex);
                    // 更新最后加载的序号
                    lastIndex = _this.find('#viewVideoList').find('.media-list ul li').length;
                    console.log(lastIndex)
                    $.refreshScroller();
                }, 1000);

            }
            //个人主页
            if ($(this).find('.infinite-scroll').attr('id') == "userMainVideoList") {
                // 模拟1s的加载过程
                setTimeout(function () {
                    // 重置加载flag
                    loading = false;
                    if (lastIndex >= maxItems) {
                        // 加载完毕，则注销无限加载事件，以防不必要的加载
                        $.detachInfiniteScroll($('.infinite-scroll'));
                        // 删除加载提示符
                        $('.infinite-scroll-preloader').remove();
                        return;
                    }
                    addUserMainVideoItem(itemsPerLoad, lastIndex);
                    // 更新最后加载的序号
                    lastIndex = _this.find('#userMainVideoList').find('.card-list .card').length;
                    $.refreshScroller();
                }, 1000);

            }
            //作品详情
            if ($(this).find('.infinite-scroll').attr('id') == "worksVideoList") {
                // 模拟1s的加载过程
                setTimeout(function () {
                    // 重置加载flag
                    loading = false;
                    if (lastIndex >= maxItems) {
                        // 加载完毕，则注销无限加载事件，以防不必要的加载
                        $.detachInfiniteScroll($('.infinite-scroll'));
                        // 删除加载提示符
                        $('.infinite-scroll-preloader').remove();
                        return;
                    }
                    addWorksVideoItem(itemsPerLoad, lastIndex);
                    // 更新最后加载的序号
                    lastIndex = _this.find('#worksVideoList').find('.media-list ul li').length;
                    $.refreshScroller();
                }, 1000);

            }
        });
    });

    //多个标签页下的无限滚动
    $(document).on("pageInit", "#page-fixed-tab-infinite-scroll", function (e, id, page) {
        var loading = false;
        // 每次加载添加多少条目
        var itemsPerLoad = 5;
        // 最多可加载的条目
        var maxItems = 100;

        //发现-页面新条目
        function addDiscoverCard(number, lastIndex) {
            var htmlDiscoverCard = '';
            for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                htmlDiscoverCard += '<div class="card">' +
                    '<div class="card-content">' +
                    '<a href="作品详情.html">' +
                    '<img src="assets/img/show_pic.jpg" width="100%" alt="">' +
                    '</a>' +
                    '<div class="time-box">' +
                    '<span>4:08</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="card-footer clearfix">' +
                    '<div class="card-h-l">' +
                    '<div class="user-inf">' +
                    '<div class="card-avatar">' +
                    '<a href="个人主页.html">' +
                    '<img class="lazyload" src="" data-original="assets/img/avatar.jpg">' +
                    '</a>' +
                    '</div>' +
                    '<div class="user-inf-text">' +
                    '<p>作品名称</p>' +
                    '<p>尹小白 <span class="color-gray">／#广告</span></p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="card-h-r">' +
                    '<div class="user-inf-data"><a href="javascript;;"><span class="lnr lnr-thumbs-up"></span><span class="color-gray">9</span></a></div>' +
                    '<div class="user-inf-data"><a href="javascript;;"><span class="lnr lnr-exit-up"></span><span class="color-gray">100</span></a></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
            // 添加新条目
            $('.infinite-scroll.active .card-list').append(htmlDiscoverCard);
        }

        //排行版-页面新条目
        function addVideoListItem(number, lastIndex) {
            // 生成新条目的HTML
            var htmlVideoListItem = '';
            for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                htmlVideoListItem += '<li>' +
                    '<a href="作品详情.html" class="item-link item-content">' +
                    '<div class="item-media">' +
                    '<div class="item-media-box">' +
                    '<img class="lazyload" src="" data-original="assets/img/show_pic2.jpg">' +
                    '<div class="time-box">' +
                    '<span>4:08</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="item-inner">' +
                    '<div class="item-title-row">' +
                    '<div class="item-title">作品名称</div>' +
                    '</div>' +
                    '<div class="item-subtitle">by：<span>尹小白</span></div>' +
                    '<div class="item-text">' +
                    '<span>#广告</span><span>#中国</span>' +
                    '</div>' +
                    '<div class="share-num">' +
                    '<span class="icon icon-share"></span>12' +
                    '</div>' +
                    '</div>' +
                    '</a>' +
                    '</li>';
            }
            // 添加新条目
            $('.infinite-scroll.active .media-list ul').append(htmlVideoListItem);
        }

        $(page).on('infinite', function () {
            // 如果正在加载，则退出
            if (loading) return;
            // 设置flag
            loading = true;
            var _this=$(this);
            var tabIndex = 0;
            if ($(this).find('.infinite-scroll.active').attr('id') == "discover") {
                //发现-页面加载无限滚动内容
                (function () {
                    var lastIndex = _this.find('#discover').find('.card').length;
                    // 模拟1s的加载过程
                    setTimeout(function () {
                        // 重置加载flag
                        loading = false;
                        if (lastIndex >= maxItems) {
                            // 加载完毕，则注销无限加载事件，以防不必要的加载
                            //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
                            // 删除加载提示符
                            _this.find('#discover').find('.infinite-scroll-preloader').hide();
                            return;
                        }
                        addDiscoverCard(itemsPerLoad, lastIndex);
                        // 更新最后加载的序号
                        lastIndex = _this.find('#discover').find('.card').length;
                        $.refreshScroller();
                    }, 1000);
                })();
            }
            if ($(this).find('.infinite-scroll.active').attr('id') == "videoList") {
                //排行版-页面加载无限滚动内容
                (function () {
                    var lastIndex = _this.find('#videoList').find('.media-list li').length;
                    // 模拟1s的加载过程
                    setTimeout(function () {
                        // 重置加载flag
                        loading = false;
                        if (lastIndex >= maxItems) {
                            // 加载完毕，则注销无限加载事件，以防不必要的加载
                            //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
                            // 删除加载提示符
                            _this.find('#videoList').find('.infinite-scroll-preloader').hide();
                            return;
                        }
                        addVideoListItem(itemsPerLoad, lastIndex);
                        // 更新最后加载的序号
                        lastIndex = _this.find('#videoList').find('.media-list li').length;
                        $.refreshScroller();
                    }, 1000);
                })();
            }
            if ($(this).find('.infinite-scroll.active').attr('id') == "userExcellent") {
                //名人堂-页面加载无限滚动内容
                (function () {
                    var lastIndex = _this.find('#userExcellent').find('.card').length;
                    // 模拟1s的加载过程
                    setTimeout(function () {
                        // 重置加载flag
                        loading = false;
                        if (lastIndex >= maxItems) {
                            // 加载完毕，则注销无限加载事件，以防不必要的加载
                            //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
                            // 删除加载提示符
                            _this.find('#userExcellent').find('.infinite-scroll-preloader').hide();
                            return;
                        }
                        addDiscoverCard(itemsPerLoad, lastIndex);
                        // 更新最后加载的序号
                        lastIndex = _this.find('#userExcellent').find('.card').length;
                        $.refreshScroller();
                    }, 1000);
                })();
            }
        });
    });

    //图片浏览器
    /*
     $(document).on("pageInit", "#page-photo-browser", function (e, id, page) {
     var myPhotoBrowserStandalone = $.photoBrowser({
     photos: [
     '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
     '//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg',
     '//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg',
     ]
     });
     //点击时打开图片浏览器
     $(page).on('click', '.pb-standalone', function () {
     myPhotoBrowserStandalone.open();
     });
     /!*=== Popup ===*!/
     var myPhotoBrowserPopup = $.photoBrowser({
     photos: [
     '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
     '//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg',
     '//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg',
     ],
     type: 'popup'
     });
     $(page).on('click', '.pb-popup', function () {
     myPhotoBrowserPopup.open();
     });
     /!*=== 有标题 ===*!/
     var myPhotoBrowserCaptions = $.photoBrowser({
     photos: [
     {
     url: '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
     caption: 'Caption 1 Text'
     },
     {
     url: '//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg',
     caption: 'Second Caption Text'
     },
     // 这个没有标题
     {
     url: '//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg',
     },
     ],
     theme: 'dark',
     type: 'standalone'
     });
     $(page).on('click', '.pb-standalone-captions', function () {
     myPhotoBrowserCaptions.open();
     });
     });
     */


    //对话框
    $(document).on('click', '.btn-user-exit', function () {
        $.confirm('您要退出最影吗？', '退出登录', function () {
            $.alert('您已经退出最影');
        });
    });
    $(document).on('click', '.btn-user-info-change', function () {
        $.confirm('您确定修个个人信息？', '个人信息', function () {
            $.alert('修改完成');
        });
    });
    $(document).on('click', '.btn-cash', function () {
        $.toast("操作失败");
    });

    //操作表
    $(document).on("pageInit", "#page-action", function (e, id, page) {
        $(page).on('click', '.create-actions', function () {
            var buttons1 = [
                // {
                //   text: '请选择',
                //   label: true
                // },
                {
                    text: '拍照',
                    // bold: true,
                    // color: 'danger',
                    onClick: function () {
                        $.alert("你选择了“拍照“");
                    }
                },
                {
                    text: '从相册选择',
                    onClick: function () {
                        $.alert("你选择了“从相册选择“");
                    }
                }
            ];
            var buttons2 = [
                {
                    text: '取消',
                    // bg: 'danger'
                }
            ];
            var groups = [buttons1, buttons2];
            $.actions(groups);
        });
    });

    //加载提示符
    $(document).on("pageInit", "#page-preloader", function (e, id, page) {
        $(page).on('click', '.open-preloader-title', function () {
            $.showPreloader('加载中...')
            setTimeout(function () {
                $.hidePreloader();
            }, 2000);
        });
        $(page).on('click', '.open-indicator', function () {
            $.showIndicator();
            setTimeout(function () {
                $.hideIndicator();
            }, 2000);
        });
    });

    $.init();
});
