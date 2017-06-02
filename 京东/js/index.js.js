//顶部按捏的关闭效果
var topAd=document.getElementById("top-ad");
var times=topAd.getElementsByTagName("a")[0];
times.onclick=function(){
    topAd.style.transition="opacity .5s linear";
    topAd.style.opacity="0";
    setTimeout(
      function(){
          topAd.style.display="none"
      }  ,500
    );
};
//头部的轮播部分
var carousel=document.getElementById("carousel");
var images=carousel.getElementsByTagName("img");
var leftBtn=carousel.getElementsByClassName("scroll-left")[0];
var rightBtn=carousel.getElementsByClassName("scroll-right")[0];
var bottomBtn=carousel.getElementsByTagName("a");
var iNow=0;
leftBtn.onclick=function(){
    iNow++;
    if(iNow>=images.length){
        iNow=0
    }
    imagesChange();
};
rightBtn.onclick=function(){
    iNow--;
    if(iNow<0){
        iNow=images.length-1;
    }
    imagesChange();
};
for(var i=0;i<bottomBtn.length;i++){
    bottomBtn[i].index=i;
    bottomBtn[i].onmouseover=function(){
        iNow=this.index;
        imagesChange();
    }
}
//头部轮播的自主播放
var timer = null;
function autoMove(){
    timer = setInterval(function(){
        rightBtn.onclick();
    }, 1000);
}
autoMove();
carousel.onmouseover = function(){
    clearInterval(timer);
};
carousel.onmouseout = function(){
    autoMove();
};
//头部轮播的点击方法
function imagesChange(){
    for(var i=0;i<images.length;i++){
        images[i].style.display="none";
        bottomBtn[i].className="";
    }
    images[iNow].style.display="block";
    bottomBtn[iNow].className="active";
}
//秒杀栏的平移效果
var Msing=document.getElementById("Msing-wrap");
var MsingImages=Msing.getElementsByClassName("MSimg");
var MScarousel=document.getElementById("MScarousel");
var MsIeftBtn=MScarousel.getElementsByClassName("srrow-left")[0];
var MsRightBtn=MScarousel.getElementsByClassName("srrow-right")[0];
var bNow=1;
MsRightBtn.onclick=function(){
    bNow++;
    if(bNow>=3){
        Msing.style.transition="all .5s linear";
        transaleMS();
        setTimeout(function(){
            bNow=0;
            Msing.style.transition="none";
            transaleMS();
        },500);
    }else if(bNow<3) {
        Msing.style.transition = "all .5s linear";
        transaleMS();
    }
    console.log(bNow)
};
MsIeftBtn.onclick=function(){
    bNow--;
    if(bNow<=0) {
        Msing.style.transition = "all .5s linear";
        transaleMS();
        setTimeout(function () {
            bNow = 3;
            Msing.style.transition = "none";
            transaleMS();
        }, 500);
    }else if(bNow<=0) {
        Msing.style.transition = "all .5s linear";
        transaleMS();
        setTimeout(function () {
            bNow = 3;
            Msing.style.transition = "none";
            transaleMS();
        }, 500);
    } else if(bNow>0){
        Msing.style.transition = "all .5s linear";
        transaleMS();
    }
    console.log(bNow)
};
function transaleMS(){
    var pixel=-bNow*1000;
    pixel="translatex("+pixel+"px)";
    Msing.style.transform=pixel;
}
//右边小链接的第二板块的鼠标进入效果
var sales=document.getElementById("sales-1");
var saIeft=sales.getElementsByTagName("a")[0];
var saRight=sales.getElementsByTagName("a")[1];
var saUlChuxiao=sales.getElementsByTagName("ul")[0];
var saUlgengduo=sales.getElementsByTagName("ul")[1];
var saIxiabiaoxian=sales.getElementsByTagName("i")[0];
saIeft.onmouseover = function(){
    saUlgengduo.style.display="";
    saUlChuxiao.style.display="block";
    saUlgengduo.style.display="none";
    saIxiabiaoxian.style.left="0";
};
saRight.onmouseover = function(){
    saUlgengduo.style.display="";
    saUlChuxiao.style.display="none";
    saUlgengduo.style.display="block";
    saIxiabiaoxian.style.left="50px";
};
//右边小链接的第三板块的小链接的鼠标进入效果
var gongnengFuntion=document.getElementById("function");
var subtract_1=gongnengFuntion.getElementsByClassName("subtract-1")[0];
var subtract_2=gongnengFuntion.getElementsByClassName("subtract-2")[0];
var ring_1=gongnengFuntion.getElementsByClassName("ring-1")[0];
var ring_2=gongnengFuntion.getElementsByClassName("ring-2")[0];
var downTitle=gongnengFuntion.getElementsByClassName("down-title-wrap")[0];
var downTitle_1=gongnengFuntion.getElementsByTagName("li")[0];
var downTitle_2=gongnengFuntion.getElementsByTagName("li")[1];
var downTitle_3=gongnengFuntion.getElementsByTagName("li")[2];
var downTitle_4=gongnengFuntion.getElementsByTagName("li")[3];
var title01=gongnengFuntion.getElementsByClassName("function-box")[0];
var title02=gongnengFuntion.getElementsByClassName("function-box")[1];
var title03=gongnengFuntion.getElementsByClassName("function-box")[2];
var title_1=gongnengFuntion.getElementsByClassName("function-img")[0];
var title_2=gongnengFuntion.getElementsByClassName("function-img")[1];
var title_3=gongnengFuntion.getElementsByClassName("function-img")[2];
var title_4=gongnengFuntion.getElementsByClassName("function-img")[3];
var downFunction=gongnengFuntion.getElementsByClassName("down-functin")[0];
var downClose=gongnengFuntion.getElementsByClassName("close")[0];
var huafei=gongnengFuntion.getElementsByClassName("huafei")[0];
var jipiao=gongnengFuntion.getElementsByClassName("jipiao")[0];
var jiudian=gongnengFuntion.getElementsByClassName("jiudian")[0];
var youxi=gongnengFuntion.getElementsByClassName("youxi")[0];
//右边小链接的导航的进入效果
title_1.onmouseover = function(){
    topdown();
    downTitle_1.className="active";
    dispiaymafan();
    huafei.style.display="block";
};
title_2.onmouseover = function(){
    topdown();
    downTitle_2.className="active";
    dispiaymafan();
    jipiao.style.display="block";
};
title_3.onmouseover = function(){
    topdown();
    downTitle_3.className="active";
    dispiaymafan();
    jiudian.style.display="block";
};
title_4.onmouseover = function(){
    topdown();
    downTitle_4.className="active";
    dispiaymafan();
    youxi.style.display="block";
};
function dispiaymafan(){
    huafei.style.display="none";
    jipiao.style.display="none";
    jiudian.style.display="none";
    youxi.style.display="none";
}
function topdown(){
    downTitle_1.className="";
    downTitle_2.className="";
    downTitle_3.className="";
    downTitle_4.className="";
    title01.style.transition="all .5s linear";
    title01.style.transform="translatey(-70px)";
    title02.style.display="none";
    title03.style.display="none";
    downTitle.style.display="";
    downTitle.style.display="block";
    downTitle.style.transition="all .5s linear";
    downTitle.style.transform="translatey(-210px)";
    downFunction.style.transition="all .7s linear";
    downFunction.style.transform="translatey(-336px)";
    subtract_1.style.transition="all .5s linear";
    subtract_1.style.transform="scale(0)";
    subtract_2.style.transition="all .5s linear";
    subtract_2.style.transform="scale(0)";
    ring_1.style.background=" #e01121";
    ring_1.style.transition="all .5s linear";
    ring_1.style.transform="scale(1)";
    ring_2.style.background=" #e01121";
    ring_2.style.transition="all .5s linear";
    ring_2.style.transform="scale(1)";

}
//关闭按钮的返回效果
downClose.onclick=function(){
    title02.style.display="block";
    title03.style.display="block";
    title01.style.transform="translatey(0)";
    downTitle.style.transition="";
    downTitle.style.transform="translatey(210px)";
    downFunction.style.transition="";
    downFunction.style.transform="translatey(336px)";
    subtract_1.style.transition="all .5s linear";
    subtract_1.style.transform="scale(1)";
    subtract_2.style.transition="all .5s linear";
    subtract_2.style.transform="scale(1)";
    ring_1.style.transition="all .5s linear";
    ring_1.style.transform="scale(0)";
    ring_2.style.transition="all .5s linear";
    ring_2.style.transform="scale(0)";
};
//小链接的当前项效果
downTitle_1.onmouseover=function(){
    downTitleActive();
    downTitle_1.className="active";
    dispiaymafan();
    huafei.style.display="block";
};
downTitle_2.onmouseover=function(){
    downTitleActive();
    downTitle_2.className="active";
    dispiaymafan();
    jipiao.style.display="block";
};
downTitle_3.onmouseover=function(){
    downTitleActive();
    downTitle_3.className="active";
    dispiaymafan();
    jiudian.style.display="block";
};
downTitle_4.onmouseover=function(){
    downTitleActive();
    downTitle_4.className="active";
    dispiaymafan();
    youxi.style.display="block";
};

