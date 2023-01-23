const homeFunction = () => {
  const content = document.querySelector("#content");

  // Title Card
  const titleCard = document.createElement("div");
  titleCard.classList.add("titleCard");
  content.appendChild(titleCard);
  const titleContainer = document.createElement("div");
  titleContainer.classList.add("titleContainer");
  titleCard.appendChild(titleContainer);
  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerHTML = "MACHIAVELLI'S";
  titleContainer.appendChild(title);
  const linksContainer = document.createElement("div");
  linksContainer.classList.add("linksContainer");
  titleCard.appendChild(linksContainer);
  const home = document.createElement("h3");
  home.classList.add("home");
  home.innerHTML = "HOME";
  linksContainer.appendChild(home);
  const menu = document.createElement("h3");
  menu.classList.add("menu");
  menu.innerHTML = "MENU";
  linksContainer.appendChild(menu);
  const contact = document.createElement("h3");
  contact.classList.add("contact");
  contact.innerHTML = "CONTACT";
  linksContainer.appendChild(contact);

  // Home Container
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homeContainer");
  content.appendChild(homeContainer);
};

export { homeFunction };
