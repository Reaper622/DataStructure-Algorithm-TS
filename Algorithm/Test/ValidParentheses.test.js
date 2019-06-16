import ValidParentheses from '../Code/Array/ValidParentheses.js'

test('ValidParenthese:', () => {
  expect(ValidParentheses("()")).toBe(true);
  expect(ValidParentheses("()[]{}")).toBe(true);
  expect(ValidParentheses("(]")).toBe(false);
  expect(ValidParentheses("([)]")).toBe(false);
  expect(ValidParentheses("{[]}")).toBe(true);
})