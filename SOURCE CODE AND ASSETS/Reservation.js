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
    window.location.href = "./OurFacilities.html";
  });
}

var reservationFooterContainer = document.getElementById(
  "reservationFooterContainer"
);
if (reservationFooterContainer) {
  reservationFooterContainer.addEventListener("click", function (e) {
    window.location.href = "Reservation.html";
  });
}

var vhoTelText1 = document.getElementById("vhoTelText1");
if (vhoTelText1) {
  vhoTelText1.addEventListener("click", function (e) {
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
    window.location.href = "./AboutUs.html";
  });
}

var reservationText = document.getElementById("reservationText");
if (reservationText) {
  reservationText.addEventListener("click", function (e) {
    window.location.href = "Reservation.html";
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

function validateRoom(room) {
  var validRooms = ["presidential suite", "royal suite", "junior suite", "deluxe room", "superior room"];
  
  for (var i = 0; i < validRooms.length; i++) {
    if (validRooms[i] === room.toLowerCase().trim()) {
      return true;
    }
  }
  
  return false;
}

var check = false;
var emailPlaceholder = "Enter Email";
var namePlaceholder = "Enter Full Name";

function validateRegistration() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var room = document.getElementById("room");
  var checkInDate = new Date(document.getElementById("checkInDate").value);
  var checkOutDate = new Date(document.getElementById("checkOutDate").value);

  if (name.value.length < 5) { 
    name.value = "";
    name.placeholder = "Must be more than 5 characters";
    name.style.color = "red";
    return;
  }

  name.placeholder = namePlaceholder;
  name.style.color = "";

  if (!email.value.endsWith("@gmail.com")) {
    email.value = "";
    email.placeholder = "Email must end with @gmail.com";
    email.style.color = "red";
    return;
  }

  email.placeholder = emailPlaceholder;
  email.style.color = "";

  if (checkOutDate <= checkInDate) {
    alert("Check-out date must be at least a day after the check-in date");
    checkOutDate.style.color = "red";
    return;
  }
    
  if (!validateRoom(room.value)) {
    alert("Room Available: Presidential Suite, Royal Suite, Junior Suite, Deluxe Room, Superior Room");
    return;
  }
  
  window.location.href = "./Confirmation.html";
  // var groupButton = document.getElementById("groupButton");

//   if (groupButton) {
//   groupButton.addEventListener("click", validateRegistration);
// }

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