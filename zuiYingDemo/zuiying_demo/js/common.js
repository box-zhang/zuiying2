/*
 *
 *   common(header footer)
 *   common.js
 *
 */


$(document).ready(function () {

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    });

    // Page scrolling feature
    $('a.page-scroll').bind('click', function (e) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
        $("#navbar").collapse('hide');
    });

    // selected
    var selectBox = $('.ivu-select');
    selectBox.bind('click', function (e) {
        var _this = $(this);
        var _selectDown = _this.find('.ivu-select-dropdown');
        if (_selectDown.css("display") == "none") {
            _selectDown.slideDown("fast");
            _this.addClass('ivu-select-visible');
        } else {
            _selectDown.slideUp("fast");
            _this.removeClass('ivu-select-visible');
        }
        _selectDown.find('li').click(function () {
            var txt = $(this).text();
            console.log(txt);
            _this.find('span').html(txt).addClass('ivu-select-selected-value').removeClass('ivu-select-placeholder');
            _this.find('input').val(txt);
            _selectDown.slideUp("fast");
        });

    });
    //checkbox
    var checkboxBox = $('.ivu-checkbox-wrapper');
    checkboxBox.bind('click', function (e) {
        var _this = $(this);
        (function () {
            if (_this.hasClass('ivu-checkbox-wrapper-checked')) {
                _this.removeClass('ivu-checkbox-wrapper-checked');
                _this.find('.ivu-checkbox').removeClass('ivu-checkbox-checked');
                _this.find('input').removeAttr('checked', 'checked');
            } else {
                _this.addClass('ivu-checkbox-wrapper-checked');
                _this.find('.ivu-checkbox').addClass('ivu-checkbox-checked');
                _this.parent().parent().removeClass('ivu-form-item-error');
                _this.find('.ivu-form-item-error-tip').remove();
                _this.find('input').attr('checked', 'true');
            }
        })()
    });
    //input
    (function () {
        $(':input').on('keyup', function (e) {
            var _this = $(this);
            _this.val().replace('\s+', '');
            if (_this.val() && _this.parents('.ivu-form-item').hasClass('ivu-form-item-error')) {
                _this.parents('.ivu-form-item').removeClass('ivu-form-item-error')
                _this.parents('.ivu-form-item-content').find('.ivu-form-item-error-tip').remove();

            }
        });
        $(":input").blur(function () {
            if (_this.val() == '' && !_this.parents('.ivu-form-item').hasClass('ivu-form-item-error')) {
                _this.parents('.ivu-form-item').addClass('ivu-form-item-error');
                _this.parents('.ivu-form-item-content').append('<div class="ivu-form-item-error-tip">' + '请输入...' + '</div>');
            }
            if (_this.find('.ivu-form-item-error-tip')) {
            }
        });
    })();
    //brn-show
    var btnShow = $('.btnShow');
    btnShow.bind('click', function (e) {
        console.log(0);
        if ($('.activity-sign-list').hasClass('active')) {
            $('.activity-sign-list').removeClass('active');
        } else {
            $('.activity-sign-list').addClass('active');
        }
    });
    // video

    /*if('https:' == document.location.protocol) {
        document.write("<script type='text/javascript' charset='utf-8' src='https://s.yuntv.letv.com/player/vod/bcloud.js'></script>");
    } else {
        document.write("<script type='text/javascript' charset='utf-8' src='http://yuntv.letv.com/player/vod/bcloud.js'></script>");
    }
    var videoPlay = {
        opts:{
            concernid:'',
            albumId:0,
            subscribeApi:'',
            concernApi:'',
            commentApi:'',
            collectApi:'',
            loginApi:'/site/login.html',
            isLogin:0
        },
        subscribe:function(){
            $('#subscribe').click(function(){
                var subscribeObj = this;
                if(! videoPlay.opts.isLogin) {videoPlay.login();return;}
                //判断是否已经订阅
                var isSubscribe = parseInt($(this).data('subscribe'));
                if(isSubscribe > 0) return ;
                $.post(videoPlay.opts.subscribeApi,{albumId:videoPlay.opts.albumId},function(result){
                    console.log(result);
                    if(result.code != 200) {alert(result.resultDesc);return;}
                    $(subscribeObj).html('已订阅');
                    $(subscribeObj).data('subscribe',1);
                    $(subscribeObj).removeClass('hand');
                    //订阅数加1
                    var subscribeNumObj = $('#subscribe-num'),
                        subscribeNum    = parseInt(subscribeNumObj.data('subscribe-num')) + 1;
                    subscribeNumObj.data('subscribe-num',subscribeNum);
                    videoPlay.parseSubscribeNum();
                },'json');
            });
        },
        concern:function () {
            $('#concern').click(function () {
                var concernObj = this;
                if(! videoPlay.opts.isLogin) {videoPlay.login();return;}
                //判断是否已经关注
                var isConcern = $(this).data('concern');
                if(isConcern) return;
                $.post(videoPlay.opts.concernApi,{concernid:videoPlay.opts.concernid},function(result){
                    console.log(result);
                    if(result.code != 200) {alert(result.resultDesc);return;}
                    $(concernObj).html('已关注');
                    $(concernObj).data('concern',1);
                    $(concernObj).removeClass('hand');
                    //订阅数加1
                    var concernNumObj = $('#concernNum'),
                        concernNum    = parseInt(concernNumObj.data('concern-num')) + 1;
                    concernNumObj.data('concern-num',concernNum);
                    videoPlay.parseconcernNum();
                },'json');

            });
        },
        comment:function(){
            $('#comment').click(function(){
                if(! videoPlay.opts.isLogin) {videoPlay.login();return;}
                var content = $.trim($('#comment-input').val()),
                    contentLength = content.length;
                if(! contentLength) return;
                $.post(videoPlay.opts.commentApi,{albumId:videoPlay.opts.albumId,content:content},function(result){
                    if(result.code != 200){alert(result.resultDesc);return;}
                    //删除评论框内容
                    $('#comment-input').val('');
                    //刷新最新评论
                    comment.isInit = false;
                    comment.currentPage = 0;
                    comment.get_data();
                },'json');
            });
        },
        collect:function(){
            $('#collect').click(function(){
                var collectObj = this;
                if(! videoPlay.opts.isLogin) {videoPlay.login();return;}
                var isCollected = parseInt($(this).data('collected'));
                if(isCollected > 0) return ;
                $.post(videoPlay.opts.collectApi,{albumId:videoPlay.opts.albumId},function(result){
                    if(result.code != 200){alert(result.resultDesc);return;}

                    //$(collectObj).text('已收藏');
                    $(collectObj).data('collected',1);
                    $(collectObj).addClass('collections');
                    $(collectObj).removeClass('hand');
                    $(collectObj).removeClass('collection');
                },'json');
            });
        },
        parseSubscribeNum:function(){
            var subscribeObj = $('#subscribe-num'),
                subscribeNum = parseInt(subscribeObj.data('subscribe-num'));
            if(subscribeNum >= 10000){
                subscribeNum = (subscribeNum / 10000).toFixed(1) + '万';
            }

            subscribeNum += " 粉丝";
            subscribeObj.html(subscribeNum);
        },
        parseconcernNum:function () {
            var  concernObj = $("#concernNum"),
                concernNum = parseInt(concernObj.data('concern-num'));
            if(concernNum >= 10000){
                concernNum = (concernNum / 10000).toFixed(1) + '万';
            }

            concernNum += " 粉丝";
            concernObj.html(concernNum);

        },
        login:function(){
            location.href = this.opts.loginApi;
        },
        init:function(opts){
            $.extend(this.opts,opts);
            this.subscribe();
            this.concern();
            this.comment();
            this.collect();
            this.parseSubscribeNum();
        }
    };
    $.videoPlay = function(opt){
        videoPlay.init(opt);
        return videoPlay;
    };*/
    //加载播放器
    /*var uu  = $('#video-play').data('uu'),
        vu  = $('#video-play').data('vu'),
        snum = $('#video-play').data('snum'),
        lecloud_player_conf = {
            vu:vu,
            // uu:uu,
            // auto_play:1,
            //"gpcflag":1,
            "width": $('#video-play').width(),
            "height":$('#video-play').height(),
        },
        player = new CloudVodPlayer();
    if (snum == 0) {
        lecloud_player_conf['uu'] = 'fvaz7udkhj';
        lecloud_player_conf['pu'] = 'e7ecb80b17';
    }
    if (snum == 1) {
        lecloud_player_conf['uu'] = 'fvaz7udkhj';
        lecloud_player_conf['p']  = '102';
        lecloud_player_conf['pu'] = '3108';
    }
    if (snum == 2) {
        lecloud_player_conf['uu'] = '624310fa63';
        lecloud_player_conf['pu'] = '31ff838ee5';
    }
    player.init(lecloud_player_conf,'video-play');

    //播放选集
    $('.albums').click(function(){
        var uu = $(this).data('uu'),
            vu = $(this).data('vu');

        var videoid = $(this).data('videoid');
        var albumid = $(this).data('albumid');
        player.sdk.playNewId({uu:uu,vu:vu});
        //修改样式
        $('.albums').removeClass('active');
        $(this).addClass('active');
        clickrate(videoid,albumid);
    });*/
    // video end
    var cbpAnimatedHeader = (function () {
        var docElem = document.documentElement,
            header = document.querySelector('.navbar-default'),
            didScroll = false,
            changeHeaderOn = 200;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 250);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                $(header).addClass('navbar-scroll')
            }
            else {
                $(header).removeClass('navbar-scroll')
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();

    // Activate WOW.js plugin for animation on scrol
    new WOW().init();

    var nav = $('#navbar');
    var navAvatar = nav.find('.ivu-dropdown');
    var footer = $("#footer");
    var footerCode = footer.find('.ivu-tooltip');
    navAvatar.hover(function () {
        //你要显示的层，div放到li里面。默认css属性是隐藏
        $(this).find('.ivu-select-dropdown').stop().slideDown();
    }, function () {
        //你要显示的列表形式
        $(this).find('.ivu-select-dropdown').stop().slideUp();
    });
    footerCode.hover(function () {
        //你要显示的层，div放到li里面。默认css属性是隐藏
        $(this).find('.ivu-tooltip-popper').stop().fadeIn(200);
    }, function () {
        //你要显示的列表形式
        $(this).find('.ivu-tooltip-popper').stop().fadeOut(200);
    });

    // 返回顶部 begin
    var goTop = $(".ivu-back-top");
    var timer = null;
    //获取页面可视区域的高度
    var clientHeight = $(window).height();
    //鼠标向下滑动，出现以及消失
    $(window).scroll(function () {
        var osTop = $(document).scrollTop();
        if (osTop >= 800) {
            goTop.addClass('ivu-back-top-show');
        } else {
            goTop.removeClass('ivu-back-top-show');
        }
    });
    goTop.click(function () {
        //设置定时器
        timer = setInterval(function () {
            //获取滚动条高度
            var osTop = $(document).scrollTop();
            //ispeed 最后等于0
            var ispeed = Math.floor(osTop / 5);
            //实现滚动条每次-100px；直到0;
            $(document).scrollTop(osTop - ispeed);
            //到0px后清除浮动
            //这里osTop==(osTop-ispeed)即ispeed等于0时 条件成立
            if (osTop == (osTop - ispeed)) {
                clearInterval(timer);
            }
        }, 30);
    });
    // 返回顶部 end
});
