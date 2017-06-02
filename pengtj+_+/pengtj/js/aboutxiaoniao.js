// 导内容(第一页)
$(".items").eq(1).html("<div class='cont_1'><div class='cont-item1'><div class='wrap'><div class='img'><img src='images" + "/" +
    "animation/xiaoniao_welcome_icon3.gif?" + Math.random() + "' " +
    "style='-webkit-user-select:none; -moz-user-select:none; -ms-user-selec" +
    "t:none;user-select:none;'/></div><div class='hear-font'></div></div></div><div class='cont-item2'></div></div>");

//开场动画的字体隐藏部分
var font = $(".hear-font");//获取dom
font.html("<h1>小鸟掌学<h1><div class='note'>Xioaniao School</div>" +//导入dom
    "<div class='background'><div class='back1'></div><div class='back2'>" +
    "</div>学我所用、学以致用<div><div class='ad'>" +
    "还在为培训而苦恼吗？小鸟掌学帮助企业建立自己的企业学校<br/>" +
    "实现：全民全学、全民全校、全民全智（比拼式学习）！</div>" +
    "<div class='btn'><div><div class='btn1'></div><div class='btn2'></div></div></div>");

//概述的第二部分
var it1_2 = $(".items .cont-item2");
it1_2.html("<div class='banner'><div class='box'>" +
    "<h1>概述</h1><div class='title'>"+it1_2_1+"</div>" +
    "<div class='imgI'>"+it1_2_2+"</div></div><div class" +
    "='box'><div class='wrap'><div class='img2'></div><div class='cont-item-cont'></div>" +
    "<div class='cont-item-cont'></div><div class='cont-item-cont'></div>" +
    "</div></div><div class='box'><div class='wrap'><div class='img2'></div>" +
    "<div class='zuo'></div><div class='h1'>许我所用，学以致用</div><div class='you'></div>" +
    "<div class='font_1'>"+it1_3_1+"</div><div class='img_1'>" +
    "<img src='images"+"/animation/scrollon01.jpg'/></div></div></div></div>" +
    "<div class='btn-left'><div></div></div><div class='btn-right'><div></div></div>");

$.each($(".cont-item-cont"),function(i,item){
   $(item).html(it1_2_3[i])
});

//第一部分内容存入数组
var bannerCont = [];
bannerCont[0] = $(".items").eq(1).html();

//导内容（第二页）
$(".items").eq(1).html("<div class='cont_2'><div class='wrap'><div class='title'>" +
    "翡翠掌学和企业的价值</div><div class='cont2'><div class='jiazhi_top'><div class='jiazhi_left'></div>" +
    "<div class='jiazhi_right'></div></div><div class='jiazhi_cont" +
    "'></div><div class='jiazhi_bottom'><div class='jiazhi_left'></div>" +
    "<div class='jiazhi_right'></div></div></div></div></div>");

var jiazhiCont = $(".jiazhi_cont");
var jiazhiStr = "";
for(var i=0; i<6; i++){
    jiazhiStr += "<div class='jiazhi_main'><div class='jiazhi_img img-"+i+"'>"+it2_1[i]+"</div><div class='font'>"+it2_2[i]+"</div></div>"
}
jiazhiCont.html(jiazhiStr);

//第二部分内容存入数组
bannerCont[1] = $(".items").eq(1).html();

//导内容（第三页）
$(".items").eq(1).html("<div class='cont_3'><div class='wrap'><h1>小鸟掌云</h1><div class='zhangyunwrap'>" +
    "<div class='zhangyun_cont'><div class='cont1'>"+it2_3_1+"</div><div class='cont2'>"+it2_3_2+"</div>" +
    "</div></div><div class='zhangyun_dots'><div class='left'><div></div></div><div class='right'><div>" +
    "</div></div></div></div></div>");

//第三部分内容存入数组
bannerCont[2] = $(".items").eq(1).html();

