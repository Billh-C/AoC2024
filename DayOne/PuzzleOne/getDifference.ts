////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Loop for the amount of numbers in the arrays
//  - in each loop --> compare listOne element with listTwo element at the same index, + difference to result
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Lists } from "../../types/DayOne.ts";

const sexyDiff = ([ A, B ]: Lists) => A.reduce((acc, curr, i) => acc + Math.abs(curr - B[i]));

export { sexyDiff }




























export function getDifference(
  { listOne, listTwo }: { listOne: number[]; listTwo: number[] },
) {
  // Result needs to be the total difference
  //  - every time we calculate the difference, add it to result
  let result = 0;

  for (let i = 0; i < listOne.length; i++) {
    // Add the difference to result after converting to absolute value
    result = result + Math.abs(listOne[i] - listTwo[i]);
  }

  return result;
}
