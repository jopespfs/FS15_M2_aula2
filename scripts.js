// document.getElementById("container").innerHTML = "conteudo";
// document.getElementById("container").innerHTML = "otra coisa";

let container = document.getElementById('container')

// ----------------------------------------

// let macas = 2;
// let bananas = 3;
// let kiwi = 5;
// let pitaya = 4;
// let soma = Math.floor(macas * bananas + kiwi / pitaya);

// container.innerHTML = soma;

// ----------------------------------------

// let texto = "Meu Nome é: ";
// let nome = "João Pedro S P F Santos"

// let soma = texto + nome;

// container.innerHTML = soma;

// ----------------------------------------

// const NASCIMENTO = "30/07/1995";
// let nome = "João Pedro S P F Santos"

// container.innerHTML = nome + NASCIMENTO;

// nome = "João Pedro Silveira";
// NASCIMENTO = "31/07/96"

// container.innerHTML = nome + NASCIMENTO;

// ----------------------------------------

function somar() {
  let v1 = Number(valor1.value)
  let v2 = Number(valor2.value)
  document.getElementById('resultado').innerHTML = v1 + v2
}

function subtrair() {
  let v1 = Number(valor1.value)
  let v2 = Number(valor2.value)
  document.getElementById('resultado').innerHTML = v1 - v2
}

function mutiplicar() {
  let v1 = Number(valor1.value)
  let v2 = Number(valor2.value)
  document.getElementById('resultado').innerHTML = v1 * v2
}

function dividir() {
  let v1 = Number(valor1.value)
  let v2 = Number(valor2.value)
  document.getElementById('resultado').innerHTML = v1 / v2
}
