import {LongestCommonPerfix} from '../String/LongestCommonPerfix'
import {CountBinarySubstrings} from '../String/CountBinarySubstrings'
import {SumBinary} from '../String/SumBinary'
import {LengthOfLongestSubstring} from '../String/LengthOfLongestSubstring'
import {CheckInclusion} from '../String/CheckInclusion'
import {StringMultiply} from '../String/MultiplyString'
import {StringAdd} from '../String/StringAdd'
import {RestoreipAddress} from '../String/RestoreIpAddress'
import {LongestPalindrome} from '../String/LongestPalindrome'
 
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

test('CheckInclusion', () => {
    expect(CheckInclusion('ab', 'eidbaooo')).toBe(true);
    expect(CheckInclusion('ab', 'eidbdaooo')).toBe(false);
})

test('StringMultiply', () => {
    expect(StringMultiply('123', '456')).toBe('56088');
    expect(StringMultiply('2', '3')).toBe('6');
})
test('StringAdd', () => {
    expect(StringAdd('123', '456')).toBe('579');
    expect(StringAdd('123', 123)).toBe('')
})

test('RestoreIpAddress', () => {
    expect(RestoreipAddress("25525511135")).toEqual(["255.255.11.135", "255.255.111.35"])
})

test('LongestPalindrome', () => {
    expect(LongestPalindrome("babad")).toBe("bab");
    expect(LongestPalindrome("cbbd")).toBe("bb");

})