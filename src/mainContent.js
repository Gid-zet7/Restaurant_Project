import Marek from "./Images/marek.jpg";
import Markus from "./Images/markus.jpg";
import Paul from "./Images/paul.jpg";
import Hop from "./Images/hop.svg";
import Stand from "./Images/stand.svg";

const mainContent = () => {
  // const container = document.querySelector(".container");
  const contents = document.createElement("div");
  const firstSection = document.createElement("div");
  const textHeader = document.createElement("h1");

  firstSection.classList.add("first-section");
  contents.classList.add("contents");
  textHeader.textContent = "Welcome To Bannycue";
  textHeader.classList.add("text_header");

  firstSection.appendChild(textHeader);
  contents.appendChild(firstSection);
  // container.appendChild(contents);

  const image = new Image();
  image.src = Marek;

  const paul = new Image();
  paul.src = Paul;
  paul.classList.add("paul_img");

  const markus = new Image();
  markus.src = Markus;
  markus.classList.add("markus_img");

  const hop = new Image();
  hop.src = Hop;

  const stand = new Image();
  stand.src = Stand;

  const secondSection = document.createElement("div");
  const secondSectionDiv = document.createElement("div");
  const secondSectionH1 = document.createElement("h1");
  const secondSectionPara = document.createElement("p");

  const thirdSection = document.createElement("div");
  const fromLeft = document.createElement("div");
  const fromRight = document.createElement("div");
  const fromRightPara = document.createElement("p");
  const svgDiv = document.createElement("div");

  const thirdSectionClone = document.createElement("div");
  const fromRightClone = document.createElement("div");
  const fromLeftClone = document.createElement("div");
  const fromLeftParaClone = document.createElement("p");
  const svgDivClone = document.createElement("div");

  secondSection.classList.add("second-section");
  secondSectionDiv.classList.add("content");
  secondSectionPara.classList.add("fade_in");

  thirdSection.classList.add("third-section");
  fromLeft.classList.add("from_left");
  fromLeft.classList.add("slide_in");
  fromRight.classList.add("from_right");
  fromRight.classList.add("slide_in");
  svgDiv.classList.add("svg");

  thirdSectionClone.classList.add("third-section");
  fromRightClone.classList.add("from-right");
  fromRightClone.classList.add("slide_in");
  fromLeftClone.classList.add("from-left");
  fromLeftClone.classList.add("slide_in");
  svgDivClone.classList.add("svg");

  secondSectionH1.textContent = "Rabbit 101";
  secondSectionPara.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, iusto! Iste error at id explicabo consequatur culpa totam dolor obcaecati adipisci voluptates. Qui aliquam, accusamus explicabo nostrum optio reprehenderit quasi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis sit impedit, ducimus libero quisquam hic iure nulla neque. Inventore placeat natus incidunt minima itaque repellendus nostrum, cupiditate quos sed facere! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui atque consequuntur quas natus ex excepturi culpa numquam molestias aliquam, distinctio vel veniam veritatis ipsam ratione quisquam quibusdam. Deserunt, dolorum aut.";
  fromRightPara.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum fugit ea molestiae perspiciatis, voluptates deleniti maiores, sunt aliquid perferendis atque officia dolore. Dolorem incidunt tempora tenetur sit id nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laborum totam quibusdam quos vero quia incidunt. Iste inventore debitis, possimus, consectetur architecto quia molestias eos dolor, mollitia nulla nisi. Perspiciatis?";
  fromLeftParaClone.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum fugit ea molestiae perspiciatis, voluptates deleniti maiores, sunt aliquid perferendis atque officia dolore. Dolorem incidunt tempora tenetur sit id nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laborum totam quibusdam quos vero quia incidunt. Iste inventore debitis, possimus, consectetur architecto quia molestias eos dolor, mollitia nulla nisi. Perspiciatis?";

  secondSectionDiv.appendChild(secondSectionH1);
  secondSectionDiv.appendChild(secondSectionPara);

  svgDiv.appendChild(stand);
  fromRight.appendChild(fromRightPara);
  fromRight.appendChild(svgDiv);
  thirdSection.appendChild(fromLeft);
  thirdSection.appendChild(fromRight);

  thirdSectionClone.appendChild(fromRightClone);
  thirdSectionClone.appendChild(fromLeftClone);

  svgDivClone.appendChild(hop);
  fromLeftClone.appendChild(fromLeftParaClone);
  fromLeftClone.appendChild(svgDivClone);

  secondSection.appendChild(secondSectionDiv);
  contents.appendChild(secondSection);
  contents.appendChild(thirdSection);
  contents.appendChild(thirdSectionClone);

  // container.appendChild(contents);

  return contents;
};

export default mainContent;
