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
