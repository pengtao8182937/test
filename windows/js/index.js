//高度的一些自适应
(function(){
    $("body").css("height",$(window).height());
    var menu = $('.menu');
    var calendar = $('#calendar');
    var visibleMenu = $('.visible_menu');
    menu.css('height',$(window).height()-100);
    calendar.css('height',$(window).height()-51);
    visibleMenu.css('height',menu.height()-90);

    $(window).bind('resize',function(){
        $("body").css("height",$(window).height());
        menu.css('height',$(window).height()-100);
        calendar.css('height',$(window).height()-51);
        visibleMenu.css('height',menu.height()-90);
    });
})();


//开始菜单
$(".start").mousedown(function(){
    $(".menu").toggle(200);
    var menu = $(".context_menu");

    var menuRightHeader = $('.menu_right_header');
    menuRightHeader.show();
    
    menu.hide();
    return false;
});

//点击空余地方的时候
$(document).mousedown(function(){
    //隐藏开始菜单
    $(".menu").hide(0);

    var allMenu = $('.all_menu');
    if(allMenu[0].title=='打开你的程序列表'){

    }else{
        menuTiggle()
    }
    //去除当前选中项
    $(".dsk_icon").removeClass("active");

    //如果有真正重命名的icon，需要确认重命名
    doreName();

    //隐藏右键菜单
    $(".context_menu").hide();

    //隐藏日历
    var date = $('#date');
    var calendar = $('#calendar');
    calendar.hide(300);
    var menuContSearch = $('.menu_cont_search');
    menuContSearch.hide();
    calendar.mousedown(function(e){
        e.stopPropagation();
    });
    date.on('mousedown',function(){
        return false
    });


});

//开始菜单阻止冒泡事件
/*$('.menu').on("contextmenu",function(e){
    console.log(111)
    e.stopPropagation();
});*/
$('.menu').on('mousedown',function(e){
    e.stopPropagation();
});

//开始菜单的点击切换
(function(){
    var allMenu = $('.all_menu');
    var input = $('.menu_left .search_menu input');
    allMenu.click(function(){
        menuTiggle()
    });
    var focusI = false;
    input.focus(function(){
        focusI = true;
    });
    input.blur(function(){
        focusI = false;
        input[0].value = ''
    });
    //回车搜索
    $(window).on('keydown',function(e){
        var e = e || window.event;
        if(e.keyCode==13){
           if(focusI == true){
               var val = input.val();
               //处理val的方法
               function valC(val){
                   var item = $('.menu .item');
                   var itemArr = [];
                   item.each(function(i,item){
                       itemArr[i] = item.innerText
                   });
                   var iNew = -1;
                   //遍历数组接收到筛选结果存到itemArrActive中
                   if(val != ''){
                       var itemArrActive = [];
                       for(var i=0; i<itemArr.length; i++){
                           var arr = itemArr[i].split(val);

                           if (arr.length > 1) {
                               iNew++;
                               itemArrActive[iNew] = itemArr[i];
                           }

                       }
                   }else{
                       itemArrActive = null;
                   }
                   return itemArrActive

               }
               var itemArrActive = valC(val);
               var menuContSearch = $('.menu_cont_search');
               var menuContSearchBox = menuContSearch.find('.menu_cont_box');
               var itemStr = '';
               var menuRightHeader = $('.menu_right_header');
               if(itemArrActive==null){
                   menuContSearch.hide(20);
               }else if(itemArrActive.length==0){
                   itemStr += '<div class="search_item_null">没有与搜索条件匹配的项</div>';
                   menuContSearchBox.html(itemStr);
                   menuContSearch.show(20);
                   var menuInput = menuContSearch.find('input');
                   menuInput.val(input.val());
                   menuRightHeader.hide()
               }else{
                   for(var i=0; i<itemArrActive.length; i++){
                       itemStr += '<div class="search_item">'+itemArrActive[i]+'</div>';
                   }
                   menuContSearch.show(20);
                   menuContSearchBox.html(itemStr);
                   menuInput = menuContSearch.find('input');
                   menuInput.val(input.val());
                   menuRightHeader.hide()
               }
               menuContSearch.find('input').change(function(){
                   var itemStr = '';
                   var str = menuContSearch.find('input').val();
                   var itemArrActive = valC(str);
                   if(itemArrActive==null){
                       menuContSearch.hide(20);
                       menuRightHeader.show();
                   }else if(itemArrActive.length==0){
                       itemStr += '<div class="search_item_null">没有与搜索条件匹配的项</div>';
                       menuContSearchBox.html(itemStr);
                   }else{
                       for(var i=0; i<itemArrActive.length; i++){
                           itemStr += '<div class="search_item">'+itemArrActive[i]+'</div>';
                       };
                       menuContSearchBox.html(itemStr);
                   }
               })

           }

        }
    })


})();

