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

const getData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
};

// injecting the items inside popular items section
$(document).ready(async function() {
  await getData().then(data => {
    return data.popularItems
      .filter(item => {
        console.log(item.id <= 8);
        return item.id <= 8;
      })
      .map(popItem => {
        return $(".items").append(
          ` <div class=${popItem.class}>
          <img src='./Images/${popItem.imageURL}'/>
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
            ${popItem.button === true ? `<button>BUY NOW</button>` : " "}
            </div>
          </div>
          ${popItem.moreInfo ? `<div>${popItem.moreInfo}</div>` : " "}
          ${popItem.icon ? `<img src="./Images/${popItem.icon}"/>` : " "}
          ${popItem.time ? `<span>${popItem.time} Ago</span>` : " "}
            </div>
           `
        );
      });
  });
  if (window.matchMedia("(max-width: 768px)").matches) {
    
    $(".items").slick({
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
    $(".items").removeAttr("dir");
  }
});

// loading more items inside popular items section

$(document).ready(() => {
  $(".popular-items>button").one("click", () => {
    console.log("click");
    getData().then(data => {
      return data.popularItems
        .filter(item => {
          console.log(item.id >= 8);
          return item.id > 8;
        })
        .map(popItem => {
          return $(".items").append(
            ` <div class=${popItem.class}>
          <img src='./Images/${popItem.imageURL}'/>
          <div class="item-info">
           <div>
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
            ${popItem.button === true ? `<button>BUY NOW</button>` : " "}
            </div>
          </div>
          </div>
           
            </div>
           `
          );
        });
    });
  });
});

// injecting the popular items inside featured products section
$(document).ready(async function() {
  await getData().then(data => {
    return $(".featured-products").append(
      `<div class="products">${data.popularItems
        .filter(item => {
          console.log(item.id <= 8);
          return item.id <= 12;
        })
        .map(popItem => {
          return ` <div class="product">
              <img src='./Images/${popItem.imageURL}'/>
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
  });
  $(".products").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: true,
    speed: 500,
    cssEase: "linear",
    nextArrow: $(".next"),
    prevArrow: $(".prev")
  });
});

$(document).ready(function() {
  $(".carousels").slick({
    rtl: true,
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    cssEase: "linear",
    // autoplay: true,
    autoplaySpeed: 6000
  });
});

// popular item mobile carousel
