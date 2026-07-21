/*=============== INTERNSHIP PAGE JS ===============*/

/*=============== ACTIVE NAV LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
   const scrollDown = window.scrollY;

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 80,
            sectionId = current.getAttribute("id"),
            sectionLink = document.querySelector(
               '.nav__menu a[href*=' + sectionId + ']'
            );

      if(sectionLink){
         if(scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight){
            sectionLink.classList.add("active-link");
         }else{
            sectionLink.classList.remove("active-link");
         }
      }
   });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
   origin: "bottom",
   distance: "60px",
   duration: 1500,
   delay: 200,
   reset: false
});

sr.reveal(".internship__header");
sr.reveal(".details__card",{interval:150});
sr.reveal(".experience__item",{interval:100});
sr.reveal(".skill__card",{interval:100});
sr.reveal(".timeline__item",{interval:150});
sr.reveal(".gallery__card",{interval:120});
sr.reveal(".certificate__container");
sr.reveal(".conclusion__container");

/*=============== CERTIFICATE ZOOM ===============*/
const certificate = document.querySelector(".certificate__image img");

if(certificate){
   certificate.addEventListener("click",()=>{
      window.open(certificate.src,"_blank");
   });
}

/*=============== GALLERY IMAGE PREVIEW ===============*/
const gallery = document.querySelectorAll(".gallery__card img");

gallery.forEach(img=>{
   img.addEventListener("click",()=>{
      window.open(img.src,"_blank");
   });
});

/*=============== SMOOTH BUTTON EFFECT ===============*/
const buttons=document.querySelectorAll(".button");

buttons.forEach(btn=>{
   btn.addEventListener("mouseenter",()=>{
      btn.style.transform="translateY(-4px)";
   });

   btn.addEventListener("mouseleave",()=>{
      btn.style.transform="translateY(0)";
   });
});

/*=============== CONSOLE MESSAGE ===============*/
console.log("Internship Page Loaded Successfully");