let navItems = [
  {
    name: "SERVICES",
    children: [
      {
        name: "PRODUCT",
        children: [
          {
            name: "Accesories"
          },
          {
            name: "Alcohol"
          },
          {
            name: "Art"
          },
          {
            name: "Books"
          },
          {
            name: "Drinks"
          },
          {
            name: "Electronics"
          },
          {
            name: "Flowers & Plants"
          },
          {
            name: "Food"
          },
          {
            name: "Gadgets"
          },
          {
            name: "Garden"
          },
          {
            name: "Grocery"
          },
          {
            name: "Home"
          },
          {
            name: "Jewelry"
          },
          {
            name: "Kids & Baby"
          },
          {
            name: "Men's Fashion"
          },
          {
            name: "Mobile"
          },
          {
            name: "Motorcycle"
          },
          {
            name: "Movies"
          },
          {
            name: "Music"
          },
          {
            name: "Office"
          },
          {
            name: "Pets"
          },
          {
            name: "Romantic"
          },
          {
            name: "Sport"
          },
          {
            name: "Toys"
          }
        ]
      },
      {
        name: "SALE",
        children: [
          {
            name: "Accesories"
          },
          {
            name: "Alcohol"
          },
          {
            name: "Art"
          },
          {
            name: "Books"
          },
          {
            name: "Drink"
          },
          {
            name: "Electronics"
          },
          {
            name: "Flowers & Plants"
          },
          {
            name: "Food"
          }
        ]
      }
    ]
  },
  {
    name: "COMPANY",
    children: []
  },
  {
    name: "LIBRARY",
    children: []
  },
  {
    name: "CONTACT US",
    children: []
  }
];
// header-menu / nav-bar
const menu = `<div class='nav-links'>${navItems
  .map(navItem => {
    return (
      "<div class='dropdown-level-I'>" +
      "<div >" +
      navItem.name +
      "<i class='fas fa-caret-down'></i>" +
      "</div>" +
      "<div class='nav-links-l-II'>" +
      navItem.children
        .map(child => {
          return (
            "<div class='dropdown-level-II'>" +
            "<div>" +
            child.name +
            "<i class='fas fa-caret-down'></i>" +
            "</div>" +
            child.children
              .map(childElem => {
                return (
                  "<div class='dropdown-level-III'>" +
                  "<a href='../404/404.html'>" +
                  childElem.name +
                  "</a>" +
                  "</div>"
                );
              })
              .join("") +
            "</div>"
          );
        })
        .join("") +
      `<img src=${"/Images/dropdown-img.png"} />` +
      "</div>" +
      "</div>"
    );
  })
  .join("")}</div>`;

$(document).ready(function() {
  $("nav").prepend(menu);
  $(".main-titles").click(function() {
    $(this)
      .next(".contact-details, .categories-links , .about-links")
      .toggleClass("active-footer");

    $(this)
      .children("i")
      .toggleClass("rotate");
  });
  $(".x-hamburger").click(function() {
    $(".icon").toggleClass("close");
    $(".nav-links").toggleClass("nav-mobile-links");
  });
  $(".nav-links .dropdown-level-I:first-child").hover(function() {
    if (window.matchMedia("(min-width: 769px)").matches) {
      event.stopPropagation();
      $(this)
        .children(".nav-links-l-II")
        .toggleClass("active-level-I");
    }
  });
  $(".nav-links .dropdown-level-I:first-child").click(function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      event.stopPropagation();
      $(this)
        .children(".nav-links-l-II")
        .toggleClass("active-mobile-II");
    }
  });
  $(".dropdown-level-II>div").click(function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      event.stopPropagation();
      $(this)
        .siblings()
        .toggleClass("active-mobile-III");
    }
  });
  // nav currencies and language dropdown
  $(".nav-currencies>li").hover(function() {
    $(this)
      .children("ul")
      .toggleClass("active-cur-lang");
  });

  // showing login  box
  $(".login-trigger").click(function(e) {
    $(".login-box").addClass("active-login-box");
  });
  // removing login box
  $(".login-box").click(function(e) {
    if ($(e.target).hasClass("login-box")) {
      $(".login-box").removeClass("active-login-box");
    }
  });
  $(document).on("keyup", function(e) {
    if (e.key === "Escape") {
      $(".login-box").removeClass("active-login-box");
    }
  });

  // toggle password
  $(".login .pass i").click(function() {
    var input = $(".login .pass #psw");
    $(this).toggleClass("fa-eye fa-eye-slash");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  // add countdown

  $(".countdown-container").append(
    ` <div class="countdown">
      <h1>We Will Release OSF Academy</h1>
      <div>We are working hard and estimated release time products below</div>
      <div>Sed ac tristique nunc, ut gravida nunc. Nulla consequat erat non lectus imperdiet</div>
      <div class="counter">
        <div class="time-division">
            <div class="time-unit months">00</div>
            <div>Months</div>
        </div>
        <div class="time-division">
            <div class="time-unit days">24</div>
            <div>Days</div>
        </div>
        <div class="time-division ">
            <div class="time-unit hours">19</div>
            <div>Hours</div>
        </div>
        <div class="time-division ">
            <div class="time-unit minutes">37</div>
            <div>Minutes</div>
        </div>
        <div class="time-division ">
            <div class="time-unit seconds">56</div>
            <div>Seconds</div>
        </div>
      </div>
      <div class="registration">
      <input type="email" placeholder="Enter your email "></input>
      <img src='/Images/rightarrow.jpg'/>
      </div>
      </div>
    `
  );

  // initializing the let
  let myDate = {
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  setInterval(function countDown() {
    let currentDate = new Date();
    let futureDate = new Date(2020, 02, 30, 24, 00, 00, 0);
    let delta = Math.abs(futureDate - currentDate) / 1000;

    // calculate (and subtract) whole days
    let days = Math.floor(delta / 86400);
    delta -= days * 86400;
    myDate.days = days;

    // calculate (and subtract) whole hours
    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    myDate.hours = hours;

    // calculate (and subtract) whole minutes
    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    myDate.minutes = minutes;

    // seconds
    let seconds = Math.floor(delta % 60);
    myDate.seconds = seconds;

    $(".months").text(Object.values(myDate)[0]);
    $(".days").text(Object.values(myDate)[1]);
    $(".hours").text(Object.values(myDate)[2]);
    $(".minutes").text(Object.values(myDate)[3]);
    $(".seconds").text(Object.values(myDate)[4]);
  }, 1000);

  // redirect to cart page
  $(".cart-link").click(function() {
    window.location.href = "../CartPage/cart-page.html";
  });

  // showing cookies
  if (localStorage.getItem("cookieState") != "accepted") {
    setTimeout(function() {
      $(".active-cookie-dialog").removeClass("cookie-dialog");
    }, 3000);
  }
  $(".cookie-dialog button").click(function() {
    localStorage.setItem("cookieState", "accepted");
  });
  $(".cookie-dialog button, .fa-times").click(function() {
    $(".active-cookie-dialog").addClass("cookie-dialog");
  });
});
