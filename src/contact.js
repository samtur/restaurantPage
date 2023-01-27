const contactFunction = () => {
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

  // Contact Card
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");
  content.appendChild(contactContainer);
  const contactCard = document.createElement("div");
  contactCard.classList.add("contactCard");
  contactContainer.appendChild(contactCard);
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contactInfo");
  contactCard.appendChild(contactInfo);
  const contactImg = document.createElement("div");
  contactImg.classList.add("contactImg");
  contactCard.appendChild(contactImg);
  const contactTxt1 = document.createElement("p");
  const contactTxt2 = document.createElement("p");
  const contactTxt3 = document.createElement("p");
  contactTxt1.innerHTML = "&#x2709; machiavellis@gmail.co.it";
  contactTxt2.innerHTML = "&#x1F4DE; 123-666-199";
  contactTxt3.innerHTML = "&#x1F4CD; Viale Glorioso, 18, 00153 Roma RM, Italy";
  contactTxt1.classList.add("contacttxt");
  contactTxt2.classList.add("contacttxt");
  contactTxt3.classList.add("contacttxt");
  contactInfo.appendChild(contactTxt1);
  contactInfo.appendChild(contactTxt2);
  contactInfo.appendChild(contactTxt3);
};

export { contactFunction };
