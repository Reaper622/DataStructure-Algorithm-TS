import {LongestCommonPerfix} from '../String/LongestCommonPerfix'
import {CountBinarySubstrings} from '../String/CountBinarySubstrings'

test('LongestCommonPerfix', () => {
    expect(LongestCommonPerfix(["flower","flow","flight"])).toBe('fl')
    expect(LongestCommonPerfix(["zzz","xxx","yyy"])).toBe('')
})

test('CountBinarySubstrings', () => {
    expect(CountBinarySubstrings("00110011")).toBe(6)
})