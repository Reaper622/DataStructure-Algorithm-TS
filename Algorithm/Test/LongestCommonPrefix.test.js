import LongestCommonPrefix from '../Code/String/最长公共前缀/LongestCommonPerfix.js'

test('LongestCommonPrefix:', () => {
  expect(LongestCommonPrefix(["flower","flow","flight"])).toBe("fl");
  expect(LongestCommonPrefix(["dog","racecar","car"])).toBe("");
})