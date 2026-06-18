const span = document.getElementById('top__text');

function updateTopCount() {
    if (!span) return;
    span.textContent = window.innerWidth >= 1024 ? '5' : '3';
}

function debounce(fn, wait = 120) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
    };
}

document.addEventListener('DOMContentLoaded', updateTopCount);
window.addEventListener('resize', debounce(updateTopCount));