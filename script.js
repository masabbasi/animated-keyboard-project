const title = document.querySelector('.title')

document.addEventListener('keyup',function(event){
    addKeyToTitle(event)

    let userEventKey = event.key.toUpperCase();
    let mainUserKey;
    if (event.keyCode===32) {
        mainUserKey = document.getElementById("SPACE")
        } else if (event.code==="ShiftLeft") {
        mainUserKey = document.getElementById("left-shift")
        } else if (event.code==="ShiftRight") {
        mainUserKey = document.getElementById("right-shift")
        } else {
        mainUserKey = document.getElementById(userEventKey)
    }
    
    mainUserKey.classList.add('hit')
    mainUserKey.addEventListener('animationend',function(){
        mainUserKey.classList.remove('hit')
        })
})

function addKeyToTitle(event) {
if (event.key==='Backspace') {
    title.innerHTML = title.innerHTML.slice(0,-1);
    return
    }  else if (event.which===27) {
    title.innerHTML='';
    } else if (event.which===16 || event.which===9 || event.which===13 || event.which===20) {
        //
    } else if (event.keyCode===32) {
    title.innerHTML+=' '
    }
    else {
    title.innerHTML+=event.key;
}
}