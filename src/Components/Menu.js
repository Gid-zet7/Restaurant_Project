// import createNavbar from "./navBar";
// import Marek from "./marek.jpg";
import Markus from "../Images/markus.jpg";
import Paul from "../Images/paul.jpg";
import Chef from "../Images/chef.svg";

const menuPage = () => {
  // const container = document.querySelector(".container");
  const menu = document.createElement("div");
  const firstSection = document.createElement("div");
  const textHeader = document.createElement("h1");
  const menuDiv = document.createElement("div");
  const textTitle = document.createElement("h1");
  const cards = document.createElement("div");
  const maxyCard = document.createElement("div");
  const maxyCardImage = document.createElement("div");
  const maxyCardText = document.createElement("div");
  const maxyCardTitle = document.createElement("h1");
  const maxyCardPara = document.createElement("p");
  const maxyCardPrice = document.createElement("p");
  const maxyCardBtn = document.createElement("a");
  const codedCard = document.createElement("div");
  const codedCardImage = document.createElement("div");
  const codedCardText = document.createElement("div");
  const codedCardTitle = document.createElement("h1");
  const codedCardPara = document.createElement("p");
  const codedCardPrice = document.createElement("p");
  const codedCardBtn = document.createElement("a");
  const justMe = document.createElement("div");
  const justMeImage = document.createElement("div");
  const justMeText = document.createElement("div");
  const justMeTitle = document.createElement("h1");
  const justMePara = document.createElement("p");
  const justMePrice = document.createElement("p");
  const justMeBtn = document.createElement("a");
  const bonusDiv = document.createElement("div");
  const bonusImage = document.createElement("div");

  menu.classList.add("menu");
  firstSection.classList.add("first-section");
  textHeader.textContent = "Menu";
  textHeader.classList.add("text_header");
  menuDiv.classList.add("head_container");
  cards.classList.add("cards");
  maxyCard.classList.add("card");
  maxyCardImage.classList.add("maxycard_image");
  maxyCardText.classList.add("card_text");
  maxyCardPrice.classList.add("card_price");
  maxyCardBtn.classList.add("card_btn");
  codedCard.classList.add("card");
  codedCardImage.classList.add("codedcard_image");
  codedCardText.classList.add("card_text");
  codedCardPrice.classList.add("card_price");
  codedCardBtn.classList.add("card_btn");
  justMe.classList.add("card");
  justMeImage.classList.add("maxycard_image");
  justMeText.classList.add("card_text");
  justMePrice.classList.add("card_price");
  justMeBtn.classList.add("card_btn");
  bonusDiv.classList.add("bonus_div");
  bonusImage.classList.add("bonus");

  textTitle.textContent = "Grab a bite of our Tasty grilled rabbit";
  maxyCardTitle.textContent = "Maxy Pack";
  maxyCardPara.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum fugit ea molestiae perspiciatis, voluptates deleniti maiores, sunt aliquid perferendis atque officia dolore. Dolorem incidunt tempora tenetur sit id nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laborum totam quibusdam quos vero quia incidunt. Iste inventore debitis,";
  maxyCardPrice.textContent = "Only 39.98";
  maxyCardBtn.textContent = "Make order now";

  codedCardTitle.textContent = "Coded Pack";
  codedCardPara.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum fugit ea molestiae perspiciatis, voluptates deleniti maiores, sunt aliquid perferendis atque officia dolore. Dolorem incidunt tempora tenetur sit id nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laborum totam quibusdam quos vero quia incidunt. Iste inventore debitis,";
  codedCardPrice.textContent = "Only 19.98";
  codedCardBtn.textContent = "Make order now";

  justMeTitle.textContent = "Just-me Pack";
  justMePara.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum fugit ea molestiae perspiciatis, voluptates deleniti maiores, sunt aliquid perferendis atque officia dolore. Dolorem incidunt tempora tenetur sit id nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laborum totam quibusdam quos vero quia incidunt. Iste inventore debitis,";
  justMePrice.textContent = "Only 10.98";
  justMeBtn.textContent = "Make order now";

  const chef = new Image();
  chef.src = Chef;

  const paul = new Image();
  paul.src = Paul;
  paul.classList.add("paul_img");

  const markus = new Image();
  markus.src = Markus;
  markus.classList.add("markus_img");

  firstSection.appendChild(textHeader);
  menuDiv.appendChild(textTitle);
  maxyCard.appendChild(maxyCardImage);
  maxyCardText.appendChild(maxyCardTitle);
  maxyCardText.appendChild(maxyCardPara);
  maxyCardText.appendChild(maxyCardPrice);
  maxyCardText.appendChild(maxyCardBtn);
  maxyCard.appendChild(maxyCardText);
  codedCard.appendChild(codedCardImage);
  codedCardText.appendChild(codedCardTitle);
  codedCardText.appendChild(codedCardPara);
  codedCardText.appendChild(codedCardPrice);
  codedCardText.appendChild(codedCardBtn);
  codedCard.appendChild(codedCardText);
  justMe.appendChild(justMeImage);
  justMeText.appendChild(justMeTitle);
  justMeText.appendChild(justMePara);
  justMeText.appendChild(justMePrice);
  justMeText.appendChild(justMeBtn);
  justMe.appendChild(justMeText);
  bonusDiv.appendChild(bonusImage);

  cards.appendChild(maxyCard);
  cards.appendChild(codedCard);
  cards.appendChild(justMe);

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
