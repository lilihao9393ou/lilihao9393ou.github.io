/**
 * Created by lilih_000 on 2017/2/16.
 */
// var Swiper = require('./bower_components/swiper/dist/js/swiper.jquery.min.js');
// 音乐播放暂停
var img=document.getElementById('img_music');
var audio =document.getElementById('audio');
img.onclick=function(){
    if(audio.paused){
        audio.play();
        img.style.webkitAnimationPlayState='running'
    }else{
        audio.pause();
        img.style.webkitAnimationPlayState='paused'
    }
}



var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
})

//横竖屏切换
    window.addEventListener("orientationchange", function() {
        if (window.orientation === 180 || window.orientation === 0) {
            alert('竖屏状态！');
        }
        if (window.orientation === 90 || window.orientation === -90 ){
            alert('横屏状态！');
        }
    }, false)