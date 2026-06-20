(() => {
  const revealTargets = [
    [".hero-text", "motion-reveal--fade"],
    [".hero-image", "motion-reveal--zoom-in"],
    [".depot-text", "motion-reveal--fade"],
    [".depot-cards, .bottom-cards", "motion-reveal--slide-up"],
    [".gallery-title, .view-more-text, .contact-header, .categories", "motion-reveal--fade"],
    [".gallery-grid, .contact-wrapper, .product-section, .products-section", "motion-reveal--slide-up"],
    [".map .container", "motion-reveal--zoom-in"],
    [".footer-wrapper", "motion-reveal--fade"]
  ];

  const elements = [];

  revealTargets.forEach(([selector, animationClass]) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (element.classList.contains("motion-reveal")) {
        return;
      }

      element.classList.add("motion-reveal", animationClass);
      elements.push(element);
    });
  });

  const show = (element) => element.classList.add("is-visible");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach(show);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        show(entry.target);
        activeObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
})();
