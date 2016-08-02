(function ($) {
    /**
       倒计时countDown
       使用方式
            $('#obj').countDown({
                timeInSecond: 60 * 60,// 要倒计时的时间，秒为单位
                displayTpl: '{day}天{hour}小时{minute}分{second}秒', // 显示模版
                limit: 'day', // 限制默认显示到天(day)，可以设为时，分秒。若设为时(hour)的话，则超过24小时也只显示到时不转化为天。如：28小时20分20秒
                callback: function () {// 倒计时完后执行的回调函数
                    alert('倒计时结束！');
                }
            });
    */
    $.fn.extend({
        countDown: function (options) {
            var defaults = {
                timeInSecond: 60 * 60, // 要倒计时的时间，秒为单位
                displayTpl: '{day}天{hour}小时{minute}分{second}秒', // 显示模版
                limit: 'day', // 限制默认显示到天(day)，可以设为时，分秒。若设为时(hour)的话，则超过24小时也只显示到时不转化为天。如：28小时20分20秒
                callback: function () { }// 倒计时完后执行的回调函数
            };
            var options = $.extend({}, defaults, options);
            this.each(function () {
                var This = $(this);
                function countDown(time, tpl) {
                    var timer = setInterval(function () {
                        if (time >= 1) {
                            time -= 1;
                            if (options.limit == 'day') {
                                var day = Math.floor((time / 3600) / 24);
                                var hour = Math.floor((time / 3600) % 24);
                                var minute = Math.floor((time / 60) % 60);
                                var second = Math.floor(time % 60);
                                This.html(tpl.replace('{day}', day).replace('{hour}', hour).replace('{minute}', minute).replace('{second}', second));
                            } else if (options.limit == 'hour') {
                                var hour = Math.floor(time / 3600);
                                var minute = Math.floor((time / 60) % 60);
                                var second = Math.floor(time % 60);
                                This.html(tpl.replace('{day}', 0).replace('{hour}', hour).replace('{minute}', minute).replace('{second}', second));
                            } else if (options.limit == 'minute') {
                                var minute = Math.floor(time / 60);
                                var second = Math.floor(time % 60);
                                This.html(tpl.replace('{day}', 0).replace('{hour}', 0).replace('{minute}', minute).replace('{second}', second));
                            } else if (options.limit == 'second') {
                                var second = Math.floor(time);
                                This.html(tpl.replace('{day}', 0).replace('{hour}', 0).replace('{minute}', 0).replace('{second}', second));
                            }
                        } else {
                            This.html(tpl.replace('{day}', 0).replace('{hour}', 0).replace('{minute}', 0).replace('{second}', 0));
                            clearInterval(timer);
                            options.callback();
                            return;
                        }
                    }, 1000);
                }
                countDown(options.timeInSecond, options.displayTpl);//调用倒计时
            });
        }
    });
})(jQuery);
