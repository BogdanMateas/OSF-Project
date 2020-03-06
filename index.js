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
      "<div>" +
      navItem.name +
      "<i class='fas fa-caret-down'></i>" +
      "<div class='dropdown-level-I'>" +
      navItem.children
        .map(child => {
          return (
            "<div class='dropdown-level-II'>" +
            "<div>" +
            child.name +
            "</div>" +
            "<i class='fas fa-caret-down'></i>" +
            child.children
              .map(childElem => {
                return "<div>" + childElem.name + "</div>";
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
});
