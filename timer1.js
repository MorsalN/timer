//when dealing with process argv remember to get rid of the first 2 indices 
const numbers = process.argv.slice(2);

//for the element inside what's called in numbers
for (const num of numbers) {
  const delay = Number(num); //check to make sure what's passed in is a number ex. '9'
  if (!isNaN(delay) && delay > 0) { //if it is NOT (is NOT a number) and if delay is not negative

    setTimeout(() => {
      process.stdout.write('\x07'); //this give the beep for the alarm 
      console.log(delay); 
    }, 1000 * delay) //this is how long after the beep will occur 
    }
}

//another way

//take in args
// const args = process.argv;

// // for every argument, take that number and * 1000 to set the delay, and call setTimeout
// args.forEach(number => {
//   if (number && number > 0) {
//     setTimeout(() => {
//       process.stdout.write('\x07');
//     }, number * 1000);
//   }
// });


// not the best method to approach for this problem

// for (let i = 0; i < numbers; i++) {
//   console.log(i);
//   if (process.argv[i] < 0) {
//     return 'We can\'t schedule anything in the past'
//     // continue;
//   }

//   if (i !== 0 || i !== 1) {
//     // console.log('not 0 and 1:',i);
//     setTimeout(() => {
//       process.stdout.write('\x07');
//       console.log(i);
//     }, 1000*process.argv[i]);
//   }
// }







