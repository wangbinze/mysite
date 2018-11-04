window.onload = function () {
    var Email = document.getElementById('email');
    var QQ = document.getElementById('qq');
    var WeChat = document.getElementById('WeChat');
    Email.onclick = function () {
        alert('269929127@qq.com');
    }
    QQ.onclick = function () {
        alert('269929127');
    }
    WeChat.onclick = function () {
        alert('zeze696872');
    };

    console.log("Hi! 朋友，感谢您愿意调试简历代码。\n" +
        "本简历采用基础的HTML、CSS、JavaScript开发构建。\n" +
        "如果您有什么建议或者想学习前端，欢迎联系我,我们互相学习，共同进步^_^ ");

    

    function moveImg(list, index) {
        for(var i = 0; i < list.length; i++) {
            if(list[i].className == 'opa-on') { //清除li的透明度样式
                list[i].className = '';
            }
        }
        list[index].className = 'opa-on';
    }

    function moveIndex(list, num) { //移动小圆圈
        for(var i = 0; i < list.length; i++) {
            if(list[i].className == 'on') { //清除li的背景样式
                list[i].className = '';
            }
        }
        list[num].className = 'on';
    }
    var imgList = document.getElementById('img').getElementsByTagName('li');
    var list = document.getElementById('index').getElementsByTagName('li');
    var index = 0;
    var timer;

    for(var i = 0; i < list.length; i++) { //鼠标覆盖上哪个小圆圈，图片就移动到哪个小圆圈，并停止
        list[i].index = i;
        list[i].onmouseover = function() {
            var clickIndex = parseInt(this.index);
            index = clickIndex;

            moveImg(imgList, index);
            moveIndex(list, index);
            clearInterval(timer);
        };
        list[i].onmouseout = function() { //移开后继续轮播
            play();
        };

    }

    var nextMove = function() {
        index += 1;
        if(index >= 3) {
            index = 0
        }
        moveImg(imgList, index);
        moveIndex(list, index);
    };
    var play = function() {
        timer = setInterval(function() {
            nextMove();
        }, 2000);
    };
    play();
};