//仿照栅格的函数
var nav = $("#nav");
var navA = nav.find(".title a");
var wrap = $("#wrap");
var href = function(width){
    var href;
    if(width >= 1200){
        href = "css/grid1200.css";
        nav.css('width',"50%");
        wrap.css({'width':widthL*0.9+"px"})
    }else if(width >= 992){
        href = "css/grid992.css";
        nav.css('width',"50%");
        wrap.css({'width':widthL*0.9+"px"})
    }else if(width >= 768){
        href = "css/grid768min.css";
        nav.css('width',"50%");
        wrap.css({'width':widthL*0.9+"px"})
    }else{
        href = "css/grid768max.css";
        nav.css('width',"100%");
        wrap.css({'width':widthL+"px"})
    }
    return href
};

//网页刷新判断宽
var widthL = $(window).width();

var grid = $("#grid");

grid[0].href = href(widthL);

//导航高度自适应

function navheight(){
    var HeightL = $(window).height();
    var HeightLeft = nav.find(".left");
    var HeightRight = nav.find(".right");
    HeightLeft.css({'height':HeightL-90+"px"});
    HeightRight.css({'height':HeightL-90+"px"});
}
navheight();


//宽度改变自适应
$(window)[0].addEventListener('resize',function(){
    var widthL = $(window).width();
    grid[0].href = href(widthL);
    navheight();
    navPo(0);
    if(nav.css("left")==0){
        navA.css('display','block')
    }else{
        navA.css('display','none')
    }
    var wrap = $("#wrap");
    if(widthL<768){
        wrap.css({'width':widthL+"px"})
    }else{
        wrap.css({'width':widthL*0.9+"px"})
    }
    var width_12 = $(".w-12");
    var width_11 = $(".w-11");
    var width_10 = $(".w-10");
    var width_9 = $(".w-9");
    var width_8 = $(".w-8");
    var width_7 = $(".w-7");
    var width_6 = $(".w-6");
    var width_5 = $(".w-5");
    var width_4 = $(".w-4");
    var width_3 = $(".w-3");
    var width_2 = $(".w-2");
    var width_1 = $(".w-1");
    var width_S3 = $(".w-s3");
    var wrapWidth = wrap.width();
    width_1.css({width:wrapWidth/12+"px"});
    width_2.css({width:wrapWidth/6+"px"});
    width_3.css({width:wrapWidth/4+"px"});
    width_4.css({width:wrapWidth/3+"px"});
    width_5.css({width:wrapWidth/12*5+"px"});
    width_6.css({width:wrapWidth/2+"px"});
    width_7.css({width:wrapWidth/12*7+"px"});
    width_8.css({width:wrapWidth/12*8+"px"});
    width_9.css({width:wrapWidth/12*9+"px"});
    width_10.css({width:wrapWidth/12*10+"px"});
    width_11.css({width:wrapWidth/12*11+"px"});
    width_12.css({width:wrapWidth+"px"});
    width_S3.css({width:wrapWidth*3+"px"});


});

//导航搜索框的获取焦点
var navBtn = nav.find('.btn');
function NavInputFocus(dom,x){
    var navInput = dom.find("input");
    var navInputWrap = dom.find(x);
    navInput.focus(function(){
        navInputWrap.css({"borderColor":'pink'})
    });
    navInput.blur(function(){
        navInputWrap.css({"borderColor":'#919191'})
    })
}
NavInputFocus(navBtn,".input");
var article = $(".article");
NavInputFocus(article,'.btn');

//测导航初始位置确定
function navPo(x){
    var widthL = $(window).width();
    if(widthL<768){
        nav.css({left:-widthL*1.2+'px',transition:"all "+x+"s linear"},function(){
            nav.css({zIndex:'5'});
        })
    }else{
        nav.css({left:-widthL*0.45+'px',transition:"all "+x+"s linear"})
    }

}
navPo(0);

