let herois = [
    { Nome: "Luffy", Xp: 500 },
    { Nome: "Zoro", Xp: 2500 },
    { Nome: "Sanji", Xp: 11000 }
];

for (let heroi of herois) {
    let nivel = "";

    if (heroi.Xp < 1000) {
        nivel = "Ferro";
    } else if (heroi.Xp >= 1001 && heroi.Xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.Xp >= 2001 && heroi.Xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.Xp >= 5001 && heroi.Xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.Xp >= 7001 && heroi.Xp <= 8000) {
        nivel = "Platina";
    } else if (heroi.Xp >= 8001 && heroi.Xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.Xp >= 9001 && heroi.Xp <= 10000) {
        nivel = "Imortal";
    } else if (heroi.Xp >= 10001) {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${heroi.Nome} está no nível de ${nivel}`);
}