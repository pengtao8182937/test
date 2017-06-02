//确定内容的json
var loca = window.location.search.split("=")[1];
if(loca==undefined){
    loca=1;
}

loca = loca == 1 ? "xiaoniaoNews1" : loca == 2 ? "xiaoniaoNews2" : loca == 3 ? "xiaoniaoNews3" : loca == 4 ? "xiaoniaoNews4" : loca == 5 ? "companyIdea" : loca == 6 ? "companyCulture" : loca == 7 ? "companyEnvironment" : loca == 8 ? "talents" : loca == 9 ? "team" : loca == 10 ? "joinUs" : loca == 11 ? "telUs" : 0;

var articleJson = articleData[loca].data;


//内容的导入
$(".min .title").html(articleJson.typeTitle);
$(".min h1").html(articleJson.typeEntitle);
$(".min .til").html("<div><a></a></div>" + articleJson.title);
$(".min .down").html("<span>" + articleJson.creatAt.split(" ")[0] + "</span>" + articleJson.creatByFullName);
$(".min .img img").attr("src", articleJson.coverImg);
$(".min .cont").html(articleJson.content);

var changeA = $("#change a");
var changeTitle = $("#change .til div");
//图标笔得书写效果
changeA.click(function () {
    changeTitle.stop().animate({"left": "-880px"}, 0, function () {
        changeTitle.stop().animate({"left": "0"}, 2000, "easeOutStrong")
    })
});

//评价的hover
var live = $(".live-img .box");
$(".live-act").css({"width": "0"});
live.hover(function () {
    $(".live-img .box .live-box").addClass("animated jello");
    $(".live-act i").css({"display": "block"});
    $(".live-act").animate({"width": "134px"}, 500, "easeOutStrong");
}, function () {
    $(".live-img .box .live-box").removeClass("animated jello");
    $(".live-act").animate({"width": "0"}, 0);
});

//评价的点击事件
var iNew = 0;
live.click(function () {
    iNew++;
    if(iNew==6){
        $(".live-down>div").html("善良的孩子...");
        liveAct()
    }
    if (iNew == 1) {
        var num = Math.floor(Math.random() * 3);
        if(num==0){
            $(".live-down>div").html("再点一次试试");
            liveAct()
            iNew=5;
        }else if(num==1){
            $(".live-down>div").html("You are a cookie");
            liveAct()
        }else{
            $(".live-down>div").html("二师兄附体！！");
            liveAct()
        }
    }

});
function liveAct(){
    $(".live-down div").css({"display":"block"}).animate({"top":"110px"},500,"elasticOut").animate({"left":"-256px"},500,"backIn").animate({"top":"0","left":"420px"},0,function(){
        $(".live-img .box .live-box").animate({"top": "0"}, 500);
        $(".live-down div").css({"display":"none"});
        $(".live-act").html("<i></i><div>喜欢(21)</div>")
    })
}

$(".nav li span").removeClass("active");
$(".nav li span").eq(17).addClass("active");

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
        console.log(1)
        window.open("article.html?articleName="+11+"","_self");
    });
},function(){
    last.html('');
    last.removeClass("animated jello")
});

