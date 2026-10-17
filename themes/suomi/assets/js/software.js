document.querySelectorAll("[data-faq-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const answer = document.getElementById(link.hash.slice(1));
    if (answer?.matches("details")) answer.open = true;
  });
});

document.querySelectorAll("[data-preview-dialog]").forEach((button) => {
  const dialog = document.getElementById(button.dataset.previewDialog);
  if (!dialog) return;
  button.addEventListener("click", () => dialog.showModal());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
});
