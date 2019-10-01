const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function evaluator(employee){
  employee = {
    name: employee.name,
    bonusPercentage: parseFloat(bonusCalculator(employee.reviewRating,employee.employeeNumber,employee.annualSalary)),
    totalCompensation: parseFloat((employee.annualSalary) * bonusCalculator(employee.reviewRating,employee.employeeNumber,employee.annualSalary) + parseFloat(employee.annualSalary)).toFixed(2),
    totalBonus: Math.round(parseFloat((employee.annualSalary) * bonusCalculator(employee.reviewRating,employee.employeeNumber,employee.annualSalary)).toFixed(2))
  } 
  let info = `Name: ${employee.name}, Bonus Percentage: ${employee.bonusPercentage}, Total Compensation: $${employee.totalCompensation}, Total Bonus: $${employee.totalBonus}<br>`;
  document.getElementById('results').innerHTML += info;
  return info;
};

function bonusCalculator(reviewRating, employeeNumber, annualSalary) {
  let percentage;
  if(reviewRating < 2) {
    percentage = 0;
    return percentage;
  } else if (reviewRating === 3) {
    percentage = 0.04;
    if(employeeNumber.length === 4){
      percentage += 0.05;
    }
    if(parseFloat(annualSalary) > 65000){
      percentage -= 0.01;
    }
    return percentage;
  } else if (reviewRating === 4) {
    percentage = 0.06;
    if(employeeNumber.length === 4){
      percentage += 0.05;
    }
    if(parseFloat(annualSalary) > 65000){
      percentage -= 0.01;
    }
    return percentage;
  } else{
    percentage = 0.10;
    if(employeeNumber.length === 4){
      percentage += 0.05;
    }
    if(parseFloat(annualSalary) > 65000){
      percentage -= 0.01;
    }
    if(percentage > 0.13){
      percentage = 0.13;
    }
    return percentage;
  }
};

function displayer(){
  for (let employee of employees) {
    evaluator(employee)
  }
};
