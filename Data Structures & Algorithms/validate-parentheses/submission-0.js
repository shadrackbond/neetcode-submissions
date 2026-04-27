class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  isValid(s) {
  const stack = [];

  // Mapping of closing → opening brackets
  const matching = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    // If it's an opening bracket, push to stack
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } 
    // Otherwise, it must be a closing bracket
    else {
      // If stack is empty, no opening bracket to match
      if (stack.length === 0) return false;

      // Check if the top of the stack matches
      const top = stack.pop();
      if (top !== matching[ch]) return false;
    }
  }

  // Stack must be empty for the string to be valid
  return stack.length === 0;
}

}
