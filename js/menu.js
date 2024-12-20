document.addEventListener("DOMContentLoaded", () => {
  const openModalButton = document.querySelector(".open-menu-button");
  const modal = document.querySelector(".menu-header");
  const closeModalButton = document.querySelector(".close-button");
  const menuButton = document.querySelector(".menu-button");

  if (openModalButton && modal && closeModalButton) {
    openModalButton.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      menuButton.classList.toggle("open");
    });
  }
});
