var modal = document.querySelector("#welcome-modal");
var modalClose = document.querySelector("#modal-close-btn");

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
modalClose.addEventListener('click', () => {
  modal.style.display = "none";
});
window.addEventListener('load',
  function () {
    modal.style.display = "block";
  });