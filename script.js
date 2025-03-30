document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("mode");
  const body = document.body;
  
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleButton.innerHTML = '<span class="material-symbols-outlined">moon_stars</span>';
  }

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      toggleButton.innerHTML = '<span class="material-symbols-outlined">moon_stars</span>';
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggleButton.innerHTML = '<span class="material-symbols-outlined">wb_sunny</span>';
    }
  });
});
