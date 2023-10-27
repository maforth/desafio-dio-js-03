class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    this.exibeMensagem();
  }
  tipoAtaque() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
    }
    return ataque;
  }
  exibeMensagem() {
    return console.log(`O ${this.tipo} atacou usando ${this.tipoAtaque()}`);
  }
}
let heroi1 = new heroi("Eduardo", 12, "ninja");
heroi1.atacar();
