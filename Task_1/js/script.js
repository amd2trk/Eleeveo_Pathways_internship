document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-btn");
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");
    const buttonIcon = toggleButton.querySelector("i");
    let isSidebarCollapsed = false;

    function handleToggle() {
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle("open");
            document.body.classList.toggle("sidebar-open");
            
        } else {
            sidebar.classList.toggle("collapsed");
            mainContent.classList.toggle("collapsed");
            isSidebarCollapsed = sidebar.classList.contains("collapsed");
            
            if (isSidebarCollapsed) {
                buttonIcon.className = "fas fa-angle-right";
            } else {
                buttonIcon.className = "fas fa-angle-left";
            }
        }
    }

    toggleButton.addEventListener("click", handleToggle);

    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnToggleButton = toggleButton.contains(event.target);

            if (!isClickInsideSidebar && !isClickOnToggleButton) {
                sidebar.classList.remove("open");
                document.body.classList.remove("sidebar-open");
            }
        }
    });
});