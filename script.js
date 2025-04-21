
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    gsap.to(preloader, {
        opacity: 0,
        duration: 2,
        onComplete: () => {
            preloader.style.display = "none";
        }
        
    });
    gsap.from('.hero', {
        opacity: 0,
        y: 50,
        delay: 0.5,
        duration: 1.2,
        ease: "power2.out"
    });
});


function head(){
    var tl = gsap.timeline();

    tl.from('.headline h1',{
        y: '30',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    tl.from('.quote',{
        y: '-10',
        opacity: 0,
        duration: 1.8,
        ease: Expo.easeInOut
    })
}


const menuIcon = document.querySelector("nav .ri-menu-3-line");
const mobileNav = document.getElementById("mobileNav");

menuIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
});

document.querySelectorAll('#mobileNav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('show');
    });
});

const closeNav = document.getElementById("closeNav");
if (closeNav) {
    closeNav.addEventListener("click", () => {
        mobileNav.classList.remove("show");
    });
}


// back-to-top functionality
(() => {
    const btn = document.getElementById("backToTop");
  
    // Show/hide button on scroll
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    });
  
    // Click scroll to top
    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  })();
  

head();