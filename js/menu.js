const openModalButton = document.querySelector(".open-menu-button"); // Кнопка для открытия меню
const modal = document.querySelector(".menu-header");
const closeModalButton = document.querySelector(".close-button");

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
