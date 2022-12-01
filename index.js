const prompt=require("prompt-sync")({sigint:true});

function studentGradeGenerator(marks) { //Defining the function the will generate the Student Grades
  marks = prompt("Please enter the student marks correctly", 100) //Prompting the user to input the marks to be converted

  if (marks > 79 && marks <= 100) { //if statement accounting for the requirements for a grade A
    console.log("A")
  } else if (marks > 59 && marks <= 79) { //else if statement accounting for the requirements for a grade B
    console.log("B")
  } else if (marks > 49 && marks <= 59) { //else if statement accounting for the requirements for a grade C
    console.log("C")
  } else if (marks > 39 && marks <= 49) { //else if statement accounting for the requirements for a grade D
    console.log("D")
  } else if (marks >= 0 && marks <= 39) { //default failing grade accounting for the requirements for a grade E if all previous if's and else if's are not passed
    console.log("E")
  } else {
    studentGradeGenerator(marks) //Accounting for misinputs
  }

}

function speedDetector(speed) { //Defining the function that will calculate the speeds
  speed = prompt("Please enter the speed correctly", 70)
  const speedLimit = 75 //Defining the speed limit
  let demeritCount = 0 //Initializing a counter for the demerits
  const maxDemerits = 12 //Defining the maximum number of demerits before license suspension

  if (speed > 0 && speed < speedLimit) { //if statement accounting for speeds that are not eligible to receive a demerit
    console.log("Ok")
  } else if (speed >= speedLimit) { //if statement accounting for the amount of demerits the speed is eligible for
    demeritCount = Math.floor((speed - 70) / 5)
    console.log(`Points: ${demeritCount}`)
    if (demeritCount >= maxDemerits) { //if the users demerits are greater than 12 then a message is printed informing them that their license is suspended
      console.log("License suspended")
    }
  } else {
    speedDetector(speed) //Accounting for misinputs
  }
}

function netSalaryCalculator(basicSalary, benefits) { //Defining the function that will take in the basic salary of the individual
basicSalary = prompt("Please enter the basic salary correctly") //Prompting the user to input their basic salary
benefits = prompt("Please enter the monetary benefits you received correctly") //Prompting the user to input their benefits
let grossSalary = Number(basicSalary) + Number(benefits); //Defining the gross salary of the individual
let tax; //Defining the tax applied to the basic salary
let paye; //Defining the Pay As You Earn (PAYE) tax
let nhifDeduction; //Defining the deduction taken by the NHIF
let payeTaxableIncome; //Defining the income taxable by the PAYE tax
let pensionContributionPercentage = 0.06; //Defining the percentage of the gross salary taken by the NSSF
let nssfDeduction = Math.round(pensionContributionPercentage * grossSalary); //Defining the deduction taken by the NSSF
let nssfDeductionTierOneMax = 6000; //Defining the limit of pensionable pay for the tier 1 contribution to the NSSF
let nssfDeductionTierTwoMax = 18000; //Defining the limit of pensionable pay for the tier 2 contribution to the NSSF
let netSalary; //Defining the net salary of the individual

if (grossSalary > 0 && grossSalary <= 5999) { //if statements that calculate the neccessary nhif deduction
  nhifDeduction = 150
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 5999 && grossSalary <= 7999) {
  nhifDeduction = 300
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 7999 && grossSalary <= 11999) {
  nhifDeduction = 400
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 11999 && grossSalary <= 14999) {
  nhifDeduction = 500
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 14999 && grossSalary <= 19999) {
  nhifDeduction = 600
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 19999 && grossSalary <= 24999) {
  nhifDeduction = 750
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 24999 && grossSalary <= 29999) {
  nhifDeduction = 850
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 29999 && grossSalary <= 34999) {
  nhifDeduction = 900
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 34999 && grossSalary <= 39999) {
  nhifDeduction = 950
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 39999 && grossSalary <= 44999) {
  nhifDeduction = 1000
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 44999 && grossSalary <= 49999) {
  nhifDeduction = 1100
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 49999 && grossSalary <= 59999) {
  nhifDeduction = 1200
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 59999 && grossSalary <= 69999) {
  nhifDeduction = 1300
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 69999 && grossSalary <= 79999) {
  nhifDeduction = 1400
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 79999 && grossSalary <= 89999) {
  nhifDeduction = 1500
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 89999 && grossSalary <= 99999) {
  nhifDeduction = 1600
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else if (grossSalary > 99999) {
  nhifDeduction = 1700
  console.log(`Your NHIF Deduction is ${nhifDeduction}`)
} else {
  netSalaryCalculator(basicSalary, benefits) //Accounting for misinputs
}

if (nssfDeduction > 0 && nssfDeduction < nssfDeductionTierOneMax) { //if statements that calculate the necessary nssf deduction
  payeTaxableIncome = grossSalary - nhifDeduction - nssfDeduction
  console.log(`Your NSSF Deduction is Tier 1 of amount ${nssfDeduction}`)
} else if (nssfDeduction > nssfDeductionTierOneMax && nssfDeduction <= nssfDeductionTierTwoMax) {
  payeTaxableIncome = grossSalary - nhifDeduction - nssfDeduction
  console.log(`Your NSSF Deduction is Tier 2 of amount ${nssfDeduction}`)
} else if (nssfDeduction > nssfDeductionTierTwoMax) {
  payeTaxableIncome = grossSalary - nhifDeduction - nssfDeductionTierTwoMax
  console.log(`Your NSSF Deduction is Tier 2 of amount ${nssfDeductionTierTwoMax}`)
}

if (payeTaxableIncome > 0 && payeTaxableIncome <= 24000) { //if statements that calculate the Pay As You Earn (PAYE) tac
  tax = 0.1
  paye = Math.round(tax * payeTaxableIncome);
  netSalary = payeTaxableIncome - paye
  console.log(`Your PAYE is ${paye}`)
} else if (payeTaxableIncome > 24000 && payeTaxableIncome <= 32333) {
  tax = 0.25
  paye = Math.round(tax * payeTaxableIncome);
  netSalary = payeTaxableIncome - paye
  console.log(`Your PAYE is ${paye}`)
} else if (payeTaxableIncome > 32333) {
  tax = 0.3
  paye = Math.round(tax * payeTaxableIncome);
  netSalary = payeTaxableIncome - paye
  console.log(`Your PAYE is ${paye}`)
} else {
  netSalary = `less than 0, no need to pay tax` //Accounting for lower than taxable income
}

console.log(`Your Gross Salary is ${grossSalary}`) //prints out the individual's gross salary
console.log(`Your Net Salary is ${netSalary}`) //prints out the individual's gross salary
}

studentGradeGenerator();
speedDetector();
netSalaryCalculator();
