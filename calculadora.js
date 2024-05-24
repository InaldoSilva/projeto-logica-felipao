// Função que recebe a quantidade de vitórias e derrotas de um jogador
function calcularSaldoERank(vitorias, derrotas) {
  // Variável para calcular o saldo de Rankeadas
  let saldoVitorias = vitorias - derrotas;

  // Variável para armazenar o nível do jogador
  let nivel = "";

  // Estrutura de decisão para determinar o nível do jogador com base na quantidade de vitórias
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }

  // Retorna um objeto contendo o saldo de vitórias e o nível
  return {
    saldoVitorias: saldoVitorias,
    nivel: nivel,
  };
}

// Exemplo de uso da função
let vitorias = 55; // Você pode alterar a quantidade de vitórias
let derrotas = 20; // Você pode alterar a quantidade de derrotas

// Chama a função e armazena o resultado
let resultado = calcularSaldoERank(vitorias, derrotas);

// Exibe a mensagem com o saldo de vitórias e o nível correspondente
console.log(
  `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
);
