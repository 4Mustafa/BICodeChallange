const moment = require('moment-timezone');

const date = new Date();
const timestamp = date.toISOString();
const newTime = timestamp.slice(17, 19)
const newNumber = Number(newTime)
console.log(timestamp);
console.log(newNumber);
console.log("plus 30", newNumber + 30);
console.log("minus 30", newNumber - 30);
const newDate = timestamp.slice(0, 10)
const dateAsNum = Number(newDate)


const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)

console.log('date is', newDate);

console.log('D-A-N', dateAsNum);


const inputTime = '2020-07-01T16:03:18.021Z'

console.log('closest date is', closestDate(inputTime));


console.log('F-T-S is', formatTimestamp(inputTime, 'US/Central'));



/**
 * If the timestamp is within 30 seconds of the current
 * time, return true. Otherwise, return false.
 * 
 * Input '2020-07-01T16:03:18.021Z' -> output: depends on current time (true or false)
 * 
 * @param {String} timestamp
 * @returns {Boolean} whether the timestamp is within 30 seconds of now
 */
function closeToNow(timestamp) {
    const seconds = timestamp.slice(17, 19)
    // grabs the seconds from timeStamp
    const newNumber = Number(seconds);
    // sets the seconds as a number 
    const plusThirty = newNumber + 30;
    const minusThirty = newNumber - 30;
    if (newNumber > plusThirty || newNumber < minusThirty) {
        // checks if the number in seconds is within 30sec of the timeStamp
        return false
    } else {
        return true
    }
}

/**
 * Returns the previous days date if before 12pm CST or the
 * date of the timestamp if after 12pm CST. 
 * 
 * Input: '2020-07-01T16:03:18.021Z' -> output: '2020-06-30'
 * Input: '2020-07-01T17:03:18.021Z' -> output: '2020-07-01'
 * Input: '2020-07-01T12:03:18.021-05:00' -> output: '2020-07-01'
 * 
 * @param {String} timestamp 
 * @returns {String} calulated date in the format 'YYYY-MM-DD'
 */
function closestDate(timestamp) {
    // YOUR CODE HERE
    const currentDate = timestamp.slice(0, 10)
    // graba the date from the timeStamp
    const checkDate = timestamp.slice(11, 13)
    // grabs the hour from the timeStamp
    const dateAsNum = Number(checkDate)
    // sets the hours as a Number
    // var yesterday = timestamp --- this crashes the testing
    var yesterday = new Date()

    yesterday.setDate(yesterday.getDate() - 1)
    //  gets yesterdays date
    if (dateAsNum < 12) {
        // If the hours is smaller than 12 then its before 12pm
        return yesterday
    } else {
        return currentDate
    }

}

/**
 * Takes in a timestamp and timezone, returns a string formatted for
 * that timezone. https://momentjs.com/timezone/
 *
 * Input: '2020-07-01T16:03:18.021Z', 'US/Central' -> output: 'July 1st, 2020 at 11:03 am'
 *
 * @param {String} timestamp
 * @returns {String} calulated date in the format 'MMMM Do, YYYY [at] h:mm a'
 */
function formatTimestamp(timestamp, timezone) {
    // YOUR CODE HERE 'July 1st, 2020 at 11:03 am';
    const newDate = moment(timestamp,).tz(timezone).format('MMMM Do, YYYY [at] hh:mm a').toString()
    // formats the timestamp into the correct time zone and date format
    return newDate
}

module.exports = {
    closeToNow,
    closestDate,
    formatTimestamp,
}