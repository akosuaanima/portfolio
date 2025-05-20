const navElement = document.getElementById('navbar');

document.addEventListener('scroll', function() {
    if (window.scrollY > 70) {
        navElement.style.backgroundColor = '#0779e4';
    } else {
    navElement.style.backgroundColor = 'transparent';
    }
});