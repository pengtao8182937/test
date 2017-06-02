//2017.5.15-pengtaojun

//头部轮播的jQ效果
bannerBg();
function bannerBg() {
    var leftBtn = $("#banner-bg .control .left");
    var rightBtn = $("#banner-bg .control .right");
    var dotBtn = $("#banner-bg .control .dot"), iNew = 0;
    //下标当前项点击事件
    dotBtn.click(function () {
        iNew = $(this).index();
        bannerBgINew();
    });
    //向右箭头点击事件
    rightBtn.click(function () {
        iNew++;
        iNew = iNew >= 3 ? 0 : iNew;
        bannerBgINew();
    });
    //向右箭头hover
    rightBtn.hover(function () {
        $(this).addClass("right-active animated jello")
    }, function () {
        $(this).removeClass("right-active animated jello")
    });
    //向左箭头点击事件
    leftBtn.click(function () {
        iNew--;
        iNew = iNew <= -1 ? 2 : iNew;
        bannerBgINew()
    });
    //向左箭头点击事件
    leftBtn.hover(function () {
        $(this).addClass("left-active animated jello")
    }, function () {
        $(this).removeClass("left-active animated jello")
    });
    //iNew改变内容发生变化的函数
    function bannerBgINew() {
        $("#banner-bg .control .dot").removeClass("active animated jello");
        $("#banner-bg .control .dot").eq(iNew).addClass("dot active animated jello");
        if (iNew == 0) {
            $(".banner")[0].innerHTML = '<img src="' + 'images/banner01_bg.jpg" alt=""/>';
            $(".banner-wrap .items").css({"display": "none"});
            $(".banner-wrap .items")[iNew].style.display = "block"
        } else if (iNew == 1) {
            $(".banner")[0].innerHTML = '<img src="' + 'images/banner02_bg.jpg" alt=""/>';
            $(".banner-wrap .items").css({"display": "none"});
            $(".banner-wrap .items")[iNew].style.display = "block"
        } else {
            $(".banner")[0].innerHTML = '<img src="' + 'images/banner01_bg.jpg" alt=""/>';
            $(".banner-wrap .items").css({"display": "none"});
            $(".banner-wrap .items")[iNew].style.display = "block"
        }
    }
}


