
window.onload = function () {
    //菜鸟工具网站上的手机正则表达式
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var regqq = /^[1-9][0-9]{4,}$/;
    //获取元素
    var tel = document.querySelector('.tell');
    var qq = document.querySelector('.qq');
    tel.onblur = function () {
        if (regtel.test(this.value)) {
            console.log('正确');
            //下一个兄弟级元素
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon icon"></i>短信验证码输入正确 </span></li>';
        } else {
            console.log('错误');
        }
    }
    qq.onblur = function () {
        if (regqq.test(this.value)) {
            console.log('正确');
            //下一个兄弟级元素
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon icon"></i>短信验证码输入正确 </span></li>';
        } else {
            console.log('错误');
        }
    }
}
alert(11);