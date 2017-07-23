/**
 * Created by HSAEE on 2017/7/22.
 */
 var music1 = document.getElementById('music1')
 var music2 = document.getElementById('music2')
 var music3 = document.getElementById('music3')

music1.play()
var arr=[music1,music2,music3]

arr[0].addEventListener('ended', function () {
    arr[1].play()
    this.currentTime = 0;
    this.pause()

}, false);
arr[1].addEventListener('ended', function () {
    arr[2].play()
    this.currentTime = 0;
    this.pause()
}, false);
arr[2].addEventListener('ended', function () {
    arr[0].play()
    this.currentTime = 0;
    this.pause()
}, false);


music1.addEventListener('playing',function(){
    music2.pause()
    music3.pause()
})
music2.addEventListener('playing',function(){
    music1.pause()
    music3.pause()
})
music3.addEventListener('playing',function(){
    music2.pause()
    music1.pause()
})

/*时间*/
var timer = setInterval(function () {
    var now = new Date();
    var now_y = now.getFullYear();
    var now_mon = now.getMonth();
    var now_D = now.getDate();
    var now_h = now.getHours();
    var now_m = now.getMinutes();
    var now_s = now.getSeconds();
    var nowTime = [now_y,now_mon,now_D,now_h,now_m,now_s]
    var dayArr=[2017,3,18,10,0,0]
    var time_add=document.getElementById('timer_add')
        time_add.children[5].innerHTML = nowTime[5]
        time_add.children[4].innerHTML = nowTime[4]
        time_add.children[3].innerHTML = nowTime[3]-dayArr[3] > 0 ? nowTime[3]-dayArr[3]: 24+nowTime[3]-dayArr[3];
        if(nowTime[2]-dayArr[2] > 0){
            if(nowTime[3]-dayArr[3] >= 0 ){
                time_add.children[2].innerHTML = nowTime[2]-dayArr[2]
            }else{
                time_add.children[2].innerHTML = nowTime[2]-dayArr[2]-1
            }
        }else{
            if(nowTime[3]-dayArr[3] >= 0 ){
                time_add.children[2].innerHTML = nowTime[2]-dayArr[2]+30
            }else{
                time_add.children[2].innerHTML = nowTime[2]-dayArr[2]-1+30
            }

        }

    if(nowTime[1]-dayArr[1] > 0){
        if(nowTime[2]-dayArr[2] >= 0 ){
            time_add.children[1].innerHTML = nowTime[1]-dayArr[1]
        }else{
            time_add.children[1].innerHTML = nowTime[1]-dayArr[1]-1
        }
    }else{
        if(nowTime[2]-dayArr[2] >= 0 ){
            time_add.children[1].innerHTML = nowTime[1]-dayArr[1]+12
        }else{
            time_add.children[1].innerHTML = nowTime[1]-dayArr[1]-1+12
        }

    }

    time_add.children[0].innerHTML = nowTime[1]-dayArr[1] > 0 ? nowTime[0]-dayArr[0]: nowTime[0]-dayArr[0]-1;







},1000)
