$(document).ready(function () {
  $("#btn-menu").click(function (e) {
    e.preventDefault();
    $("#mobile-menu").toggleClass("hidden");
  });

  const navbar = document.querySelector("#navbar");

  $(window).scroll(function () {
    const scrollY = window.scrollY;
    console.log(scrollY);
    if (scrollY > 300) {
      navbar.classList.add("bg-white");
    } else {
      navbar.classList.remove("bg-white");
    }
  });
});

const gsapScript = document.createElement("script");
gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
document.head.appendChild(gsapScript);

const scrollTriggerScript = document.createElement("script");
scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
document.head.appendChild(scrollTriggerScript);

// INITIALIZE ANIMATIONS AFTER GSAP LOADED
gsapScript.onload = function () {
  scrollTriggerScript.onload = function () {
    gsap.registerPlugin(ScrollTrigger);

    // IMPORTANT: Wait for DOM to be fully ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initAnimations);
    } else {
      initAnimations();
    }
  };
};

function initAnimations() {
  console.log("🎬 Starting GSAP animations...");

  // FORCE NAVBAR VISIBLE (CRITICAL FIX)

  const navbar = document.getElementById("navbar");
  if (navbar) {
    // Force navbar to be visible immediately
    navbar.style.opacity = "1";
    navbar.style.visibility = "visible";

    // Only force flex display on desktop
    if (window.innerWidth >= 1024) {
      navbar.style.display = "flex";
    }

    console.log("✅ Navbar forced visible");
  }

  // HERO SECTION ANIMATIONS

  // Hero Title
  const heroTitle = document.querySelector(".text-3xl.font-light, .lg\\:text-6xl");
  if (heroTitle) {
    gsap.from(heroTitle, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power4.out",
    });
  }

  // Hero Subtitle
  const heroSubtitle = document.querySelector(".font-extralight");
  if (heroSubtitle) {
    gsap.from(heroSubtitle, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }

  // Booking Form
  const bookingForm = document.querySelector(".bg-gradient-to-r");
  if (bookingForm) {
    gsap.from(bookingForm, {
      y: 100,
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      delay: 0.7,
      ease: "back.out(1.2)",
    });
  }

  // OWNER SECTION

  const ownerSection = document.querySelector(".container.mx-auto.space-y-16");
  if (ownerSection) {
    // Title
    const ownerTitle = ownerSection.querySelector("h1");
    if (ownerTitle) {
      gsap.from(ownerTitle, {
        scrollTrigger: {
          trigger: ownerSection,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }

    // Image
    const ownerImg = ownerSection.querySelector("img");
    if (ownerImg) {
      gsap.from(ownerImg, {
        scrollTrigger: {
          trigger: ownerSection,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }

    // Quote Icon
    const quoteIcon = ownerSection.querySelector(".fa-quote-left");
    if (quoteIcon) {
      gsap.from(quoteIcon, {
        scrollTrigger: {
          trigger: ownerSection,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 1,
        ease: "back.out(2)",
      });
    }

    // Quote Text
    const quoteText = ownerSection.querySelector("p.italic");
    if (quoteText) {
      gsap.from(quoteText, {
        scrollTrigger: {
          trigger: ownerSection,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });
    }
  }

  // STATISTICS COUNTER

  const statElements = document.querySelectorAll(".font-poppins.text-6xl");

  statElements.forEach((stat, index) => {
    const parentElement = stat.parentElement;

    // Animate parent container
    gsap.from(parentElement, {
      scrollTrigger: {
        trigger: parentElement,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      delay: index * 0.15,
      ease: "back.out(1.5)",
    });
  });

  // BEST DEAL SECTION

  const bestDealBg = document.querySelector(".bg-lime-950");
  if (bestDealBg) {
    gsap.from(bestDealBg, {
      scrollTrigger: {
        trigger: bestDealBg,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    const bestDealImg = bestDealBg.parentElement.querySelector("img");
    if (bestDealImg) {
      gsap.from(bestDealImg, {
        scrollTrigger: {
          trigger: bestDealBg,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }
  }

  // ROOMS SECTION

  const roomCards = document.querySelectorAll(".group");

  roomCards.forEach((card, index) => {
    const cardImg = card.querySelector("img");

    // Scroll animation
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      delay: index * 0.2,
      ease: "power3.out",
    });
  });

  // TESTIMONIAL SECTION

  const testimonialCards = document.querySelectorAll(".bg-slate-100 .flex.flex-col.items-center");

  testimonialCards.forEach((card, index) => {
    const avatar = card.querySelector(".rounded-full");

    // Card animation
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 80,
      opacity: 0,
      duration: 1,
      delay: index * 0.2,
      ease: "back.out(1.5)",
    });

    // Avatar animation
    if (avatar) {
      gsap.from(avatar, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 1,
        delay: index * 0.2 + 0.3,
        ease: "back.out(2)",
      });
    }
  });

  // JOIN SECTION

  const joinLogo = document.querySelectorAll('img[alt*="logo"]')[1]; // Second logo (not navbar)
  if (joinLogo) {
    gsap.from(joinLogo, {
      scrollTrigger: {
        trigger: joinLogo,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 1.5,
      ease: "back.out(2)",
    });
  }

  const mockupImg = document.querySelector('img[alt*="mockup"]');
  if (mockupImg) {
    gsap.from(mockupImg, {
      scrollTrigger: {
        trigger: mockupImg,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });
  }

  const storeImgs = document.querySelectorAll('img[alt*="store"]');
  storeImgs.forEach((img, index) => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.6 + index * 0.2,
      ease: "power3.out",
    });
  });

  // FOOTER SECTION

  const footer = document.querySelector("footer");
  if (footer) {
    const footerColumns = footer.querySelectorAll(".grid > div");

    footerColumns.forEach((col, index) => {
      gsap.from(col, {
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out",
      });
    });
  }

  // BUTTON HOVER EFFECTS

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      gsap.to(this, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", function () {
      gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  console.log("✅ GSAP Animations Complete!");
  console.log("🎨 All sections animated");
  console.log("📱 Mobile menu working");
}
