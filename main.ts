import { getDifference } from './DayOne/PuzzleOne/getDifference.ts'
import { getSimilarity } from './DayOne/PuzzleTwo/getSimilarity.ts'
import { getFormattedInput } from "./DayOne/getFormattedInput.ts" 
import { getSafeReportCount } from "./DayTwo/PuzzleOne/safeReports.ts";
import { getDampSafeReportCount } from "./DayTwo/PuzzleTwo/safetyDampenedReports.ts"
import { formattedReports } from "./DayTwo/getFormattedReports.ts";

const lists = await getFormattedInput()
const reports = await formattedReports()

const results = {
	DayOne: {
		PuzzleOne: getDifference(lists),
		PuzzleTwo: getSimilarity(lists)
	},
	DayTwo: {
		PuzzleOne: getSafeReportCount(reports),
		PuzzleTwo: getDampSafeReportCount(reports)
	},
  DayThree: {
    PuzzleOne: 0,
    PuzzleTwo: 0,
  }
}

console.log(results)
