import { sexyDiff } from './DayOne/PuzzleOne/getDifference.ts'
import { sexySimilarity } from './DayOne/PuzzleTwo/getSimilarity.ts'
import { sexyFormat } from "./DayOne/getFormattedInput.ts" 

const lists = await sexyFormat()

const results = {
	DayOne: {
		PuzzleOne: sexyDiff(lists),
		PuzzleTwo: sexySimilarity(lists)
	}
}

console.log(results)
