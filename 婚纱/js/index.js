new WOW().init();

var banner = $(".banner");


//banner下面item的初始宽度
function bannerItemWidth(){
    var banner = $(".banner").width();
    var bannerItem = $(".banner-wrap .item");
    bannerItem.css({width:banner+"px"})
}
bannerItemWidth();

//banner-wrap动态设置高
var widthL = $("#wrap").width();
var item = $(".main1 .main1-img .item");
if(widthL > 400){
    item.css({width:widthL/4.1+'px'});
}else{
    item.css({width:widthL+'px'})
}
var bannerWrapItem = banner.find(".item").height();
banner.css({height:bannerWrapItem+"px"});

var vidio = $(".vidio");
var font = $(".main2 .font");
var font3 = $(".main3 .font");
var img = $(".main3>.img");
if(widthL < 600){
    vidio.css({width:widthL+"px"});
    font.css({width:widthL*0.9+"px"});
    font3.css({width:widthL+"px"});
    img.css({width:widthL+"px"});
}

$(window)[0].addEventListener('resize',function(){
    var banner = $(".banner");
    var bannerWrapItem = banner.find(".item").height();
    banner.css({height:bannerWrapItem+"px"});

    var widthL = $("#wrap").width();
    var item = $(".main1 .main1-img .item");
    if(widthL > 400){
        item.css({width:widthL/4+'px'})
    }else{
        item.css({width:widthL+'px'})
    }

    //板块2
    var vidio = $(".vidio");
    var font = $(".main2 .font");
    var font3 = $(".main3 .font");
    var img = $(".main3>.img");
    if(widthL < 600){
        vidio.css({width:widthL+"px"});
        font3.css({width:widthL+"px"});
        img.css({width:widthL+"px"});
        font.css({width:widthL*0.9+"px"})
    }
});

//轮播
var bannerWrap = $(".banner-wrap");
var arr = [
    bannerWrap.find(".item").eq(0).html(),
    bannerWrap.find(".item").eq(1).html(),
    bannerWrap.find(".item").eq(2).html()
];
var iNew=0;
function timerOut(){
    var timer = setInterval(function(){
        var banner = $(".banner").width();
        var bannerWrap = $(".banner-wrap");
        iNew++;
        iNew = iNew > 2 ? 0 : iNew;
        var iNewI = iNew+1;
        iNewI = iNewI > 2 ? 0 : iNewI;
        bannerWrap.animate({left:-banner+'px'},500,"backIn",function(){
            bannerWrap.animate({left:"0"},0);
            bannerWrap.find(".item").eq(0).html(arr[iNew]);
            bannerWrap.find(".item").eq(1).html(arr[iNewI]);
            bannerLi.removeClass('active');
            bannerLi.eq(iNew).addClass("active")
        })

    },4000);
    banner.mouseover(function(){
        clearInterval(timer)
    });
}
timerOut();

banner.mouseout(function(){
    timerOut()
});

var bannerLi = banner.find("li");
bannerLi.click(function(){
    var banner = $(".banner").width();
    var bannerWrap = $(".banner-wrap");
    var i = $(this).index();
    bannerWrap.find(".item").eq(1).html(arr[i]);
    if(bannerLi.eq(i)[0].className != 'active'){
        bannerWrap.animate({left:-banner+'px'},500,"easeOut",function(){
            bannerWrap.animate({left:"0"},0);
            bannerWrap.find(".item").eq(0).html(arr[i]);
            bannerLi.removeClass('active');
            bannerLi.eq(i).addClass("active")
        })

    }
});

//博客文章
function main5(){
    var img = $(".main5 .img img");
    img.hover(function(){
        $(this).css({transform:"scale(1.1)"})
    },function(){
        $(this).css({transform:"scale(1)"})
    })
}
main5();
var iNewI = 0;
$(window).bind('scroll',function(){
    var mian4Top = $(".main4")[0].offsetTop;
    var widthL = $(window).height();
    var scrTop = $(this).scrollTop();
    if(scrTop<mian4Top+20){
        if(scrTop > mian4Top-10-widthL && scrTop < mian4Top+10-widthL){
            iNewI++;
            if(iNewI==1){
                var h1 = $(".main4 h1");
                var arr = [];
                for(var i=0; i<4; i++){
                    arr[i] = h1.eq(i).html();
                }
                function ak47(x){
                    var e=0;
                    setInterval(function(){
                        e++;
                        if(e<=arr[x]){
                            h1.eq(x).html(e)
                        }

                    },1000/arr[x])
                }
                ak47(0);
                ak47(1);
                ak47(2);
                ak47(3);

            }else{

            }

        }else{
            iNewI=0;
        }
    }
});
