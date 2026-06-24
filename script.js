const root = document.documentElement;
const statusText = document.querySelector("[data-status-text]");
const links = document.querySelectorAll("[data-status]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(pointer: fine)");

if (document.querySelector(".welcome-splash")) {
  const revealDelay = reducedMotion.matches ? 100 : 1250;

  window.setTimeout(() => {
    root.classList.add("intro-complete");

    window.setTimeout(() => {
      root.classList.remove("intro-pending");
    }, reducedMotion.matches ? 50 : 700);
  }, revealDelay);
}

for (const link of links) {
  const showStatus = () => {
    if (statusText) statusText.textContent = link.dataset.status;
  };

  const resetStatus = () => {
    if (statusText) statusText.textContent = "Order something :D";
  };

  link.addEventListener("mouseenter", showStatus);
  link.addEventListener("focus", showStatus);
  link.addEventListener("mouseleave", resetStatus);
  link.addEventListener("blur", resetStatus);
}

if (!reducedMotion.matches && finePointer.matches) {
  let frame;

  window.addEventListener("pointermove", (event) => {
    if (frame) cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      const x = `${(event.clientX / window.innerWidth) * 100}%`;
      const y = `${(event.clientY / window.innerHeight) * 100}%`;

      root.style.setProperty("--pointer-x", x);
      root.style.setProperty("--pointer-y", y);
    });
  });
}
