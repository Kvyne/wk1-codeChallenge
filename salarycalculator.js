// Function to calculate PAYE (Tax) based on basic salary
function calculatePAYE(basicSalary) {
    let tax = 0;
    if (basicSalary <= 24000) {
        tax = 0;
    } else if (basicSalary <= 32333) {
        tax = (basicSalary - 24000) * 0.1;
    } else if (basicSalary <= 500000) {
        tax = 833 + (basicSalary - 32333) * 0.25;
    } else if (basicSalary <= 800000) {
        tax = 47917 + (basicSalary - 500000) * 0.3;
    } else if (basicSalary <= 9600000) {
        tax = 129917 + (basicSalary - 800000) * 0.325;
    } else {
        tax = 297917 + (basicSalary - 9600000) * 0.35;
    }

    return tax;
}


// function to calculate NHIF deductions
function calculateNHIF(basicSalary) {
    let nhif = 0;
    if (basicSalary <= 5999) {
        nhif = 150;
    } else if (basicSalary <= 7999) {
        nhif = 300;
    } else if (basicSalary <= 11999) {
        nhif = 400;
    } else if (basicSalary <= 14999) {
        nhif = 500;
    } else if (basicSalary <= 19999) {
        nhif = 600;
    } else if (basicSalary <= 24999) {
        nhif = 750;
    } else if (basicSalary <= 29999) {
        nhif = 850;
    } else if (basicSalary <= 34999) {
        nhif = 900;
    } else if (basicSalary <= 39999) {
        nhif = 950;
    } else if (basicSalary <= 44999) {
        nhif = 1000;
    } else if (basicSalary <= 49999) {
        nhif = 1100;
    } else if (basicSalary <= 59999) {
        nhif = 1200;
    } else if (basicSalary <= 69999) {
        nhif = 1300;
    } else if (basicSalary <= 79999) {
        nhif = 1400;
    } else if (basicSalary <= 89999) {
        nhif = 1500;
    } else if (basicSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    return nhif;
}

// Function to calculate NSSF deductions
function calculateNSSF(basicSalary) {
    const nssfPercentage = 0.06;
    return basicSalary * nssfPercentage;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const payee = calculatePAYE(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const deductions = payee + nhif + nssf;
    const netSalary = grossSalary - deductions;
    
    return {
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        grossSalary: grossSalary,
        deductions: deductions,
        netSalary: netSalary
    };
}

// Input your data in the consts using test example
const basicSalary = 500000000;
const benefits = 7000000
;
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("PAYE (Tax): Ksh", salaryDetails.payee);
console.log("NHIF Deductions: Ksh", salaryDetails.nhif);
console.log("NSSF Deductions: Ksh", salaryDetails.nssf);
console.log("Gross Salary: Ksh", salaryDetails.grossSalary);
console.log("Total Deductions: Ksh", salaryDetails.deductions);
console.log("Net Salary: Ksh", salaryDetails.netSalary);