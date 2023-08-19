var bgimg=document.getElementById('bgimg');
var enter=document.getElementById('enter');
var c=document.getElementById('cont');
sources = ["/assets/1.mp4", "/assets/2.mp4", "/assets/3.mp4", "/assets/4.mp4"]
enter.addEventListener('click',function(){
document.title='tecca.lol';
var source = document.createElement('source');
source.setAttribute('src', sources[Math.floor(Math.random() * sources.length)]);
source.setAttribute('type', 'video/mp4');

bgimg.appendChild(source);
bgimg.play();
c.style.display="flex";
bgimg.style.display="block";
enter.style.display="none";
bgimg.volume="0.5";
},false);