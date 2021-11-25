// UC3: Refactore the code to Write a Function to get Work Hour
//Constant
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const RATE_PER_HOUR = 20;

//fuction used to check part or full time
function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
         case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default :
            return 0;
    }
}
let empHrs = 0;
// get Random Values
let empCheck = Math.floor(Math.random() * 10) % 3; 
// calculate Emp Hrs
empHrs = getWorkingHours(empCheck);
// Calculate Employee Wages
let empWage = empHrs * RATE_PER_HOUR;
console.log("Employee Wage: " + empWage);