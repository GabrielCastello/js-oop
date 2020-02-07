const Employee = require("./Employee");

class Company {
  constructor(name) {
    this.name = name;
    this.employeesList = [];
  }

  // _personOnceWasEmployee(person){

  // }

  hire(person) {
    if (this._containsActiveEmployee(person) == false) {
      const newEmployee = new Employee(person, this);
      this.employeesList.push(newEmployee);
    } else throw new Error("Repeted CPF");
  }

  _getEmployee(person){
    return this.employees().filter(iterableEmployee => iterableEmployee.person.cpf == person.cpf)
  }

  _findActiveEmployee(person) {
    for (let i = 0; i < this.employeesList.length; i++) {
      if (
        this.employeesList[i].person.cpf === person.cpf &&
        this.employeesList[i].isActive()
      ) {
        return this.employeesList[i];
      }
    }
  }

  _findInactiveEmployee(person) {
    for (let i = 0; i < this.employeesList.length; i++) {
      if (
        this.employeesList[i].person.cpf === person.cpf &&
        this.employeesList[i].isInactive()
      ) {
        return this.employeesList[i];
      }
    }
  }

  _containsActiveEmployee(person) {
    return !!this._findActiveEmployee(person);
  }

  dismiss(person) {
    const employee = this._findActiveEmployee(person);

    typeof employee == "undefined"
      ? new Error("Employee not found")
      : employee.changeToInactive();
  }

  employees() {
    return this.employeesList.filter(iterableEmployee =>
      iterableEmployee.isActive()
    );
  }

  printEmployees() {
    this.employees().forEach((employee, index) => {
      console.log(
        `Employee nº${index + 1}: Name:${employee.person.name} - Status:${
          employee.status
        } `
      );
    });
  }

  countEmployees() {
    return this.employees().length;
  }
}

module.exports = Company;
