

const titulo = document.getElementById("titulo");
titulo.textContent = "Me apresentando p/vcs bbs";

const gatinho = document.getElementById("gatinho");
const contadorTexto = document.getElementById("contadorTexto");

let contador = 0;

gatinho.addEventListener("click", function () {
  contador++;
  contadorTexto.textContent = "Carinho: " + contador;
 gatinho.style.transform = "scale(1.1)";
  setTimeout(() => {
    gatinho.style.transform = "scale(1)";
  }, 100);
});

const botao = document.getElementById("botao");
const texto = document.getElementById("texto");

botao.addEventListener("click", function () {
  texto.textContent = "";
});

