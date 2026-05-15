const container = document.getElementById("heart");

// Función del corazón (ecuación)
function heartFunction(t) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);

  return { x, y };
}

// Generar puntos
for (let i = 0; i < 150; i++) {
  const t = Math.random() * Math.PI * 2;
  const pos = heartFunction(t);

  const el = document.createElement("div");
  el.className = "word";
  el.innerText = "I love You";

  // Escalar y centrar
  const scale = 10;
  el.style.left = 200 + pos.x * scale + "px";
  el.style.top = 200 - pos.y * scale + "px";

  // Delay para animación
  el.style.animationDelay = Math.random() * 4 + "s";

  container.appendChild(el);
}