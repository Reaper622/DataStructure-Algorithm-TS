"use strict";
exports.__esModule = true;
/**
 * 得到两个链表的第一个公共结点。
 * @param {ListNode} phead1
 * @param {ListNode} phead2
 * @return {ListNode}
 */
function FirstSameNode(phead1, phead2) {
    // 首先得到两个链表的长度
    var len1 = GetListLength(phead1);
    var len2 = GetListLength(phead2);
    // 获取两个链表的长度差
    var diff = Math.abs(len1 - len2);
    // 定义一个长链表的指针和短链表的指针
    var longHead, shortHead;
    if (len1 > len2) {
        longHead = phead1;
        shortHead = phead2;
    }
    else {
        longHead = phead2;
        shortHead = phead1;
    }
    // 先让长链表指针移动相差的距离
    for (var i = 0; i < diff; i++) {
        longHead = longHead.next;
    }
    while (longHead !== null && shortHead !== null && longHead.val !== shortHead.val) {
        longHead = longHead.next;
        shortHead = shortHead.next;
    }
    // 得到第一个公共结点
    var result = longHead;
    return result;
}
exports.FirstSameNode = FirstSameNode;
function GetListLength(phead) {
    var num = 0;
    while (phead.next) {
        num++;
        phead = phead.next;
    }
    return num;
}
