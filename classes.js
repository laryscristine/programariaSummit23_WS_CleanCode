// Classe com código ruim
class PersonagemFriendsRuim {
    constructor(nome, idade, profissao) {
      this.nome = nome;
      this.idade = idade;
      this.profissao = profissao;
    }
  
    saudacaoRoss() {
      return `Olá, eu sou ${this.nome} de Friends. Tenho ${this.idade} anos e trabalho como ${this.profissao}.`;
    }
  
    saudacaoRachel() {
      return `Olá, eu sou ${this.nome} de Friends. Tenho ${this.idade} anos e trabalho como ${this.profissao}.`;
    }
}
  
// Uso da classe com código ruim
const personagemRuim = new PersonagemFriendsRuim("Ross", 32, "Paleontólogo");
const personagemRuim2 = new PersonagemFriendsRuim("Rachel", 29, "Balconista");

console.log(personagemRuim.saudacaoRoss()); 
console.log(personagemRuim2.saudacaoRachel());

// Refatoração
class PersonagemFriends {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  saudacao() {
    return `Olá, eu sou ${this.nome} de Friends. Tenho ${this.idade} anos e trabalho como ${this.profissao}.`;
  }

}

// Uso da classe com código ruim
const ross = new PersonagemFriends("Ross", 32, "Paleontólogo");
const rachel = new PersonagemFriends("Rachel", 29, "GEstora de Moda");

console.log(ross.saudacao()); 
console.log(rachel.saudacao());