import ValidParentheses from '../Code/Array/有效的括号/ValidParentheses.js'

test('ValidParenthese:', () => {
  expect(ValidParentheses("()")).toBe(true);
  expect(ValidParentheses("()[]{}")).toBe(true);
  expect(ValidParentheses("(]")).toBe(false);
  expect(ValidParentheses("([)]")).toBe(false);
  expect(ValidParentheses("{[]}")).toBe(true);
})