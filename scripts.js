// scripts.js

// Hiệu ứng nhỏ: làm icon GitHub nghiêng khi hover
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  const icon = btn.querySelector(".icon");

  btn.addEventListener("mouseenter", () => {
    icon.style.transform = "rotate(15deg)";
  });

  btn.addEventListener("mouseleave", () => {
    icon.style.transform = "rotate(0deg)";
  });
});
