function studentGradeGenerator (marks) { //Defining the function the will generate the Student Grades
    marks = prompt("Please enter the student marks correctly", 100) //Prompting the user to input the marks to be converted

    if (marks > 79 && marks <= 100) { //if statement accounting for the requirements for a grade A
        console.log("A")
    }   else if (marks > 59 && marks <= 79) { //else if statement accounting for the requirements for a grade B
            console.log("B")
        }   else if (marks > 49 && marks <= 59) { //else if statement accounting for the requirements for a grade C
                console.log("C")
            }   else if (marks > 39 && marks <= 49) { //else if statement accounting for the requirements for a grade D
                    console.log("D")
                }   else if (marks >= 0 && marks <= 39) { //default failing grade accounting for the requirements for a grade E if all previous if's and else if's are not passed
                        console.log("E")
                    }   else {
                            studentGradeGenerator(marks) //Accounting for misinputs
                            }
                    
}

function speedDetector (speed) { //Defining the function that will calculate the speeds
    const speedLimit = 75 //Defining the speed limit
    let demeritCount = 0 //Initializing a counter for the demerits
    const maxDemerits = 12 //Defining the maximum number of demerits before license suspension
    if (speed > 0 && speed < speedLimit) { //if statement accounting for speeds that are not eligible to receive a demerit
        console.log("Ok")
    }   else if (speed >= speedLimit) { //if statement accounting for the amount of demerits the speed is eligible for
            demeritCount = (speed - 70) / 5
            console.log(`Points: ${demeritCount}`)
            if (demeritCount >= maxDemerits) {
                console.log("License suspended")
            }
        }
}

function netSalaryCalculator (basicSalary, benefits = 7) {
    let tax;
    let payee;
    let nhifDeduction;
    let pensionablePay = 0.06 * basicSalary
    let grossSalary;
    let netSalary;
    if (basicSalary > 0 && basicSalary <= 24000) {
        tax = 0.1
        payee = tax * basicSalary;
        console.log(`Your payee is ${payee}`)
    }   else if (basicSalary > 24000 && basicSalary <= 32333) {
            tax = 0.25
            payee = tax * basicSalary;
            console.log(`Your payee is ${payee}`)
        }   else if (basicSalary > 32333) {
                tax = 0.3
                payee = tax * basicSalary;
                console.log(`Your payee is ${payee}`)
            }

    if (basicSalary > 0 && basicSalary <= 5999) {
        nhifDeduction = 150
        console.log(`Your NHIF Deduction is ${nhifDeduction}`)   
    }   else if (basicSalary > 5999 && basicSalary <= 7999) {
            nhifDeduction = 300
            console.log(`Your NHIF Deduction is ${nhifDeduction}`) 
        }   else if (basicSalary > 7999 && basicSalary <= 11999) {
                nhifDeduction = 400 
                console.log(`Your NHIF Deduction is ${nhifDeduction}`)    
            }   else if (basicSalary > 11999 && basicSalary <= 14999) {
                    nhifDeduction = 500 
                    console.log(`Your NHIF Deduction is ${nhifDeduction}`)
                }   else if (basicSalary > 14999 && basicSalary <= 19999) {
                        nhifDeduction = 600
                        console.log(`Your NHIF Deduction is ${nhifDeduction}`) 
                    }   else if (basicSalary > 19999 && basicSalary <= 24999) {
                            nhifDeduction = 750
                            console.log(`Your NHIF Deduction is ${nhifDeduction}`)    
                        }   else if (basicSalary > 24999 && basicSalary <= 29999) {
                                nhifDeduction = 850
                                console.log(`Your NHIF Deduction is ${nhifDeduction}`)
                            }   else if (basicSalary > 29999 && basicSalary <= 34999) {
                                    nhifDeduction = 900
                                    console.log(`Your NHIF Deduction is ${nhifDeduction}`) 
                                }   else if (basicSalary > 34999 && basicSalary <= 39999) {
                                        nhifDeduction = 950
                                        console.log(`Your NHIF Deduction is ${nhifDeduction}`)    
                                    }   else if (basicSalary > 39999 && basicSalary <= 44999) {
                                            nhifDeduction = 1000
                                            console.log(`Your NHIF Deduction is ${nhifDeduction}`)
                                        }   else if (basicSalary > 44999 && basicSalary <= 49999) {
                                                nhifDeduction = 1100
                                                console.log(`Your NHIF Deduction is ${nhifDeduction}`) 
                                            }   else if (basicSalary > 59999 && basicSalary <= 59999) {
                                                    nhifDeduction = 1200 
                                                    console.log(`Your NHIF Deduction is ${nhifDeduction}`)    
                                                }   else if (basicSalary > 69999 && basicSalary <= 69999) {
                                                        nhifDeduction = 1300 
                                                        console.log(`Your NHIF Deduction is ${nhifDeduction}`)
                                                    }   else if (basicSalary > 79999 && basicSalary <= 79999) {
                                                            nhifDeduction = 1400 
                                                            console.log(`Your NHIF Deduction is ${nhifDeduction}`)
                                                        }   else if (basicSalary > 89999 && basicSalary <= 89999) {
                                                                nhifDeduction = 1500
                                                                console.log(`Your NHIF Deduction is ${nhifDeduction}`) 
                                                            }   else if (basicSalary > 99999) {
                                                                    nhifDeduction = 1600 
                                                                    console.log(`Your NHIF Deduction is ${nhifDeduction}`)    
                                                                }


    if (pensionablePay > 0 && pensionablePay < 6000) {
        console.log(`Your Pensionable Pay is Tier 1 of amount ${pensionablePay}`)
    }   else if (pensionablePay > 6000 && pensionablePay <= 18000) {
            console.log(`Your Pensionable Pay is Tier 2 of amount ${pensionablePay}`)
        }   else if (pensionablePay > 18000) {
                console.log(`Your Pensionable Pay is Tier 2 of amount 18000`)
            }
    
    grossSalary = basicSalary - payee
    netSalary = grossSalary - nhifDeduction - pensionablePay

    console.log(grossSalary)
    console.log(netSalary)
}