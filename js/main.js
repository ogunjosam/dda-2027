// ============================================================
// Dynamics Days Africa 2027 — Main JS
// ============================================================

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Highlight active nav link based on current page
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // Draw the Lorenz attractor if the SVG container exists
  drawLorenzAttractor();
});

// ============================================================
// Lorenz attractor animated trace
// ============================================================
function drawLorenzAttractor() {
  const svg = document.getElementById("attractor-svg");
  if (!svg) return;

  // Respect reduced motion
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Lorenz parameters
  const sigma = 10;
  const rho = 28;
  const beta = 8 / 3;
  const dt = 0.008;
  const steps = 3500;

  // Initial conditions
  let x = 0.1, y = 0, z = 0;
  const points = [];

  for (let i = 0; i < steps; i++) {
    const dx = sigma * (y - x) * dt;
    const dy = (x * (rho - z) - y) * dt;
    const dz = (x * y - beta * z) * dt;
    x += dx; y += dy; z += dz;
    points.push([x, z]); // project onto x-z plane
  }

  // Scale to viewBox 0..400 with margin
  const xs = points.map(p => p[0]);
  const ys = points.map(p => p[1]);
  const xMin = Math.min(...xs), xMax = Math.max(...xs);
  const yMin = Math.min(...ys), yMax = Math.max(...ys);
  const margin = 40;
  const size = 400;
  const w = size - 2 * margin;
  const h = size - 2 * margin;

  const scaled = points.map(([px, py]) => [
    margin + ((px - xMin) / (xMax - xMin)) * w,
    size - margin - ((py - yMin) / (yMax - yMin)) * h
  ]);

  // Build path
  let d = `M ${scaled[0][0].toFixed(2)} ${scaled[0][1].toFixed(2)}`;
  for (let i = 1; i < scaled.length; i++) {
    d += ` L ${scaled[i][0].toFixed(2)} ${scaled[i][1].toFixed(2)}`;
  }

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "url(#attractor-gradient)");
  path.setAttribute("stroke-width", "1.2");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("opacity", "0.85");

  if (!reducedMotion) {
    const length = 8000; // approximate
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.animation = "attractor-draw 6s ease-out forwards";
  }

  svg.appendChild(path);
}
