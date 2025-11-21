document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("categoria");
  const cards = document.querySelectorAll(".card");

  select.addEventListener("change", () => {
    const value = select.value;

    cards.forEach(card => {
      if (value === "all" || card.classList.contains(value)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});
