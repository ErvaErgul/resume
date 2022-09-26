
function toggleTheme() {
  console.log("a")
  if (document.body.classList.contains("darkTheme")) {
    document.body.classList.replace("darkTheme", "lightTheme")
    document.getElementById("toggleThemeImageSidebar").setAttribute("src", "moon.png")
    document.getElementById("toggleThemeImageTopbar").setAttribute("src", "moon.png")
  } else {
    document.body.classList.replace("lightTheme", "darkTheme")
    document.getElementById("toggleThemeImageSidebar").setAttribute("src", "sun.png")
    document.getElementById("toggleThemeImageTopbar").setAttribute("src", "sun.png")
  }
}