import mainContent from "./mainContent";
import createNavbar from "./Components/Navbar";
import fadeinAndNavChange from "./fadeinAndNavChange";

function pageLoad() {
  const container = document.querySelector(".container");

  container.appendChild(createNavbar());
  container.appendChild(mainContent());
  fadeinAndNavChange();
}

export default pageLoad;
