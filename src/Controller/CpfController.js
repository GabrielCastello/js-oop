const cpf = require("cpf");

class CPF {
  constructor() {
    this.cpf = cpf;
  }

  generate() {
    return this.cpf.generate();
  }
}

module.exports = CPF;
