import telComb from '../Code/Array/手机键盘和对应字母组合/phoneNum.js'

test('telComb:', () => {
  expect(telComb('23')).toEqual(['ad','ae','af','bd','be','bf','cd','ce','cf']);
})