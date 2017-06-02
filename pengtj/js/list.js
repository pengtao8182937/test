var changeA = $("#change a");
var changeTitle = $("#change .til div");
//图标笔得书写效果
changeA.click(function () {
    changeTitle.stop().animate({"left": "-980px"}, 0, function () {
        changeTitle.stop().animate({"left": "0"}, 2000, "easeOutStrong")
    })
});

//主体部分的内容的导入
var changeMain = $("#change .main");
changeMain.html("<div></div><div></div><div></div>");
changeMain.find("div").html("<div class='items itm-Left'></div><div class='items'></div>");
items = changeMain.find(".items");
var itemsCont = listData.listData00.data.list;
$.each(items, function (i, item) {
    items.eq(i).html("<i></i><div class='img'><img src='" + itemsCont[i].coverImg + "'>" +
        "</div><div class='right-cont'><h1>" + itemsCont[i].title + "</h1><div class='font'>" + itemsCont[i].creatAt.split(" ")[0] + "</div>" +
        "<div class='content'>" + itemsCont[i].describe + "</div></div>"
    );
});

itemHover();
itemsClick();

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
//按钮的hover
var iNew = 0;
var bottom = $("#change .bottom");
bottom.find(".buttom").hover(function () {
    bottom.find(".buttom>div").stop().animate({"top": "0"})
}, function () {
    bottom.find(".buttom>div").stop().animate({"top": "-58px"}, 0)
});

bottom.find(".buttom").click(function () {
        iNew++;
        if ( iNew == 1) {
            var mainStr = $(".main").html();
            var myDiv = $("<div class='main'></div>");
            myDiv.html(mainStr);
            var itemsCont = listData.listData01.data.list;
            $.each(myDiv.find(".items"),function(i,item){
                myDiv.find(".items img").eq(i).attr("src",itemsCont[i].coverImg);
                myDiv.find(".items h1").eq(i).html(itemsCont[i].title);
                myDiv.find(".items .font").eq(i).html(itemsCont[i].creatAt.split(" ")[0]);
                myDiv.find(".items .content").eq(i).html(itemsCont[i].describe);
            });
            $(".main").after(myDiv);
            itemHover();
            itemsClick()
        }else if(iNew==2){
            var mainStr = $(".main").eq(0).html();
            var myDiv = $("<div class='main'></div>");
            myDiv.html(mainStr);
            var itemsCont = listData.listData02.data.list;
            var ak = [itemsCont.length];
            $.each(ak,function(i,item){
                myDiv.find(".items img").eq(i).attr("src",itemsCont[i].coverImg);
                myDiv.find(".items h1").eq(i).html(itemsCont[i].title);
                myDiv.find(".items .font").eq(i).html(itemsCont[i].creatAt.split(" ")[0]);
                myDiv.find(".items .content").eq(i).html(itemsCont[i].describe);
            });
            myDiv.find(">div").eq(2).remove();
            myDiv.find(">div").eq(1).find(".items").eq(1).remove();
            $(".main").eq(1).after(myDiv);
            itemHover();
            $("#change .bottom div").eq(0).find("img").attr("src","images/sob/genduo1.png");
            itemsClick()
        }
    });

//主体部分内容的hover
function itemHover(){
    var items = $(".main .items");
    items.hover(function () {
        $(this).css({"border": "1px solid #86759e"}).stop().animate({"top": "-20px"});
        $(this).find("i").stop().animate({"left": "60px"})
    }, function () {
        $(this).css({"border": "1px solid transparent"}).stop().animate({"top": "0"});
        $(this).find("i").stop().animate({"left": "0"})
    });
}

//主体内容部分的点击事件
function itemsClick(){
    var items = $(".main .items");
    items.click(function(){
        var artStr = $(this).find("img").attr("src").slice(16,17);
        window.open("article.html?articleName="+artStr+"","_blank")
    })
}
$(".nav li span").removeClass("active");
$(".nav li span").eq(8).addClass("active");


