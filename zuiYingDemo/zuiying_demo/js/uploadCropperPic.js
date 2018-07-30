var initCropperInModal = function (img, input, modal, btnModal, picBox, picUrl, picSize) {
    var $image = img;
    var $inputImage = input;
    var $modal = modal;
    var $btnModal = btnModal;
    var $picBox = picBox;
    var $picUrl = picUrl;
    var $picSize = picSize;
    console.log($picBox.attr("name"));
    if ($picBox.attr("name") == "pic_zpj") {
        //作品集封面
        $('.album-pic').removeClass('circle-avatar')
    } else if ($picBox.attr("name") == "pic_avatar") {
        //头像
        $('.album-pic').addClass('circle-avatar')
    }
    var options = {
        aspectRatio: $picSize, // 纵横比
        viewMode: 2,
        preview: '.album-pic' // 预览图的class名
    };
    // 模态框隐藏后需要保存的数据对象
    var saveData = {};
    var URL = window.URL || window.webkitURL;
    var blobURL;
    $modal.on('show.bs.modal', function () {
        // 如果打开模态框时没有选择文件就点击“打开图片”按钮
        if (!$inputImage.val()) {
            $inputImage.click();
        }
        $image.cropper($.extend(options, {
            ready: function () {
                // 当剪切界面就绪后，恢复数据
                if (saveData.canvasData) {
                    $image.cropper('setCanvasData', saveData.canvasData);
                    $image.cropper('setCropBoxData', saveData.cropBoxData);
                }
            }
        }));
        $image.cropper('reset').cropper('replace', $picUrl);
    }).on('shown.bs.modal', function () {
        // 重新创建
        $image.cropper($.extend(options, {
            ready: function () {
                // 当剪切界面就绪后，恢复数据
                if (saveData.canvasData) {
                    $image.cropper('setCanvasData', saveData.canvasData);
                    $image.cropper('setCropBoxData', saveData.cropBoxData);
                }
            }
        }));
    }).on('hidden.bs.modal', function () {
        // 保存相关数据
        saveData.cropBoxData = $image.cropper('getCropBoxData');
        saveData.canvasData = $image.cropper('getCanvasData');
        // 销毁并将图片保存在img标签
        $image.cropper('destroy').attr('src', blobURL);
    });
    if (URL) {
        $inputImage.change(function () {
            var files = this.files;
            var file;
            if (!$image.data('cropper')) {
                return;
            }
            if (files && files.length) {
                file = files[0];
                if (!/.(jpg|jpeg|png|JPG|png)$/.test(file)) {
                    window.alert('请选择以.png／.jpg／.jpeg为扩展名的图片');
                }else {

                }
                if(URL.file>6291456){
                    window.alert('请上传小于6M的图片');

                }else {
                    if (blobURL) {
                        URL.revokeObjectURL(blobURL);
                    }
                    blobURL = URL.createObjectURL(file);

                    // 重置cropper，将图像替换
                    $image.cropper('reset').cropper('replace', blobURL);

                    // 选择文件后，显示和隐藏相关内容
                    $('[name="avatar_save"]').removeAttr('disabled').removeClass('disabled');
                    console.log($picBox.find('img').attr('src'))
                    $('[name="avatar_save"]').click(function () {
                        // sendPhoto()

                        // 得到PNG格式的dataURL
                        /*var photo = $('#avatar_show_pic').cropper('getCroppedCanvas', {
                         width: 300,
                         height: 300
                         }).toDataURL('image/png');*/

                        if ($picBox.attr("name") == "pic_zpj") {
                            //作品集封面
                            $.ajax({
                                url: '上传地址', // 要上传的地址
                                type: 'post',
                                data: {
                                    'imgData': photo
                                },
                                dataType: 'json',
                                success: function (data) {
                                    if (data.status == 0) {
                                        // 将上传的头像的地址填入，为保证不载入缓存加个随机数
                                        $picBox.find('img').attr('src', '头像地址?t=' + Math.random());
                                        $('#popAddAlbumPic').modal('hide');
                                        $("#popAddAlbumPic").empty();
                                        $('.modal-backdrop').remove();
                                    } else {
                                        alert(data.info);
                                    }
                                }
                            });
                        } else if ($picBox.attr("name") == "pic_avatar") {
                            //头像
                            $.ajax({
                                url: '上传地址', // 要上传的地址
                                type: 'post',
                                data: {
                                    'imgData': photo
                                },
                                dataType: 'json',
                                success: function (data) {
                                    if (data.status == 0) {
                                        // 将上传的头像的地址填入，为保证不载入缓存加个随机数
                                        $('[name="show_avatar"]').attr('src', '头像地址?t=' + Math.random());
                                        $('#popAddAlbumPic').modal('hide');
                                    } else {
                                        alert(data.info);
                                    }
                                }
                            });
                        } else if ($picBox.attr("name") == "pic_user_center") {
                            //个人主页
                            $.ajax({
                                url: '上传地址', // 要上传的地址
                                type: 'post',
                                data: {
                                    'imgData': photo
                                },
                                dataType: 'json',
                                success: function (data) {
                                    if (data.status == 0) {
                                        // 将上传的头像的地址填入，为保证不载入缓存加个随机数
                                        $picBox.find('img').attr('src', '头像地址?t=' + Math.random());
                                        $('#popAddAlbumPic').modal('hide');
                                    } else {
                                        alert(data.info);
                                    }
                                }
                            });
                        }
                    })

                }
            }
        });
    } else {
        $inputImage.prop('disabled', true).addClass('disabled');
    }
}
$(function () {
    function picPopHtml(titleName) {
        var picPopHtml =
            '<div class="modal-dialog">' +
            '<div class="modal-content animated fadeInDownBig">' +
            '<a class="ivu-modal-close" name="cancel_upload" data-dismiss="modal">' +
            '<i class="ivu-icon ivu-icon-ios-close-empty" aria-hidden="true"></i>' +
            '</a>' +
            '<div class="ivu-modal-header"><h2>' +
            titleName +
            '</h2></div>' +
            '<div class="ivu-modal-body">' +
            '<form class="avatar-form" name="avatar_form" enctype="multipart/form-data" method="post">' +
            '<div class="upload-wrapper">' +
            '<div class="row">' +
            '<div class="col-lg-8 col-sm-8 col-xs-12">' +
            '<div class="ivu-upload">' +
            '<div class="ivu-upload ivu-upload-drag avatar-upload" name="avatar_upload">' +
            '<input class="avatar-src" name="avatar_src" type="hidden">' +
            '<input class="avatar-data" name="avatar_data" type="hidden">' +
            '<input class="avatar-input" id="avatarInput" name="avatar_file" type="file">' +
            '<div>' +
            '<i class="ivu-icon ivu-icon-ios-cloud-upload" style="font-size: 34px;"></i>' +
            '<p class="text-hint">点击上传/更换图片<br>仅支持jpg，png大小不超过2M </p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="avatar-wrapper " name="avatar_wrapper">' +
            '<img src="" alt="" id="avatar_show_pic">' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-4 col-sm-4 col-xs-12">' +
            '<div class="pic-box " name="avatar_preview_box">' +
            '<div class="album-pic preview-lg" name="avatar_preview"></div>' +
            '<div class="album-pic preview-md" name="avatar_preview"></div>' +
            '<div class="album-pic preview-sm" name="avatar_preview"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row avatar-btns hide" name="avatar_btns">' +
            '<div class="col-lg-12 col-sm-12 col-xs-12 ">' +
            '<div class="btn-group">' +
            '<button class="btn" data-method="rotate" data-option="-90" type="button" title="逆时针旋转 -90 度"><i class="fa fa-undo"></i> 向左旋转 </button>' +
            '</div>' +
            '<div class="btn-group">' +
            '<button class="btn" data-method="rotate" data-option="90" type="button" title="顺时针旋转 90 度"><i class="fa fa-repeat"></i> 向右旋转 </button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row avatar-btns" name="avatar_btns">' +
            '<div class="col-lg-12 col-sm-12 col-xs-12 ">' +
            '<div slot="footer">' +
            '<div class="choose">' +
            '<button type="submit" class="ivu-btn ivu-btn-primary ivu-btn-circle disabled" name="avatar_save" disabled="true"> <span>确定</span></button>' +
            '<button type="button" class="btn-gray ivu-btn ivu-btn-ghost ivu-btn-circle" name="cancel_upload" data-dismiss="modal" aria-hidden="true"> <span>取消</span></button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</form>' +
            '</div>' +
            '<div class="ivu-modal-footer">  </div>' +
            '</div>' +
            '</div>';
        $("#popAddAlbumPic").append(picPopHtml);
        (function () {
            $("[name='cancel_upload']").click(function () {
                $("#popAddAlbumPic").empty();
                $('.modal-backdrop').remove();
            })
            $(".modal-backdrop").click(function () {
                $("#popAddAlbumPic").empty();
                $('.modal-backdrop').remove();
            })

        })()
    }
    //视频管理 封面图上传
    var picZPJ = $('[name="pic_zpj"]');
    var picZPJSize = 2 / 1;
    for (var i = 0; i < picZPJ.length; i++) {
        (function (i) {
            var picBox = picZPJ.eq(i);
            var btnUploadPagePic = picBox.find('[name="btnUploadPagePic"]');
            var picUrl = picBox.find('[name="avatar_view"]').find('img').attr('src');
            btnUploadPagePic.click(function () {
                picPopHtml("上传作品集封面");
                $('.album-pic').removeClass('circle-avatar');
                initCropperInModal($('#avatar_show_pic'), $('#avatarInput'), $('#popAddAlbumPic'), $(this), picBox, picUrl, picZPJSize);
            });
        })(i);

    }
    for (var i = 0; i < picZPJ.length; i++) {
        (function (i) {
            var picBox = picZPJ.eq(i);
            var btnCollectionIn = picBox.find('[name="btn_collection_in"]');
            btnCollectionIn.click(function () {
                $(this).parents('.set-card-box').hide();
                $('.set-collection-box').show();
            });
        })(i);

    }
    $('.settings-nav-tab').eq(1).click(function () {
        $('.set-card-box').show();
        $('.set-collection-box').hide();
        $('.settings-video-add').hide();

    });
    $('#tab-video').find('.nav-tabs li').eq(1).click(function () {
        $('.set-card-box').show();
        $('.set-collection-box').hide();
        $('.settings-video-add').hide();

    });
    //头像上传
    var picAvatar = $('[name="pic_avatar"]');
    var picAvatarSize = 1;
    for (var i = 0; i < picAvatar.length; i++) {
        (function (i) {
            var picBox = picAvatar.eq(i);
            var btnUploadPagePic = picBox;
            var picUrl = picBox.find('img').attr('src');
            btnUploadPagePic.click(function () {
                picPopHtml("上传用户头像");
                $('.album-pic').addClass('circle-avatar');
                initCropperInModal($('#avatar_show_pic'), $('#avatarInput'), $('#popAddAlbumPic'), $(this), picBox, picUrl, picAvatarSize);
            });
        })(i);
    }
    //个人主页 封面图上传
    var picUserCenter = $('[name="pic_user_center"]');
    var picUserCenterSize = 4/1;
    for (var i = 0; i < picUserCenter.length; i++) {
        (function (i) {
            var picBox = picUserCenter.eq(i);
            var btnUploadPagePic = picBox.find('[name="btnUploadPagePic"]');
            var picUrl = picBox.find('img').attr('src');
            btnUploadPagePic.click(function () {
                picPopHtml("主页背景图");
                $('.album-pic').removeClass('circle-avatar');
                initCropperInModal($('#avatar_show_pic'), $('#avatarInput'), $('#popAddAlbumPic'), $(this), picBox, picUrl, picUserCenterSize);
            });
        })(i);
    }
    //视频上传
    var videoAdd = $('[name="video_add"]');
    var picUserCenterSize = 4/1;
    for (var i = 0; i < videoAdd.length; i++) {
        (function (i) {
            var videoBox = videoAdd.eq(i);
            var videoUpload = videoBox;
            // var videoUrl = picBox.find('img').attr('src');
            videoUpload.click(function () {
                picPopHtml("视频上传");
                $('.album-pic').removeClass('circle-avatar');

                $('.set-card-box').hide();
                $('.set-collection-box').hide();
                $('.settings-video-add').show();
                // initCropperInModal($('#avatar_show_pic'), $('#avatarInput'), $('#popAddAlbumPic'), $(this), videoBox, picUrl, picUserCenterSize);
            });
        })(i);
    }

});