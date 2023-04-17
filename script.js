// ============================= LOGIN POPUP =========================
document.querySelector("#login-button").addEventListener("click", function () {
  document.querySelector(".popout").classList.add("active");
});
document
  .querySelector(".popout .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popout").classList.remove("active");
  });
// ============================= ACCORDION =========================
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});
