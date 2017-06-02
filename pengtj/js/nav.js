var ss='<div class="nav"><div class="title"><span>胜林三境</span>' +
    '<span>科技有限公司</span></div><ul><li class="title"><a>首页</a>' +
    '<span class="active"></span></li><li class="down"><a>翡翠学院</a>' +
    '<div class="dot"></div><span></span> <div class="down_" id="down_0" style="display: none">' +
    '<div class="title"></div><div><span>小鸟掌学主页</span><a>〉</a></div><div><span>小鸟掌学概述</span><a>〉</a>' +
    '</div><div><span>对企业的价值</span><a>〉</a></div><div><span>小鸟掌云</span><a>〉</a>' +
    '</div><div><span>微课联盟</span><a>〉</a></div><div><span>App下载</span><a>〉</a>' +
    '</div></div></li><li><a>卓兴动态</a><span></span></li><li class="down"><a>企业文化</a>' +
    '<div class="dot"></div><span></span><div class="down_" id="down_1" style="display: none">' +
    '<div class="title"></div><div><span>公司理念</span><a>〉</a></div><div><span>公司文化</span>' +
    '<a>〉</a></div><div><span>公司氛围</span><a>〉</a></div></div></li> ' +
    '<li class="down"> <a>人力资源</a> <div class="dot"></div><span></span>' +
    '<div class="down_" id="down_2" style="display: none"><div class="title">' +
    '</div><div><span>人才理念</span><a>〉</a></div><div><span>团队介绍</span><a>〉</a>' +
    '</div> <div><span>招聘信息</span><a>〉</a></div> </div> </li> <li><a>联系我们</a><span></span></li></ul> </div>';
var jsArr =[];
jsArr[0]= ss;

//导入导航部分
$(".nav-wrap").html(jsArr[0]);
//导航部分的jQ效果
$(".nav .down").hover(function () {
    $(this).find(".down_").stop().slideDown(600, "elasticOut");
}, function () {
    $(this).find(".down_").stop().slideUp(100);
});
$(".nav li").click(function () {
    $(".nav li > span").removeClass("active");
    $(this).find("span").addClass("active");
});
//跳转处理

var company1 = $(".nav li").eq(3).find(".down_ div");
company1.click(function(){
   if($(this).index()==1){
       window.open("article.html?articleName="+5+"","_blank")
   } else if($(this).index()==2){
       window.open("article.html?articleName="+6+"","_blank")
   }else if($(this).index()==3){
       window.open("article.html?articleName="+7+"","_blank")
   }
});
var company2 = $(".nav li").eq(4).find(".down_ div");
company2.click(function(){
   if($(this).index()==1){
       window.open("article.html?articleName="+8+"","_blank")
   } else if($(this).index()==2){
       window.open("article.html?articleName="+9+"","_blank")
   }else if($(this).index()==3){
       window.open("article.html?articleName="+10+"","_blank")
   }
});
$(".nav li").eq(5).click(function(){
    window.open("article.html?articleName="+11+"","_self");
});
$(".nav li").eq(0).click(function(){
    window.open("index.html","_self")
});
$(".nav li").eq(2).click(function(){
    window.open("list.html","_self")
});
$(".nav li").eq(1).find("span").click(function(){
    var num = $(".nav li span").index($(this))-2;
    window.open("aboutxiaoniao.html?"+num+"","_self")
})

