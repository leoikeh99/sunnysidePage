// document.querySelector("nav ul .close").addEventListener("click", () => {
//   const menu = document.querySelector("nav ul");
//   menu.classList.replace("opened", "closed");
// });
document.querySelector("nav .menu").addEventListener("click", () => {
  const menu = document.querySelector("nav ul");
  if (menu.classList.contains("closed")) {
    menu.classList.remove("closed");
  } else {
    menu.classList.add("closed");
  }
});
