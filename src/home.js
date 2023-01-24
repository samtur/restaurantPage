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
  const homeCard = document.createElement("div");
  homeCard.classList.add("homeCard");
  homeContainer.appendChild(homeCard);

  const restInfo = document.createElement("div");
  restInfo.classList.add("restInfo");
  homeCard.appendChild(restInfo);
  const resttxt1 = document.createElement("p");
  const resttxt2 = document.createElement("p");
  resttxt1.classList.add("resttxt");
  resttxt2.classList.add("resttxt");
  resttxt1.innerHTML = "Delicious Italian cuisine!";
  resttxt2.innerHTML = "Made from freshly sourced local ingredients!";
  restInfo.appendChild(resttxt1);
  restInfo.appendChild(resttxt2);

  const restImg = document.createElement("div");
  restImg.classList.add("restImg");
  homeCard.appendChild(restImg);

  const restInfo2 = document.createElement("div");
  restInfo2.classList.add("restInfo2");
  homeCard.appendChild(restInfo2);
  const resttxt3 = document.createElement("p");
  resttxt3.classList.add("resttxt2");
  resttxt3.innerHTML = "A traditional Italian experience since 1527";
  restInfo2.appendChild(resttxt3);
};

export { homeFunction };
