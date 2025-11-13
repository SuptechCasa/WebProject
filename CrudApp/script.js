const openModalButton = document.querySelector(".btn");
const modal = document.querySelector("#modal");
const closeModalButton = document.querySelector("#close-modal");
const overlay = document.querySelector("#overlay");

openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
 overlay.style.display = "block";
})

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
})