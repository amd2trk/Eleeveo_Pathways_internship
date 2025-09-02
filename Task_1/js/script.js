document.addEventListener("DOMContentLoaded", () => {
  const sidebarButton = document.getElementById("side-bar")
  const sidebar = document.querySelector(".sidebar")
  const buttonIcon = sidebarButton.querySelector("i")

  sidebarButton.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed")

    if (sidebar.classList.contains("collapsed")) {
      buttonIcon.className = "fas fa-angle-right"
    } else {
      buttonIcon.className = "fas fa-angle-left"
    }
  })
})