//侧导航菜单的点击事件
function onclickNav(){
    var widthL = $(window).width();
    var btn = nav.find(".right .img");
    btn.click(function(){
        if(nav.width()==widthL){
            navPo(0.5);
            navA.css('display','none');
        }else{
            if(nav.css('left')!='0px'){
                navA.css('display','block');
                nav.css({left:0+'px',transition:"all .5s linear"});
            }else{
                navPo(0.5);
                navA.css('display','none');
            }

        }
    })
}
onclickNav();

//logo上的按钮控制导航的点击事件
function onclickSelect(){
    var btn = $(".logo .select");
    btn.click(function(){
        if (nav.css('left') != '0px') {
            navA.css('display', 'block');
            nav.css({left: 0 + 'px', transition: "all .5s linear",zIndex:'26'});

        } else {
            navPo(0.5);
            navA.css('display', 'none');
        }
    })

}
onclickSelect();

//关闭
function close(){
    var close = nav.find(".title a");
   close.click(function(){
        if(nav.width()==widthL){
            navPo(0.5);
            navA.css('display','none');
        }else{
            navPo(0.5);
            navA.css('display', 'none');
        }
    })
}
close();

function noneScroll(){
    var left = nav.find(".left");
    left.mouseover(function(){

    })
}
noneScroll();

//导航下拉
function down(){
    var downA = nav.find(".down-a");
    downA.click(function(){
        var down = $(this).parent().find(".down");
        if(down.css('display')=='block'){
            $(this).html("+");
            down.slideUp()
        }else{
            $(this).html("─");
            down.slideDown()
        }

    });

}
down();



//仿栅格
function sg(){
    var widthL = $(window).width();
    var widthW = $("#wrap").width();
    var s41 = $(".s-4-1");
    var s3 = $(".s-3");
    var s46 = $(".s-4-6");
    var s51 = $(".s-5-1");
    var s71 = $(".s-7-1");
    var s61 = $(".s-6-1");
    var s421 = $(".s-4-6-12");
    var s12 = $(".s-12");
    var s31 = $(".s-3-12");
    var s9 = $(".s-9");
    var s21 = $(".s-6-12");
    var s531 = $(".s-5-3-1");
    s12.css({width:widthW+'px'});

    if(widthL>768){
        s41.css({width:s41.parent().width()/12*3+'px'});
        s46.css({width:s46.parent().width()/12*3+'px'});
        s51.css({width:s51.parent().width()/12*5+'px'});
        s71.css({width:s71.parent().width()/12*6.8+'px'});
        s61.css({width:s61.parent().width()/12*6+'px'});
        s421.css({width:s421.parent().width()/12*3+'px'});
        s31.css({width:s31.parent().width()/12*4+'px'});
        s21.css({width:s21.parent().width()/12*5.99+'px'});
        s531.css({width:s531.parent().width()/5+'px'})

    }else{
        s41.css({width:s41.parent().width()+'px'});
        s46.css({width:s46.parent().width()/12*6+'px'});
        s51.css({width:s51.parent().width()+'px'});
        s71.css({width:s71.parent().width()+'px'});
        s61.css({width:s61.parent().width()+'px'});
        s31.css({width:s31.parent().width()+'px'});
        s21.css({width:s21.parent().width()+'px'});
        if(widthL>400){
            s421.css({width:s421.parent().width()/12*6+'px'});
            s531.css({width:s531.parent().width()/2+'px'})
        }else{
            s421.css({width:s421.parent().width()+'px'});
            s531.css({width:s531.parent().width()+'px'})

        }

    }

    s9.css({width:s9.parent().width()*0.9+'px'});
    s3.css({width:s3.parent().width()/3.02+'px'});

}
sg();
$(window)[0].addEventListener('resize',function(){
    sg();
});

//logo下滑效果
function ss(){
    var logo = $('.logo');
    logo.animate({'top':-50+'px'},0,function(){
        logo.animate({"top":0},500);
    })
}
var iNew = 0;
$(window).bind('scroll',function(){
    var scrTop = $(this).scrollTop();
    if(scrTop<70){
        if(scrTop > 30 && scrTop < 70){
            iNew++;
            if(iNew==1){
                ss();
            }else{
            }

        }else{
            iNew=0;
        }
    }

});

