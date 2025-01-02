//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	Example input:
//
//		7 6 4 2 1    "Many reports", "One report per line"
//		1 2 7 8 9
//              9 7 6 2 1
//              1 3 2 4 5
//              8 6 4 4 1
//              1 3 6 7 9
//
//
//      Structure: number[][]
//
//	SAFETY CONDITIONS:
//		- Levels (numbers in row) must be either decreasing or increasing
//		- Any two adjacent levels must differ by at least 1 and at most, 3
//
//	Format data into --> [[7,6,4,2,1],[1,2,7,8,9],[9,7,6,2,1],[1,3,2,4,5],[8,6,4,4,1],[1,3,6,7,9]]
//
//	loop over each level, in each report
//		SET ONCE PER REPORT --> ascOrDec = current < next ? 'asc' : 'dec'
//		if (ascOrDec === 'asc' AND current > next) return false
//		nextDist = abs(current - next)
//		if ([1,2,3].includes(nextDist)) return false
//		return true
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getSafeReportCount = (reports: number[][]) => {
  let safetyCounter = 0
  reports.forEach((report) => {
    const initiallyIncreasing = report[1] - report[0] > 0
    let safe = true
    report.forEach((level, levelIndex) => {
      if (safe === true && levelIndex != 0) {
        const prev = report[levelIndex - 1]
      if (initiallyIncreasing) {
            safe &&= 1 <= level - prev && level - prev <= 3;
        } else {
            safe &&= 1 <= prev - level && prev - level <= 3;
        } 
      }
    })
    safetyCounter = safe ? safetyCounter + 1 : safetyCounter
  })
  console.log(reports.length)
  return safetyCounter
};

export { getSafeReportCount };
