/* 日历篇*/
//生成一个月的日历的方法 参数nn生成日历的年 yy生成日历的月 生成日历在banner中占的位置
function day(nn, yy, iNew, toDateFn) {
    var dayA = new Date(nn, yy - 2);
    var dayB = new Date(nn, yy - 1);
    var dayC = new Date(nn, yy);
    var monthTime1 = (dayB - dayA) / 1000;
    var monthTime2 = (dayC - dayB) / 1000;
    var day1 = monthTime1 / 60 / 60 / 24;
    var day2 = monthTime2 / 60 / 60 / 24;
    var xx2 = dayB.getDay();
    var days1 = $(".rr-item-box").eq(iNew);
    var days = days1.find(".calendar-rr-item");
    var span = '';
    for (var i = 0; i < 7; i++) {
        span += '<span></span>'
    }
    days.html(span);
    var dayItem = days1.find($("span"));
    var num = day1 - xx2, iNewI = 0;
    for (var i = 0; i < dayItem.length; i++) {
        if (i < xx2) {
            dayItem.eq(i).html(num + i + 1);
            dayItem.eq(i).addClass('color')
        } else if (i < xx2 + day2) {
            if (iNewI < day2) {
                iNewI++;
                var ix = iNewI < 10 ? "0" + iNewI : iNewI;
                dayItem.eq(i).html(ix);
                if (ix == toDateFn.rr) {
                    var nnIf = $('.calender-main p span').html();
                    if (nnIf == '') {
                        var today = new Date();
                        var nn = today.getFullYear();
                        var yy = today.getMonth() + 1;
                    } else {
                        var nn = nnIf.slice(0, 4);
                        var yy = nnIf.slice(5, -1);
                    }

                    if (nn == toDateFn.nn && yy == toDateFn.yy) {
                        dayItem.eq(i).addClass('active')
                    }

                }
            }
        } else {
            if (iNewI == day2) {
                iNewI = 0;
            }
            iNewI++;
            var ix = iNewI < 10 ? "0" + iNewI : iNewI;
            dayItem.eq(i).html(ix);
            dayItem.eq(i).addClass('color')
        }
    }

}

//生成一年的日历的方法
function yyDay(toDateFn) {
    var yyItem = $('.yy-item-box');
    var spanStr = '';
    var iNew = 8;
    for (var i = 0; i < 20; i++) {
        if (i < 4) {
            iNew++;
            spanStr += '<span class="color">' + iNew + '月<i></i></span>'
        } else if (i == 4) {
            iNew = 1;
            spanStr += '<span>' + iNew + '月<i></i></span>'

        } else if (i < 16) {
            iNew++;
            spanStr += '<span>' + iNew + '月<i></i></span>'
        } else if (i == 16) {
            iNew = 1;
            spanStr += '<span class="color">' + iNew + '月<i></i></span>'
        } else {
            iNew++;
            spanStr += '<span class="color">' + iNew + '月<i></i></span>'
        }
    }
    for (var i = 0; i < yyItem.length; i++) {
        yyItem.eq(i).html(spanStr)
    }


}

//生成10年日历的方法
function nnDay(nn, iNew, toDateFn) {
    var nnItem = $('.nn-item-box').eq(iNew);
    var spanStr = '';
    var _nn = nn - 2;
    for (var i = 0; i < 12; i++) {
        _nn++;
        if (i == 0) {
            spanStr += '<span class="color">' + _nn + '<i></i></span>'
        } else if (i < 11) {
            spanStr += '<span>' + _nn + '<i></i></span>'

        } else {
            spanStr += '<span class="color">' + _nn + '<i></i></span>'
        }
    }
    nnItem.html(spanStr)
}

//月-日历banner的运动方法 参数top为true时banner向上运动且日历切换到上一个月
function bannerYy(top, toDateFn) {
    var banner = $('.rr-item-banner');
    var main = $('.calender-main');
    var banIfDomStr = main.find('p span').html();
    var toNn = banIfDomStr.slice(0, 4);
    var toYy = banIfDomStr.slice(5).slice(0, -1);
    var top = top;
    if (top == true) {
        var yy = toYy - 1 <= 0 ? 12 : toYy - 1;
        var nn = toYy == 1 ? toNn - 1 : toNn;
    } else {
        var yy = (toYy | 0) + 1 >= 13 ? 1 : (toYy | 0) + 1;
        var nn = toYy == 12 ? (toNn | 0) + 1 : toNn;
    }

    var span = main.find('p span');
    span.html(nn + '年' + yy + '月');
    if (top == true) {
        day(nn, yy, 2, toDateFn);
        banner.animate({top: "-540px"}, 500, function () {
            banner.animate({top: '-270px'}, 0);
            day(nn, yy, 1, toDateFn);
        })
    } else {
        day(nn, yy, 0, toDateFn);
        banner.animate({top: "0"}, 500, function () {
            banner.animate({top: '-270px'}, 0);
            day(nn, yy, 1, toDateFn);
        })
    }


}

