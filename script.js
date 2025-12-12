document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------
        MOBILE MENU
  --------------------------- */
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");

      // A11Y
      menuToggle.setAttribute(
        "aria-expanded",
        nav.classList.contains("open").toString()
      );
    });

    // Close menu when clicking a link
    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  /* ---------------------------
        AUTO YEAR
  --------------------------- */
  const yearTarget = document.querySelector("[data-year]");
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  /* ---------------------------
        TEAM SCROLLER
  --------------------------- */
  const scrollWrapper = document.querySelector(".team-scroll-wrapper");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (scrollWrapper && prevBtn && nextBtn) {
    const scrollAmount = 350;

    prevBtn.addEventListener("click", () => {
      scrollWrapper.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });
    });

    nextBtn.addEventListener("click", () => {
      scrollWrapper.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    });
  }

  /* ---------------------------
        TEAM ACTIVE THUMB (SAFE)
  --------------------------- */
  const cards = Array.from(document.querySelectorAll(".member"));
  const thumbs = document.querySelectorAll(".thumb-row img");

  if (thumbs.length && cards.length) {
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");

        // Scroll to the card
        const targetCard = cards[index];
        targetCard.scrollIntoView({
          behavior: "smooth",
          inline: "center"
        });
      });
    });
  }
});
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
} else {
entry.target.classList.remove('visible');
}
});
}, { threshold: 0.2 });


sections.forEach(sec => observer.observe(sec));
