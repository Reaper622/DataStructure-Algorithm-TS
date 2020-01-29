import { LRUCache } from '../LRUCache/LRUCache'


test('LRUCache', () => {
    let cache = new LRUCache( 2 /* 缓存容量 */ );
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);       // 返回  1
    cache.put(3, 3);    // 该操作会使得密钥 2 作废
    expect(cache.get(2)).toBe(-1);       // 返回 -1 (未找到)
    cache.put(4, 4);    // 该操作会使得密钥 1 作废
    expect(cache.get(1)).toBe(-1);       // 返回 -1 (未找到)
    expect(cache.get(3)).toBe(3);       // 返回  3
    expect(cache.get(4)).toBe(4);       // 返回  4
})