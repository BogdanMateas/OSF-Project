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
                  "<a href='../404/404.html'>" +
                  "<div class='dropdown-level-III'>" +
                  childElem.name +
                  "</div>" +
                  "</a>"
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

$(document).ready(() => {
  $("nav").prepend(menu);
  $(".main-titles").click(function() {
    console.log(this);
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
  console.log($(".nav-links>div:first-child"));
  $(".nav-links .dropdown-level-I:first-child").hover(function() {
    if (window.matchMedia("(min-width: 1280px)").matches) {
      event.stopPropagation();
      console.log("click");
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
      console.log("click");
      event.stopPropagation();
      $(this)
        .siblings()
        .toggleClass("active-mobile-III");
    }
  });
});

// showing login  box
$(document).ready(function() {
  $(".login-trigger").click(function(e) {
    $(".login-box").addClass("active-login-box");
    console.log(e.currentTarget);
  });
  $(".login-box").click(function(e) {
    if (
      $(e.target).hasClass("login-box") ||
      $(e.target).hasClass("login-exit")
    ) {
      console.log($(".login-box"));
      $(".login-box").removeClass("active-login-box");
    }
  });
});

// get data from JSON file

const getData = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};

// add countdown

$(document).ready(function() {
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
      <input type="email" placeholder="Enter your email to receive the latest announcements"> > </input>
      </div>
    `
  );

  // initializing the lets
  var myDate = {
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  setInterval(function countDown() {
    let currentDate = new Date();
    let futureDate = new Date(2020, 02, 30, 00, 00, 00, 0);
    console.log(Object.values(myDate)[4], $(".months"));
    // console.log(
    //   Object.entries(myDate).map(date => {
    //     return date;
    //   })
    // );
    // get total seconds between the times
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

    // what's left is seconds
    let seconds = Math.floor(delta % 60); // in theory the modulus is not required
    myDate.seconds = seconds;

    $(".months").text(Object.values(myDate)[0]);
    $(".days").text(Object.values(myDate)[1]);
    $(".hours").text(Object.values(myDate)[2]);
    $(".minutes").text(Object.values(myDate)[3]);
    $(".seconds").text(Object.values(myDate)[4]);

    // countDown.innerHTML = Object.values(myDate).join(" ");
  }, 1000);
});
