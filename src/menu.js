const menuFunction = () => {
  const content = document.querySelector("#content");

  // Nav
  const nav = document.createElement("div");
  nav.classList.add("nav");
  content.appendChild(nav);
  const navContainer = document.createElement("div");
  navContainer.classList.add("navContainer");
  nav.appendChild(navContainer);
  const home = document.createElement("h3");
  home.classList.add("home");
  home.innerHTML = "HOME";
  navContainer.appendChild(home);
  const menu = document.createElement("h3");
  menu.classList.add("menu");
  menu.innerHTML = "MENU";
  navContainer.appendChild(menu);
  const contact = document.createElement("h3");
  contact.classList.add("contact");
  contact.innerHTML = "CONTACT";
  navContainer.appendChild(contact);

  // Menu
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");
  content.appendChild(menuContainer);
  const menuCard = document.createElement("div");
  menuCard.classList.add("menuCard");
  menuContainer.appendChild(menuCard);
  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menuTitle");
  menuTitle.innerHTML = "MENU";
  menuCard.appendChild(menuTitle);
  const menuItem = document.createElement("div");
  menuItem.classList.add("menuItem");
  menuCard.appendChild(menuItem);
  const coffeeTitle = document.createElement("h1");
  coffeeTitle.classList.add("coffeeTitle");
  coffeeTitle.innerHTML = "COFFEE & ESPRESSO";
  menuItem.appendChild(coffeeTitle);
  const coffeeItem = [
    "AMERICANO",
    "CAPPUCCINO",
    "LATTE",
    "ESPRESSO",
    "MACCHIATO",
    "CORTARDO",
    "FLAT WHITE",
    "MOCHA",
  ];
  coffeeItem.forEach(function (el) {
    const coffeeItem = document.createElement("h3");
    coffeeItem.classList.add("coffeeItem");
    coffeeItem.innerHTML = el;
    menuItem.appendChild(coffeeItem);
  });
  const coffeePrice = [
    "$1.99",
    "$2.99",
    "$2.99",
    "$1.00",
    "$2.00",
    "$2.00",
    "$3.99",
    "$3.99",
  ];
  for (let i = 0; i < coffeePrice.length; i += 1) {
    const price = document.createElement("h3");
    price.classList.add("coffeePrice");
    price.innerHTML = coffeePrice[i];
    price.id = `price${i}`;
    menuItem.appendChild(price);
  }

  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menuItem2");
  menuCard.appendChild(menuItem2);
  const teaTitle = document.createElement("h1");
  teaTitle.classList.add("teaTitle");
  teaTitle.innerHTML = "TEAS & COLD DRINKS";
  menuItem2.appendChild(teaTitle);
  const teaItem = [
    "TEA & HERBAL TEA",
    "ICED TEA (PEACH OR LEMON)",
    "ICED AMERICANO",
    "ICED LATTE",
    "MILKSHAKES (STRAWBERRY OR CHOCOLATE)",
    "CAFFE FRAPPE (WITH COFFEE ICE CREAM)",
    "AFFOGATO DI GELATO",
    "SANPELLEGRINO (ORANGE OR LEMON)",
  ];
  teaItem.forEach(function (el) {
    const teaItem = document.createElement("h3");
    teaItem.classList.add("teaItem");
    teaItem.innerHTML = el;
    menuItem2.appendChild(teaItem);
  });
  const teaPrice = [
    "$1.00",
    "$3.99",
    "$1.99",
    "$2.00",
    "$2.00",
    "$2.00",
    "$4.99",
    "$2.99",
  ];
  for (let i = 0; i < teaPrice.length; i += 1) {
    const price = document.createElement("h3");
    price.classList.add("teaPrice");
    price.innerHTML = teaPrice[i];
    price.id = `price${i}`;
    menuItem2.appendChild(price);
  }

  const menuItem3 = document.createElement("div");
  menuItem3.classList.add("menuItem3");
  menuCard.appendChild(menuItem3);
  const paniniTitle = document.createElement("h1");
  paniniTitle.classList.add("paniniTitle");
  paniniTitle.innerHTML = "HOT PANINIS";
  menuItem3.appendChild(paniniTitle);
  const paniniItem = [
    "FRESH SALMON",
    "TUNA MELT",
    "HOISIN DUCK",
    "ITALIAN PORCHETTA",
    "TURKEY & CRISPY PANCETTA",
    "VITELLO TONNATO",
    "CHICKEN & AVOCADO",
    "VEGGIE DELIGHT",
  ];
  paniniItem.forEach(function (el) {
    const paniniItem = document.createElement("h3");
    paniniItem.classList.add("paniniItem");
    paniniItem.innerHTML = el;
    menuItem3.appendChild(paniniItem);
  });
  const paniniPrice = [
    "$5.99",
    "$5.99",
    "$5.99",
    "$5.99",
    "$5.99",
    "$4.99",
    "$4.99",
    "$4.99",
  ];
  for (let i = 0; i < paniniPrice.length; i += 1) {
    const price = document.createElement("h3");
    price.classList.add("paniniPrice");
    price.innerHTML = paniniPrice[i];
    price.id = `price${i}`;
    menuItem3.appendChild(price);
  }

  // Footer
  const footer = document.createElement("div");
  footer.classList.add("footer");
  content.appendChild(footer);
  const footertxt = document.createElement("p");
  footertxt.classList.add("footertxt");
  footertxt.innerHTML = "Developed by Sam Turland";
  footer.appendChild(footertxt);
};

export { menuFunction };
