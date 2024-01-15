function calcularSaldoRankeadas(vitorias, derrotas) {
    return vitorias - derrotas;
}

function calcularNivel(saldoVitorias) {
    if (saldoVitorias < 10) {
        return "Ferro";
    } else if (saldoVitorias <= 20) {
        return "Bronze";
    } else if (saldoVitorias <= 50) {
        return "Prata";
    } else if (saldoVitorias <= 80) {
        return "Ouro";
    } else if (saldoVitorias <= 90) {
        return "Diamante";
    } else if (saldoVitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

function main() {
    const vitorias = parseInt(prompt("Informe a quantidade de vitórias:"));
    const derrotas = parseInt(prompt("Informe a quantidade de derrotas:"));

    const saldoVitorias = calcularSaldoRankeadas(vitorias, derrotas);
    const nivel = calcularNivel(saldoVitorias);

    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

main();
