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
    if (window.matchMedia("(min-width: 768px)").matches) {
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

  // nav currencies and language dropdown
  $(".nav-currencies>li").hover(function() {
    $(this)
      .children("ul")
      .toggleClass("active-cur-lang");
  });

  // get year
  $("footer #year").text(new Date().getFullYear());

  // showing login  box

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
  }); // showing login  box

  $(".login-trigger").click(function(e) {
    $(".login-box").addClass("active-login-box");
    console.log(e.currentTarget);
  });
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
    var input = $(".login .pass input");
    $(this).toggleClass("fa-eye fa-eye-slash");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
});