function downTitleActive(){
    downTitle_1.className="";
    downTitle_2.className="";
    downTitle_3.className="";
    downTitle_4.className="";
};
//麻烦的框
var mafan=document.getElementById("mafan");
//话费
var mftitleHafei=mafan.getElementsByClassName("mftitle")[0];
var mftitleA1=mafan.getElementsByTagName("a")[0];
var mftitleA2=mafan.getElementsByTagName("a")[1];
var mftitleA3=mafan.getElementsByTagName("a")[2];
var downMfMain11=mafan.getElementsByClassName("down-mf-main")[0];
var downMfMain12=mafan.getElementsByClassName("down-mf-main")[1];
var downMfMain13=mafan.getElementsByClassName("down-mf-main")[2];
mftitleA1.onmouseover=function(){
    titlejingrunone();
    mftitleA1.className="active";
    downMfMain11.style.display="block";
};
mftitleA2.onmouseover=function(){
    titlejingrunone();
    mftitleA2.className="active";
    downMfMain12.style.display="block";
};
mftitleA3.onmouseover=function(){
    titlejingrunone();
    mftitleA3.className="active";
    downMfMain13.style.display="block";
};

function titlejingrunone(){
    mftitleA1.className="";
    mftitleA2.className="";
    mftitleA3.className="";
    downMfMain11.style.display="none";
    downMfMain12.style.display="none";
    downMfMain13.style.display="none";
}
//机票
var mftitleA4=mafan.getElementsByTagName("a")[10];
var mftitleA5=mafan.getElementsByTagName("a")[11];
var mftitleA6=mafan.getElementsByTagName("a")[12];
var mftitleA7=mafan.getElementsByTagName("a")[17];
var mftitleA8=mafan.getElementsByTagName("a")[18];
var mftitleA9=mafan.getElementsByTagName("a")[20];
var mftitleA10=mafan.getElementsByTagName("a")[21];
var mftitleA11=mafan.getElementsByTagName("a")[22];
var ackli01,ackli02,ackli013,ackli014,ackli015;
var downMfMain21=mafan.getElementsByClassName("down-mf-main")[3];
var downMfMain22=mafan.getElementsByClassName("down-mf-main")[4];
var downMfMain23=mafan.getElementsByClassName("down-mf-main")[5];
var downMfMain31=mafan.getElementsByClassName("down-mf-main")[6];
var downMfMain32=mafan.getElementsByClassName("down-mf-main")[7];
var downMfMain41=mafan.getElementsByClassName("down-mf-main")[8];
var downMfMain42=mafan.getElementsByClassName("down-mf-main")[9];
var downMfMain43=mafan.getElementsByClassName("down-mf-main")[10];
mftitleA4.onmouseover=function(){
    ackli01=setTimeout(function(){
        classNameA4none();
        mftitleA4.className="active-havor active";
    },500);
    downMfMain21.style.transform="translate(0)";
    downMfMain22.style.transform="translatex(0)";
    downMfMain23.style.transform="translate(0)"
};
mftitleA4.onmouseleave=function(){
    clearTimeout(ackli01)
};
mftitleA5.onmouseover=function(){
    ackli02=setTimeout(function(){
        classNameA4none();
        mftitleA5.className="active-havor active";
    },500);
    downMfMain21.style.transform="translatex(-190px)";
    downMfMain22.style.transform="translatex(-190px)";
    downMfMain23.style.transform="translate(0)"
};
mftitleA5.onmouseleave=function(){
    clearTimeout(ackli02)
};
mftitleA6.onmouseover=function(){
    ackli013=setTimeout(function(){
        classNameA4none();
        mftitleA6.className="active-havor active";
    },500);
    downMfMain21.style.transform="translatex(-190px)";
    downMfMain22.style.transform="translatex(-380px)";
    downMfMain23.style.transform="translate(-190px)"
};
mftitleA6.onmouseleave=function(){
    clearTimeout(ackli013)
};
mftitleA7.onmouseover=function(){
    ackli014=setTimeout(function(){
        classNameA4none1();
        mftitleA7.className="active-havor active";
    },500);
    downMfMain31.style.transform="translatex(0)";
    downMfMain32.style.transform="translatex(0)";
};
mftitleA7.onmouseleave=function(){
    clearTimeout(ackli014)
};
mftitleA8.onmouseover=function(){
    ackli015=setTimeout(function(){
        classNameA4none1();
        mftitleA8.className="active-havor active";
    },500);
    downMfMain31.style.transform="translatex(-190px)";
    downMfMain32.style.transform="translatex(-190px)";
};
mftitleA8.onmouseleave=function(){
    clearTimeout(ackli015)
};
mftitleA9.onmouseover=function(){
    classNameA4none2();
    mftitleA9.className="active-havor active";
    downMfMain41.style.transform="translatex(0)";
    downMfMain42.style.transform="translatex(0)";
    downMfMain43.style.transform="translatex(0)";
};
mftitleA10.onmouseover=function(){
    classNameA4none2();
    mftitleA10.className="active-havor active";
    downMfMain41.style.transform="translatex(-190px)";
    downMfMain42.style.transform="translatex(-190px)";
    downMfMain43.style.transform="translatex(0)";
};
mftitleA11.onmouseover=function(){
   classNameA4none2();
    mftitleA11.className="active-havor active";
    downMfMain41.style.transform="translatex(-190px)";
    downMfMain42.style.transform="translatex(-380px)";
    downMfMain43.style.transform="translatex(-190px)";
};
function classA4none(){
    downMfMain21.style.display="none";
    downMfMain22.style.display="none";
    downMfMain23.style.display="none";
}
function classNameA4none(){
    mftitleA4.className="active-havor active-1";
    mftitleA5.className="active-havor active-1";
    mftitleA6.className="active-havor active-1";
};
function classNameA4none1(){
    mftitleA7.className="active-havor active-1";
    mftitleA8.className="active-havor active-1";
};
function classNameA4none2(){
    mftitleA11.className="active-havor";
    mftitleA9.className="active-havor";
    mftitleA10.className="active-havor";
};

