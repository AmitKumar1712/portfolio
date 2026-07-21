/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
      strings: ['Python Developer', 'Machine Learning Enthusiast', 'Full Stack Developer'],  //interest profession
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      cursorChar: '_',
});


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
   const header = document.getElementById('header')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
   this.scrollY >= 50 ? header.classList.add('shadow-header') 
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
   e.preventDefault()

   /*
      The code for sending emails is a sample test.

      Create your account at https://www.emailjs.com/ 
      and follow the instructions in the video and images 
      to send emails with your account.
   */

      //serviceID - templateID - #form - publicKey     //1:10:00
      emailjs.sendForm('service_8ii265v','template_85g6ftk', '#contact-form','VQaq6RG_bXgUd7BNm')
      .then(() => {
         //show sent message
         contactMessage.textContent = 'Message sent successfully ✅'

         //Remove Message after five seconds
         setTimeout(() => {
            contactMessage.textContent = ''
         }, 5000)

         //Clear Input Field
         contactForm.reset()
      }, () => {
         //show error message
         contactMessage.textContent = 'Message not sent (service error) ❌'
      })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home") 
// and activate the link with the class .active-link
const scrollActive = () => {
   // We get the position by scrolling down
   const scrollDown = window.scrollY

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight, // Element height
            sectionTop = current.offsetTop - 58, // Distance from the top edge
            sectionId = current.getAttribute('id'), // id of each section
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']') // id nav link

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
          sectionsClass.classList.add('active-link')
      }else{
         sectionsClass.classList.remove('active-link')
      }

      
   })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2000,
   // reset: true, //Animations repeat
})

sr.reveal('.home__content, .resume__content:nth-child(1), .footer__container')
sr.reveal('.home__data, .resume__content:nth-child(2)', {delay: 300, origin: 'bottom'})

sr.reveal('.about__content, .contact__content', {origin: 'bottom'})
sr.reveal('.about__image, .contact__form', {delay: 300})

sr.reveal('.projects__card', {interval: 100})