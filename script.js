const personagem1 = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo americano",
    armaSecundaria: "",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia;
    }
};

const personagem2 = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Hulkbuster",
    armaSecundaria: "Armadura",
    velocidade: 90,
    forca: 85,
    resistencia: 75,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia;
    }
};

const personagem3 = {
    nome: "Thor Odinson",
    codinome: "senhor do trovão",
    armaPrincipal: "mjolnir",
    armaSecundaria: "stormbreaker",
    velocidade: 90,
    forca: 99,
    resistencia: 90,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia;
    }
};

const personagem4 = {
    nome: "Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "Radiação",
    armaSecundaria: "",
    velocidade: 80,
    forca: 100,
    resistencia: 95,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia;
    }
};

const personagem5 = {
    nome: "Thanos",
    codinome: "Louco de Titã",
    armaPrincipal: "Espada de dois gumes",
    armaSecundaria: "",
    velocidade: 70,
    forca: 100,
    resistencia: 98,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia;
    }
};

const listaPersonagens = [personagem1, personagem2, personagem3, personagem4, personagem5];


console.log("descrição");
for (let i = 0; i < listaPersonagens.length; i++) {
    console.log(listaPersonagens[i].descricao());
}

let oi = "feito por cid";

const atributos = ["forca", "velocidade", "resistencia"];

console.log("\n" + "resultado geral");

for (let j = 0; j < atributos.length; j++) {
    let nomeAtributo = atributos[j];
    
   
    let maiorValor = -1; 
    for (let k = 0; k < listaPersonagens.length; k++) {
        let valorAtual = listaPersonagens[k][nomeAtributo];
        if (valorAtual > maiorValor) {
            maiorValor = valorAtual;
        }
    }

   
    let vencedores = [];
    for (let k = 0; k < listaPersonagens.length; k++) {
        if (listaPersonagens[k][nomeAtributo] === maiorValor) {
            vencedores.push(listaPersonagens[k].codinome);
        }
    }

    
    console.log(`Comparando o atributo: [${nomeAtributo.toUpperCase()}]`);
    
    
    for (let k = 0; k < listaPersonagens.length; k++) {
        console.log(`- ${listaPersonagens[k].codinome}: ${listaPersonagens[k][nomeAtributo]}`);
    }

    
    if (vencedores.length === 1) {
        console.log(`> O personagem “vence” com **${vencedores[0]}** (Pontuação: ${maiorValor})!`);
    } else {
        
        console.log(`> Houve um empate no topo! Os vencedores são: **${vencedores.join(" e ")}** (Pontuação: ${maiorValor})!`);
    }

}
