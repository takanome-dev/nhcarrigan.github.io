function navMenu() {
  const nav = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  if (nav.style.display === "block") {
    nav.style.display = "none";
    hamburger.style.color = "#000000";
  } else {
    nav.style.display = "block";
    hamburger.style.color = "#FFFFFF";
  }
}
