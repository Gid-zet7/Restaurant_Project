import mainContent from "./mainContent";
import createNavbar from "./Components/navBar";

function pageLoad() {
  const container = document.querySelector(".container");

  container.appendChild(createNavbar());
  container.appendChild(mainContent());
}

export default pageLoad;
