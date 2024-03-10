// SCROLL SECTION START
let scrollBtn = document.querySelector('.scrollBtn')
window.addEventListener('scroll',function(){
    if(this.window.pageYOffset > 800){
        scrollBtn.classList.add('show')
    }
    else{
        scrollBtn.classList.remove('show')
    }
})
// SCROLL SECTION END