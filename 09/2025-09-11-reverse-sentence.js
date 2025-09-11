/** The task:
 * Given a string of words, return a new string with the words in reverse order. 
 * For example, the first word should be at the end of the returned string, 
 * and the last word should be at the beginning of the returned string.
 * In the given string, words can be separated by one or more spaces.
 * The returned string should only have one space between words.
 * Example:
 *  reverseSentence("npm  install  sudo") should return "sudo install npm".
 * reverseSentence("push commit git") should return "git commit push".
 */

/** This is my original solution.
 * It splits the sentence into words, reverses the array of words,
 * and then reduces the array back into a string, ensuring that there is only one space between words.
 * Finally, it trims any leading or trailing spaces from the result.
 * Time complexity: O(n) where n is the length of the sentence.
 * However, it is very mesay and not very readable.
 * The next solution is much cleaner and more elegant.
 */
function reverseSentence1(sentence) {
  return sentence.split(' ')
    .reverse()
    .reduce((acc, curr)=>{
    if(curr === '')
      return acc;
    acc += `${curr} `
    return acc
  }, '').trim();
}
/** This solution is much cleaner and more elegant.
 * It uses a regular expression to split the sentence on one or more whitespace characters,
 * which automatically handles multiple spaces betwween words.
 * Then it reverses the array of words and joins them back into a string with a single space between each word.
 * Finally, it trims any leading or trailing spaces from the result.
 * Time complexity: O(n) where n is the length of the sentence.
 * This solution is more readable and easier to understand.
 */
function reverseSentence2(sentence) {
  return sentence
    .trim()
    .split(/\s+/)   // split on one or more whitespace characters
    .reverse()
    .join(' ');
}

