const form = document.getElementById("regForm");
const msg = document.getElementById("msg");

/* Create themed loading screen dynamically */
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

  // Show themed loading screen
  overlay.classList.add("active");
  msg.textContent = "";
  msg.className = "";

  // Send data to Google Apps Script
  fetch(
    "https://script.google.com/macros/s/AKfycbydYTbU970-FgRCGphbSgJsaUPhWjwBVHjxDf6A1HesLxWUl00zIawfxHgfoEKiXIaqMw/exec",
    {
      method: "POST",
      mode: "no-cors",
      body: new FormData(form)
    }
  );

  // Hide loader and show success
  setTimeout(() => {
    overlay.classList.remove("active");
    msg.textContent = "✅ Registration Submitted!";
    msg.classList.add("success");
    form.reset();
  }, 1600);
});
