const toggleBtn = document.getElementById("toggleBtn");
const content = document.getElementById("toggleContent");

toggleBtn.addEventListener("click", function () {
  content.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", () => {

  const nav = document.querySelector(".portfolio nav");
  const button = document.querySelector(".button");
  const filters = document.querySelectorAll(".filter-list");
  const projects = document.querySelectorAll(".project-item");
  const btnText = document.querySelector(".btn-text");

  // 🔹 Toggle dropdown (mobile)
  button.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  
  filters.forEach(filter => {
    filter.addEventListener("click", () => {

      const value = filter.getAttribute("data-filter"); 

      
      if (btnText) {
        btnText.textContent = filter.textContent;
      }

      // Close dropdown
      nav.classList.remove("active");

      // Filter projects
      projects.forEach(project => {
        const category = project.getAttribute("data-category");

        if (value === "all" || value === category) {
          project.classList.remove("hide");
        } else {
          project.classList.add("hide");
        }
      });

     
      filters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");

    });
  });

  
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
      nav.classList.remove("active");
    }
  });

});