//开始菜单隐藏的方法
function menuTiggle(){
    var allItemMenu = $(".all_item_menu");
    var allMenu = $('.all_menu');
    var programMenu = $('.program_menu');
    var shortcutMenu = $('.shortcut_menu');
    allItemMenu.toggle(300);
    programMenu.toggle(300);
    shortcutMenu.toggle(300);
    if(allMenu[0].title=='打开你的程序列表'){
        allMenu[0].title='返回上一视图';
        allMenu.find('span').html('◀');
        allMenu.find('a').html('返回');
    }else{
        allMenu[0].title='打开你的程序列表';
        allMenu.find('span').html('▶');
        allMenu.find('a').html('所有程序');
    }
}
//确认重命名的方法
function doreName(){
    //console.log("触发了确认重命名函数");
    var remaneInput = $(".dsk_icon input:visible");
    if(remaneInput.length>0){
        remaneInput.siblings("p").text(remaneInput.hide().val()).show();
        remaneInput.parent().removeClass("editing");
    }
}

//调用图标排列的方法
showIcons();
//动态排列图标的方法
function showIcons(){
    var dskIcons = $(".dsk_icon");
    var ioncsConfig = {
        oneTime:300,
        H:103,
        W:100,
        Lindex:0,
        Tindex:-1
    };

    dskIcons.each(function(index){
        ioncsConfig.Tindex++;
        var top = ioncsConfig.Tindex*ioncsConfig.H;
        if(top>$(window).height()-140){
            ioncsConfig.Tindex = 0;
            top = ioncsConfig.Tindex*ioncsConfig.H;
            ioncsConfig.Lindex++;
        }
        var _this = this;
        var left = ioncsConfig.Lindex*ioncsConfig.W;
        //参数中的ele也代表this
        setTimeout(function(){
            //console.log(this);
            $(_this).animate({top:top,left:left},ioncsConfig.oneTime).show();
        },20*index)

    })

}

//检测window调整大小的时候
var resizeTimer = null;
$(window).resize(function(){
    //使用定时器只让调整执行一次
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){
        showIcons();
    },200)

});


//双击重命名(非正常双击，而是在选中情况下再点一次)
$(".icon_cont").on("mousedown",".dsk_icon p",function(e){

    if($(this).parent().hasClass("active") && $(".dsk_icon.active").length==1){
        $(this).parent().addClass("editing").removeClass("active");
        //console.log("重命名啦");
        var p = $(this).hide();
        var input = $(this).siblings("input");
        input.css("display","block").val(p.text()).focus().select()
            .keydown(function(e){
                if(e.keyCode == 13){
                    p.text(input.hide().val()).show().parent().removeClass("editing");

                }else if(e.keyCode == 27){
                    input.hide();
                    p.show().parent().removeClass("editing");
                }
            });
        return false;
    }
});


