//底部共享内容的导入
$("#floor").html("<div class='background'><img src='" + "images/floor.png'></div><div class='main1'><div class='wrap'>" +
    "<div class='music'></div><div class='xu-xian'></div><div class='font'>备案声明</div></div></div>");
var musicArr = [
    "哆",
    "来",
    "咪",
    "发",
    "梭",
    "拉",
    "西"
];
$.each(musicArr, function (i, items) {
    $("#floor .music").append("<div class='mus" + i + "'><div class='item1'>" + items + "</div><div class='item2'>" + items + "</div></div>")
});

$("#floor .music>div").hover(function () {
    $(this).find(".item2").stop().animate({"top": "-1px"}, 500)
}, function () {
    $(this).find(".item2").stop().animate({"top": "-57px"}, 0)
});

var musicIndex = 0;
//音乐播放
$(".music").find(">div").click(function () {
    //让	musicIndex自增1
    musicIndex++;

    //获取当前点击的span的index，以设置需要加载的music的地址。
    var index = $(this).index();

    if (navigator.appName == "Microsoft Internet Explorer") { //如果是ie
        $("body").append('<bgsound class="myaudio' + musicIndex + '" src="music/sound0' + index + '.mp3" autostart=true loop=false>');
    } else { //其他
        $("body").append('<audio class="myaudio' + musicIndex + '" src="music/sound0' + index + '.mp3" autoplay></audio>');
    }
    var removeIndex = musicIndex;
    setTimeout(function () {
        $(".myaudio" + removeIndex).remove();
    }, 3000);

});

