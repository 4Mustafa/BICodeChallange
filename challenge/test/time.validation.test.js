const {
    closeToNow,
    closestDate,
    formatTimestamp,
} = require('../modules/time.validation');

describe('time validation', () => {
    describe('close to now', () => {
        test('it returns true if passed the current time', (done) => {
            const date = new Date();
            const timestamp = date.toISOString();
            expect(closeToNow(timestamp)).toBe(true);
            done();
        });
        // YOUR CODE HERE
        test('it returns false if time passed is mot within 30 seconds', (done) => {
            const date = new Date();
            const seconds = timestamp.slice(17, 19)
            // grabs the seconds from timeStamp
            const newNumber = Number(seconds) + 40;
            date.setSeconds(newNumber);
            expect(closeToNow(date)).toBe(false);
            done();
        });
    });
    describe('closest date', () => {
        test('it returns the previous day if before noon CST', (done) => {
            const inputTime = '2020-07-01T16:03:18.021Z'
            const expectedOutput = '2020-06-30';
            expect(closestDate(inputTime)).toBe(expectedOutput);
            done();
            //  I believe that 16:03 is after noon (4:03pm) so this should fail
        });
        // YOUR CODE HERE
        test('it returns the current day if after noon CST', (done) => {
            const inputTime = '2020-07-01T16:03:18.021Z'
            const expectedOutput = '2020-07-01';
            expect(closestDate(inputTime)).toBe(expectedOutput);
            done();
        });
        test('it returns the previous day if before noon CST', (done) => {
            const inputTime = 'July 1st, 2020 at 03:18 am'
            const expectedOutput = '2020-06-30';
            expect(closestDate(inputTime)).toBe(expectedOutput);
            done();
            // i expect this test to fail 
        });
    });
    describe('format timestamp', () => {
        test('it returns a formatted timestamp', (done) => {
            const inputTime = '2020-07-01T16:03:18.021Z'
            const expectedOutput = 'July 1st, 2020 at 11:03 am';
            expect(formatTimestamp(inputTime, 'US/Central')).toBe(expectedOutput);
            done();
        });
        // YOUR CODE HERE
        test('it returns a formatted timestamp', (done) => {
            const inputTime = '2020-03-12T16:03:18.021Z'
            const expectedOutput = 'March 12th, 2020 at 11:03 am';
            expect(formatTimestamp(inputTime, 'US/Central')).toBe(expectedOutput);
            done();
        });
        test('it returns a formatted timestamp', (done) => {
            const inputTime = '2020-03-22T16:03:18.021Z'
            const expectedOutput = 'March 22nd, 2020 at 11:03 am';
            expect(formatTimestamp(inputTime, 'US/Central')).toBe(expectedOutput);
            done();
        });
    });
});
