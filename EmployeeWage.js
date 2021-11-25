// UC4: Calculating Wages For a Month
//Constant
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const RATE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

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
// Calculate total working hours
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    // get random values
    let empCheck = Math.floor(Math.random() * 10) % 3; 
    // calculate emp Hrs
    empHrs += getWorkingHours(empCheck);
}
// Calculate Employee Monthly Wages
let empWage = empHrs * RATE_PER_HOUR;
console.log("Total Working Hours: " + empHrs +"\nEmployee Monthly Wages: " + empWage);