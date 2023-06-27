import LogoColor from "../Images/logo.svg";
import Alexander from "../Images/alexander.jpg";

const contact = () => {
  const alexander = new Image();
  alexander.src = Alexander;

  const logoColor = new Image();
  logoColor.src = LogoColor;

  const contact = document.createElement("div");
  const logoDiv = document.createElement("div");
  logoDiv.innerHTML = `
        <img src="../src/Images/logoColor.svg" alt="logo">
        <hr>
        <h1>Grab a Bite</h1>
    `;
  const locationDiv = document.createElement("div");
  locationDiv.innerHTML = `
        <h3>Location</h3>
        <h2> Amasaman - Abease </h2>
        <h5>Delivery & Pick up Available</h5>
        <hr>
        <h2>0200191485</h2>
        <h2>0573767116</h2>
    `;
  contact.classList.add("contact");
  logoDiv.classList.add("logo-div");

  contact.appendChild(logoDiv);
  contact.appendChild(locationDiv);

  return contact;
};

const loadContact = () => {
  const contents = document.querySelector(".contents");
  contents.innerHTML = "";
  contents.appendChild(contact());
};

export default loadContact;
