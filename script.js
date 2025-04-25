document.addEventListener("DOMContentLoaded", () => {
  const tips = document.querySelectorAll(".tip");
  tips.forEach((tip, index) => {
    tip.addEventListener("click", () => {
      alert(`Tip #${index + 1}: ${tip.textContent}`);
    });
  });

  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.05)";
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });
  });
});
