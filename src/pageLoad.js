import mainContent from "./mainContent";
import createNavbar from "./Components/Navbar";

function pageLoad() {
  const container = document.querySelector(".container");

  container.appendChild(createNavbar());
  container.appendChild(mainContent());
}

export default pageLoad;
