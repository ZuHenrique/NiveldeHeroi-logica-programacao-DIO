const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Mapeamento dos níveis
const niveis = [
  { nome: 'Ferro', limite: 1000 },
  { nome: 'Bronze', limite: 2000 },
  { nome: 'Prata', limite: 5000 },
  { nome: 'Ouro', limite: 7000 },
  { nome: 'Platina', limite: 8000 },
  { nome: 'Ascendente', limite: 9000 },
  { nome: 'Imortal', limite: 10000 },
  { nome: 'Radiante', limite: Infinity }
];

// Função para determinar o nível do herói
function determinarNivel(xp) {
  const { nome } = niveis.find(({ limite }) => xp <= limite);
  return nome;
}

// Captura o nome e a quantidade de experiência do herói
rl.question('Digite o nome do herói: ', (nomeHeroi) => {
  rl.question('Digite a quantidade de experiência do herói: ', (xpHeroi) => {
    xpHeroi = parseInt(xpHeroi);

    // Determina o nível do herói
    const nivel = determinarNivel(xpHeroi);

    // Exibe a mensagem com o nome e o nível do herói
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);

    // Fecha a interface de leitura
    rl.close();
  });
});
