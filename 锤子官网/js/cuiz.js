var banner=document.getElementById("banner"),bannner;
bannner="";
var bannnerimg;
bannnerimg="";
for(var i=1;i<5;i++){
    bannner+="<div class='ba"+i+"'> <img src='images/banner-bottom-"+i+".png'/></div>";
}
banner.innerHTML=bannner;
maiin="";
for(var imain=1;imain<7;imain++){
    var tltle1="<a></a><span></span>";
    var main=document.getElementById("mian"),maiin;
    maiin+="<div class='radius radius"+imain+"'><div class='tltle'>"+tltle1+"</div><div" +
        " class='rd-main rd-main"+imain+"'></div></div></div>";
}
main.innerHTML=maiin;
var mainTextLeft=main.getElementsByTagName("a"),mainTextLeft1;
var mainTextRight=main.getElementsByTagName("span"),mainTextRight1;
mainTextLeft1=[
    "热门精品",
    "官方精选",
    "品牌精选",
    "锤子科技动态",
    "锤子应用",
    "论坛精选"
];
mainTextRight1=[
    "",
    "",
    "",
    "",
    "全部应用 >",
    "前往论坛 >"
];
for(var o=0;o<6;o++){
    mainTextLeft[o].innerText=mainTextLeft1[o];
    mainTextRight[o].innerText=mainTextRight1[o]
}
var mainRdmain=main.getElementsByClassName("rd-main"),mainRdmain1;
var sifenzhiyi="";
for(var op=0;op<4;op++){
    sifenzhiyi+="<div class='min-box '></div>"
}
mainRdmain1=[
    "<div class='wrap-m'><div class='rd-min'></div><div class='rd-min'></div><div class='rd-min'></div><div class='rd-min'></div></div>",
    "<div class='wrap-m'><div class='rd-max'></div><div class='rd-min'></div><div class='rd-min'></div></div><div class='wrap-m'><div class='rd-min'></div><div class='rd-min'></div><div class='rd-min'></div><div class='rd-min'></div></div>",
    "<div class='wrap-m'><div class='rd-max'></div><div class='rd-min'></div><div class='rd-min'></div></div><div class='wrap-m'><div class='rd-min'></div><div class='rd-min'></div><div class='rd-min'></div><div class='rd-min'></div></div>",
    "<div class='min-box-wrap'>"+sifenzhiyi+"</div>",
    "<div class='min-box-wrap'>"+sifenzhiyi+"</div>",
    "<div class='min-box-wrap'>"+sifenzhiyi+"</div>"
];
for(var t=0;t<6;t++){
    mainRdmain[t].innerHTML=mainRdmain1[t]
}
var mainRdmainmax=main.getElementsByClassName("rd-max"),mainRdmainmax1;
mainRdmainmax[0].innerHTML="<img src='images/guanfang-1.png' alt=''/>";
mainRdmainmax[1].innerHTML="<img src='images/pinpai-1.jpg' alt=''/>";
var mainRdmin=main.getElementsByClassName("rd-min"),mainRdmin1;
mainRdmin1=[];
for(var rr=0;rr<16;rr++){
    mainRdmin1[rr]="";
    var pp=rr+1;
    mainRdmin1[rr]=[
        "<img src='images/remen-"+pp+".png' alt=''/><b></b><span class='mainSpan'></span><div class='mainRius mainRius"+rr+"'></div><div class='qian'></div>"
    ]
}
for(var r=0;r<16;r++){
    mainRdmin[r].innerHTML=mainRdmin1[r]
}
var mainRius=main.getElementsByClassName("mainRius"),mainRius1;
var maindin1="<div class='maindin1'><span></span></div>";
var maindin2="<div class='maindin2 active1'><span></span></div><div class='maindin2'><span></span></div>";
var maindin3="<div class='maindin3 active'><span></span></div><div class='maindin4 active'><span></span></div><div class='maindin5 active'><span></span></div>";
mainRius1=[
    maindin2,
    "",
    maindin1,
    maindin3,
    maindin2,
    maindin1,
    maindin1,
    maindin1,
    maindin2,
    "",
    "",
    "",
    maindin1,
    maindin1,
    maindin2+"<div class='maindin1'><span></span></div><div class='maindin5'><span></span></div>",
    maindin2
];
for(var bbb=0;bbb<16;bbb++){
    mainRius[bbb].innerHTML=mainRius1[bbb];
}
var mainS=main.getElementsByTagName("b"),mainS1;
mainS1=[
    "FIIL Diva 智能蓝牙无线降噪耳机",
    "《深泽直人》",
    "Smartisan T2",
    "Smartisan S-100 半入耳式耳机",
    "Smartisan M1/M1L 软胶保护套",
    "Smartisan 原装快充充电器",
    "Smartisan 坚果自拍杆",
    "Micro-USB 至 Type-C 转接头 × 2",
    "Smartisan S-1000 耳机",
    "Smartisan 二合一数据线 0.2m / 1.5m",
    "VSONIC 创始人全程参与调音",
    "《深泽直人》",
    "《日本制造》",
    "猎奇 LQ-016 手机外置镜头",
    "车听宝",
    "Sennheiser Urbanite XL 头戴线控耳机",
    "FIIL Diva 智能蓝牙无线降噪耳机"
];
var mainmainSpan=main.getElementsByClassName("mainSpan"),mainmainSpan1;
mainmainSpan1=[
    "手势触控、智能启停",
    "首次面向中国读者介绍其作品",
    "全金属中框、正反面 2.5D 玻璃面板、全网通",
    "卓越的 14.2mm 发音单元、三按键式线控",
    "TPU环保材质、细腻防滑、防油污",
    "24W 极速快充、兼容 QC3.0 和 PE+2.0",
    "通用 3.5 mm 接口、航空铝合金伸缩杆、防过敏硅胶",
    "即插即用、全面兼容",
    "VSONIC 创始人全程参与调音",
    "Type-C & Micro-USB 双接口、夜间微光灯",
    "首次面向中国读者介绍其作品",
    "盛田昭夫的日式经营学",
    "智能手机通用、采用进口光学玻璃镜片",
    "点播式车载广播电台、WIFI 直连技术",
    "专业音频技术、优质不锈钢组件、简单便携可折叠",
    "手势触控、智能启停"
];
var mainQian=main.getElementsByClassName("qian"),mainQian1;
mainQian1=[
    "¥ 999.00",
    "¥ 199.00",
    "¥ 1999.00",
    "¥ 99.00",
    "¥ 49.00",
    "¥ 69.00",
    "¥ 69.00",
    "¥ 29.00",
    "¥ 199.00",
    "¥ 39.00",
    "¥ 199.00",
    "¥ 58.00",
    "¥ 259.00",
    "¥ 199.00",
    "¥ 1699.00",
    "¥ 999.00"
];
for(var tt=0;tt<16;tt++){
    mainS[tt].innerText=mainS1[tt];
    mainmainSpan[tt].innerText=mainmainSpan1[tt];
    mainQian[tt].innerText=mainQian1[tt];
}
//页脚
var floor=document.getElementById("floor");
var floorUl=floor.getElementsByTagName("ul"),floorUl1;
var floorUl11="<li class='tltle'></li>";
for(var ttt=0;ttt<3;ttt++){
    floorUl11+="<li></li>"
}
floorUl1=[];
for(var ee=0;ee<6;ee++){
    floorUl[ee].innerHTML=floorUl11
}
var floorLI=floor.getElementsByTagName("li"),floorLI1;
floorLI1=[
    "订单服务",
    "购买指南",
    "支付方式",
    "送货政策",
    "服务支持",
    "售后服务",
    "维修门店",
    "零售门店",
    "自助服务",
    "热点咨询",
    "预约购买",
    "订单物流",
    "媒体中心",
    "新闻动态",
    "官方视频",
    "图片资源",
    "关于公司",
    "公司简介",
    "加入我们",
    "联系我们",
    "关注我们",
    "新浪微博",
    "官方微信",
    "官方贴吧"
];
for(var yy=0;yy<floorLI1.length;yy++){
    floorLI[yy].innerText=floorLI1[yy];
}
//锤子科技动态
var minBox=main.getElementsByClassName("min-box");
for(var ty=0;ty<4;ty++){
    var tg=ty+1;
    minBox[ty].innerHTML="<img src='images/dongtai-"+tg+".png'>";
}
//锤子应用
for(var vv=4;vv<8;vv++){
    var vy=vv-3;
    minBox[vv].innerHTML="<div class='title title"+vy+"'></div><a class='box-a'></a><div class='box-span'></div><div class='box-span1'></div><div class='ulr ulr"+vy+"'></div>";
}
var minBoxspan=main.getElementsByClassName("box-span"),minBoxspan1;
var minBoxspanc=main.getElementsByClassName("box-span1"),minBoxspanc1;
var minBoxa=main.getElementsByClassName("box-a"),minBoxa1;
minBoxspan1=[
    "在 Mac 和 Windows 电脑上也可以方便自如地 ",
    "雅致的信纸、精心调整的文字排版 ",
    "它示范了何为“美观、易用和人性化",
    "是一个科技论坛 "
];
minBoxa1=[
    "HandShaker",
    "锤子便签",
    "锤子桌面",
    "锤子科技论坛"
];
minBoxspanc1=[
    "管理你在 Android 手机中的内容",
    "这可能是最让人想写字的便签应用",
    "",
    "不只是科技论坛"
];
for(var ve=0;ve<4;ve++){
    minBoxspan[ve].innerText=minBoxspan1[ve];
    minBoxa[ve].innerText=minBoxa1[ve];
    minBoxspanc[ve].innerText=minBoxspanc1[ve]
}
var minUrl=main.getElementsByClassName("ulr"),minUrl1;
minUrl1=[
    "<nav><s class='minUrl1'></s><a>|</a><s class='minUrl2'></s></nav>",
    "<nav><s class='minUrl3'></s><a>|</a><s class='minUrl2'></s></nav>",
    "<nav><s class='minUrl3'></s></nav>",
    "<nav><s class='minUrl3'></s></nav>"
];
for(var lp=0;lp<4;lp++){
    minUrl[lp].innerHTML=minUrl1[lp]
}
//论坛精选
for(var ec=8;ec<12;ec++){
    var vt=ec-7;
    minBox[ec].innerHTML="<img src='images/luntan-"+vt+".png'><div class='title'></div><div class='minbox-main'></div><a class='min-box-a'></a>";
}
var minBoxpp=document.getElementsByClassName("rd-main6")[0].getElementsByClassName("min-box");
var minDiv1pp=main.getElementsByClassName("rd-main6")[0].getElementsByClassName("title");
var minDiv2pp=main.getElementsByClassName("rd-main6")[0].getElementsByClassName("minbox-main");
var minApp=main.getElementsByClassName("rd-main6")[0].getElementsByClassName("min-box-a"),minDiv1pp1,minDiv2pp1,minApp1;
minDiv1pp1=[
    "“人造人罗永浩”为您介绍 Smartisan OS",
    "锤科最有出息的孩子—M1评测",
    "细节之美 Smartisan M1L 咖啡金·皮革版「图赏」",
    "【今日话题】来论坛和锤友一起聊聊"
];
minDiv2pp1=[
    "超高效的手机桌面，加上大幅提升工作效率的 One Step （一步） 和 Big Bang （大爆炸)...",
    "M1 到底好不好用？手感如何？续航怎么样？这一篇锤友的使用评测将解答你所有关于...",
    "看着几张图，也许会不自觉地屏住呼吸。",
    "没事来论坛和一群趣味相投的锤友，坐下来打开脑洞，一起天马行空地聊聊。话题每周更..."
];
minApp1=[
    "阅读全文 >",
    "阅读全文 >",
    "阅读全文 >",
    "阅读全文 >"
];
for(var pl=0;pl<4;pl++){
    minDiv1pp[pl].innerText=minDiv1pp1[pl];
    minDiv2pp[pl].innerText=minDiv2pp1[pl];
    minApp[pl].innerText=minApp1[pl];
}