//主要产品部分的轮播
bannerMp();
function bannerMp() {
    //主要产品部分内容Arr
    var mpJson = [
        [
            "小鸟掌学",
            "<img src='images/main-products" + "/mp-logo.jpg' />",
            "<h1>概述</h1>小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基 <br/>地的在线培训平台，受到客户与社会的密切关注与欢迎。卓新思创科技有 <br/>限公司负责小鸟掌学的运营、推广和研发等工作。",
            "我们的愿景：成为中国最强最大的中小微企业定制在线学习服务提供商！ <br/>我们做的是“新学习、新媒体”！ <br/>帮助企业建立自己的企业学校，实现：全民全学、全民全校、全民全智(比拼式学习)！",
            " <div class='top'></div><div class='font'>学我所学，学以致用</div><div class='bottom'></div>",
            ""
        ],
        [
            "小鸟掌学",
            "",
            "<span>随</span>着智能手机应用，微学习（即微观背景下的学习）已经开始飞速蔓延，通过对学习内容<br/>或者学习时间进行分割，使学员对学习内容进行碎片化的学习，在企业内它可以以正式或随<br/>意的方式推送给学员。作为一种人才培养方式，微课能较好的补充实体培训中无法实现的可<br/>移动性、持续性、重复性、随时随地等不足。这有助于企业建立规范的培养体系，提高全员<br/>素质，从而达到提升企业经济效益，并建立一支忠诚善战的员工队伍。",
            "",
            " <div class='top'></div><div class='font'>学我所学，学以致用</div><div class='bottom'></div>"
        ],
        [
            "小鸟掌学对企业的价值",
            "",
            "1)	帮助企业转变为学习型组织，促进全员持续学习；<br/>2)	加速企业内部知识的传播，提高管理、操作和经验技巧的传承；<br/>3)	营造企业比拼式学习氛围，挖掘实战精华",
            "4)	降低企业培训的时间和金钱成本 ，提高培训效率和培训质量；<br/>5)	增加凝聚力，提高员工的忠诚度，做到“上下同欲”；<br/>6)	增强企业供应商、经销商的知识技能的提高，形成“供应链学习模式”；",
            ""
        ],
        [
            "小鸟掌学”云平台",
            "",
            "<a>“小鸟掌学”</a>云平台是一套完整的专家知识、学习管理、监督考核系统。首先根据企业和员<br/>工的特性，抓取学习需求，然后从“平台学习库、行业学习库和企业内训库”中调出教学资<br/>源，按学习计划“推送”任务给每一位员工，并对学习过程进行监管，对学习效果进行评<br/>估，根据学习情况调整学习计划，不断优化员工的职业生涯。",
            "'小鸟掌学'主要基于智能手机平台进行学习。针对性、趣味性、创新性的学习方式有助于<br/>员工建立学习兴趣，将学习与趣味相结合，提高学习吸收率。提高员工技能，增加企业效益",
            ""
        ],
        [
            "“小鸟掌学”云平台",
            "",
            "“小鸟掌学”云平台是企业战略变革的工具；<br/>“小鸟掌学”云平台是企业文化重要的组成部分；<br/>“小鸟掌学”云平台是企业培训的重要支撑手段和实施保障机制；",
            "小鸟掌学”云平台是企业上下游意识形态统一的桥梁；<br/>“小鸟掌学”云平台是企业经验分享的平台；",
            ""
        ],
        [
            "“小鸟掌学”云平台",
            "",
            "“小鸟掌学”云平台本质上是一种正规化教学管理机制，但它更突破了时间、地域、成本、<br/>固定性的限制（绝非在线浏览网页，看电子书籍和一些视音频上）。“小鸟掌学”改变了企<br/>业现有培训的“双高困局”（高成本、高误工），实现了 “双低学习模式”（低成本、低误<br/>工）。",
            "当今，科学技术迅猛发展，社会文化不断进步，“终身教育、终身学习”将被越来越多的人<br/>所认识。面对未来，小鸟掌学将不断努力，以一流的运营和服务，成为企业首选的、长期<br/>的、可信赖的学习资源提供商、运营服务提供商，为社会各行各业的发展和国家经济实力的<br/>增强，做出新的贡献。",
            ""
        ]
    ];

    var iNew = 0, iNewI = 0;
    $(".main-products .left").click(function () {
        iNew--;
        iNew = iNew <= -1 ? 5 : iNew;
        bannerMpINew();
        iNewI = iNew;
    });
    $(".main-products .right").click(function () {
        iNew++;
        iNew = iNew >= 6 ? 0 : iNew;
        bannerMpINew();
        iNewI = iNew;
    });
    $(".main-products .index-axis>div").click(function () {
        iNew = $(this).index();
        bannerMpINew();
        iNewI = iNew;
    });
    $(".main-products .index-axis>div").hover(function () {
        $(".main-products .index-axis>div>div").removeClass("active animated jello");
        $(".main-products .index-axis>div>div").eq($(this).index()).addClass("active animated jello")
    }, function () {
        $(".main-products .index-axis>div>div").removeClass("active animated jello");
    });
    //iNew改变内容发生变化的函数
    function bannerMpINew() {
        $(".mp-banner .content .mp-cont-title").html(mpJson[iNew][0]);
        $(".mp-banner .content .cont_1").html(mpJson[iNew][1]);
        $(".mp-banner .content .cont1").html(mpJson[iNew][2]);
        $(".mp-banner .content .cont2").html(mpJson[iNew][3]);
        $(".mp-banner .content .cont3").html(mpJson[iNew][4]);
        if (iNew > iNewI) {
            $(".main-products .main .img")[0].innerHTML = '<img src="images/main-products/chanpin_image0' + (iNew + 1) + '.jpg" class=' + '"animated bounceInRight"' + '/>';
            $(".mp-banner .content div").removeClass("animated fadeInRight fadeInLeft");
            $(".mp-banner .content div").addClass("animated fadeInRight");
            $(".mp-banner .content>.bottom").removeClass("animated fadeInRight fadeInLeft");
        } else {
            $(".main-products .main .img")[0].innerHTML = '<img src="images/main-products/chanpin_image0' + (iNew + 1) + '.jpg" class=' + '"animated bounceInLeft"' + '/>';
            $(".mp-banner .content div").removeClass("animated fadeInRight fadeInLeft");
            $(".mp-banner .content div").addClass("animated fadeInLeft");
            $(".mp-banner .content>.bottom").removeClass("animated fadeInRight fadeInLeft");
        }
        $(".main-products .index-axis>div>div").removeClass("act");
        $(".main-products .index-axis>div>div").eq(iNew).addClass("act");
        $(".mp-banner .content .cont3").removeClass("animated fadeInRight fadeInLeft");
        $(".mp-banner .content .font").removeClass("animated fadeInRight fadeInLeft");
        $(".mp-banner .content .font").addClass("animated wobble");
        var mpHtml = $(".mp-banner .main").html();
        $(".mp-banner .main").html(mpHtml);
    }

    //向右箭头hover
    $(".mp-banner .control .right").hover(function () {
        $(this).addClass("right-active animated jello")
    }, function () {
        $(this).removeClass("right-active animated jello")
    });
    //向左箭头点击事件
    $(".mp-banner .control .left").hover(function () {
        $(this).addClass("left-active animated jello")
    }, function () {
        $(this).removeClass("left-active animated jello")
    });
}

