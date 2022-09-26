
function toggleTheme() {
  console.log("a")
  if (document.body.classList.contains("darkTheme")) {
    document.body.classList.replace("darkTheme", "lightTheme")
    document.getElementById("toggleThemeImage").setAttribute("src", "moon.png")
  } else {
    document.body.classList.replace("lightTheme", "darkTheme")
    document.getElementById("toggleThemeImage").setAttribute("src", "sun.png")
  }
}