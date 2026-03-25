gsap.registerPlugin(ScrollTrigger);

/* =========================
   COUNTER ANIMATION
========================== */
const animateCounter = (elementId, endValue) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const wrapper = element.closest('.flex.flex-col');
  if (!wrapper) return;

  const counter = { value: 0 };

  gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "top 80%",
      once: true
    }
  })
  .from(element, {
    scale: 0.5,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  })
  .to(counter, {
    value: endValue,
    duration: 2,
    ease: "none",
    onUpdate: () => {
      element.textContent = Math.floor(counter.value);
    }
  }, "<");
};

/* =========================
   SCROLL REVEAL
========================== */
const initScrollReveal = () => {
  gsap.utils.toArray(".gsap-reveal").forEach(el => {
    gsap.fromTo(
      el,
      { y: "10%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 60%",
          scrub: true
        }
      }
    );
  });
};

/* =========================
   PAGE LOAD ANIMATION
========================== */
const initPageLoadAnimation = () => {
  gsap.fromTo(
    ".gsap-item",
    { y: "10%", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.08,
      delay: 0.2
    }
  );
};

/* =========================
   FAQ ACCORDION
========================== */
const initFAQAccordion = () => {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    if (!question || !answer || !icon) return;

    let isOpen = false;
    gsap.set(answer, { height: 0 });

    question.addEventListener('click', () => {
      gsap.to(answer, {
        height: isOpen ? 0 : "auto",
        duration: 0.4,
        ease: "power2.inOut"
      });

      gsap.to(icon, {
        rotation: isOpen ? 0 : 180,
        duration: 0.3,
        ease: "power2.inOut"
      });

      isOpen = !isOpen;
    });
  });
};

/* =========================
   INIT – DOĞRU ZAMANLAMA
========================== */

document.addEventListener("DOMContentLoaded", () => {
  animateCounter("sales", 60);
  animateCounter("active-servers", 27);
  animateCounter("active-players", 76);

  initPageLoadAnimation();
});

const idleInit = () => {
  initScrollReveal();
  initFAQAccordion();
};

if ("requestIdleCallback" in window) {
  requestIdleCallback(idleInit, { timeout: 800 });
} else {
  setTimeout(idleInit, 300);
}
