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
