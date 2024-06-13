document.addEventListener("DOMContentLoaded", function () {
  const aboutMeSection = document.querySelector("#about-me");
  const skillsSection = document.querySelector("#skills");
  const aboutMeElements = aboutMeSection.querySelectorAll("h2, p");
  const skillsElements = skillsSection.querySelectorAll("h2, ul > li");

  let currentAboutMeIndex = 0;
  let currentSkillsIndex = 0;

  window.addEventListener("scroll", function () {
    const aboutMeBounding = aboutMeSection.getBoundingClientRect();
    const skillsBounding = skillsSection.getBoundingClientRect();

    if (
      skillsBounding.top < window.innerHeight &&
      currentSkillsIndex < skillsElements.length
    ) {
      if (currentAboutMeIndex < aboutMeElements.length) {
        aboutMeElements[currentAboutMeIndex].classList.add("hidden");
        currentAboutMeIndex++;
      }
      skillsElements[currentSkillsIndex].style.opacity = 1;
      skillsElements[currentSkillsIndex].style.transform = "translateY(0)";
      currentSkillsIndex++;
    }
  });
});

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function (e) {
  cursor.style.left = cursor2.style.left = e.clientX + "px";
  cursor.style.top = cursor2.style.top = e.clientY + "px";
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("small");
    cursor2.classList.add("small");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("small");
    cursor2.classList.remove("small");
  });
});

document
  .querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div")
  .forEach((textElement) => {
    textElement.addEventListener("mouseenter", () => {
      cursor.classList.add("fullscreen");
      cursor2.classList.add("fullscreen");
    });
    textElement.addEventListener("mouseleave", () => {
      cursor.classList.remove("fullscreen");
      cursor2.classList.remove("fullscreen");
    });
  });

let inTouchSection = document.querySelector(".in-touch");
let line1 = document.querySelector(".line-1");
let line2 = document.querySelector(".line-2");

window.onscroll = () => {
  let sectionTop = inTouchSection.offsetTop;
  let sectionHeight = inTouchSection.offsetHeight;
  let scrollY = window.scrollY;

  if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
    let pos = scrollY - sectionTop;
    line1.style.left = `${pos}px`;
    line2.style.right = `${pos}px`;
  } else {
    line1.style.left = `-800px`; // Reset to initial position when out of section
    line2.style.right = `-800px`; // Reset to initial position when out of section
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const jobTitleSection = document.querySelector(".job-title");
  const sections = document.querySelectorAll(".section");

  window.addEventListener("scroll", () => {
    const headerHeight = header.offsetHeight;
    const jobTitleOffsetTop = jobTitleSection.offsetTop;

    if (window.scrollY >= jobTitleOffsetTop - headerHeight) {
      header.classList.add("fixed");
      header.classList.add("blurred");
      jobTitleSection.style.marginTop = `${headerHeight}px`; // To prevent content jump
    } else {
      header.classList.remove("fixed");
      header.classList.remove("blurred");
      jobTitleSection.style.marginTop = `0px`; // Reset the margin-top
    }

    // Ensure header stops being fixed after the job title section is out of view
    const nextSectionOffsetTop =
      jobTitleOffsetTop + jobTitleSection.offsetHeight;
    if (window.scrollY >= nextSectionOffsetTop) {
      header.classList.remove("fixed");
      header.classList.remove("blurred");
      jobTitleSection.style.marginTop = `0px`; // Reset the margin-top
    }

    // Remove blur when scrolling up to the header section
    if (window.scrollY < jobTitleOffsetTop) {
      header.classList.remove("blurred");
    }
  });
});
