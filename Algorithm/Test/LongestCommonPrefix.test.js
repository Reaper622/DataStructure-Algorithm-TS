import LongestCommonPrefix from '../Code/String/LongestCommonPerfix.js'

test('LongestCommonPrefix:', () => {
  expect(LongestCommonPrefix(["flower","flow","flight"])).toBe("fl");
  expect(LongestCommonPrefix(["dog","racecar","car"])).toBe("");
})