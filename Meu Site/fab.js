var select = document.querySelector("select");
var para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "Você talvez vá gostar de opções como: Coraline, O Mundo de Jack.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "Diário de uma apotecária, Jujutsu Kaisen, Erased, .";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}