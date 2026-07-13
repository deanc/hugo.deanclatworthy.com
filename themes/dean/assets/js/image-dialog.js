const dialog = document.querySelector("[data-image-dialog]");
const dialogImage = dialog?.querySelector("img");

if (dialog && dialogImage && typeof dialog.showModal === "function") {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-image-dialog-trigger]");

    if (!link) {
      return;
    }

    event.preventDefault();
    dialogImage.src = link.href;
    dialogImage.alt = link.querySelector("img")?.alt || "";
    dialog.showModal();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    dialogImage.removeAttribute("src");
    dialogImage.alt = "";
  });
}
