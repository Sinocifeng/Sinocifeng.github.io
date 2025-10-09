<!-- 邮箱 -->

// 显示邮箱
function email() {
    swal({
        title: "E-mail",
        text: "1459736568@qq.com",
        showCancelButton: true,
        buttons: {
            cancel: "OK",
            confirm: "Copy"
            }
        })
        .then((res) => {
            if (res) {
                copy("1459736568@qq.com");
            }
        });
}
// 复制邮箱内容到粘贴板
function copy(data) {
    let input = document.createElement("input");
    input.setAttribute("readonly", "readonly");
    input.value = data;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    document.body.removeChild(input);
    swal("Copy success!");
}


<!-- 当前URL -->
// 弹窗 - 显示当前URL
function page_url() {
    swal({
        title: "URL",
        text: url,
    })
}


<!-- 问候 -->
function greetUser() {
    const now = new Date();
    const hour = now.getHours();

    if (hour > 0 && hour < 6) {
        swal({ title: "凌晨了!", text: "注意休息~", icon: "info" });
    } else if (hour >= 6 && hour < 9) {
        swal({ title: "早上好!", text: "Good morning", icon: "info" });
    } else if (hour >= 20 && hour < 24) {
        swal({
            title: "晚上好!",
            text: "开启夜间模式可以让页面不那么刺眼哟~",
            icon: "info",
            buttons: ["夜间模式", true],
        }).then((OK) => {
            if (OK) {
                // 用户点击了夜间模式的按钮，这里可以添加相关代码
            } else {
                dark(); // 假设这里是切换到夜间模式的函数
            }
        });
    }
}
// 在页面加载时调用 greetUser 函数，自动执行
document.addEventListener("DOMContentLoaded", greetUser);

// 控制台消息
console.clear();
console.log("%c 乾杯 - ( ゜- ゜)つロ", "background:#24272A; color:#ffffff", "");
console.log("");

// 夜间模式
function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

(function ($) {
    $.fn.snow = function (options) {
        var $flake = $('<div id="snowbox" />').css({ 'position': 'absolute', 'z-index': '9999', 'top': '-50px' }).html('&#10052;'),
            documentHeight = $(document).height(),
            documentWidth = $(document).width(),
            defaults = {
                minSize: 10,
                maxSize: 20,
                newOn: 1000,
                flakeColor: "#AFDAEF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
            },
            options = $.extend({}, defaults, options);
        var interval = setInterval(function () {
            var startPositionLeft = Math.random() * documentWidth - 100,
                startOpacity = 0.5 + Math.random(),
                sizeFlake = options.minSize + Math.random() * options.maxSize,
                endPositionTop = documentHeight - 200,
                endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
                durationFall = documentHeight * 10 + Math.random() * 5000;
            $flake.clone().appendTo('body').css({
                left: startPositionLeft,
                opacity: startOpacity,
                'font-size': sizeFlake,
                color: options.flakeColor
            }).animate({
                top: endPositionTop,
                left: endPositionLeft,
                opacity: 0.2
            }, durationFall, 'linear', function () {
                $(this).remove()
            });
        }, options.newOn);
    };
})(jQuery);
$(function () {
    $.fn.snow({
        minSize: 5, /* 定义雪花最小尺寸 */
        maxSize: 50,/* 定义雪花最大尺寸 */
        newOn: 800  /* 定义密集程度，数字越小越密集 */
    });
});

// 浏览器萌标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // $('[rel="icon"]').attr('href', "/funny.ico");
        document.title = '╭(°A°`)╮ 快回来！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '(ฅ>ω<*ฅ) 总算回来啦~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 1000);
    }
});


<!-- 展示时间，每秒一次 -->
BirthDay = new Date("2022-10-11T18:00:00");
function show_date_time() {
    today=new Date();
    timeold=(today.getTime()-BirthDay.getTime());
    // 计算各个时间单位
    const msPerDay = 24 * 60 * 60 * 1000;
    const e_daysold = timeold / msPerDay;
    const daysold = Math.floor(e_daysold);
    const e_hrsold = (e_daysold - daysold) * 24;
    const hrsold = Math.floor(e_hrsold);
    const e_minsold = (e_hrsold - hrsold) * 60;
    const minsold = Math.floor(e_minsold);
    const seconds = Math.floor((e_minsold - minsold) * 60);
// 更新span内容
    document.getElementById('span_time').innerHTML =
        `<span style="color:#C40000;">${daysold}</span> days <span style="color:#C40000;">${hrsold}</span> hours <br />
                                                     <span style="color:#C40000;">${minsold}</span> minutes <span style="color:#C40000;">${seconds}</span> seconds`;
}
// 每秒调用一次show_date_time函数
setInterval(show_date_time, 1000);
show_date_time();