$(".icon_cont").on("mousedown",".dsk_icon",function(e){

    //如果真正编辑，就不拖动
    if(!$(this).hasClass("editing")){
        //return false;

        doreName();

        var activeIcon = $(".dsk_icon.active");
        if(activeIcon.length>1){
            window.deletAll = false;
            window.dragAll = true;
            activeIcon.each(function(index,ele){
                doDragone.call(this, "dragAll" , index==activeIcon.length-1);
            });
        }else{
            $(this).addClass("active").siblings().removeClass("active");
            doDrag.call(this);
        }
    }

    //拖动多个中的一个
    function doDragone(dragAll,ifLast){
        var cloneDom = $(this).clone().css("opacity","0.5").appendTo("body");
        var disX = e.pageX - $(this).position().left;
        var disY = e.pageY - $(this).position().top;
        var _this = this;
        var dskIcons = $(".dsk_icon");

        $(document).on("mousemove.iconDrag",function(e){
            cloneDom.css({left:e.pageX-disX,top:e.pageY-disY});
        });

        $(document).on("mouseup.iconDrag",function(e){
            $(document).off(".iconDrag");

            var left = cloneDom.position().left;
            var top = cloneDom.position().top;
            left = Math.round(left/100)*100;
            top = Math.round(top/103)*103;

            var flag = true;
            if(top<-50 || left<-50 || top>$(window).height()-103 || left>$(window).width()-50){
                flag = false;
            }

            dskIcons.not(".active").each(function(index,ele){
                if( $(this).position().left==left && $(this).position().top==top){

                    flag = false;
                    if($(this).hasClass("recycle") &&  !$(_this).hasClass("recycle")){
                        //$(_this).remove();
                        window.deletAll = true;
                        //return false;  //特别说明：在jQ的each中，return false表示终止遍历，不阻止后面代码执行(类似 break)，return true,表示跳过本次遍历，类似continue
                    }

                }
            });
            //代表当前这个可以挪动
            if(flag){
                //$(_this).css({left:left,top:top}).removeClass("active");
                $(_this).attr({myLeft:left,myTop:top});
            }else{
                window.dragAll = false;
            }
            cloneDom.remove();
            //console.log(ifLast);
            if(ifLast){
                //console.log("删除："+window.deletAll,"拖动"+window.dragAll);
                if(window.deletAll){
                    activeIcon.remove();
                    $(".recycle .icon").addClass("hasDust");
                }else if(window.dragAll){
                    activeIcon.each(function(){
                        $(this).css({left:$(this).attr("myLeft")+"px",top:$(this).attr("myTop")+"px"}).removeClass("active");
                    })
                }
            }

        });
    }

    //只拖动一个
    function doDrag(){
        var cloneDom = $(this).clone().css("opacity","0.5").appendTo("body");
        var disX = e.pageX - $(this).position().left;
        var disY = e.pageY - $(this).position().top;
        var _this = this;
        var dskIcons = $(".dsk_icon");

        $(document).on("mousemove.iconDrag",function(e){
            cloneDom.css({left:e.pageX-disX,top:e.pageY-disY});
        });

        $(document).on("mouseup.iconDrag",function(e){
            $(document).off(".iconDrag");

            var left = cloneDom.position().left;
            var top = cloneDom.position().top;
            left = Math.round(left/100)*100;
            top = Math.round(top/103)*103;

            if(top<0){
                top=0
            }else if(top>$(window).height()-153){
                top=$(window).height()-153;
                top = Math.round(top/103)*103;
            }
            if(left<0){
                left=0
            }else if(left>$(window).width()-100){
                left=$(window).width()-100;
                left = Math.round(left/100)*100;
            }


            var flag = true;
            dskIcons.each(function(index,ele){
                if( $(this).position().left==left && $(this).position().top==top ){
                    flag = false;
                    if($(this).hasClass("recycle") &&  !$(_this).hasClass("recycle")){
                        $(_this).remove();
                        $(".recycle .icon").addClass("hasDust");
                        //return false;  //特别说明：在jQ的each中，return false表示终止遍历，不阻止后面代码执行(类似 break)，return true,表示跳过本次遍历，类似continue
                    }
                }
            });
            if(flag){
                $(_this).css({left:left,top:top}).removeClass("active");
            }
            cloneDom.remove();
        });
    }

    e.stopPropagation();

});

//拖动多选
(function(){
    $(document).on("mousedown",function(e){
        var dskIcons = $(".dsk_icon");
        var mask = $(".mask");
        var startX = e.pageX;
        var startY = e.pageY;
        mask.css({left:startX,top:startY}).show();
        $(document).on("mousemove.select",function(e){
            var disX = e.pageX - startX;
            var disY = e.pageY - startY;
            //console.log(startX,disX);
            if( disX>=0 && disY>0 ){
                mask.css({width:disX,height:disY,left:startX,top:startY});
            }else if( disX>0 && disY<=0 ){
                mask.css({width:disX,height:-disY,left:startX,top:e.pageY})
            }else if( disX<=0 && disY<0 ){
                mask.css({width:-disX,height:-disY,top:e.pageY,left:e.pageX})
            }else /*if( disX<0 && disY>=0 )*/{
                mask.css({width:-disX,height:disY,left:e.pageX,top:startY})
            }


            var maskW = mask.width();
            var maskH = mask.height();
            var maskL = mask.position().left;
            var maskT = mask.position().top;

            dskIcons.each(function(index,ele){
                var eleW = $(ele).width();
                var eleH = $(ele).height();
                var eleL = $(ele).position().left;
                var eleT = $(ele).position().top;
                if(maskW+maskL<eleL){
                    $(ele).removeClass("active");
                }else if(eleW+eleL<maskL){
                    $(ele).removeClass("active");
                }else if(maskT+maskH<eleT){
                    $(ele).removeClass("active");
                }else if(eleH+eleT<maskT){
                    $(ele).removeClass("active");
                }else{
                    $(ele).addClass("active");
                }
            })
        });

        $(document).on("mouseup.select",function(e){
            $(document).off(".select");
            mask.css({width:0,height:0}).hide();
        });
    })


})();



