let rankedResults = rankedCalculator(56, 22);
let rankedLevel;

function rankedCalculator(rankedVictories, rankedDefeats) {

    return rankedVictories - rankedDefeats;
}

switch(true) {
    case (rankedResults <= 10):
        rankedLevel = "Ferro";
        break;
    case (rankedResults > 11 && rankedResults <= 20):
        rankedLevel = "Bronze";
        break;
    case (rankedResults > 21 && rankedResults <= 50):
        rankedLevel = "Prata";
        break;
    case (rankedResults >= 51 && rankedResults <= 80):
        rankedLevel = "Ouro";
        break;
    case (rankedResults >= 81 && rankedResults <= 90):
        rankedLevel = "Diamante";
        break;
    case (rankedResults >= 91 && rankedResults <= 100):
        rankedLevel = "Lendário";
        break;
    default:
        rankedLevel = "Imortal";
        break;
}

console.log(`O Herói tem saldo de ${rankedResults} está no nível de ${rankedLevel}.`);

