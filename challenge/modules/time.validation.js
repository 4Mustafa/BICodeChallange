const moment = require('moment-timezone');

const date = new Date();
const timestamp = date.toISOString();
const newTime = timestamp.slice(17, 19)
const newNumber = Number(newTime)
const newDate = timestamp.slice(0, 10)
const dateAsNum = Number(newDate)




const timeDate = moment(timestamp).format('hh a').toString()
const inputTime = '2020-07-01T17:03:18.021Z'
let yesterday = moment(inputTime).subtract(1, 'day')
console.log('yesterday is', yesterday.format('a'))



// console.log('closest is', closestDate(inputTime));



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
    const now = new Date();
    const plusThirty = new Date(now.getTime() + 30000);
    // sets a time thats 30 seconds from now 
    const minusThirty = new Date(now.getTime() - 30000);
    // sets a time that was 30 seconds ago
    const futureTime = moment(plusThirty).format('hhmmss').toString()
    const pastTime = moment(minusThirty).format('hhmmss').toString()
    const checkTime = moment(timestamp).format('hhmmss').toString()
    if (Number(checkTime) < Number(futureTime) && Number(checkTime) > Number(pastTime)) {
        // checks to see if the passed time is within 30 seconds of the current time
        return true
    } else return false
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
    let amOrPm = moment(timestamp).format('a')
    // grabs the am or pm from the timestamp
    let hrs = moment(timestamp).format('h')
    // grabs the hours from the timestamp
    let currentDay = moment(timestamp).format('YYYY-MM-DD')
    // formats the time stamp
    let yesterday = moment(inputTime).subtract(1, 'day')
    // grabs one day before the passed timestamp
    if (Number(hrs) <= 12 && amOrPm === 'am') {
        // checks to see if the passed time is before 12pm
        return yesterday.format('YYYY-MM-DD')
    } else {
        return currentDay
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
    const newDate = moment(timestamp,).tz(timezone).format('MMMM Do, YYYY [at] hh:mm:ss a').toString()
    // formats the timestamp into the correct time zone and date format
    return newDate
}

module.exports = {
    closeToNow,
    closestDate,
    formatTimestamp,
}