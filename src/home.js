const homeFunction = () => {
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

  // Home
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homeContainer");
  content.appendChild(homeContainer);
  const homeCard = document.createElement("div");
  homeCard.classList.add("homeCard");
  homeContainer.appendChild(homeCard);
  const titleContainer = document.createElement("div");
  titleContainer.classList.add("titleContainer");
  homeCard.appendChild(titleContainer);
  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerHTML = "MACHIAVELLI'S";
  titleContainer.appendChild(title);
  const resttxt = document.createElement("p");
  resttxt.classList.add("resttxt");
  resttxt.innerHTML = "MAKING AUTHENTIC ITALIAN COFFEE SINCE 1929.";
  titleContainer.appendChild(resttxt);

  // Footer
  const footer = document.createElement("div");
  footer.classList.add("footer");
  content.appendChild(footer);
  const footertxt = document.createElement("p");
  footertxt.classList.add("footertxt");
  footertxt.innerHTML = "Developed by Sam Turland";
  footer.appendChild(footertxt);
};

export { homeFunction };
