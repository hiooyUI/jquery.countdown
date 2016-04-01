(function ($) {
    /*
       倒计时countDown
       使用方式
            $("#obj").countDown({
                timeInSecond: 60 * 60,//要倒计时的时间，秒为单位
                displayTpl: "{day}天{hour}小时{minute}分{second}秒", //显示模版
                callback: function () {//倒计时完后执行的回调函数
                    alert("倒计时结束！");
                }
            });
    */
    $.fn.extend({
        countDown: function (options) {
            var defaults = {
                timeInSecond: 60 * 60, //要倒计时的时间，秒为单位
                displayTpl: "{day}天{hour}小时{minute}分{second}秒", //显示模版
                callback: function () { }//倒计时完后执行的回调函数
            };
            var options = $.extend({}, defaults, options);
            this.each(function () {
                var This = $(this);
                function countDown(time, tpl) {
                    var timer = setInterval(function () {
                        if (time >= 1) {
                            time -= 1;
                            var day = Math.floor((time / 3600) / 24);
                            var hour = Math.floor((time / 3600) % 24);
                            var minute = Math.floor((time / 60) % 60);
                            var second = Math.floor(time % 60);
                            This.html(tpl.replace("{day}", day).replace("{hour}", hour).replace("{minute}", minute).replace("{second}", second));
                        } else {
                            This.html(tpl.replace("{day}", 0).replace("{hour}", 0).replace("{minute}", 0).replace("{second}", 0));
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
