let sun = document.querySelector('.sun');
let body = document.querySelector('body');
sun.onclick = function() {
    body.classList.toggle('dark');
}