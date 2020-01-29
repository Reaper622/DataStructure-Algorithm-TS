# LRUCache 缓存结构

设计和实现一个 [LRU (最近最少使用) 缓存机制](https://baike.baidu.com/item/LRU)。它应该支持以下操作： 获取数据 `get` 和 写入数据 `put` 。

我们使用`Map`结构来实现一个LRUCache缓存结构。

> 此部分代码在 LRUCache.ts 中

需要注意的点是 put 会根据此时内部存储量以及键来进行不同的操作：

- 已存在的键：更新原键上的值，同时键顺序挪至最后
- 已达到容量：删除最近最少使用的键值对(Map.keys().next().value 即为第一个键的值)
- 未到达容量： 直接向Map添加，`set`方法自动将新添加的键值对放在后方。

```typescript

class LRUCache{
    capacity: number // 容量
    cache: Map<number, number>  // 存储空间

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map()
    }

    /** 
     * @param {number} key
     * @return {number}
     */
    public get (key: number): number {
        let cache = this.cache
        // 如果存在 返回其值 同时重新插入更新其位置
        if (cache.has(key)) {
            let returnVal = cache.get(key);
            cache.delete(key);
            cache.set(key, returnVal);
            return returnVal;
        } else {
            return -1;
        }
    }

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    public put(key: number, value: number): void {
        let cache = this.cache;
        // 如果当前设置时已存在此键
        if (cache.has(key)) {
            cache.delete(key);
            cache.set(key,value);
        } 
        // 如果此时已达到容量上限 cache.keys().next().value 始终返回第一个的键
        else if (cache.size === this.capacity) {
            cache.delete(cache.keys().next().value);
            cache.set(key, value);
        } 
        else {
            cache.set(key,value);
        }
    };
}

```