//导内容（第四页）
$(".items").eq(1).html("<div class='cont_4'><div class='black'><div class='wrap'><div class='app'>" +
    "<img src='images"+"/animation/app_downcode.png'/><span>App下载</span><div class='font'>扫我下载“小鸟掌学”App</div>" +
    "</div><div class='kehu'><h1>联系客服妹纸</h1><div class='kuhu-font'>"+it3+"</div></div></div></div></div>");

//第四部分内容存入数组
bannerCont[3] = $(".items").eq(1).html();

//动画延迟
animationFun();
font = $(".animation .hear-font");
function animationFun() {
    $(".animation .img").html("<img src='images" + "/animation/xiaoniao_welcome_icon2.gif?" + Math.random() + "' " +
        "style='-webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;user-select:none;'/>");
    setTimeout(function () {
        $(".animation .img").animate({"bottom": "40%"}, 500);
        font.css("display", "block");
        font.find("h1").addClass("animated fadeInUp");
        font.find(".note").addClass("animated fadeInUp");
        font.find(".background").addClass("animated fadeInUp");
        font.find(".ad").addClass("animated fadeInUp");
        setTimeout(function () {
            $(".animation").slideUp();
        }, 1000)
    }, 5000);
}

//双击关闭开场动画
aniClick();
function aniClick() {
    var iNew = 0;
    $(document).click(function () {
        iNew++;
        if (iNew == 2) {
            $(".animation").slideUp();
        }
    })
};

//导航部分
var navLi = $(".nav li");
var navI = $(".nav i");
$.each(navLi, function (i, item) {
    navI.eq(i).css("left", $(item).width() / 2 + "px");
});


//主体部分

window.onresize = function () {//宽高的自适应
    var height = $(window).height();
    var width = $(window).width();
    $(".main-wrap").css({"height": height + "px", "width": width + "px"});
    $(".main-wrap .main").css({"height": height * 3 + "px", "width": width + "px", "top": -height + "px"});
    $(".main-wrap .main .items").css({"height": height + "px", "width": width + "px"});
};

//logo重启动画
$(".logo").click(function () {
    window.open("aboutxiaoniao.html", "_self")
});

//控制用的iNew

var iNew = 0, iNewI = 0,mainSlideTimer = null;

var loca = window.location.search.split("?")[1];
if( loca==undefined ){
    loca = 0
}
loca = loca<2 ? 0 : loca-1;
iNew = loca;

//导航点击事件
navLi.click(function () {
    iNewI = iNew;
    if($(this).index()==5){
        window.open("index.html", "_self")
    }else if($(this).index()==4 && $(this).index()==3){
        iNew=3

    }else{
        iNew = $(this).index()
    }

    if(iNew>iNewI){
        iNew--;
        mainSlideDown();
        fnxiaoniao();
    }else if(iNew<iNewI){
        iNew++;
        mainSlideUp();
        fnxiaoniao();
    }
});

$(".items").eq(1).html(bannerCont[iNew]);
navI.css("display","none");
if(iNew==3){
    navI.eq(3).add(navI.eq(4)).css("display","block")
}else{
    navI.eq(iNew).css("display","block")
}
fnxiaoniao();


//向下滚动
function mainSlideDown() {


    clearInterval(mainSlideTimer);
    mainSlideTimer = setTimeout(function () {
        var height = $(window).height();
        iNewI = iNew;
        iNew++;
        iNew = iNew>3 ? 0 : iNew<0? 3 : iNew;
        $(".items").eq(2).html(bannerCont[iNew]);
        $(".main").stop().animate({"top": -height * 2 + "px"}, 500, function () {
            $(".main").stop().animate({"top": -height + "px"},0);
            $(".items").eq(1).html(bannerCont[iNew]);
            fnxiaoniao();
            navI.css("display","none");
            if(iNew==3){
                navI.eq(3).add(navI.eq(4)).css("display","block")
            }else{
                navI.eq(iNew).css("display","block")
            }

        });
    }, 300);


}
//向上滚动
function mainSlideUp(){

    clearInterval(mainSlideTimer);
    mainSlideTimer = setTimeout(function () {
        var height = $(window).height();
        iNewI = iNew;
        iNew--;
        iNew = iNew>3 ? 0 : iNew<0? 3 : iNew;
        $(".items").eq(0).html(bannerCont[iNew]);
        $(".main").stop().animate({"top": 0}, 500, function () {
            $(".main").stop().animate({"top": -height + "px"},0);
            $(".items").eq(1).html(bannerCont[iNew]);
            fnxiaoniao();
            navI.css("display","none");
            if(iNew==3){
                navI.eq(3).add(navI.eq(4)).css("display","block")
            }else{
                navI.eq(iNew).css("display","block")
            }
        });
    }, 300)


}


