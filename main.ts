import { sexyDiff } from './DayOne/PuzzleOne/getDifference.ts'
import { sexySimilarity } from './DayOne/PuzzleTwo/getSimilarity.ts'
import { sexyFormat } from "./DayOne/getFormattedInput.ts" 
import { getSafeReportCount } from "./DayTwo/PuzzleOne/safeReports.ts";
import { formattedReports } from "./DayTwo/getFormattedReports.ts";

const lists = await sexyFormat()
const reports = await formattedReports()

const results = {
	DayOne: {
		PuzzleOne: sexyDiff(lists),
		PuzzleTwo: sexySimilarity(lists)
	},
	DayTwo: {
		PuzzleOne: getSafeReportCount(reports),
		PuzzleTwo: 0,
	}
}

console.log(results)