//模拟双击效果
var dblclickTimer = null;
//小图标背景的定位位置
var littleIconData = {"QQ":"-128px -409px","computer":"14px -346px","recycle":"14px -409px","QQMusic":"-128px -347px","webstorm":"-53px -346px","HBuilder":"-274px -347px"};
$(".icon_cont").on("mousedown",".dsk_icon",function(){
    //阻止右键菜单的默认事件
    $(this).on('contextmenu',function(){
        return false;
    });

    //如果在300毫秒内两次出发鼠标按下事件，表示双击了
    if($(this).hasClass("dblclickOn")){
        $(this).removeClass("dblclickOn");
        //创建弹窗
        var win = $("<div class='win'></div>");
        var winBtns = $('<div class="winbtns"><a></a><a></a><a></a></div>');
        var fIcon = $('<div class="icon"></div>');
        var tiyeName = $(this).find("div").attr("typename");
        if(tiyeName){
            fIcon.css("background-position",littleIconData[ tiyeName ]);
            win.css({left:winL,top:winT,"z-index":100,"background-image":"url(images/"+ tiyeName +".jpg)"});
        }


        //随机位置
        //预设的窗口宽高680  370
        var winL = ($(window).width()-680)/2 + (Math.random()-0.5)*200;
        var winT = ($(window).height()-370)/2 + (Math.random()-0.5)*200;
        if(winL<0){
            winL=0;
        }
        if(winT<0){
            winT=0;
        }
        //修改z-index值
        $(".win").css("z-index",99);
        win.css({left:winL,top:winT,"z-index":100});

        //拖拽缩放按钮
        var winTL = $('<div class="win_TL"></div>');
        var winTR = $('<div class="win_TR"></div>');
        var winBL = $('<div class="win_BL"></div>');
        var winBR = $('<div class="win_BR"></div>');

        var winTLine = $('<div class="win_T"></div>');
        var winRLine = $('<div class="win_R"></div>');
        var winBLine = $('<div class="win_B"></div>');
        var winLLine = $('<div class="win_L"></div>');

        win.append(winBtns, winTL, winTR, winBL, winBR, winTLine, winRLine, winBLine, winLLine);
        win.appendTo("body").show();
        fIcon.insertBefore(".time");

        //点击关闭
        winBtns.find("a").eq(2).click(function(){
            $(".footer .icon").eq( win.index(".win")).add(win).remove();
        });

        //点击最小化
        winBtns.find("a").eq(0).click(function(){
            win.hide();
        });

        //防止点击关闭的时候也拖动窗口
        winBtns.on("mousedown",function(e){
            return false;
        });

        //拖动弹窗
        win.on("mousedown",function(e){
            //修改z-index值
            $(".win").css("z-index",99);
            win.css("z-index",100);

            var disX = e.pageX - win.position().left;
            var disY = e.pageY - win.position().top;
            $(document).on("mousemove.winDrag",function(e){
                var winL = e.pageX - disX;
                var winT = e.pageY - disY;
                win.css({left:winL,top:winT});
            });
            $(document).on("mouseup.winDrag",function(e){
                $(document).off(".winDrag");
            });


            return false;
        });

        /*改变窗口大小开始*/
        //拖动右下角
        winBR.on("mousedown",function(e){
            var winL = win.position().left+5;
            var winT = win.position().top+30;
            $(document).on("mousemove.resizeDrag",function(e){
                win.css({width: e.pageX-winL, height: e.pageY-winT});
                //winTLine, winRLine, winBLine, winLLine
                winLLine.add(winRLine).css({height: win.height()-10});
                winTLine.add(winBLine).css({width: win.width()-20});
            });
            $(document).on("mouseup.resizeDrag",function(e){
                $(document).off(".resizeDrag");
            });
            return false;
        });

        //左下角拖动
        winBL.mousedown(function(e){
            var winL = win.position().left + 5;
            var winT = win.position().top + 30;
            var winW = win.width();
            //拖动
            $(document).on('mousemove.winzoom',function(e){
                win.css({left : e.pageX-5, height : e.pageY  - winT, width : winL-e.pageX + winW});
                winLLine.add(winRLine).css({height: win.height()-10});
                winTLine.add(winBLine).css({width: win.width()-20});
            });

            $(document).on('mouseup.winzoom',function(e){
                $(document).off(".winzoom");
            });

            return false;
        });

        //左上角拖动
        winTL.mousedown(function(e){
            var winL = win.position().left + 5;
            var winT = win.position().top + 30;
            var winW = win.width();
            var winH = win.height();
            //拖动
            $(document).on('mousemove.winzoom',function(e){
                //console.log(win.width(), e.pageX, win.position().left);
                win.css({left : e.pageX-5,top : e.pageY<5?0:e.pageY-5, height :  winT-e.pageY + winH, width : winL-e.pageX + winW});
                //console.log(win.width());
                winLLine.add(winRLine).css({height: win.height()-10});
                winTLine.add(winBLine).css({width: win.width()-20});
            });

            $(document).on('mouseup.winzoom',function(e){
                $(document).off(".winzoom");
            });

            return false;
        });


        //右上角拖动
        winTR.mousedown(function(e){
            var winL = win.position().left + 5;
            var winT = win.position().top + 30;
            var winW = win.width();
            var winH = win.height();
            //拖动
            $(document).on('mousemove.winzoom',function(e){
                win.css({top : e.pageY<5?0:e.pageY-5, height :  winT-e.pageY + winH, width : e.pageX - winL});
                winLLine.add(winRLine).css({height: win.height()-10});
                winTLine.add(winBLine).css({width: win.width()-20});
            });

            $(document).on('mouseup.winzoom',function(e){
                $(document).off(".winzoom");
            });

            return false;
        });

        //winTLine, winRLine, winBLine, winLLine
        //底部拖动
        winBLine.mousedown(function(e){
            var winT = win.position().top + 30;
            //拖动
            $(document).on('mousemove.winzoom',function(e){
                win.css({ height : e.pageY  - winT});
                winRLine.add(winLLine).css({height:win.height()-10});
            });

            $(document).on('mouseup.winzoom',function(e){
                $(document).off(".winzoom");
            });

            return false;
        });
        //右侧拖动
        winRLine.mousedown(function(e){
            var winL = win.position().left + 5;
            //拖动
            $(document).on('mousemove.winzoom',function(e){
                win.css({width : e.pageX - winL});
                winTLine.add(winBLine).css({width:win.width()-40});
            });

            $(document).on('mouseup.winzoom',function(e){
                $(document).off(".winzoom");
            });

            return false;
        });

        //顶部拖动
        winTLine.mousedown(function(e){
            var winT = win.position().top + 30;
            var winH = win.height();
            //拖动
            $(document).on('mousemove.winzoom',function(e){
                win.css({top : e.pageY<0?0:e.pageY, height :  winT-e.pageY + winH});
                winRLine.add(winLLine).css({height:win.height()-10});
            });

            $(document).on('mouseup.winzoom',function(e){
                $(document).off(".winzoom");
            });

            return false;
        });

        //左侧拖动
        winLLine.mousedown(function(e){
            var winL = win.position().left + 5;
            var winW = win.width();
            //拖动
            $(document).on('mousemove.winzoom',function(e){
                win.css({left : e.pageX<0?0:e.pageX, width :  winL-e.pageX + winW});
                winTLine.add(winBLine).css({width:win.width()-40});
            });

            $(document).on('mouseup.winzoom',function(e){
                $(document).off(".winzoom");
            });

            return false;
        });


        /*改变窗口大小结束*/



    }

    $(this).addClass("dblclickOn");
    clearTimeout(dblclickTimer);
    var _this = this;
    dblclickTimer = setTimeout(function(){
        $(_this).removeClass("dblclickOn");
    },300);


});

