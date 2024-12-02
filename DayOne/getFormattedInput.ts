import { getLocationLists } from "../inputs.ts";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Format the input
//  - input line --> "number1   number2"
//  - loop over each line
// 	 - add number before "   " to list one array
// 	 - add number after "   " to list two array
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sexyFormat = async (): Promise<Array<number[]>> => {
	const ls = await getLocationLists
	const splitls = ls.split("\n")
	const sliced = splitls.slice(0, splitls.length-1)
	const splitcols = sliced.map(l => l.split("   ").map(x => Number(x)))
	console.log(splitcols.length)
	return splitcols.map(y => y.sort())
}
export { sexyFormat }

















async function getFormattedInput() {
  const input = await getLocationLists;

  const splitInput = input.split("\n");
  const lines = splitInput.slice(0, splitInput.length - 1);

  const listOne: number[] = [];
  const listTwo: number[] = [];

  for (let i = 0; i < lines.length; i++) {
    // lines[i] Get the element at i index of lines
    // .split("   ") split the element ("number   number") based on "   " => this will return ["number","number"]
    // [0] get the first element from ["number","number"]
    listOne.push(Number(lines[i].split("  ")[0]));
    listTwo.push(Number(lines[i].split("  ")[1]));

    listOne.sort();
    listTwo.sort();
  }
	return { A: listOne, B: listTwo } 
}

export { getFormattedInput }
