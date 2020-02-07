const faker = require("faker");

class Faker {
  constructor() {
    this.faker = faker;
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

module.exports = Faker;
