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

