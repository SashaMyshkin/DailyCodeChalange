/** The task:
 * Given an input array of seven integers, representing a week's time, 
 * where each integer is the amount of hours spent on your phone that day, 
 * determine if it is too much screen time based on these constraints:
    If any single day has 10 hours or more, it's too much.
    If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
    If the average of the seven days is greater than or equal to 6 hours, it's too much.
 */

/** This was my original solution.
 * I wanted to do everything in one pass through the array because it is more efficient.
 * However, there is no need for that here because the array length is small and fixed (7).
 * So going through the array multiple times is not a big deal for performance,
 * plus it makes the code simpler and easier to read.
 */

function tooMuchScreenTime(hours) {
  let allHoursSum = 0;
  let first = 0;
  let second = 1;
  let third = 2;

  for (let hour of hours) {
    if (hour >= 10) return true;

    let threeHoursSum = hours[first] + hours[second] + hours[third];

    if (!Number.isNaN(threeHoursSum)) {
      if (threeHoursSum / 3 >= 8) return true;
    }
    first++;
    second++;
    third++;
    allHoursSum += hour;
  }

  return allHoursSum / 7 >= 6;
}

/** This solution is much more readable.
 * Because it implements sliding window and total avarage checks separately.
 */
function tooMuchScreenTime1(hours) {
  let allHoursSum = 0;

  for (let hour of hours) {
    if (hour >= 10) return true;
    allHoursSum += hour;
  }

  for (let i = 0; i < hours.length - 2; i++) {
    const threeHousSum = hours[i] + hours[i + 1] + hours[i + 2];
    if (threeHousSum / 3 >= 8) return true;
  }

  return allHoursSum / 7 >= 6;
}
