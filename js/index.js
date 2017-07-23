/**
 * Created by HSAEE on 2017/7/22.
 */

$(function(){
    /*
     全局的变量
     */
    var index = 0, timer = null;

    /*
     监听点击
     */
    $('.gps li').on('click', function(){
        // 1.1 获取当前的索引
        index = $(this).index();

        // 1.2 实现切换
        $(this).addClass('cur').siblings().removeClass('cur');
        $('section').eq(index).show().siblings('section').hide();


        //1.4 清除空降类
        setTimeout(function(){
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        }, 10);
    });

    /*
     监听屏幕的滚动
     */
    $(window).mousewheel(function(event, d){
        // 1. 求出滚动的屏的索引
        clearTimeout(timer);
        timer = setTimeout(function(){
            index -= d;
            if(index > $('.gps li').length -1){
                index = 0;
            }else if(index < 0){
                index = $('.gps li').length -1;
            }

            // 2. 切换GPS和页面
            $('.gps li').eq(index).addClass('cur').siblings().removeClass('cur');
            $('section').eq(index).show().siblings('section').hide();


            // 4. 清除空降类
            setTimeout(function(){
                $('section').eq(index).removeClass('current').siblings('section').addClass('current');
            }, 10);

        }, 400);
    });
    var widthParent=$('.peosion').width();
    var heightParent=$('.peosion').height();

    $('.box_1').each(function(key,value){
        var left=0.9*Math.random()*widthParent
        var top=0.9*Math.random()*heightParent
        var deg = 360 * Math.random()
        $(value).css({
            left:left,
            top:top,
            transform:'rotate('+deg+'deg)'
        })

    })
    /*动画*/
    $('.box_1').hover(function(){
        $(this).addClass('borrow').siblings().removeClass('borrow')
    })

    //进度条动画
    $('.move_progress2').each(function(index,value){
        var much=$(this).html()
        $(value).animate({width:much},1000)
    })
    /*音乐控制*/






});