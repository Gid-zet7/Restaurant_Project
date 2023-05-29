const fadeinAndNavChange = () => {
  const faders = document.querySelectorAll(".fade_in");
  const sliders = document.querySelectorAll(".slide_in");

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
  });

  // NavBar Change
  const header = document.querySelector("header");
  //   const logo = document.querySelector(".logo");
  const sectionOne = document.querySelector(".first-section");

  const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px",
  };

  const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
        // logo.classList.add("logo-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
        // logo.classList.remove("logo-scrolled");
      }
    });
  },
  sectionOneOptions);

  sectionOneObserver.observe(sectionOne);
};
export default fadeinAndNavChange;