//业务范围
sphereOfBusiness();
function sphereOfBusiness() {
    //预存的dom
    var items = $(".sphere-of-business .items");
    var itemsNone = $(".sphere-of-business .items-none");
    //业务范围内容的Arr
    var sobArr = [
        [
            '01',
            '企业培训平台',
            'Enterprise training platform',
            '<img src="images' + '/sob/items00.jpg"/>',
            '我们的愿景：成为中国最强、最大的中小微企业<br>定制在线学习服务提供商！<br>我们做的是“新学习、新媒体”！',
            '<img src="images' + '/sob/jia.jpg"/>',
            '<img src="images' + '/sob/cha.jpg"/>'
        ],
        [
            '02',
            '小鸟掌学云服务',
            'cloud services',
            '<img src="images' + '/sob/items01.jpg"/>',
            '我们的愿景：成为中国最强、最大的中小微企业<br>定制在线学习服务提供商！<br>我们做的是“新学习、新媒体”！',
            '<img src="images' + '/sob/jia.jpg"/>',
            '<img src="images' + '/sob/cha.jpg"/>'
        ],
        [
            '03',
            '企业培训课程内容提供',
            'Enterprise training course',
            '<img src="images' + '/sob/items02.jpg"/>',
            '我们的愿景：成为中国最强、最大的中小微企业<br>定制在线学习服务提供商！<br>我们做的是“新学习、新媒体”！',
            '<img src="images' + '/sob/jia.jpg"/>',
            '<img src="images' + '/sob/cha.jpg"/>'
        ]
    ];
    $.each(items, function (i, item) {
        $(item).html("<div class='top-auto'><div class='index1'>"
            + sobArr[i][0] + "</div><div class='index2'><h1>" + sobArr[i][1]
            + "</h1><h2>" + sobArr[i][2] + "</h2></div><div class='img'>" +
            sobArr[i][3] + "</div><div class='font'>" + sobArr[i][4] + "" +
            "</div><div class='btn'><div class='btn-down'>" + sobArr[i][5]
            + sobArr[i][6] + "</div></div></div>"
        )
    });


    //中央控制按钮的hover
    $(".top-auto .img").hover(function () {
        $(this).addClass("animated jello")
    }, function () {
        $(this).removeClass("animated jello")
    });

    //右边控制按钮的hover
    $(".top-auto .btn").hover(function () {
        $(this).addClass("animated jello")
    }, function () {
        $(this).removeClass("animated jello")
    });

    //业务范围下拉的内容的Arr
    var sobDownArr = [
        '  “小鸟掌学”云平台是一套完整的专家知识、学习管理、监督考核系统。首先根据企业和员工的特性，抓取学习需<br>求，然后从“平台学习库、行业学习库和企业内训库”中调出教学资源，按学习计划“推送”任务给每一位员工，并对<br>学习过程进行监管，对学习效果进行评估，根据学习情况调整学习计划，不断优化员工的职业生涯。<h3></h3>“小鸟掌学”主要基于智能手机平台进行学习。针对性、趣味性、创新性的学习方式有助于员工建立学习兴趣，将学习<br>与趣味相结合，提高学习吸收率。提高员工技能，增加企业效益。',
        '    “小鸟掌学”云平台是一套完整的专家知识、学习管理、监督考核系统。首先根据企业和员工的特性，抓取学习需<br>求，然后从“平台学习库、行业学习库和企业内训库”中调出教学资源，按学习计划“推送”任务给每一位员工，并对<br>学习过程进行监管，对学习效果进行评估，根据学习情况调整学习计划，不断优化员工的职业生涯。<h3></h3><h3></h3>“小鸟掌学”主要基于智能手机平台进行学习。针对性、趣味性、创新性的学习方式有助于员工建立学习兴趣，将学习<br>与趣味相结合，提高学习吸收率。提高员工技能，增加企业效益。<h3></h3><h3></h3>我们的愿景：成为中国最强、最大的中小微企业定制在线学习服务提供商！<h3></h3><h3></h3>我们做的是“新学习、新媒体”！<h3></h3><h3></h3>我们的愿景：成为中国最强、最大的中小微企业定制在线学习服务提供商！<h3></h3><h3></h3>我们做的是“新学习、新媒体”！',
        '“小鸟掌学”云平台是一套完整的专家知识、学习管理、监督考核系统。首先根据企业和员工的特性，抓取学习需<br>求，然后从“平台学习库、行业学习库和企业内训库”中调出教学资源，按学习计划“推送”任务给每一位员工，并对<br>学习过程进行监管，对学习效果进行评估，根据学习情况调整学习计划，不断优化员工的职业生涯。<h3></h3>“小鸟掌学”主要基于智能手机平台进行学习。针对性、趣味性、创新性的学习方式有助于员工建立学习兴趣，将学习<br>与趣味相结合，提高学习吸收率。提高员工技能，增加企业效益。'
    ];
    $.each(itemsNone, function (i, item) {
        $(item).html(sobDownArr[i])
    });

    //右边控制按钮的点击事件
    var iNew = 4, iNewI = 4;
    items.click(function () {
        iNew = $(items).index($(this));
        sobINew()
    });

    //中央控制按钮的点击事件
    itemsNone.click(function () {
        iNew = $(itemsNone).index($(this));
        sobINew()
    });

    //iNew改变内容发生变化的函数
    var btnDown = $(".top-auto .btn .btn-down");

    function sobINew() {
        if (iNew == iNewI) {
            itemsNone.eq(iNew).stop().toggle(1000, "easeOut");
            if (btnDown.eq(iNew).css("top") == "-70px") {
                btnDown.eq(iNew).css({"transition": "all .5s linear", "top": "0"});
            } else {
                btnDown.eq(iNew).css({"transition": "all .5s linear", "top": "-70px"})
            }
        } else {
            itemsNone.slideUp(100);
            itemsNone.eq(iNew).slideDown(1000, "easeOut");
            btnDown.eq(iNewI).css({"top": "0", "transition": "all .5s linear"});
            btnDown.eq(iNew).css({"top": "-70px", "transition": "all .5s linear"})

        }
        iNewI = iNew;
        itemsNone.css("margin", "0 auto")
    }

    //团队介绍

    //向右箭头hover
    $(".sphere-of-business .control .right").hover(function () {
        $(this).addClass("right-active animated jello")
    }, function () {
        $(this).removeClass("right-active animated jello")
    });
    //向左箭头点击事件
    $(".sphere-of-business .control .left").hover(function () {
        $(this).addClass("left-active animated jello")
    }, function () {
        $(this).removeClass("left-active animated jello")
    });

    //团队介绍存内容的数组
    var banArr = [
        [
            ' <img src="images' + '/sob/banner01.png"/>',
            '暂未更新，敬请期。',
            '美男子对面的',
            '切了吗？'
        ],
        [
            '<img src="images' + '/sob/banner01.png"/>',
            '暂未更新，敬请期。',
            '恩恩',
            '切了的'
        ],
        [
            '<img src="images' + '/sob/banner01.png"/>',
            '十年Java开发经验，精通各种java框架，对于前端也有深刻的研究。',
            '张三',
            'Java工程师/经理'
        ],
        [
            '<img src="images' + '/sob/banner02.png"/>',
            '牛逼的前端工程师，牛逼的设计师，伪文艺青年一枚。',
            '李四',
            '前端工程师/设计师'
        ],
        [
            '<img src="images' + '/sob/banner01.png"/>',
            '暂未更新，敬请期。',
            '跳蛋-二师兄',
            '非人类'
        ],
        [
            '<img src="images' + '/sob/banner01.png"/>',
            '暂未更新，敬请期。',
            '非人类对面',
            '有一个美男子'
        ]
    ];

    //团队介绍box/共有内容插入
    $.each($(".ban-cont"), function (i, item) {
        $(item).html("<div class='img'>" + banArr[i][0] + "<div class='gai'></div></div><div class='present'>" + banArr[i][1] + "</div>" +
            "<div class='title'><h4>" + banArr[i][2] + "</h4><h5>" + banArr[i][3] + "</h5></div><div class='input'><div class='box'></div>" +
            "<div class='input0'>发送邮件</div></div><div class='sbo-floor'>" +
            "<ul><li class='li01'><div></div></li><li class='li02'><div></div></li><li class='li03'>" +
            "<div></div></li><li class='li04'><div></div></li></ul></div>"
        );
    });
    var iNewItems = $(".sob-banner .ban-items");

    //轮播需要的数组
    var iNewItemsArr = [];
    $.each(iNewItems, function (i, item) {
        iNewItemsArr[i] = $(item).html()
    });

    var sNew = 1, sNewI = 0;
    var banner = $(".sphere-of-business .sob-banner");
    //向右箭头点击事件
    $(".sphere-of-business .control .right").click(function () {
        sNew++;
        sNew = sNew >= 3 ? 0 : sNew;
        banner[0].style.transition = "all .5s linear";
        banner[0].style.left = "400px";
        setTimeout(function () {
            banner[0].style.transition = "all .1s  ease-in";
            banner[0].style.left = "0px";
        }, 500);
        setTimeout(function () {
            banner[0].style.transition = "";
            banner[0].style.left = "-1100px";
            sNewBanner()
        }, 600);
        sNewI = sNew;
    });

    //向左箭头点击事件
    $(".sphere-of-business .control .left").click(function () {
        sNew--;
        sNew = sNew <= -1 ? 2 : sNew;
        banner[0].style.transition = "all .5s linear";
        banner[0].style.left = "-2600px";
        setTimeout(function () {
            banner[0].style.transition = "all .1s ease-in";
            banner[0].style.left = "-2200px";
        }, 500);
        setTimeout(function () {
            banner[0].style.transition = "";
            banner[0].style.left = "-1100px";
            sNewBanner()
        }, 600);
        sNewI = sNew;
    });

    //下标点击事件
    $(".sphere-of-business .i-new .dot").click(function () {
        sNew = $(".sphere-of-business .i-new .dot").index($(this));
        if (sNewI > sNew) {
            sNew++;
            $(".sphere-of-business .control .left").click()
        } else {
            sNew--;
            $(".sphere-of-business .control .right").click()
        }
        sNewI = sNew;

    });

    //当sNew改变内容的变化
    function sNewBanner() {
        iNewItems.eq(1).html(iNewItemsArr[sNew]);
        $(".sphere-of-business .i-new .dot").removeClass("active  animated tada");
        $(".sphere-of-business .i-new .dot").eq(sNew).addClass("active  animated tada");
    }
}

