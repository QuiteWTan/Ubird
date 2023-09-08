let nav = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

if(navToggle){
    navToggle.addEventListener('click', () => {
        nav.classList.remove('hide-menu')
        nav.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        nav.classList.add('hide-menu')
        nav.classList.remove('show-menu')
    })
}

function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 100) {
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll',scrollHeader)

	
var swiper = new Swiper(".swiper-container", {
    loop: false,
    effect: "coverflow",
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: "3",
    coverflowEffect: {
        rotate: 30,
        stretch: 1,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
})


ScrollReveal().reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

ScrollReveal().reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

ScrollReveal().reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})