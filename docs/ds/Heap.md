---
sidebar: auto
---
# 堆

> 堆的底层其实是一棵完全二叉树。

堆有两种情形，`最大堆`和`最小堆`

- 最大堆：每个结点的元素值不小于其子结点
- 最小堆：每个结点的元素值不大于其子结点



## 堆的数据结构

> 此部分代码在 Heap.ts 中

```typescript
class Heap {
    // 堆的类型
    type: string
    value: number[]

    constructor(type: string) {
        this.type = type
        this.value = []
    }

    // 传入数组，创建一个堆
    public create(numbers: number[]): void {
        this.value = numbers
        const length = this.value.length
        // 从第一个非叶子结点开始调整结构
        for(let i = Math.floor((length/2) -1); i>=0;i--) {
            this.adjust(i, length)
        }
    }

    // 调整堆的结构
    public adjust(index: number, length:number): void {
        const array = this.value
        for(let i = 2 * index + 1; i < length; i = 2 * i + 1) {
            if (i + 1 < length) {
                // 如果符合堆的规则
                if ((this.type === 'max' && array[i + 1] > array[i]) || (this.type === 'min' && array[i+1] < array[i])) {
                    i++
                }
            }
            // 如果不符合规则 则进行交换
            if ((this.type === 'max' && array[index] < array[i]) || (this.type === 'min' && array[index] > array[i])) {
                [array[index], array[i]] = [array[i], array[index]]
                index = i
            }
        }
    }

    // 向堆中添加元素
    /**
     * 堆属于优先队列，只能从末尾添加
     * 添加后有可能破坏堆的结构，需要从下到上进行调整
     * 如果元素小于父元素，向上置换
     * 
     */
    public add (item: number): void {
        const array = this.value
        array.push(item)
        if (array.length > 1) {
            let index = array.length - 1
            let target = Math.floor((index - 1) / 2)
            while(target >= 0) {
                if ((this.type === 'min' && array[index] < array[target]) || (this.type === 'max' && array[index] > array[target])) {
                    [array[index], array[target]] = [array[target], array[index]]
                    index = target
                    target = Math.floor((index - 1) / 2)
                } else {
                    break
                }
            }
        }
    }
    /**
     * 由于堆属于优先队列，因此从头部移除
     * 移除后，末尾元素填充头部，开始从头部进行下沉操作
     */
    // 弹出堆顶元素
    public pop(): number {
        const array = this.value
        let result = null
        if (array.length > 1) {
            result = array[0]
            // 将最后一个叶子结点置于堆顶 之后调整结构
            array[0] = array.pop()
            this.adjust(0, array.length)
        } else if (array.length === 1) {
            return array.pop()
        }
        return result
    }
}

```

