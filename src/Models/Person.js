const secret = new WeakMap();
class Person {
  constructor(name, phone, cpf) {
    this.name = name;
    this.cpf = cpf;
    secret.set(this, { _phoneNumber: phone });
  }

  showName() {
    console.log(this.name);
  }
}

module.exports = Person;
