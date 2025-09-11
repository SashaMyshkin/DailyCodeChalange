/*
  Problem:
  Given two arrays of strings,
  return a new array containing all the values that appear
  in exactly one of the arrays (symmetric difference).
  The result should be sorted in alphabetical order.
*/

/* 
  Solution 1: Modern and concise
  Since 2024, JavaScript introduced the `symmetricDifference()` method for Sets.
*/
function arrayDiff1(arr1, arr2) {
  const inventory1 = new Set(arr1);
  const inventory2 = new Set(arr2);
  const diff = inventory1.symmetricDifference(inventory2);
  return [...diff].sort((a, b) => a.localeCompare(b));
}

/* 
  Solution 2: Without `symmetricDifference()`
  Use two Sets for quick membership checking.
  - Loop over the first array, collect elements not in the second.
  - Loop over the second array, collect elements not in the first.
  Complexity:
    - Each membership check with Set.has() is O(1) on average.
    - Two loops → O(n + m).
    - Sorting dominates → O((n + m) log(n + m)).
*/
function arrayDiff2(arr1, arr2) {
  const inventory1 = new Set(arr1);
  const inventory2 = new Set(arr2);
  const ret = [];

  arr1.forEach(e => {
    if (!inventory2.has(e)) ret.push(e);
  });

  arr2.forEach(e => {
    if (!inventory1.has(e)) ret.push(e);
  });

  return ret.sort((a, b) => a.localeCompare(b));
}