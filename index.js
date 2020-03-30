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

// get data from JSON file
const getData = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};
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
                  "<a href='Components/404/404.html'>" +
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

$(document).ready(async () => {
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

  // carousel
  $(".carousels").slick({
    rtl: true,
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    cssEase: "linear",
    autoplay: false,
    autoplaySpeed: 2000
  });

  // button to facebook
  $(".advertising button").click(function() {
    window.location.href = "https://www.facebook.com/OSFDigital";
  });

  // showing cookies
  if (localStorage.getItem("cookieState") != "accepted") {
    setTimeout(function() {
      $(".active-cookie-dialog").removeClass("cookie-dialog");
    }, 3000);
  }
  $(".cookie-dialog button").click(function() {
    localStorage.setItem("cookieState", "accepted"), console.log("clicked");
  });
  $(".cookie-dialog button, .fa-times").click(function() {
    $(".active-cookie-dialog").addClass("cookie-dialog");
  });

  // get year
  $("footer #year").text(new Date().getFullYear());
});

// injecting the items inside popular items section

getData()
  .then(data => {
    return data.popularItems.map(popItem => {
      return $(".items").append(
        ` <div class='${popItem.class} ${
          popItem.id > 8 ? "inactive-item" : ""
        } ${popItem.button === true ? "buttoned" : " "}'  >
      <img src='/Images/${popItem.imageURL}'/>
      <div class="item-info">
       <div class="item-name">
        ${popItem.name}
        </div>
        <div class="item-details">
        ${
          popItem.price
            ? `<div class="item-price">
        ${popItem.price} 
         </div>`
            : " "
        }
        ${
          popItem.button === true
            ? `<button class="buy-btn">BUY NOW</button>`
            : " "
        }
        </div>
      </div>
      ${popItem.moreInfo ? `<div>${popItem.moreInfo}</div>` : " "}
      ${popItem.icon ? `<img src="/Images/${popItem.icon}"/>` : " "}
      ${popItem.time ? `<span>${popItem.time} Ago</span>` : " "}
      ${
        popItem.greenGradient === true
          ? `<div class="green-gradient">
            <div><i class="fas fa-plus"></i></div>
            <div><i class="fas fa-heart"></i></div>
          </div>`
          : " "
      }
        </div>
       `
      );
    });
  })
  .then(
    // when width <= 500, products become slider
    $(window).on("load resize", async function() {
      console.log("loaded and resize");
      if ($(window).width() <= 500) {
        if (!$(".items").hasClass("slick-initialized")) {
          await $(".items").attr("dir", "rtl");
          await $(".items")
            .not(".slick-initialized")
            .slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              rtl: true,
              infinite: true,
              dots: true,
              arrows: false,
              speed: 500,
              cssEase: "linear",
              autoplaySpeed: 6000
            });
        }
      } else {
        if ($(".items").hasClass("slick-initialized")) {
          $(".items").slick("unslick");
        }
        $(".items").removeAttr("dir");
      }

      // showing green gradient on hover
      $(".item").hover(function() {
        console.log($(".item"));
        $(this)
          .children(".green-gradient")
          .toggleClass("active-gradient");
      });
      // increase cart value
      $(".buy-btn").click(function() {
        $("#cart").text(parseInt($("#cart").text()) + 1);
      });
      // increase vart value
      $(".fa-plus").click(function() {
        $("#cart").text(parseInt($("#cart").text()) + 1);
      });
      //  increase wishlist value
      $(".fa-heart").click(function() {
        $("#wish-list").text(parseInt($("#wish-list").text()) + 1);
      });

      // show more products on "view more"
      $(".popular-items>button").one("click", function() {
        $(".item").removeClass("inactive-item");
      });

      // redirect to product detailed page
      $(".buttoned img , .buttoned .item-name , .buttoned .item-price").click(
        function() {
          window.location.href =
            "Components/ProductPage/product-detailed-page.html";
        }
      );

      // redirect to countdown page
      $(".countdown").click(function() {
        window.location.href = "Components/Countdown/countdown.html";
      });
      // redirect to cart page
      $(".cart-link").click(function() {
        window.location.href = "Components/CartPage/cart-page.html";
      });
    })
  );

// injecting the popular items inside featured products section

getData()
  .then(data => {
    return $(".featured-products").append(
      `<div class="products">${data.popularItems
        .filter(item => {
          return item.id <= 12;
        })
        .map(popItem => {
          return ` <div class="product">
            <img src='/Images/${popItem.imageURL}'/>
            <div class="product-details">
             <div class="product-name">
              ${popItem.name}
              </div>
              <div class="description">
             ${popItem.description}
              </div>
              </div> 
              </div> `;
        })
        .join("")}</div>`
    );
  })
  .then(
    $(window).on("load resize", async () => {
      console.log("loaded produc featured");
      await $(".products")
        .not(".slick-initialized")
        .slick({
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: true,
          autoplaySpeed: 5000,
          infinite: true,
          arrows: true,
          speed: 500,
          cssEase: "linear",
          nextArrow: $(".next"),
          prevArrow: $(".prev"),
          responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]
        });
    })
  );