//年-日历banner的运动的方法
function bannerNn(top, toDateFn) {
    var banner = $('.yy-item-banner');
    var main = $('.calender-main');
    var banIfDomStr = main.find('p span').html();
    var toNn = banIfDomStr.slice(0, -1);
    var top = top;
    if (top == true) {
        toNn = toNn - 1;
        main.find('p span').html(toNn + '年');
        banner.animate({top: "-600px"}, 500, function () {
            banner.animate({top: '-300px'}, 0);
        });

    } else {
        toNn = (toNn | 0) + 1;
        main.find('p span').html(toNn + '年');
        banner.animate({top: "0"}, 500, function () {
            banner.animate({top: '-300px'}, 0);
        })
    }
}

//10年-日历banner运动的方法
function banner10Nn(top, toDateFn) {
    var banner = $('.nn-item-banner');
    var main = $('.calender-main');
    var banIfDomStr = main.find('p span').html();
    var toNn = banIfDomStr.split('-')[0];
    var top = top;
    if (top == true) {
        toNn = toNn - 10;
        main.find('p span').html(toNn + '-' + ((toNn | 0) + 9));
        nnDay(toNn, 2);
        banner.animate({top: "-600px"}, 500, function () {
            banner.animate({top: '-300px'}, 0);
            nnDay(toNn, 1)
        })
    } else {
        toNn = (toNn | 0) + 10;
        main.find('p span').html(toNn + '-' + ((toNn | 0) + 9));
        nnDay(toNn, 0);
        banner.animate({top: "0"}, 500, function () {
            banner.animate({top: '-300px'}, 0);
            nnDay(toNn, 1)
        })
    }
}

//判断日历类型
function DateIf() {
    var main = $('.calender-main');
    var banIfDomStrArr = main.find('p span').html().split("");
    var banIf = 0;
    for (var i = 0; i < banIfDomStrArr.length; i++) {
        if (banIfDomStrArr[i] == '月') {
            banIf = 1
        }
        if (banIfDomStrArr[i] == '-') {
            banIf = 2
        }
    }
    return banIf;
}

//获取当前日历的指定日期的方法
function dateActive(rr) {
    var mainStr = $('.calender-main p span').html();
    if (mainStr == '') {
        var today = new Date();
        var nn = today.getFullYear();
        var yy = today.getMonth() + 1;
    } else {
        var nn = mainStr.slice(0, 4);
        var yy = mainStr.slice(5, -1) | 0;
    }

    var rr = rr;
    var toDateFnObj = {
        nn: nn,
        yy: yy,
        rr: rr
    };
    return toDateFnObj
}

//添加日历当前active项
function createActiveDate(obj) {
    var main = $('.calender-main');
    var mainStr = main.find('p span');
    var banIf = DateIf();
    if (banIf == 1) {
        var nn = mainStr.html().slice(0, 4);
        var yy = mainStr.html().slice(5, -1);
        setTimeout(function () {
            var span = $('.rr-item-box').eq(1).find('span');
            span.removeClass('active');
            for (var i = 0; i < span.length; i++) {
                if (span.eq(i)[0].className != 'color') {
                    if (span.eq(i).html() == obj.rr) {
                        span.eq(i).addClass('active');
                    }
                }
            }
        }, 500)

    } else if (banIf == 0) {
        var nn = mainStr.html().slice(0, 4);
        setTimeout(function () {
            var span = $('.yy-item-box').eq(1).find('span');
            span.removeClass('active');
            for (var i = 0; i < span.length; i++) {
                if (span.eq(i)[0].className != 'color') {
                    if (span.eq(i).html().slice(0, -8) == obj.yy) {
                        span.eq(i).addClass('active');
                    }
                }
            }
        }, 500)

    } else {
        var nn = mainStr.html().slice(0, 4);
        setTimeout(function () {
            var span = $('.nn-item-box').eq(1).find('span');

            span.removeClass('active');
            for (var i = 0; i < span.length; i++) {
                if (span.eq(i)[0].className != 'color') {
                    if (span.eq(i).html().slice(0, 4) == obj.nn) {
                        span.eq(i).addClass('active');
                    }
                }
            }
        }, 500)
    }
}
/* 备忘录篇*/

