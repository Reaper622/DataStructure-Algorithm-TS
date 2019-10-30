"use strict";
exports.__esModule = true;
/**
 * 分发饼干，尽可能多的满足孩子
 * @param {number[]} children 孩子们的胃口值
 * @param {number[]} biscuits 饼干的大小
 */
function DeliverBiscuits(children, biscuits) {
    // 对饼干和孩子胃口进行排序「从小到大」
    children = children.sort(function (a, b) { return a - b; });
    biscuits = biscuits.sort(function (a, b) { return a - b; });
    // 满足孩子的总量
    var result = 0;
    // 分别定义孩子和饼干的指针
    var chi = 0;
    var bis = 0;
    while (chi < children.length && bis < biscuits.length) {
        // 优先满足孩子
        if (children[chi] <= biscuits[bis]) {
            result++;
            chi++;
        }
        // 如果当前不满足孩子 向后寻找更大的饼干满足，满足孩子也向后开始下一块饼干
        bis++;
    }
    return result;
}
exports.DeliverBiscuits = DeliverBiscuits;
