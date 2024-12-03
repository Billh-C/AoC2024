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
  const safeIndexes: number[] = [];
  const dangerIndexes: number[] = [];
  reports.forEach((report, ri) => {
    const ascOrDesc = reports[0] < reports[1] ? "asc" : "desc";
    report.forEach((curr, li) => {
      const prev = report[li - 1];
      if (!dangerIndexes.includes(ri) && li > 0) {
        if (ascOrDesc === "asc" && prev > curr) {
          console.log(
            `Unsafe --> Level '${prev}' descends to '${curr}' when report was initially defined as ascending`,
          );
          dangerIndexes.push(ri);
        } else if (ascOrDesc === "desc" && prev < curr) {
          console.log(
            `Unsafe --> Level '${prev}' ascends to '${curr}' when report was initially defined as descending`,
          );
          dangerIndexes.push(ri);
        } else if (![0, 1, 2, 3].includes(Math.abs(prev - curr))) {
          console.log(
            `Unsafe --> Difference between levels '${prev}' & '${curr}' = '${
              Math.abs(prev - curr)
            }' which exceeds 3 or does not meet the required difference of 1`,
          );
          dangerIndexes.push(ri);
        } else {
          if (!safeIndexes.includes(ri)) safeIndexes.push(ri);
        }
      }
    });
  });
  console.log(safeIndexes);
  return safeIndexes.length;
};

export { getSafeReportCount };
