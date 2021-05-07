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
      overlayContent.style.opacity = "1"
    }

  }

  let menuLinks = document.querySelectorAll(".menuLink");

  menuLinks.forEach(
    function(menuLink) {
      menuLink.addEventListener("click", openNav());
    }
  )


  /*
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
    } else {
      overlayContent.classList.add("showMenu");
      xIcon.style.display = "block";
      xIcon.style.color = "hsl(0, 0%, 63%)"
      menuIcon.style.display = "none"
    }

    if(overlayContent.style.display === "flex") {
      overlayContent.style.display = "none"
    } else {
      overlayContent.style.display = "flex"
    }
  }

  let menuLinks = document.querySelectorAll(".menuLink");

  menuLinks.forEach(
    function(menuLink) {
      menuLink.addEventListener("click", openNav());
    }
  )
  */

