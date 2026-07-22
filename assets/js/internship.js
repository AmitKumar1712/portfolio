/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

if(navToggle){
   navToggle.addEventListener("click", () =>{
      navMenu.classList.add("show-menu")
   })
}

if(navClose){
   navClose.addEventListener("click", () =>{
      navMenu.classList.remove("show-menu")
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () =>{
   const navMenu = document.getElementById("nav-menu")
   navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener("click", linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
   const header = document.getElementById("header")

   if(window.scrollY >= 50){
      header.classList.add("blur-header")
   }
   else{
      header.classList.remove("blur-header")
   }
}

window.addEventListener("scroll", blurHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
   const scrollUp = document.getElementById("scroll-up")

   if(window.scrollY >= 350){
      scrollUp.classList.add("show-scroll")
   }
   else{
      scrollUp.classList.remove("show-scroll")
   }
}

window.addEventListener("scroll", scrollUp)

/*=============== ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

const scrollActive = () =>{

   const scrollY = window.pageYOffset

   sections.forEach(current =>{

      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 100,
            sectionId = current.getAttribute("id"),
            sectionClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]")

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
         sectionClass.classList.add("active-link")
      }
      else{
         sectionClass.classList.remove("active-link")
      }

   })
}

window.addEventListener("scroll", scrollActive)

/*=============== SCROLL REVEAL ===============*/

const sr = ScrollReveal({
   origin: "top",
   distance: "60px",
   duration: 1500,
   delay: 200,
   reset: false
})

sr.reveal(".internship__header")
sr.reveal(".details__card",{interval:200})
sr.reveal(".experience__item",{interval:100})
sr.reveal(".skill__card",{interval:100})
sr.reveal(".timeline__item",{interval:150})
sr.reveal(".certificate__content",{origin:"left"})
sr.reveal(".certificate__image",{origin:"right"})
sr.reveal(".gallery__card",{interval:100})
sr.reveal(".learning__card",{interval:100})
sr.reveal(".conclusion__container",{origin:"bottom"})