//滚动触发的函数
function scrollFn(e){
    e = e || window.event;

    if(e.wheelDelta){    //这就是 ie 或者 chrome
        if( e.wheelDelta>0 ){
            //console.log("ie 或者 chrome向上滚动了")
            //slideUp();
            mainSlideUp();
        }else if( e.wheelDelta<0 ){
            //console.log("ie 或者 chrome向下滚动了")
            //slideDown();
            mainSlideDown();
        }
    }else if(e.detail){  //火狐
        if(e.detail>0){
            //console.log("火狐向下滚动了")
            //slideDown();
            mainSlideDown();
        }else if(e.detail<0){
            //console.log("火狐向上滚动了")
            //slideUp();
            mainSlideUp();
        }
    }
}
//绑定事件
if(document.addEventListener){ //针对火狐
    document.addEventListener("DOMMouseScroll",scrollFn,false);
}
//针对ie  chrome
window.onmousewheel = document.onmousewheel = scrollFn;


function fnxiaoniao(){
    var btn = $(".items .btn");
// 概述的hover

    btn.hover(function(){
        $(this).find(">div").stop().animate({"top":"0"},500);
    },function(){
        $(this).find(">div").stop().animate({"top":"-100%"},0);
    });

//概述的的点击进入下一页

    btn.click(function(){
        $(this).parents(".cont_1").animate({"top":"-100%"},500)
    });


//概述的轮播按钮hover
    $(".btn-left").hover(function(){
        $(this).find("div").stop().animate({"left":"-100%"},500)
    },function(){
        $(this).find("div").stop().animate({"left":"0"},0)
    });

    $(".btn-right").hover(function(){
        $(this).find("div").stop().animate({"left":"0"},500)
    },function(){
        $(this).find("div").stop().animate({"left":"-100%"},0)
    });

//概述第二部分的轮播
    it1_2Fn();
    function it1_2Fn(){
        var iNew = 0;
        $(".btn-left").click(function(){
            iNew--;
            iNew = iNew<0?0:iNew;
            $(this).siblings(".banner").animate({"left":-100*iNew+"%"})
        });
        $(".btn-right").click(function(){
            iNew++;
            iNew = iNew>2?2:iNew;
            $(this).siblings(".banner").animate({"left":-100*iNew+"%"})
        });
    }

//小鸟掌云的点击事件
    var zhangyunBtn = $(".cont_3 .zhangyun_dots>div");
    var zhangyunBanner = $(".cont_3 .zhangyun_cont");
    zhangyunBtn.eq(1).find("div").css({"width":"0"});
    zhangyunBtn.eq(0).click(function(){
        zhangyunBanner.animate({"left":"0"},500,"easeBothStrong");
        zhangyunBtn.eq(0).find("div").animate({"width":"100%"},500,"easeOut");
        zhangyunBtn.eq(1).find("div").animate({"width":"0"},500,"easeOut")
    });
    zhangyunBtn.eq(1).click(function(){
        zhangyunBanner.animate({"left":"-100%"},500,"easeBothStrong");
        zhangyunBtn.eq(1).find("div").animate({"width":"100%"},500,"easeOut");
        zhangyunBtn.eq(0).find("div").animate({"width":"0"},500,"easeOut")
    });

}





