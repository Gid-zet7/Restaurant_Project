import FullLockupColor from "../Images/Full-Lockup-Color.svg";
import Alexander from "../Images/alexander.jpg";

const contact = () => {
  const alexander = new Image();
  alexander.src = Alexander;

  const fullLockup = new Image();
  fullLockup.src = FullLockupColor;

  const contact = document.createElement("div");
  const lockupDiv = document.createElement("div");
  lockupDiv.innerHTML = `
        <img src="https://github.com/Gid-zet7/Restaurant_Project/blob/main/src/Images/Full-Lockup-Color.svg">
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
  lockupDiv.classList.add("logo-div");

  contact.appendChild(lockupDiv);
  contact.appendChild(locationDiv);

  return contact;
};

const loadContact = () => {
  const contents = document.querySelector(".contents");
  contents.innerHTML = "";
  contents.appendChild(contact());
};

export default loadContact;
