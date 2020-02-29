import { generateParenthesis } from '../Backtracking/GenerateParenthesis'



test('GenerateParenthesis', () => {
    expect(generateParenthesis(3)).toEqual([
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()"
      ])
})