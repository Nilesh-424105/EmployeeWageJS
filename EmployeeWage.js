// UC8: Store the Day and the Daily Wage along with the Total Wage
//Constant
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

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

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDaillyWageArray = new Array();
let empDailyWageMap = new Map();

// calculate Daily Wages using function
function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

// Calculate total working hours by applying condition 
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
        totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    // get random values
    let empCheck = Math.floor(Math.random() * 10) % 3; 
    // calculate emp Hrs
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDaillyWageArray.push(calculateDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs));
}
// Calculate total Wages using Function
console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
// Calculate Employee Monthly Wages
let empWage = calculateDailyWage(totalEmpHrs);
console.log(" Emp Wage Map Total Hours: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));