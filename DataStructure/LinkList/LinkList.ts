class ListNode {
    val: any
    next: ListNode

    /**
     * 
     * @param {*} val 
     * @param {ListNode} next 
     */
    constructor (val: any, next: ListNode) {
        this.val = val
        this.next = next
    }
}


class List  {
    head: ListNode
    constructor(arr? : any[]) {
        if (arr) {
            this.head = new ListNode(arr[0], null)
            let current = this.head
            for(let i = 1; i < arr.length; i++) {
                current.next = new ListNode(arr[i], null)
                current = current.next
            }
        } else {
            this.head = new ListNode(null, null)
        }
        
    }

    /**
     * 从 0 开始计算，找到包括head 头节点 在哪的位于 index 位置的节点
     * @param { Number } index
     * @return {ListNode}
     */
    public find(index: number): ListNode {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    /**
     * 在指定位置插入节点
     * 
     * @param {any} value 
     * @param {number} index 
     */
    public insert(value: any, index: number): void {
        // 获取当前位置前一个节点
        let prev = this.find(index-1)
        let next = new ListNode(value, prev.next)
        prev.next = next
    }
    /**
     *  删除指定位置的节点
     * 
     * @param {number} index 
     */
    public delete(index: number): void {
        // 如果要删除头节点
        if (index === 0) {
            this.head = this.head.next
        } else if (this.find(index) === null || this.find(index).val === null) {
            throw Error('输入节点不存在')
        } else {
            // 获取要删除节点的前一个节点
            let prev = this.find(index-1)
            prev.next = prev.next.next
        }
    }

    /**
     * 正序遍历链表,返回一个数组
     * 
     * @return {any[]}
     * 
     */
    public PositiveTraverse(): any[] {
        let arr = []
        let current = this.head
        while (current !== null) {
            arr.push(current.val)
            current = current.next
        }
        return arr
    }

    /**
     * 逆序遍历链表，返回一个数组
     * 
     * @return {any[]}
     */
    public NegativeTraverse(): any[] {
        let arr = []
        let current = this.head;
        while (current !== null) {
            arr.unshift(current.val)
            current = current.next
        }
        return arr
    }
    
    /**
     * 删除排序链表中的重复元素
     */
    public DeleteDuplicates(): void {
        let current = this.head
        // 暂存值前一个节点的值
        let temp: any
        // 要删除节点的
        let toDelete: ListNode

        while(current && current.next !== null) {
            temp = current.val
            // 如果重复, 删除重复节点
            if (current.next.val === temp) {
                toDelete = current.next
                current.next = toDelete.next
            } else {
                current = current.next
                temp = current.val
            }
        }
    }
}

export {ListNode, List}