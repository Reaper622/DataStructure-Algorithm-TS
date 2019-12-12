"use strict";
exports.__esModule = true;
/**
 * 班上有 N 名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。如果已知 A 是 B 的朋友，B 是 C 的朋友，那么我们可以认为 A 也是 C 的朋友。所谓的朋友圈，是指所有朋友的集合。
 * 给定一个 N * N 的矩阵 M，表示班级中学生之间的朋友关系。如果M[i][j] = 1，表示已知第 i 个和 j 个学生互为朋友关系，否则为不知道。你必须输出所有学生中的已知的朋友圈总数。
 * @param {numer[][]} M
 * @return {number}
 */
function findCircleNum(M) {
    var count = 0;
    var visited = [];
    for (var i = 0; i < M.length; i++) {
        if (visited[i] == undefined) {
            dfs(M, visited, i);
            count++;
        }
    }
    return count;
}
exports.findCircleNum = findCircleNum;
;
/**
 * 深度遍历，将一个同学的所有朋友圈遍历为已访问
 * @param {number[][]} M
 * @param {boolean[]} visited
 * @param {number} i
 */
function dfs(M, visited, i) {
    for (var j = 0; j < M.length; j++) {
        if (M[i][j] == 1 && visited[j] == undefined) {
            visited[j] = true;
            dfs(M, visited, j);
        }
    }
}
