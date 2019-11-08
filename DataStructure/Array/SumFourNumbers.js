"use strict";
exports.__esModule = true;
function SumFourNumbers(arr, target) {
    // 存储结果
    var result = [];
    if (arr.length < 4) {
        return result;
    }
    // 排序，便于去重
    arr.sort(function (a, b) { return a - b; });
    for (var i = 0; i < arr.length - 3; i++) {
        // 跳过重复
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }
        // 如果当前连续四个已经超过目标值 则后面已无符合条件的子序列，直接退出循环
        if (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] > target) {
            break;
        }
        // 下部分类似于三数之和
        for (var j = i + 1; j < arr.length - 2; j++) {
            // 去除重复情况
            if (j > i + 1 && arr[j] === arr[j - 1]) {
                continue;
            }
            var left = j + 1;
            var right = arr.length - 1;
            while (left < right) {
                var sum = arr[i] + arr[j] + arr[left] + arr[right];
                if (sum === target) {
                    result.push([arr[i], arr[j], arr[left], arr[right]]);
                }
                if (sum <= target) {
                    while (arr[left] === arr[++left])
                        ;
                }
                else {
                    while (arr[right] === arr[--right])
                        ;
                }
            }
        }
    }
    return result;
}
exports.SumFourNumbers = SumFourNumbers;
