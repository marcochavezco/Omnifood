/////////////////////////////////
// Change the copyrigth year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////////
// Mobile menu functionality

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const html = document.documentElement;
const body = html.childNodes[2];

const toggleMenu = function (e) {
  const clickedEl = e.target;
  if (!clickedEl) return;

  header.classList.toggle("nav-open");
};

btnNav.addEventListener("click", toggleMenu);

/////////////////////////////////
// Smooth scrolling animation on links

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

/////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const bodyEl = document.body;

const stickyNav = function (entries) {
  const ent = entries[0];
  console.log(ent);

  if (!ent.isIntersecting) {
    bodyEl.classList.add("sticky");
  }

  if (ent.isIntersecting) {
    bodyEl.classList.remove("sticky");
  }
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

const fixFlex = function () {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
};
fixFlex();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
