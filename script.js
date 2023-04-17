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
document.querySelector(".title").addEventListener("click", function () {
  document.querySelector(".acc-content").classList.add("active");
  document.querySelector(".title").classList.add("active");
});
