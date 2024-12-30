const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const peso = Number(form.querySelector("#peso").value);
  const altura = Number(form.querySelector("#altura").value);
  if (!peso) {
    setResult("Peso inválido", false);
    return;
  }
  if (!altura) {
    setResult("Altura inválido", false);

    return;
  }

  const imc = getIMC(peso, altura);
  const nivelIMC = getGrauIMC(imc);
  const msg = `Seu IMC é ${imc}: ${nivelIMC}`;

  setResult(msg, true);
});

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  const p = criaP();
  if (isValid) {
    p.classList = "valid";
  } else {
    p.classList = "not-valid";
  }
  p.innerHTML = msg;
  result.appendChild(p);
}

function getIMC(peso, altura) {
  return (peso / altura ** 2).toFixed(2);
}

function getGrauIMC(imc) {
  const grau = [
    "Abaixo do peso", //[0]
    "Peso normal", //[1]
    "Sobrepeso", //[2]
    "Obesidade grau 1", //[3]
    "Obesidade grau 2", //[4]
    "Obesidade grau 3", //[5]
  ];

  if (imc >= 39.9) return grau[5];
  if (imc >= 29.9) return grau[4];
  if (imc >= 34.9) return grau[3];
  if (imc >= 24.9) return grau[2];
  if (imc >= 18.5) return grau[1];
  if (imc < 18.5) return grau[0];
}
