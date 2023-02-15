document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("body").addEventListener("click", function (e) {
    if (
      e.target.classList.contains("button__text") ||
      e.target.tagName.toLowerCase() === "a" ||
      e.target.classList.contains("form-button")
    ) {
      alert("xin chao");
      e.preventDefault();
    }
  });
});
