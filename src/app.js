const CustomFaker = require("./Controller/CustomFakerController");
const newCustomFaker = new CustomFaker();

const Person = require("./Models/Person");
const Company = require("./Models/Company");

const newPerson = new Person(
  newCustomFaker.randomFullName(),
  12345,
  newCustomFaker.randomCPF()
);
const newPerson2 = new Person(
  newCustomFaker.randomFullName(),
  12345,
  newCustomFaker.randomCPF()
);

const newCompany = new Company(newCustomFaker.randomCompanyName());

  newCompany.hire(newPerson);
  newCompany.hire(newPerson2);
  newCompany.dismiss(newPerson);

  newCompany.printEmployees();

  newCompany.hire(newPerson);
  newCompany.printEmployees();

  // newCompany.printEmployees();
// newCompany.countEmployees();

// const Employee = require("./Models/Employee");

// const newEmployee = new Employee(newPerson, newCompany);
