import loadHome from "./Home";
import loadMenu from "./Menu";
import FullLockupBlack from "../Images/Full-Lockup-Black.svg";
import loadContact from "./Contact";

const createNavbar = () => {
  // const container = document.querySelector(".container");
  const header = document.createElement("header");

  const fullLockupBlack = new Image();
  fullLockupBlack.src = FullLockupBlack;

  const logoContainer = document.createElement("div");
  logoContainer.innerHTML = `<img src="https://github.com/Gid-zet7/Restaurant_Project/blob/main/src/Images/Full-Lockup-Black.svg">`;
  const headerInput = document.createElement("input");
  const headerNav = document.createElement("nav");
  const headerUl = document.createElement("ul");
  const headerHomeLi = document.createElement("li");
  const headerMenuLi = document.createElement("li");
  const headerAboutLi = document.createElement("li");
  const headerContactLi = document.createElement("li");
  const headerLabel = document.createElement("label");
  const headerSpan = document.createElement("span");

  logoContainer.classList.add("logo");
  // headerH1.textContent = "Bannycue";
  headerInput.classList.add("nav-toggle");
  headerInput.id = "nav-toggle";
  headerInput.type = "checkbox";

  headerHomeLi.id = "home_btn";
  headerHomeLi.textContent = "HOME";
  headerHomeLi.addEventListener("click", () => {
    loadHome();
  });

  headerMenuLi.id = "menu_btn";
  headerMenuLi.textContent = "MENU";
  headerMenuLi.addEventListener("click", () => {
    loadMenu();
  });

  headerAboutLi.id = "about_btn";
  headerAboutLi.textContent = "ABOUT US";

  headerContactLi.id = "contact_btn";
  headerContactLi.textContent = "CONTACT US";
  headerContactLi.addEventListener("click", () => {
    loadContact();
  });

  headerLabel.classList.add("nav-toggle-label");
  headerLabel.htmlFor = "nav-toggle";

  headerUl.appendChild(headerHomeLi);
  headerUl.appendChild(headerMenuLi);
  headerUl.appendChild(headerAboutLi);
  headerUl.appendChild(headerContactLi);
  headerNav.appendChild(headerUl);

  headerLabel.appendChild(headerSpan);

  header.appendChild(logoContainer);
  header.appendChild(headerInput);
  header.appendChild(headerNav);
  header.appendChild(headerLabel);

  return header;
  // container.appendChild(header);
};

export default createNavbar;