//点击小图标显示窗口
$(".footer").on("click",".icon",function(){
    var index = $(this).index(".footer .icon");
    $(".win").css("z-index",99).eq(index).toggle().css("z-index",100);

});


	//右键菜单
	$(document).on("contextmenu",function(e){
		var L = e.pageX;
		var T = e.pageY;
		var menu = $(".context_menu");
		var menuW = menu.width();
		var menuH = menu.height();
		var menuL = menu.position().left;
		var menuT = menu.position().right;
		if(L>$(window).width()-menuW){
			L = L - menuW;
		}
		if(T>$(window).height()-menuH){
			if(T<menuH){
				T = $(window).height()-menuH;
			}else{
				T = T - menuH;
			}
		}

		menu.css({left:L, top:T}).show();

		return false;
	});

//点击右键菜单的选项
$(".context_menu li").on("mousedown",function(e){
    //console.log($(this).attr("class"));
    var myClass = $(this).attr("class");
    switch (myClass){
        case "refresh": //刷新
            $(".dsk_icon").css({left:0,top:0});
            showIcons();
            break;
        case "newFile": //新建文件夹
            var newFile = $('<div class="dsk_icon"><div class="icon" style="background-position:-96px -95px;"></div><p class="name">新建文件夹</p><input type="text" /></div>');
            newFile.appendTo(".icon_cont");
            showIcons();
            setTimeout(function(){
                newFile.addClass("active").find("p").trigger("mousedown");
            },20*$(".dsk_icon").length);
            break;
        case "rename": //重命名
            var selectIcon = $(".dsk_icon.active");
            //console.log(selectIcon.eq(0).find("p"));
            if(selectIcon.length>0){
                setTimeout(function(){
                    selectIcon.eq(0).addClass("active").find("p").trigger("mousedown");
                },20)
            }
            break;
        case "deleteThis": //删除
            if( $(".recycle.active").length == 0 && $(".dsk_icon.active").length>0 ){
                $(".dsk_icon.active").fadeOut(200, function(){
                    $(this).remove();
                    $(".recycle .icon").addClass("hasDust");
                });

            }
            break;
        case "reload": //还原回收站
            if( $(".dsk_icon.active .icon").hasClass("hasDust") ){
                window.location.reload();
            }
            break;
    }
});

