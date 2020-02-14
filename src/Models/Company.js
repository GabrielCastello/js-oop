const Employee = require("./Employee");

class Company {
  constructor(name) {
    this.name = name;
    this.employeesList = [];
  }

  hire(person) {
    if (this.isEmployee(person) == false) {
      const newEmployee = new Employee(person, this);
      this.employeesList.push(newEmployee);
    } else throw new Error("Repeted CPF");
  }

  isEmployee(person){    
    return this.employee(person) == null ? false : true;
  }

  employee(person) {
    
    const employees = this.employees().filter(iterableEmployee => iterableEmployee.person.cpf == person.cpf && iterableEmployee.isActive() )
    
    return employees.length == 1 ? employees[0] : null;
  }

  dismiss(person) {
    const employee = this.employee(person);

    if(!employee)
      throw new Error("Employee not found");
    else 
      employee.changeToInactive();
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
