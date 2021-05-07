function openNav() {
    let overlayContent = document.getElementById('overlay');
    let openCloseBtn = document.getElementsByClassName('openBtn');
    let xIcon = document.querySelector(".xIcon");
    let menuIcon = document.querySelector(".menuIcon");

    overlayContent.classList.contains("showMenu");

    if(overlayContent.classList.contains("showMenu")) {
      overlayContent.classList.remove("showMenu");
      xIcon.style.display = "none";
      menuIcon.style.display = "block"
      overlayContent.style.opacity = "0"

    } else {
      overlayContent.classList.add("showMenu");
      xIcon.style.display = "block";
      xIcon.style.color = "hsl(0, 0%, 63%)"
      menuIcon.style.display = "none"
      overlayContent.style.opacity = "1";      
    }

  }

  let menuLinks = document.querySelectorAll(".menuLink");

  menuLinks.forEach(
    function(menuLink) {
      menuLink.addEventListener("click", openNav());
    }
  )

//slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlides(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if(n > slides.length) {
    slideIndex = 1;
  } 
  if(n < 1) {
    slideIndex = slides.length;
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block"
}


