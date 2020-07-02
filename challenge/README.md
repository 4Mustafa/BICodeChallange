# CODE CHALLENGE

You are encouraged to use Moment.js. Using Moment.js, implementation of the functions should be less than 10 lines of code. The expected time to completion is 4 hours or less. It would be better to submit one complete function with full test coverage rather than three complete functions with no additional tests.

Moment.js and Jest have already been added to the project. You should not need to install any additional node modules beyond what is in the `package.json`. A sample test case for each function has been provided. Please create a Github repository for this code challenge and commit your code after completing each objective.

## Setup

```
npm install
npm run test
```

## Objectives

- [ ] Complete `closeToNow` function in `modules/time.validation.js`
- [ ] Write tests in `test/time.validation.tests.js` to validate the `closeToNow` function
- [ ] Complete the `closestDate` function in `modules/time.validation.js`
- [ ] Write tests in `test/time.validation.tests.js` to validate the `closestDate` function
- [ ] Complete the `formatTimestamp` function in `modules/time.validation.js`
- [ ] Write tests in `test/time.validation.tests.js` to validate the `formatTimestamp` function

## Questions

- Did you make any changes to the functions after thinking through test cases?

No not really, in my process i wrote each function without looking at the test cases. I believe that if i looked at the test case i wouldve designed my function to pass the test and not do its specific task.

- Describe the experience of writing tests. Is this your first time writing unit tests?

When thinking about the test I wanted to test all possible solutions in my unit testing, such as in the formatTimestamp i tested to see if the days would show us as 1st, 12th, and 22nd. I also threw in an unexpected input in my tests because i believe those things happen in the real world. I have briefly wrote tests using jest in the past. Unit testing was something that i covered while i studied at Prime Academy. 