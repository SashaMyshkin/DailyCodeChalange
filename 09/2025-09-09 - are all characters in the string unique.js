// str.split('') creates a new array in memory and does not handle all characters correctly.
// [...str] also creates a new array in memory, but it does handle characters correctly.
// Looping directly over the string is the best approach,
// since it uses the built-in iterator and avoids allocating extra memory.
// The following function has O(n) complexity, but can return early when a duplicate is found.

function allUnique(str) {
  const seen = new Set();
  for (const char of str) {
    if (seen.has(char)) return false;
    seen.add(char);
  }
  return true;
}
