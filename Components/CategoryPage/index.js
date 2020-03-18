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
                  "<div class='dropdown-level-III'>" + childElem.name + "</div>"
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

// injecting the items inside popular items section
$(document).ready(async function() {
  await getData().then(data => {
    return (
      data.popularItems
        // .filter(item => {
        //   console.log(item.id <= 8);
        //   return item.id <= 8;
        // })
        .map(popItem => {
          return $(".items").append(
            ` <div class='${popItem.class} ${
              popItem.id > 8 ? "inactive-item" : ""
            }' >
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
        })
    );
  });
  $(document).ready(function() {
    $(window).on("resize load", function() {
      console.log("reload");
      if ($(window).width() <= 768) {
        $(".items").attr("dir", "rtl");
        $(".items")
          .not(".slick-initialized")
          .slick({
            rtl: true,
            infinite: true,
            dots: true,
            arrows: false,
            speed: 500,
            cssEase: "linear",
            // autoplay: true,
            autoplaySpeed: 6000
          });
      } else {
        $(".items").slick("unslick");
        $(".items").removeAttr("dir");
      }
    });
    $(".item").hover(function() {
      console.log(this);
      $(this)
        .children(".green-gradient")
        .toggleClass("active-gradient");
    });

    $(".buy-btn").click(function() {
      console.log(this);
      $("#cart").text(parseInt($("#cart").text()) + 1);
    });
    $(".fa-plus").click(function() {
      console.log(this);
      $("#cart").text(parseInt($("#cart").text()) + 1);
    });

    $(".fa-heart").click(function() {
      console.log(this);
      $("#wish-list").text(parseInt($("#wish-list").text()) + 1);
    });
    $(".popular-items>button").one("click", function() {
      $(".item").removeClass("inactive-item");
    });
  });
});

$(document).ready(function() {
  if (localStorage.getItem("cookieState") != "accepted") {
    setTimeout(function() {
      $(".active-cookie-dialog").removeClass("cookie-dialog");
    }, 3000);
  }
  $(".cookie-dialog button").click(function() {
    localStorage.setItem("cookieState", "accepted"), console.log("clicked");
  });
  $(".cookie-dialog button, .fa-times").click(function() {
    console.log("out");
    $(".active-cookie-dialog").addClass("cookie-dialog");
  });

  // slider Product detailed page
  $(".slider-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".slider-nav",
    vertical: true
    // verticalSwiping: true,
    // centerMode: true
  });

  $(".slider-nav").slick({
    slidesToShow: 4,
    asNavFor: ".slider-main",
    vertical: true,
    // focusOnSelect: true,
    autoplay: false,
    centerMode: true
  });

  $(window).on("resize orientationchange load", function() {
    if ($(window).width() <= 768) {
      $(".slider-nav").slick("unslick");
      $(".slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-main",
        dots: true,
        arrows: false,
        focusOnSelect: true,
        autoplay: true
        // centerMode: true
      });
    } else {
      $(".slider-nav").slick("unslick");
      $(".slider-nav").slick({
        slidesToShow: 4,
        asNavFor: ".slider-main",
        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        centerMode: true
      });
    }
  });

  $("ul.tabs li").click(function() {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
  // input numberic only validation
  $(".actions input").keypress(function(e) {
    if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
  });
  $(".actions .decrease").click(function() {
    if ($(".actions input").val() > 0) {
      $(".actions input").val(parseInt($(".actions input").val()) - 1);
    }
  });
  $(".actions .increase").click(function() {
    if ($(".actions input").val() < 100) {
      $(".actions input").val(parseInt($(".actions input").val()) + 1);
    }
  });

  // Add button event

  $(".actions button").click(function() {
    console.log(parseInt($("#cart").text()));
    console.log(parseInt($(".actions input").val()));
    $("#cart").text(
      parseInt($("#cart").text()) + parseInt($(".actions input").val())
    );
  });

  // 100 chars limit

  // $(".products-details .text-detail").text(function(idx, txt) {
  //   return txt.substr(0,100);
  // });
  // $(".products-details .read-more").click(function() {
  //   $(".products-details .text-detail").text(function(idx, txt) {
  //     return txt.substr(0);
  //   });
  // });

  $(".products-details .text-detail").text(function(idx, txt) {
    return txt.slice(0, 100);
  });
  $(".products-details .read-more").click(function() {
    console.log($(".products-details .text-detail").text());
  });
});