//合作机构
coOperatingAgency();
function coOperatingAgency() {
    //插图
    var items = $(".co-operating-agency .logo");
    items.html("<div class='img'></div><div class='img'></div>");
    var itemsImg = $(".co-operating-agency .logo .img");
    itemsImg.html("<a></a><a></a><a></a>");
    var itemImg = $(".co-operating-agency .logo .img a");
    $.each(itemImg, function (i, item) {
        $(item).html("<img src='images/sob/logo0" + i + ".jpg'" + " />")
    });
    //更多的小效果
    var duo = $(".co-operating-agency .duo>div");
    duo.hover(function () {
        duo.css({"transition": "all .5s linear", "left": "-70px"})
    }, function () {
        duo.css({"transition": "", "left": "0"})
    })
}

//联系我们
$(".contact-us .input>div input").focus(function () {
    $(this).parent().css({"border": "1px solid #e9ff15"})
}).blur(function () {
    $(this).parent().css({"border": "1px solid #dedfe3"})
});
$(".contact-us  textarea").focus(function () {
    $(this).parent().css({"border": "1px solid #e9ff15"})
}).blur(function () {
    $(this).parent().css({"border": "1px solid #dedfe3"})
});

//页脚
var items = $(".footer .items");

//瞎搞的存页脚内容的数组（包括dom标签）
var footerItemsArr = [
    [
        '<div class="img"><img src="' + 'images/' + 'sob/footer00.jpg" alt=""/></div>',
        '<div class="content"><div class="title">地址</div>',
        '<div class="img"><img src="' + 'images/' + 'sob/xian.jpg" alt=""/></div>',
        '<p>北京市昌平区站前东街2号</p><p>回龙观田园风光综合商业楼3层</p><p>邮编：100081</p></div>'
    ],
    [
        '<div class="img"><img src="' + 'images/' + 'sob/footer01.jpg" alt=""/></div>',
        '<div class="content"><div class="title">电话</div>',
        '<div class="img"><img src="' + 'images/' + 'sob/xian.jpg" alt=""/></div>',
        '<p></p><p>总机：010-8888888</p><p></p></div>'
    ],
    [
        '<div class="img"><img src="' + 'images/' + 'sob/footer02.jpg" alt=""/></div>',
        '<div class="content"><div class="title">网络途径</div>',
        '<div class="img"><img src="' + 'images/' + 'sob/xian.jpg" alt=""/></div>',
        '<p>邮箱：cp@feicuiedu.com</p><p>微博：aaaaaaa_sina</p><p>微信：ccccccc_weixin</p></div>'
    ]
];

