// import createNavbar from "./navBar";
// import Marek from "./marek.jpg";
import Markus from "../Images/markus.jpg";
import Paul from "../Images/paul.jpg";
import Chef from "../Images/chef.svg";
import BannycueColor from "../Images/BannycueColor.svg";
import Design from "../Images/design.svg";

const menuPage = () => {
  // const container = document.querySelector(".container");
  const menu = document.createElement("div");
  const firstSection = document.createElement("div");
  const textHeader = document.createElement("h1");
  const menuDiv = document.createElement("div");
  const textTitle = document.createElement("div");
  const cards = document.createElement("div");
  const bonusDiv = document.createElement("div");
  const bonusImage = document.createElement("div");

  const riceDishMenu = document.createElement("div");
  const menuTitle = document.createElement("h1");
  const menuPara = document.createElement("p");
  const riceDishUl = document.createElement("ul");

  const firstRiceLi = document.createElement("li");
  const secondRiceLi = document.createElement("li");
  const thirdRiceLi = document.createElement("li");
  const fourthRiceLi = document.createElement("li");
  const fifthRiceLi = document.createElement("li");
  const sixthRiceLi = document.createElement("li");
  const riceLine = document.createElement("hr");

  const specialSatMenu = document.createElement("div");
  const satTitle = document.createElement("h1");
  const specialSatUl = document.createElement("ul");
  const firstSatLi = document.createElement("li");
  const secondSatLi = document.createElement("li");
  const thirdSatLi = document.createElement("li");
  const fourthSatLi = document.createElement("li");
  const specLine = document.createElement("hr");

  const fries = document.createElement("div");
  const friesMenu = document.createElement("div");
  const friesTitle = document.createElement("h1");
  const friesUl = document.createElement("ul");
  const firstFriesLi = document.createElement("li");
  const secondFriesLi = document.createElement("li");

  const smallChopsMenu = document.createElement("div");
  const smallChopTitle = document.createElement("h1");
  const smallChopsUl = document.createElement("ul");
  const firstChopsLi = document.createElement("li");
  const secondChopsLi = document.createElement("li");
  const friesLine = document.createElement("hr");

  const extraMenu = document.createElement("div");
  const extraTitle = document.createElement("h1");
  const extraUl = document.createElement("ul");
  const firstExtraLi = document.createElement("li");
  const secondExtraLi = document.createElement("li");
  const thirdExtraLi = document.createElement("li");
  const fourthExraLi = document.createElement("li");

  riceDishMenu.classList.add("rice-dish");
  specialSatMenu.classList.add("special-sat");
  fries.classList.add("fries");
  friesMenu.classList.add("fries-menu");
  smallChopsMenu.classList.add("small-chops");
  extraMenu.classList.add("extra");

  menuTitle.textContent = "RICE DISHES";
  satTitle.textContent = "SPECIAL SATURDAY";
  friesTitle.textContent = "FRIES";
  smallChopTitle.textContent = "SMALL CHOPS";
  extraTitle.textContent = "EXTRA";

  menuPara.innerHTML = `Served with <span>chilli</span> and <span>toast veg</span> and grilled protein`;
  firstRiceLi.innerHTML = "Coconut fried rice";
  secondRiceLi.innerHTML = "Vegetable rice";
  thirdRiceLi.innerHTML = "Plain rice";
  fourthRiceLi.innerHTML = `<span>GHS 15.00</span>-pack of rice dishes options served with <span>grilled chicken</span> and <span class="chilli-only">chilli only</span> is available`;
  fifthRiceLi.innerHTML = `<span>GHS 30.00</span>-Assorted fried rice`;
  sixthRiceLi.innerHTML = `<span>GHS 35.00</span>-Assorted fried rice with toast veg`;

  firstSatLi.innerHTML = `<span>GHS 20.00</span>-Grilled tilapia & Banku`;
  secondSatLi.innerHTML = `<span>GHS 250.00</span>-Family size package (full grilled rabbit + fried rice + toast veg)`;
  thirdSatLi.innerHTML = `<span>GHS 150.00</span>-Full grilled rabbit `;
  fourthSatLi.innerHTML = `<span>GHS 90.00</span>-Half grilled rabbit `;

  firstFriesLi.innerHTML = `<span>GHS 30.00</span>-Grilled rabbit and yam chips `;
  secondFriesLi.innerHTML = `<span>GHS 20.00</span>-Grilled chicken and yam chips`;
  firstChopsLi.innerHTML = `<span>GHS 10.00</span>-Rabbit Kebab`;
  secondChopsLi.innerHTML = `<span>GHS 10.00</span>-Chicken Kebab`;

  firstExtraLi.innerHTML = `<span>GHS 20.00</span>-Grilled rabbit`;
  secondExtraLi.innerHTML = `<span>GHS 10.00</span>-Grilled chicken`;
  thirdExtraLi.innerHTML = `<span>GHS 5.00</span>-Toast Veg`;
  fourthExraLi.innerHTML = `<span>GHS 12.00</span>-Grilled Tilapia`;

  riceDishUl.appendChild(firstRiceLi);
  riceDishUl.appendChild(secondRiceLi);
  riceDishUl.appendChild(thirdRiceLi);
  riceDishUl.appendChild(fourthRiceLi);
  riceDishUl.appendChild(fifthRiceLi);
  riceDishUl.appendChild(sixthRiceLi);

  specialSatMenu.appendChild(satTitle);
  specialSatUl.appendChild(firstSatLi);
  specialSatUl.appendChild(secondSatLi);
  specialSatUl.appendChild(thirdSatLi);
  specialSatUl.appendChild(fourthSatLi);

  friesUl.appendChild(firstFriesLi);
  friesUl.appendChild(secondFriesLi);
  friesMenu.appendChild(friesTitle);
  friesMenu.appendChild(friesUl);

  smallChopsUl.appendChild(firstChopsLi);
  smallChopsUl.appendChild(secondChopsLi);
  smallChopsMenu.appendChild(smallChopTitle);
  smallChopsMenu.appendChild(smallChopsUl);

  extraMenu.appendChild(extraTitle);
  extraUl.appendChild(firstExtraLi);
  extraUl.appendChild(secondExtraLi);
  extraUl.appendChild(thirdExtraLi);
  extraUl.appendChild(fourthExraLi);

  riceDishMenu.appendChild(menuTitle);
  riceDishMenu.appendChild(menuPara);
  riceDishMenu.appendChild(riceDishUl);
  riceDishMenu.appendChild(riceLine);
  specialSatMenu.appendChild(specialSatUl);
  specialSatMenu.appendChild(specLine);
  fries.appendChild(friesMenu);
  fries.appendChild(smallChopsMenu);
  fries.appendChild(friesLine);
  extraMenu.appendChild(extraUl);

  // riceDishMenu.appendChild(riceDishMenu);

  menu.classList.add("menu");
  firstSection.classList.add("first-section");
  textHeader.textContent = "Menu";
  textHeader.classList.add("text_header");
  menuDiv.classList.add("head_container");
  cards.classList.add("cards");

  bonusDiv.classList.add("bonus_div");
  bonusImage.classList.add("bonus");

  const chef = new Image();
  chef.src = Chef;

  const bannycueLogo = new Image();
  bannycueLogo.src = BannycueColor;
  bannycueLogo.classList.add("banny-logo");

  const design = new Image();
  design.src = Design;
  design.classList.add("design");

  const paul = new Image();
  paul.src = Paul;
  paul.classList.add("paul_img");

  const markus = new Image();
  markus.src = Markus;
  markus.classList.add("markus_img");

  firstSection.appendChild(textHeader);
  textTitle.appendChild(bannycueLogo);
  menuDiv.appendChild(textTitle);
  bonusDiv.appendChild(bonusImage);

  cards.appendChild(riceDishMenu);
  cards.appendChild(specialSatMenu);
  cards.appendChild(fries);
  cards.appendChild(extraMenu);

  menu.appendChild(firstSection);
  menu.appendChild(menuDiv);
  menu.appendChild(cards);
  menu.appendChild(bonusDiv);

  return menu;
};

function loadMenu() {
  const contents = document.querySelector(".contents");
  contents.textContent = "";
  contents.appendChild(menuPage());
}

export default loadMenu;
