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
    $('a.page-scroll').bind('click', function (event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
        $("#navbar").collapse('hide');
    });


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
    navAvatar.hover(function() {
        //你要显示的层，div放到li里面。默认css属性是隐藏
        $(this).find('.ivu-select-dropdown').stop().slideDown();
    }, function() {
        //你要显示的列表形式
        $(this).find('.ivu-select-dropdown').stop().slideUp();
    });
    footerCode.hover(function() {
        //你要显示的层，div放到li里面。默认css属性是隐藏
        $(this).find('.ivu-tooltip-popper').stop().fadeIn(200);
    }, function() {
        //你要显示的列表形式
        $(this).find('.ivu-tooltip-popper').stop().fadeOut(200);
    });

    // 返回顶部 begin
    var goTop = $(".ivu-back-top");
    var timer = null;
    //获取页面可视区域的高度
    var clientHeight = $(window).height();
    //鼠标向下滑动，出现以及消失
    $(window).scroll(function() {
        var osTop = $(document).scrollTop();
        if (osTop >= 800) {
            goTop.addClass('ivu-back-top-show');
        } else {
            goTop.removeClass('ivu-back-top-show');
        }
    });
    goTop.click(function() {
        //设置定时器
        timer = setInterval(function() {
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
