var homeFooterContainer = document.getElementById("homeFooterContainer");
      if (homeFooterContainer) {
        homeFooterContainer.addEventListener("click", function (e) {
          window.location.href = "./Home.html";
        });
      }
      
      var aboutUsFooter = document.getElementById("aboutUsFooter");
      if (aboutUsFooter) {
        aboutUsFooter.addEventListener("click", function (e) {
          window.location.href = "./AboutUs.html";
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
          window.location.href = "OurFacilities.html";
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
      
      var vhoTelText1 = document.getElementById("vhoTelText1");
      if (vhoTelText1) {
        vhoTelText1.addEventListener("click", function (e) {
          window.location.href = "./Home.html";
        });
      }
      
      var homeText1 = document.getElementById("homeText1");
      if (homeText1) {
        homeText1.addEventListener("click", function (e) {
          window.location.href = "./Home.html";
        });
      }
      
      var aboutUsText1 = document.getElementById("aboutUsText1");
      if (aboutUsText1) {
        aboutUsText1.addEventListener("click", function (e) {
          window.location.href = "./AboutUs.html";
        });
      }
      
      var reservationText1 = document.getElementById("reservationText1");
      if (reservationText1) {
        reservationText1.addEventListener("click", function (e) {
          window.location.href = "./Reservation.html";
        });
      }
      
      var ourRoomsText1 = document.getElementById("ourRoomsText1");
      if (ourRoomsText1) {
        ourRoomsText1.addEventListener("click", function (e) {
          window.location.href = "./OurRooms.html";
        });
      }
      
      var ourFacilitiesText1 = document.getElementById("ourFacilitiesText1");
      if (ourFacilitiesText1) {
        ourFacilitiesText1.addEventListener("click", function (e) {
          window.location.href = "OurFacilities.html";
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