//登录
var signDom = [
    nav.find(".title span").eq(1),
    $('.shop1'),
    $('.shop2')
];
//链接
function sign(dom){
    dom.click(function(){
        window.open('Sign.html','_blank')
    })
}

for(var i=0; i<signDom.length; i++){
    sign(signDom[i])
}

//注册
var registerDom = [
    nav.find(".title span").eq(0)
];

//链接
function register(dom){
    dom.click(function(){
        window.open('register.html','_blank')
    })
}
for(var i=0; i<registerDom.length; i++){
    register(registerDom[i])
}

//首页
var indexDom = [
    nav.find(".scroll .item span").eq(0)
];

//链接
function index(dom){
    dom.click(function(){
        window.open('index.html','_self')
    })
}
for(var i=0; i<indexDom.length; i++){
    index(indexDom[i])
}

//品牌介绍
var BrandIntroductionDom = [
    nav.find(".scroll .item span").eq(1),
    nav.find(".scroll .item span").eq(2),
    $('#footer .alink a').eq(0)
];

//链接
function BrandIntroduction(dom){
    dom.click(function(){
        window.open('Brand-introduction-1.html','_self')
    })
}
for(var i=0; i<BrandIntroductionDom.length; i++){
    BrandIntroduction(BrandIntroductionDom[i])
}

//联系我们
var BrandIntroductionDom1 = [
    nav.find(".scroll .item span").eq(3),
    nav.find(".scroll .item span").eq(16),
    $('#footer .alink a').eq(4)
];

//链接
function BrandIntroduction1(dom){
    dom.click(function(){
        window.open('Brand-introduction-2.html','_self')
    })
}
for(var i=0; i<BrandIntroductionDom1.length; i++){
    BrandIntroduction1(BrandIntroductionDom1[i])
}

//婚纱礼服
var weddingDressDom = [
    nav.find(".scroll .item span").eq(4),
    nav.find(".scroll .item span").eq(5),
    nav.find(".scroll .item span").eq(6),
    nav.find(".scroll .item span").eq(7),
    nav.find(".scroll .item span").eq(8),
    nav.find(".scroll .item span").eq(16),
    $('#footer .alink a').eq(1)
];

//链接
function weddingDress(dom,x){
    dom.click(function(){
        window.open('Wedding-dress.html?'+x+'','_self')
    })
}
for(var i=0; i<weddingDressDom.length; i++){
    var x = i==0 ? 0 : i==1 ? 0 : i==2 ? 1 : i==3 ? 2 : i==4 ? 3 : i==5 ? 0 : 0 ;
    weddingDress(weddingDressDom[i],x)
}

//微博文章
var articlePageDom = [
    nav.find(".scroll .item span").eq(15),
    $('#footer .alink a').eq(3)
];

//链接
function articlePage(dom){
    dom.click(function(){
        window.open('Article-page.html','_self')
    })
}
for(var i=0; i<articlePageDom.length; i++){
    articlePage(articlePageDom[i])
}

//婚礼系列
var weddingDom = [
    nav.find(".scroll .item span").eq(10),
    nav.find(".scroll .item span").eq(9),
    $('#footer .alink a').eq(2)
];

//链接
function wedding(dom){
    dom.click(function(){
        window.open('wedding.html','_self')
    })
}
for(var i=0; i<weddingDom.length; i++){
    wedding(weddingDom[i])
}


//婚礼系列
var weddingLinkDom = [
    nav.find(".scroll .item span").eq(11),
    nav.find(".scroll .item span").eq(12),
    nav.find(".scroll .item span").eq(13),
    nav.find(".scroll .item span").eq(14)
];

//链接
function weddingLink(dom){
    dom.click(function(){
        var num = dom==weddingLinkDom[0]?0:dom==weddingLinkDom[1]?1:dom==weddingLinkDom[2]?2:3;
        window.open('wedding-link.html?'+num,'_self')
    })
}
for(var i=0; i<weddingLinkDom.length; i++){
    weddingLink(weddingLinkDom[i])
}
