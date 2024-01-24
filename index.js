const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Captura o nome e a quantidade de experiência do herói
rl.question('Digite o nome do herói: ', (nomeHeroi) => {
  rl.question('Digite a quantidade de experiência do herói: ', (xpHeroi) => {
    xpHeroi = parseInt(xpHeroi);

    // Utiliza uma estrutura de decisão para determinar o nível do herói
    let nivel;

    if (xpHeroi < 1000) {
        nivel = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivel = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivel = "Prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        nivel = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivel = "Platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivel = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibe a mensagem com o nome e o nível do herói
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);

    // Fecha a interface de leitura
    rl.close();
  });
});
