const proximoJogador = document.querySelector(".proximoJogador");
let seleciona;
let jogador = "X";

let posicao = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function inicia() {
  seleciona = [];
  proximoJogador.innerHTML = "SUA VEZ: ${jogador}";
  document.querySelectorAll(".container button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", novoMovimento);
  });
}

inicia();

function novoMovimento(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = jogador;
  e.target.removeEventListener("click", novoMovimento);
  seleciona[index] = jogador;
  setTimeout(() => {
    check();
  }, [100]);
  jogador = jogador === "X" ? "O" : "X";
  proximoJogador.innerHTML = "SUA VEZ: ${jogador}";
}

function check() {
  let jogadorAnterior = jogador === "X" ? "O" : "X";

  const items = seleciona
    .map((item, i) => [item, i])
    .filter((item) => item[0] === jogadorAnterior)
    .map((item) => item[1]);

  for (pos of posicao) {
    if (pos.every((item) => items.includes(item))) {
      alert(jogadorAnterior + "' GANHOU!");
      inicia();
      return;
    }
  }

  if (seleciona.filter((item) => item).length === 9) {
    alert("EMPATE!");
    inicia();
    return;
  }
}
