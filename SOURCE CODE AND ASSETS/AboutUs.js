var vhoTelText = document.getElementById("vhoTelText");
      if (vhoTelText) {
        vhoTelText.addEventListener("click", function (e) {
          window.location.href = "./Home.html";
        });
      }
      
      var homeText = document.getElementById("homeText");
      if (homeText) {
        homeText.addEventListener("click", function (e) {
          window.location.href = "./Home.html";
        });
      }
      
      var aboutUsText = document.getElementById("aboutUsText");
      if (aboutUsText) {
        aboutUsText.addEventListener("click", function (e) {
          window.location.href = "AboutUs.html";
        });
      }
      
      var reservationText = document.getElementById("reservationText");
      if (reservationText) {
        reservationText.addEventListener("click", function (e) {
          window.location.href = "./Reservation.html";
        });
      }
      
      var ourRoomsText = document.getElementById("ourRoomsText");
      if (ourRoomsText) {
        ourRoomsText.addEventListener("click", function (e) {
          window.location.href = "./OurRooms.html";
        });
      }
      
      var ourFacilitiesText = document.getElementById("ourFacilitiesText");
      if (ourFacilitiesText) {
        ourFacilitiesText.addEventListener("click", function (e) {
          window.location.href = "./OurFacilities.html";
        });
      }
      
      var homeFooterContainer = document.getElementById("homeFooterContainer");
      if (homeFooterContainer) {
        homeFooterContainer.addEventListener("click", function (e) {
          window.location.href = "./Home.html";
        });
      }
      
      var aboutUsFooter = document.getElementById("aboutUsFooter");
      if (aboutUsFooter) {
        aboutUsFooter.addEventListener("click", function (e) {
          window.location.href = "AboutUs.html";
        });
      }
      
      var ourRoomsFooter = document.getElementById("ourRoomsFooter");
      if (ourRoomsFooter) {
        ourRoomsFooter.addEventListener("click", function (e) {
          window.location.href = "./OurRooms.html";
        });
      }
      
      var ourFacilitiesFooter = document.getElementById("ourFacilitiesFooter");
      if (ourFacilitiesFooter) {
        ourFacilitiesFooter.addEventListener("click", function (e) {
          window.location.href = "./OurFacilities.html";
        });
      }
      
      var reservationFooterContainer = document.getElementById(
        "reservationFooterContainer"
      );
      if (reservationFooterContainer) {
        reservationFooterContainer.addEventListener("click", function (e) {
          window.location.href = "./Reservation.html";
        });
      }

      var vhoTelText = document.getElementById("vhoTelText");
      if (vhoTelText) {
        vhoTelText.addEventListener("click", function (e) {
          window.location.href = "./Home.html";
        });
      }
      const menutoggle = document.querySelector(".menu-toggle");
      const navmenu = document.querySelector(".home-parent3");
      
      menutoggle.addEventListener("click", () => {
        menutoggle.classList.toggle("active");
        navmenu.classList.toggle("active");
      })
      
      document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        menutoggle.classList.remove("active");
        navmenu.classList.remove("active");
      }))