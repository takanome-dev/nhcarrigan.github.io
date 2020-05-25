function navMenu() {
  const nav = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const main = document.getElementById("main");
  if (nav.style.display === "block") {
    nav.style.display = "none";
    hamburger.style.color = "#000000";
    main.style.marginLeft = "0px";
  } else {
    nav.style.display = "block";
    hamburger.style.color = "#FFFFFF";
    main.style.marginLeft = "200px";
  }
}
