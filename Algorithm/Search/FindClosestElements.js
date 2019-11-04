"use strict";
exports.__esModule = true;
/**
 * 给定一个排序好的数组，两个整数 k 和 x，
 * 从数组中找到最靠近 x（两数之差最小）的 k 个数。
 * 返回的结果必须要是按升序排好的。
 * 如果有两个数与 x 的差值一样，优先选择数值较小的那个数。
 *
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 */
function FindClosestElements(arr, k, x) {
    var left = 0;
    var right = arr.length - 1;
    var mid;
    while (left < right) {
        mid = Math.floor(left + (right - left) / 2);
        // 若找到数组中确有此值 跳出循环
        if (arr[mid] === x) {
            k--;
            break;
        }
        else if (arr[mid] < x && arr[mid + 1] > x) {
            x - arr[mid] > arr[mid + 1] - x ? mid = mid + 1 : mid = mid;
            k--;
            break;
        }
        else if (arr[mid] < x) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    // 目标在数组内
    if (left !== right) {
        var pointerL = mid;
        var pointerR = mid;
        while (k > 0) {
            if (x - arr[pointerL - 1] <= arr[pointerR + 1] - x) {
                if (pointerL > 0) {
                    pointerL--;
                    k--;
                }
                else if (k > 0 && pointerR < arr.length - 1) {
                    pointerR++;
                    k--;
                }
            }
            else {
                if (k > 0 && pointerR < arr.length - 1) {
                    pointerR++;
                    k--;
                }
                else if (pointerL > 0) {
                    pointerL--;
                    k--;
                }
            }
        }
        return arr.slice(pointerL, pointerR + 1);
    }
    else {
        // 如果目标在左边界以外
        if (left === 0) {
            return arr.slice(0, k);
        }
        // 如果目标在右边界以外
        else {
            return arr.slice(arr.length - k);
        }
    }
}
exports.FindClosestElements = FindClosestElements;
