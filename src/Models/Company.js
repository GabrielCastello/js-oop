const Employee = require("./Employee");

class Company {
  constructor(name) {
    this.name = name;
    this.employeesList = [];
  }

  hire(person) {
    const newEmployee = new Employee(person, this);
    this.employeesList.push(newEmployee);
  }

  _find(person) {
    for (let i = 0; i < this.employeesList.length; i++) {
      if (this.employeesList[i].person.name === person.name) {
        return this.employeesList[i];
      }
    }
  }

  _contains(person) {
    return !!this._find(person);
  }

  dismiss(person) {
    const employee = this._find(person);

    typeof employee == "undefined"
      ? new Error("Employee not found")
      : employee.changeToInactive();
  }

  employees() {
    return this.employeesList;
  }

  printEmployees() {
    this.employees().forEach((employee, index) => {
      console.log("TCL: Company -> printEmployees -> employee", employee);

      console.log(
        `Employee nº${index + 1}: Name:${employee.name} - Status:${
          employee.status
        } `
      );
    });
  }

  countEmployees() {
    console.log(`Employees quantity: ${this.employeesList.length}`);
  }
}

module.exports = Company;
