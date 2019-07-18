function storeAndSort(input) {

  let companyData = {};

  for (let element of input) {
    let [comapnyName, employeeNumber] = element.split(' -> ');
    if (!companyData.hasOwnProperty(comapnyName)) {
      companyData[comapnyName] = [];
      companyData[comapnyName].push(employeeNumber);
    } else {
      let currentEmployeeNumbers = companyData[comapnyName];
      if (!currentEmployeeNumbers.includes(employeeNumber)) {
        currentEmployeeNumbers.push(employeeNumber);
      }
    }
  }

  let sortedData = Object.entries(companyData)
    .sort((a, b) => {
      let firstCompanyName = a[0];
      let secondCompanyName = b[0];
      return firstCompanyName.localeCompare(secondCompanyName);
    });

  for (let [companyName, employeeData] of sortedData) {
    console.log(companyName);
    for (let employeeNumber of employeeData) {
      console.log(`-- ${employeeNumber}`);
    }
  }
}
storeAndSort(
  ['SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']
);