//开始菜单阻止冒泡
$('.menu').on('contextmenu',function(e){
    return false;
});
//底部条阻止冒泡
$('.footer').on('contextmenu',function(e){
    return false
});



var today = new Date();
var nn = today.getFullYear();
var yy = today.getMonth() + 1;
var rr = today.getDate();
var ss = today.getHours();
var ff = today.getMinutes();
var xx = today.getDay();
var mm = today.getSeconds();
var toDateFn = dateActive(rr);


//时间的处理
(function () {
    var date = $("#date");
    xx = xx == 0 ? '星期天' : xx == 1 ? '星期一' : xx == 2 ? '星期二' : xx == 3 ? '星期三' : xx == 4 ? '星期四' : xx == 5 ? '星期五' : '星期六';
    date[0].title = nn + '年' + yy + '月' + rr + '日' + "\n" + xx;
    if (ff < 10) {
        ff = "0" + ff;
    }
    ss = ss < 10 ? ("0" |0) + ss : ss;
    date.html("<span>" + ss + ":" + ff + "</span><br/><span>" + nn + "/" + yy + "/" + rr + "</span>");
    setInterval(function () {
        date.html("<span>" + ss + ":" + ff + "</span><br/><span>" + nn + "/" + yy + "/" + rr + "</span>")
    }, 3000);
})();

//日历的当日的处理
(function () {
    var calendar = $('#calendar');
    var date = calendar.find('.calendar-today');
    ss = ss < 10 ? '0' + ss : ss;
    mm = mm < 10 ? '0' + mm : mm;
    date.html('<h1>' + ss + ':' + ff + ':' + mm + '</h1><p>' + nn + '年' + yy + '月' + rr + '日</p>');
    setInterval(function () {
        var today = new Date();
        var nn = today.getFullYear();
        var yy = today.getMonth() + 1;
        var rr = today.getDate();
        var ss = today.getHours();
        var ff = today.getMinutes();
        var mm = today.getSeconds();
        ss = ss < 10 ? '0' + ss : ss;
        ff = ff < 10 ? '0' + ff : ff;
        mm = mm < 10 ? '0' + mm : mm;
        date.html('<h1>' + ss + ':' + ff + ':' + mm + '</h1><p>' + nn + '年' + yy + '月' + rr + '日</p>');
    }, 1000)
})();

