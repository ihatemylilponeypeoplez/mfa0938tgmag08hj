// lol
var bgimg=document.getElementById('bgimg');
var enter=document.getElementById('enter');
var c=document.getElementById('cont');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function hide(id) {
    document.getElementById(id).style.display = "none";
}
function unhide(id) {
    document.getElementById(id).style.display = "block";
}
async function rofl() {
    await sleep(3000);
    hide("preintro");
    await sleep(1000);
    startPlayback();
    unhide("intro");
    await sleep(8000);
    unhide("lines");
    await sleep(5000);
    hide("gaynigganame")
}
enter.addEventListener('click',function(){
document.title='tecca.lol';
c.style.display="flex";
bgimg.style.display="block";
enter.style.display="none";
setTimeout(rofl, 0)
},false);

function startPlayback() {
    document.getElementById("audio").play()
}