//游戏
//排行榜切换效果
var goodMain=document.getElementById("good-main");
var ranking01=goodMain.getElementsByClassName("ranking_0-wrap")[0];
var ranking02=goodMain.getElementsByClassName("ranking_0-wrap")[1];
var ranking03=goodMain.getElementsByClassName("ranking_0-wrap")[2];
var ranking04=goodMain.getElementsByClassName("ranking_0-wrap")[3];
var ranking05=goodMain.getElementsByClassName("ranking_0-wrap")[4];
var rankingTitle01=goodMain.getElementsByTagName("li")[0];
var rankingTitle02=goodMain.getElementsByTagName("li")[1];
var rankingTitle03=goodMain.getElementsByTagName("li")[2];
var rankingTitle04=goodMain.getElementsByTagName("li")[3];
var rankingTitle05=goodMain.getElementsByTagName("li")[4];
rankingTitle01.onmouseover=function(){
    noneRanling();
    ranking01.style.display="block";
    rankingTitle01.className="active";
};
rankingTitle02.onmouseover=function(){
    noneRanling();
    ranking02.style.display="block";
    rankingTitle02.className="active";
};
rankingTitle03.onmouseover=function(){
    noneRanling();
    ranking03.style.display="block";
    rankingTitle03.className="active";
};
rankingTitle04.onmouseover=function(){
    noneRanling();
    ranking04.style.display="block";
    rankingTitle04.className="active";
};
rankingTitle05.onmouseover=function(){
    noneRanling();
    ranking05.style.display="block";
    rankingTitle05.className="active";
};
function noneRanling(){
    ranking01.style.display="none";
    ranking02.style.display="none";
    ranking03.style.display="none";
    ranking04.style.display="none";
    ranking05.style.display="none";
    rankingTitle01.className="";
    rankingTitle02.className="";
    rankingTitle03.className="";
    rankingTitle04.className="";
    rankingTitle05.className="";
}
//小商标的点击轮换效果
var maxNaw;
var maxLeft=document.getElementsByClassName("left");//[maxNaw];
var maxRight=document.getElementsByClassName("right");//[maxNaw+1];
var maxBottomdown=document.getElementsByClassName("max-bottom-down")//[maxNaw-1];
for(var m=1;m<16;m++){
    maxLeft[m].onclick=function(){
        console.log(maxBottomdown[m-1]);
    };
}
//返回顶部
var rightNav = document.getElementsByClassName("right-nav")[7];
rightNav.onclick = function(){
    window.scrollTo( 0,0 );
};
//滚动条
var fixd = document.getElementById( "fixd" );
fixd.innerHTML = "<div style='z-index=999999;width: 100%;height: 100px;background: red;top:0;left:0;position: fixed;display: none'></div>";
window.onscroll = function(){
  if( document.body.scrollTop > 800 ){
      fixd.getElementsByTagName( "div" )[0].style.display = "block";
      fixd.getElementsByTagName( "div" )[0].style.zIndex = 9999;
  }else{
      fixd.getElementsByTagName( "div" )[0].style.display = "none";
      fixd.getElementsByTagName( "div" )[0].style.zIndex = 9999;
  }
};