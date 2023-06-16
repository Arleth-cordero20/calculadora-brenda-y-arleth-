const resultados = document.querySelector(".resultado");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botoni = boton.textContent;

    if (boton.id === "elim") {
      resultados.textContent = "0";
      return;
    }

    if (boton.id === "aste") {
      if (resultados.textContent.length === 1) {
        resultados.textContent = "0";
      } else {
        resultados.textContent = resultados.textContent.slice(0, -1);
      }
      return;
    }

    if (boton.id === "igual") {
      resultados.textContent = eval(resultados.textContent);
      return;
    }

    if (resultados.textContent === "0") {
      resultados.textContent = botoni;
    } else {
      resultados.textContent += botoni;
    }
  });
});
