import {LongestCommonPerfix} from '../String/LongestCommonPerfix'
import {CountBinarySubstrings} from '../String/CountBinarySubstrings'
import {SumBinary} from '../String/SumBinary'
import {LengthOfLongestSubstring} from '../String/LengthOfLongestSubstring'

test('LongestCommonPerfix', () => {
    expect(LongestCommonPerfix(["flower","flow","flight"])).toBe('fl')
    expect(LongestCommonPerfix(["zzz","xxx","yyy"])).toBe('')
})

test('CountBinarySubstrings', () => {
    expect(CountBinarySubstrings("00110011")).toBe(6)
})

test('SumBinary', () => {
    expect(SumBinary("11", "1")).toBe("100")
})

test('LengthOfLongestSubstring', () => {
    expect(LengthOfLongestSubstring('abcdabcdeabcdef')).toBe(6);
    expect(LengthOfLongestSubstring('dvdf')).toBe(3);
})