const contactFunction = () => {
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

  // Footer
  const footer = document.createElement("div");
  footer.classList.add("footer");
  content.appendChild(footer);
  const footertxt = document.createElement("p");
  footertxt.classList.add("footertxt");
  footertxt.innerHTML = "Developed by Sam Turland";
  footer.appendChild(footertxt);
};

export { contactFunction };
