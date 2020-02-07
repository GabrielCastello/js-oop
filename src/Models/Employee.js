const Status = require("../Models/Status");

class Employee {
  constructor(person, company) {
    this.person = person;
    this.company = company;
    this.status = undefined;
    this.changeToActive();
  }

  isActive() {
    return this.status == Status.ACTIVE ? true : false; 
  }

  isInactive() {
    return this.status == Status.INACTIVE ? true : false; 
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