//当前日历的处理
(function () {
    //一个月的日历处理
    var item = $(".calendar-rr-item");
    var spanStr = '';
    for (var i = 0; i < 6; i++) {
        spanStr += '<span></span>'
    }
    item.html(spanStr);
    var today = new Date();
    var nn = today.getFullYear();
    var yy = today.getMonth() + 1;
    day(nn, yy, 1,toDateFn);
    var main = $('.calender-main');
    var span = main.find('p span');
    span.html(nn + '年' + yy + '月');
    //一年的日历处理
    yyDay(toDateFn);
    //10年的日历处理
})();

//日历类型的点击切换
(function () {
    var main = $('.calender-main');
    var btn = main.find("p a");
    var bottom = btn.eq(0);
    var top = btn.eq(1);
    var banIf = DateIf();//判断日历类型
    //点击切换日历种类
    var dateTypeBtn = main.find('p span');
    dateTypeBtn.click(function () {
        var banIf = DateIf();//判断日历类型
        if (banIf == 1) {
            var rrWrap = main.find('.calendar-rr');
            var yyWrap = main.find('.calendar-yy');
            rrWrap.css({transform: 'scale(0)',opacity:'0', transition: 'all 0.5s linear'});
            yyWrap.css({transform: "scale(1)",opacity:'1',  transition: 'all 0.5s linear'});
            dateTypeBtn.animate({opacity: "0"}, 250, function () {
                var banIfDomStr = main.find('p span').html();
                var toNn = banIfDomStr.slice(0, 4);
                dateTypeBtn.html(toNn + '年');
                dateTypeBtn.animate({opacity: "1"})
            });
        } else if (banIf == 0) {
            var nnWrap = main.find('.calendar-nn');
            var yyWrap = main.find('.calendar-yy');
            var banIfDomStr = main.find('p span').html();
            var toNn = Math.floor(banIfDomStr.slice(0, 4));
            var toNn_1 = toNn-toNn%10;
            var toNn_2 = toNn-toNn%10+9;
            nnDay(toNn_1,1,toDateFn);
            yyWrap.css({transform: 'scale(0)', opacity:'0', transition: 'all 0.5s linear'});
            nnWrap.css({transform: "scale(1)", opacity:'1', transition: 'all 0.5s linear'});
            dateTypeBtn.animate({opacity: "0"}, 250, function () {

                dateTypeBtn.html(toNn_1 + '-' + toNn_2);
                dateTypeBtn.animate({opacity: "1"})
            });
        }
    });

    //日历运动的判断切换
    top.bind('click', function () {
        var banIf = DateIf();//判断日历类型
        if (banIf == 1) {//一个月的日历
            bannerYy(true,toDateFn);
        }else if(banIf == 0){//一年的日历
            bannerNn(true,toDateFn);
        }else{//十年的日历
            banner10Nn(true,toDateFn);
        }

    });

    bottom.bind('click', function () {
        var banIf = DateIf();//判断日历类型
        if (banIf == 1) {//一个月的日历
            bannerYy(false,toDateFn);
        } else if (banIf == 0) {//一年的日历
            bannerNn(false,toDateFn);
        }else{//十年的日历
            banner10Nn(false,toDateFn);
        }
    });


})();

