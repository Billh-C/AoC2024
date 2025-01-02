///////////////////////////////////////////////////////////////////////////////////
//
//    The problem dampener should tolerate a single bad level
//
//    if removing a single level would make the report safe
//    it is counted as such
//
//
//
//
//
//
///////////////////////////////////////////////////////////////////////////////////


const getDampSafeReportCount = (reports: number[][]) => {
  let safetyCounter = 0
  reports.forEach((report) => {
    const initiallyIncreasing = report[1] - report[0] > 0
    let dangerLevel = 0
    report.forEach((level, levelIndex) => {
      if (levelIndex != 0) {
        const prev = report[levelIndex - 1]
        if (initiallyIncreasing) {
            if (!(1 <= level - prev && level - prev <= 3)) {
              dangerLevel ++;
            }
        }
        else {
            if (!(1 <= prev - level && prev - level <= 3)) {
              dangerLevel ++;
            }
        }
      }
    })
    if (dangerLevel <= 1) safetyCounter++
  })
  console.log(reports.length)
  return safetyCounter
};

export { getDampSafeReportCount };
