const toggles = document.querySelectorAll(".toggle");


toggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    // Toggle'ın bulunduğu .questions div'ini bul
    const parent = toggle.closest(".questions");
    // Bu sorunun içindeki content'i seç
    const content = parent.querySelector(".content");

    if (toggle.checked) {
      content.style.maxHeight = content.scrollHeight + "px"; // aç
      content.style.opacity = "1";
    } else {
      content.style.maxHeight = "0"; // kapa
      content.style.opacity = "0";
    }
  });
});