//日历主体的span的主要点击事件
(function(){
    var yyMain = $('.rr-item-box').eq(1);
    var nnMain = $('.yy-item-box').eq(1);
    var nn10Main = $('.nn-item-box').eq(1);
    //10年-日历 的span的事件委托
    nn10Main[0].onclick = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == "span"){
            var main = $('.calender-main');
            var dateTypeBtn = main.find('p span');
            var dateTypeBtnStr = dateTypeBtn.html().slice(0,4);
            var className = target.className;
            var _this = $(target);
            var str = _this.html().slice(0,4);
            if(className=='color'){
                if(str>dateTypeBtnStr){
                    banner10Nn(false)
                }else{
                    banner10Nn(true)
                }
            }else{
                var nnWrap = main.find('.calendar-nn');
                var yyWrap = main.find('.calendar-yy');

                dateTypeBtn.animate({opacity: "0"}, 250, function () {
                    dateTypeBtn.html(str + '年');
                    dateTypeBtn.animate({opacity: "1"})
                });

                nnWrap.css({transform: 'scale(0)',opacity:'0',  transition: 'all 0.5s linear'});
                yyWrap.css({transform: 'scale(1)', opacity:'1', transition: 'all 0.5s linear'});



            }
        }
    };

    //年-日历 的span的事件委托
    nnMain[0].onclick = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == "span"){
            var main = $('.calender-main');
            var dateTypeBtn = main.find('p span');
            var dateTypeBtnStr = dateTypeBtn.html().slice(0,-1);
            var className = target.className;
            var _this = $(target);
            var str = _this.html().slice(0,-8);
            if(className=='color'){
                if(8>str){
                    bannerNn(false)
                }else{
                    bannerNn(true)
                }
            }else{
                var rrWrap = main.find('.calendar-rr');
                var yyWrap = main.find('.calendar-yy');


                dateTypeBtn.animate({opacity: "0"}, 250, function () {
                    dateTypeBtn.html(dateTypeBtnStr+'年'+str+'月');
                    dateTypeBtn.animate({opacity: "1"})
                });

                yyWrap.css({transform: 'scale(0)',opacity:'0',  transition: 'all 0.5s linear'});
                rrWrap.css({transform: 'scale(1)', opacity:'1', transition: 'all 0.5s linear'});
                setTimeout(function(){
                    var span = main.find('.rr-item-box').eq(1).find('span');
                    var mainStr = main.find('p span').html();
                    span.removeClass('active');
                    if(mainStr == toDateFn.nn+'年'+toDateFn.yy+"月"){

                        for(var i=0; i<span.length; i++){
                            if(span.eq(i)[0].className != 'color' && toDateFn.rr == span.eq(i).html()){
                                span.eq(i).addClass('active')
                            }
                        }
                    }
                },500)
            }
        }
    };

    //月-日历 的span的事件委托
    yyMain[0].onclick = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == "span"){
            var main = $('.calender-main');
            var dateTypeBtn = main.find('p span');
            var dateTypeBtnStr = dateTypeBtn.html().slice(0,-1);
            var className = target.className;
            var _this = $(target);
            var str = _this.html();
            if(className=='color'){
                if(15>str){
                    bannerYy(false,toDateFn)
                }else{
                    bannerYy(true,toDateFn)
                }
            }else{
                var rr = _this.html();
                toDateFn = dateActive(rr);
                var span = main.find('.rr-item-box').eq(1).find('span');
                span.removeClass('active');
                _this.addClass('active');

                //备忘录篇  日历-背王录互动
                var calendarFn = $('#calendar-fn');
                var calendarFnA = calendarFn.find('p a');
                var calMain = $('.cal-main');
                var arr = [];
                var toDayM = new Date();
                var toDayMs = new Date(toDateFn.nn,toDateFn.yy-1,toDateFn.rr);
                var todayMinS = (toDayMs.getTime()/1000/60/60/24) |0;
                var todayMin = (toDayM.getTime()/1000/60/60/24) |0;
                var xDay = todayMinS-todayMin+1;
                if(xDay<0){
                    var x = xDay.toString().slice(1);
                    x = numT_H(x);
                    xDay = x + '天前'
                }else if(xDay==0){
                    xDay = '今天'
                }else{
                    xDay = numT_H(xDay)+'天后'
                }
                arr[0] = xDay;
                arr[1] = numT_H(toDateFn.yy)+'月'+numT_H(toDateFn.rr)+'日';
                var mStr = arr.join(' ');
                calendarFnA.animate({opacity:0},250,function(){
                    calendarFnA.html(mStr);
                    calendarFnA.animate({opacity:1},250)
                });

                //请求数据
                var dayStr = toDateFn.nn.toString()+toDateFn.yy.toString()+toDateFn.rr.toString();
                if(localStorage['date_'+dayStr]==undefined){
                    //TODO:请求数据
                }else{
                    calMain.animate({opacity:0},250,function(){
                        calMain.html('无事件');
                        calMain.animate({opacity:1},250)
                    });
                }

            }
        }
    };


})();

//日历的显示隐藏
(function(){
    var calendarFn = $('#calendar-fn');
    var calendarFnA = calendarFn.find('p a');
    var toDayM = new Date();
    var yy = toDayM.getMonth()+1;
    var rr = toDayM.getDate();
    calendarFnA.html('今天 '+numT_H(yy)+'月'+numT_H(rr)+'日');
    var date = $('#date');
    var calendar = $('#calendar');
    date.on('click',function(){
        calendar.stop().toggle(300);
        return false
    })
})();

/*被忘录*/