//导页脚内容
$.each(items, function (i, item) {
    $(item).html(footerItemsArr[i][0] + footerItemsArr[i][1] + footerItemsArr[i][2] + footerItemsArr[i][3])
});

// 返回顶部效果
var scroll = $(".scroll");
setTimeout(function () {
    scroll.hover()
}, 100);
//返回顶部按钮hover效果
scroll.find(".title").hover(function () {
    scroll.find(".title>div").css("transition", "all .5s linear", 0).css({"transform": "translateY(-50px)"}, 500);
}, function () {
    scroll.find(".title>div").css("transition", "", 0).css({"transform": "translateY(0)"}, 0)
});
//返回顶部
scroll.find(".title").click(function () {
    $('body,html').animate({scrollTop: 0}, 500);
});
//返回顶部按钮显示隐藏
$(window).scroll(function () {
    if ($(window).height() <= $(document).scrollTop()) {
        scroll.css("display", "block")
    } else {
        scroll.css("display", "none")
    }
});

//联系我们的hover效果
var last = $(".scroll .email");
var lastHtml = last.html();
last.html('');
last.hover(function(){
    last.html(lastHtml);
    last.addClass("animated jello");
    $(".scroll .email div").click(function(){
        window.open("article.html?articleName="+11+"","_self");
    });
},function(){
    last.html('');
    last.removeClass("animated jello")
});

