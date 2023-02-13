//Create Employee class. Employee class should have 3 subclasses Admin, manager, HR.

//1.Create 3 objects of each subclasses. And at end,it should print 9 objects has been created.

//2.Create 3 Employee classes and at end it should print 3 Employee object has been created.

// Definitions: A class that is derived from another class is called a subclass (also a derived class, extended class, or child class). The class from which the subclass is derived is called a superclass (also a base class or a parent class).

class Employee {
  constructor(name) {
    this.name = name;
  }
}

class Admin extends Employee {
  constructor(name, role, empId) {
    super(name);
    this.role = role;
    this.empId = empId;
  }
}

class Manager extends Employee {
  constructor(name, role, empId) {
    super(name);
    this.role = role;
    this.empId = empId;
  }
}
class HR extends Employee {
  constructor(name, role, empId) {
    super(name);
    this.role = role;
    this.empId = empId;
  }
}
let obj1 = new Admin('Arjun', 'trainee', '111a');
let obj2 = new Admin('Arun', 'trainee', '222b');
let obj3 = new Admin('Praveen', 'trainee', '333c');
let obj4 = new Manager('Praveen', 'trainee', '333c');
let obj5 = new Manager('Praveen', 'trainee', '333c');
let obj6 = new Manager('Praveen', 'trainee', '333c');
let obj7 = new HR('Praveen', 'trainee', '333c');
let obj8 = new HR('Praveen', 'trainee', '333c');
let obj9 = new HR('Praveen', 'trainee', '333c');

let total = [
  'obj1',
  'obj2',
  'obj3',
  'obj4',
  'obj5',
  'obj6',
  'obj7',
  'obj8',
  'obj9',
];

let count = 0;
for (let i = 0; i < total.length; i++) {
  count++;
}

console.log(`${count} Objects have been created`);

let emp1 = new Employee('Arjun');
let emp2 = new Employee('Arun');
let emp3 = new Employee('Praveen');

let totalEmp = ['emp1', 'emp2', 'emp3'];

let count1 = 0;
for (let i = 0; i < totalEmp.length; i++) {
  count1++;
}

console.log(`${count1} Objects have been created`);
