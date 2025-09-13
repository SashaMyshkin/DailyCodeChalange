/** The task was:
 * Given an array of integers from 1 to n, inclusive, 
 * return an array of all the missing integers between 1 and n 
 * (where n is the largest number in the given array).
    The given array may be unsorted and may contain duplicates.
    The returned array should be in ascending order.
    If no integers are missing, return an empty array.
 */

function findMissingNumbers(arr) {
  //we sort the array in ascending order for easier pocessing
  arr.sort((a, b) => a - b);
  //we will store the missing numbers here
  const missingNumbers = [];

  //we loop through the array until the second to last element
  //because we will be checking the current and the next element
  for (let i = 0; i < arr.length - 1; i++) {
    //we store the current and the next element in variables for easier access
    let curr = arr[i];
    let next = arr[i + 1];
    //if the difference between the next and current element is more than 1
    //it means there are missing numbers between them
    if (next - curr > 1) {
      //since we are sure that next is greater than curr at least by 2
      //we use a do-while loop since it will run at least once
      //we decrement next and check if it is not equal to curr
      //if it is not, we add it to the missing numbers array
      //we continue this until next is greater than curr
      do {
        next--;
        if (next !== curr) missingNumbers.push(next);
      } while (next > curr);
    }
  }

  //And finally we sort the missing numbers array in ascending order
  missingNumbers.sort((a, b) => a - b);
  return missingNumbers;
}

/**
 * This solution is better because we don't need to sort the missing numbers array at the end.
 * We increment curr instead of decrementing next.
 */
function findMissingNumbers(arr) {
  arr.sort((a, b) => a - b);
  const missingNumbers = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let curr = arr[i];
    let next = arr[i + 1];
    if (next - curr > 1) {
      do {
        curr++;
        if (next !== curr) missingNumbers.push(curr);
      } while (next > curr);
    }
  }

  return missingNumbers;
}

// Even better solution would be to use a Set.
