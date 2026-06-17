const span = document.getElementById('top__text');

if(window.innerWidth < 1024){
    span.textContent = '3';
}

window.addEventListener('resize', () => {
    if(window.innerWidth >= 1024){
        span.textContent = '5';
    }
});