const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const botao = document.getElementById("botao");
const texto = document.getElementById("texto");

botao.addEventListener("click", function () {
  const soma = Number(num1.value) + Number(num2.value);
  texto.textContent = "Resultado: " + soma;
});

const alga1 = document.getElementById("alga1");
const alga2 = document.getElementById("alga2");
const butto = document.getElementById("butto");
const texte = document.getElementById("texte");

butto.addEventListener("click", function () {
  const dividir = Number(alga1.value) - Number(alga2.value);
  texte.textContent = "Diferença: " + dividir;
});

const alg1 = document.getElementById("alg1");
const alg2 = document.getElementById("alg2");
const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("click", function () {
  const multiplica = Number(alg1.value) * Number(alg2.value);
  text.textContent = "Produto: " + multiplica;
});

const numb1 = document.getElementById("numb1");
const numb2 = document.getElementById("numb2");
const bota = document.getElementById("bota");
const tex = document.getElementById("tex");

bota.addEventListener("click", function () {
  const divide = Number(numb1.value) / Number(numb2.value);
  tex.textContent = "Quociente: " + divide;
}); 