const NUM_STARS = 100;

const createStar = () => {
  const img = document.createElement("img");
  img.src = "/star.svg";
  img.alt = "Witchy star";
  img.classList.add("twinkle");
  img.style.animationDelay = `${Math.random() * 5}s`;
  img.style.position = "absolute";
  img.style.top = `${Math.random() * 100}%`;
  img.style.left = `${Math.random() * 100}%`;
  img.style.width = `${Math.random() * 32 + 8}px`; // 8–24px
  img.style.opacity = `${Math.random() * 0.6 + 0.4}`;
  // img.style.transform = `rotate(${Math.random() * 360}deg)`;
  return img;
};

const renderStars = () => {
  const container = document.getElementById("starfield");
  if (!container) return;

  for (let i = 0; i < NUM_STARS; i++) {
    const star = createStar();
    container.appendChild(star);
  }
};

window.addEventListener("DOMContentLoaded", renderStars);