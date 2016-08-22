# jQuery.countdown
a simple, yet easy to use jquery countdown plugin

## how to use it?
```
<script src="your path/jquery.js"></script>
<script src="jquery.countdown.min.js"></script>
```
```javascript
    $("#container").countDown({
        timeInSecond: 60 * 60,//要倒计时的时间，秒为单位
        displayTpl: "{day}天{hour}小时{minute}分{second}秒", //显示模版
        limit: 'day', // 限制默认显示到天(day)，可以设为时，分秒。若设为时(hour)的话，则超过24小时也只显示到时不转化为天。如：28小时20分20秒        
        callback: function () {//倒计时完后执行的回调函数
            alert("倒计时结束！");
        }
    });
```
check out the demo.html example.

or

[live Demo](http://sandbox.runjs.cn/show/uvpedzwn)
