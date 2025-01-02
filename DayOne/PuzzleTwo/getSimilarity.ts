////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	loop through listOne
//		- multiply by occurances in listTwo
//		- add to accumulator
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Lists } from '../../types/DayOne.ts'

const getSimilarity = ([ A, B ]: Lists) => A.reduce((acc, curr) => acc += curr * B.filter((val) => val === curr).length);

export { getSimilarity }























export function readable(
  { listOne, listTwo }: { listOne: number[]; listTwo: number[] },
) {
  let similarity = 0;

  for (let i = 0; i < listOne.length; i++) {
    similarity = similarity +
      // Multiply element by..
      (listOne[i] *
        // The .filter() function loops over every element in the array
        //  - it returns an array, which consists of all of the
        //    elements where the function passed in as a parameter
        //    (in this case 'function(value) {return value === listOne[i]}')
        //    returns true
        listTwo.filter(
          // The .filter function automatically passes in the parameter called 'value' here
          function (value) {
            // The statement 'value === listOne[i]' will return either true or false (boolean)
            return value === listOne[i];
          },
          // Get the length of the returned array
          //  - the returned array represents all of the matches found in listTwo
          //  - by using .length, we are essentially counting those matches
        ).length);

    // Without all the comments in between, the whole statement looks like this:
    // listTwo.filter(function(value){return value === listOne[i]}).length
  }

  return similarity;
}
