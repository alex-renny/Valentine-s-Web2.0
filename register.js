console.log("✅ register.js loaded");

const form = document.getElementById("regForm");
const msg = document.getElementById("msg");

const overlay = document.createElement("div");
overlay.id = "themeLoader";
overlay.innerHTML = `
  <div class="loaderCard">
    <div class="neonLoader"></div>
    <p>Submitting...</p>
  </div>
`;
document.body.appendChild(overlay);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  overlay.classList.add("active");
  msg.textContent = "";

  fetch(
    "https://script.google.com/macros/s/AKfycbzRKacm7KWHrJf-X7VsCPLOGxjYePS59oho_-owWq-8FMu5egl-hjAsb7PZXENlu-oH/exec",
    {
      method: "POST",
      mode: "no-cors",
      body: new FormData(form)
    }
  );

  setTimeout(() => {
    overlay.classList.remove("active");
    msg.textContent = "✅ Registration Submitted!";
    msg.className = "success";
    form.reset();
  }, 1200);
});