//数字转化汉字
function numT_H(num) {
    var num = num.toString();
    var num_ = num.slice(0, 1), str;
    if (num_ == '-') {
        num = num.slice(1);
    }

    var arr = num.split("").reverse();

    for (var i = 0; i < 20; i++) {
        if (i % 4 == 0) {

            arr[i] = numFn(arr[i], '');
        } else if (i % 4 == 1) {
            arr[i] = numFn(arr[i], '十');
        } else if (i % 4 == 2) {
            arr[i] = numFn(arr[i], '百');
        } else if (i % 4 == 3) {
            arr[i] = numFn(arr[i], '千');
        }
    }
    arr = arr.reverse();

    numIfStart(arr);//前零清空
    numIfEnd(arr);//后零清空
    var numSt = numStart(arr).numStart;
    var iSt = numStart(arr).i;

    //开始组装
    function numSitStart(numSt, iSt, arr) {
        var iSt = iSt % 4 == 0 ? 4 : iSt % 4 == 3 ? 1 : iSt % 4 == 2 ? 2 : 4;
        var arr_ = [];
        var iNew = -1;
        var str = '';
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != '') {
                iNew++;
                arr_[iNew] = arr[i]
            }
        }

        if (numSt == '') {
            for (var i = 0; i < arr_.length; i++) {
                str += arr_[i]
            }
        }
        if (numSt == '万') {
            for (var i = 0; i < arr_.length; i++) {
                if (i == arr_.length - 5) {
                    str += arr_[i] + '万'
                } else {
                    str += arr_[i]
                }

            }
        }
        if (numSt == '亿') {
            for (var i = 0; i < arr_.length; i++) {
                if (i == arr_.length - 5) {
                    str += arr_[i] + '万'
                } else if (i == arr_.length - 9) {
                    str += arr_[i] + '亿'
                } else {
                    str += arr_[i]
                }

            }
        }
        if (numSt == '兆') {
            for (var i = 0; i < arr_.length; i++) {
                if (i == arr_.length - 5) {
                    str += arr_[i] + '万'
                } else if (i == arr_.length - 9) {
                    str += arr_[i] + '亿'
                } else if (i == arr_.length - 13) {
                    str += arr_[i] + '兆'
                } else {
                    str += arr_[i]
                }

            }
        }

        var strArr = str.split('');

        for (var i = 0; i < strArr.length; i++) {
            if (strArr[i] == '零') {
                if (strArr[i - 1] == '零' || strArr[i - 1] == '') {
                    strArr[i] = ''
                }
            }
        }
        for (var i = 0; i < strArr.length; i++) {
            if (strArr[i] == '零') {
                if (strArr[i + 1] == '兆' || strArr[i + 1] == '亿' || strArr[i + 1] == '万') {
                    strArr[i] = ''
                }
            }
        }

        str = strArr.join('');

        return str
    }

    //数字转化汉字子方法 - 基本转化
    function numFn(num, x) {
        var num = num == 1 ? '一' + x : num == 2 ? '二' + x : num == 3 ? '三' + x : num == 4 ? '四' + x : num == 5 ? '五' + x : num == 6 ? '六' + x : num == 7 ? '七' + x : num == 8 ? '八' + x : num == 9 ? '九' + x : '零';
        return num
    }

//数字转化汉字子方法 -  前零清空
    function numIfStart(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == '零') {
                arr[i] = '';
            } else {
                return
            }
        }
    }

//数字转化汉字子方法 -  后零清空
    function numIfEnd(arr) {
        arr = arr.reverse();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == '零') {
                arr[i] = '';
            } else {
                return arr = arr.reverse();
            }
        }

    }

//数字转化汉字子方法 -  开始组装-前期准备
    function numStart(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != '') {
                var str = i / 4 | 0;
                var numStart = str;
                numStart = numStart == 4 ? '' : numStart == 3 ? '万' : numStart == 2 ? '亿' : numStart == 1 ? '兆' : '京';
                var obj = {
                    numStart: numStart,
                    i: i
                };
                return obj
            }
        }
    }

//数字转化汉字子方法 -  开始组装-大单位转换
    function numMax(numSt) {
        var numSt_ = numSt == '京' ? '兆' : numSt == '兆' ? '亿' : numSt == '亿' ? '万' : '';
        return numSt_;
    }

    arr = numSitStart(numSt, iSt, arr);
    return arr
}


//获取备忘录的from表单
function fromMem() {
    var obj = {};
    var fnName = $(".me-fn-name");
    var fnPlace = $(".me-fn-place");
    var fnStart = $(".me-fn-start");
    var fnEnd = $(".me-fn-end");
    var fnRemarks = $(".me-fn-remarks");
    var fnRemind = $(".me-fn-remind");
    if (fnName[0].value != '') {
        obj.fnName = fnName[0].value;
    } else {
        return '事件名不能为空'
    }
    if (fnPlace[0].value != '') {
        obj.fnPlace = fnPlace[0].value;
    } else {
        return '活动地点不能为空'
    }
    if (fnStart[0].value != '') {
        obj.fnStart = fnStart[0].value;
    } else {
        return '开始时间不能为空'
    }
    if (fnEnd[0].value != '') {
        obj.fnEnd = fnEnd[0].value;
    } else {
        return '结束时间不能为空'
    }

    if (fnRemarks[0].value != '') {
        obj.fnRemarks = fnRemarks[0].value;
    } else {
        obj.fnRemarks = "无";
    }
    obj.fnRemind = fnRemind[0].value;

    return obj


}