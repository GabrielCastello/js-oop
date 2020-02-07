const faker = require("faker");
const cpf = require("cpf");

class CustomFaker {
  constructor() {
    this.faker = faker;
    this.cpf = cpf;
  }

  randomCPF() {
    return this.cpf.generate();
  }

  randomFullName() {
    return `${this.faker.name.firstName()} ${this.faker.name.lastName()}`;
  }

  randomJobTitle() {
    return this.faker.name.jobTitle();
  }

  randomCompanyName() {
    return this.faker.company.companyName();
  }
}

module.exports = CustomFaker;
