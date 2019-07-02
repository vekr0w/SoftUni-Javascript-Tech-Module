function printEmployeeNameNumber(input) {
  class Employee {

    constructor(name, number) {
      this.name = name;
      this.number = number;
    }

    printDetails() {
      console.log(`Name: ${this.name} -- Personal Number: ${this.number}`);
    }
  }


  for (let i = 0; i < input.length; i++) {
    const employeeName = input[i];
    const employeeNumber = employeeName.length;
    
    let newEmployee = new Employee(employeeName,employeeNumber);
    newEmployee.printDetails();
  }
}

printEmployeeNameNumber(
  ['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']
);