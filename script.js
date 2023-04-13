document.querySelector("#login-button").addEventListener("click", function () {
  document.querySelector(".popout").classList.add("active");
});
document
  .querySelector(".popout .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popout").classList.remove("active");
  });
