class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  isValid(s) {
  const stack = [];

  for (const ch of s) {
    if (ch === '(') stack.push(')');
    else if (ch === '{') stack.push('}');
    else if (ch === '[') stack.push(']');
    else {
      if (stack.length === 0 || stack.pop() !== ch) {
        return false;
      }
    }
  }

  return stack.length === 0;
}


}
