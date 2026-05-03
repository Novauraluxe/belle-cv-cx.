const header = document.querySelector(".site-header");
const printButton = document.querySelector("[data-print]");

function updateHeader() {
  if (!header) return;
  header.dataset.elevated = window.scrollY > 24 ? "true" : "false";
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (printButton) {
  printButton.addEventListener("click", () => window.print());
}
