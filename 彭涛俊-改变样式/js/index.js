$("li").eq(0).css("background","red");
$("li").eq(1).css("background","#ffef2c");
$("li").eq(2).css("background","#2dff22");
$("li").eq(3).css("background","#426cff");
$("li").eq(4).css("background","#ff47d8");

$("li").click(function(){
    var num = $(this).index() + 1 ;
    $("link").eq(1)[0].href = "css/color"+num+".css"
});