// 百度地图API功能
var map = new BMap.Map('allmap');
var poi = new BMap.Point(104.0631966118, 30.5921707566);
map.centerAndZoom(poi, 16);
//    map.enableScrollWheelZoom();

var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
    '<img src="images'+'/sob/banner02.png"" alt="" style="float:right;zoom:1;overflow:hidden;font-size:50px;width:100px;height:100px;margin-left:3px;"/>' +
    '地址：天堂市纯洁街10号<br/>电话：(011)0101001<br/>简介：挂了后就可以到达，既方便又快捷----你值得拥有' +
    '</div>';

//创建检索信息窗口对象
var searchInfoWindow = null;
searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
    title: "百度大厦",      //标题
    width: 290,             //宽度
    height: 105,              //高度
    panel: "panel",         //检索结果面板
    enableAutoPan: true,     //自动平移
    searchTypes: [
        BMAPLIB_TAB_SEARCH,   //周边检索
        BMAPLIB_TAB_TO_HERE,  //到这里去
        BMAPLIB_TAB_FROM_HERE //从这里出发
    ]
});
var marker = new BMap.Marker(poi); //创建marker对象
marker.enableDragging(); //marker可拖拽
marker.addEventListener("click", function (e) {
    searchInfoWindow.open(marker);
});
map.addOverlay(marker); //在地图中添加marker

//    map.enableScrollWheelZoom(true);
map.disableDragging();     //禁止拖拽
setTimeout(function () {
    map.enableDragging();   //两秒后开启拖拽
    //map.enableInertialDragging();   //两秒后开启惯性拖拽
}, 2000);


marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
var top_right_navigation = new BMap.NavigationControl({
    anchor: BMAP_ANCHOR_TOP_RIGHT,
    type: BMAP_NAVIGATION_CONTROL_SMALL
}); //右上角，仅包含平移和缩放按钮
/*缩放控件type有四种类型:
 BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/

//添加控件和比例尺
function add_control() {
    map.addControl(top_left_control);
    map.addControl(top_left_navigation);
    map.addControl(top_right_navigation);
}
//移除控件和比例尺
function delete_control() {
    map.removeControl(top_left_control);
    map.removeControl(top_left_navigation);
    map.removeControl(top_right_navigation);
}

