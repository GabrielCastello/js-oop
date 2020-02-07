const Status = require("../Models/Status");

class Employee {

  constructor(person, company) {
    this.person = person;
    this.company = company;
    this.status = undefined;
    this.changeToActive();
  }

  updateCompany(company) {
    this.company = this.company;
  }

  changeToActive() {
    this.status = Status.ACTIVE;
  }

  changeToInactive() {
    this.status = Status.INACTIVE;
  }
}

module.exports = Employee;
