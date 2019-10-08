import isPalindrome from '../Code/Array/回文数/PalindromeNum.js'

test('isPalindrome:', () => {
  expect(isPalindrome(121)).toBe(true);
  expect(isPalindrome(-121)).toBe(false);
  expect(isPalindrome(10)).toBe(false);
})