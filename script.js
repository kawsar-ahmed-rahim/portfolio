let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll reveal
   ScrollReveal({ 
    reset : true,
    distance : '80px',
    duration : 2000,
    delay : 100
});

ScrollReveal().reveal('.home-content, .heading', { origin : 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .skills .container', { origin : 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin : 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin : 'right'});