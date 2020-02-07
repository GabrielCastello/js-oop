const Faker = require("./Controller/FakerController");
const newFaker = new Faker();

const Person = require("./Models/Person");
const Company = require("./Models/Company");

const newPerson = new Person(newFaker.randomFullName(), 12345);

const newCompany = new Company(newFaker.randomCompanyName());
newCompany.hire(newPerson);
newCompany.printEmployees();
newCompany.dismiss(newPerson);
newCompany.printEmployees();
newCompany.countEmployees();
