---
sidebar: auto
---
# 数组

> 数组是一种按顺序存储数据的集合，元素可以随机存取，因为数组中每个元素都可以通过数组索引识别。

## 双指针

> ​	一种在排序数组中使用的技巧，利用几个不同位置的指针，通过速度或方向的变化解决问题。

### 和为Sum的两个数字

> 此部分代码在 FindNumWithSum.ts 中

输入一个递增排序的数组和一个数字`sum`，在数组中查找两个数，使得他们的和正好是`sum`，如果有多对数字的和等于`sum`，输出两个数的乘积最小的。

```typescript
/**
 * 在一个有序数组中查找和为sum的两个数字，如果有多个，则输出乘积最小的。
 * @param {number[]} array 
 * @param {number} sum 
 * @return {number[]}
 */
function FindNumWithSum(array: number[], sum: number): number[] {
    if (!array || sum < 0) {
        return [];
    }
    // 因为返回乘积最小的 即和相同，越分散乘积越小，则从两侧开始查找
    // 设置左索引
    let left = 0
    // 设置右索引
    let right = array.length - 1
    while(left < right) {
        let total = array[left] + array[right]
        if (total === sum) {
            return [array[left], array[right]]
        } else if (total < sum) {
            // 和小于目标值，左索引向右移动
            left++
        } else {
            // 和大于目标值，右索引向左移动
            right--
        }
    }
    return []
}
```

### 和为Sum的连续正数序列

> 此部分代码在 FindContinousSequence.ts 中

输入一个正数`S`，打印出所有和为S的连续正数序列。例如，输入`15`，会返回`[[1,2,3,4,5], [4,5,6], [7,8]]`

```typescript
/**
 * 输入一个正数sum，打印出所有和为sum的连续正数序列。
 * @param {number} sum 
 * @return {number[]}
 */
function FindContinousSequence(sum: number): number[] {
    if (sum < 1) {
        return []
    }
    // 存储结果的数组
    let result = []
    // 表示当前的子序列
    let child = [1,2]
    // 子序列的头元素
    let left = 1
    // 子序列的尾元素
    let right = 2
    // 子序列当前总和
    let currentSum = 3
    while (right < sum) {
        while (currentSum < sum && right < sum) {
            child.push(++right)
            currentSum += right
        }
        while (currentSum > sum && left < sum) {
            child.shift()
            currentSum -= left++
        }
        // 当前已经存在和为sum的连续正数序列
        if (currentSum === sum && child.length > 1) {
            result.push(child.slice())
            // 继续向后寻找
            child.push(++right)
            currentSum += right
        }
    }
    return result
}
```

### 移动零

>  此部分代码在 MoveZero.ts 中

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。必须在原数组上操作，不能拷贝额外的数组。

```typescript
/**
 * 将0移动到数组后部，同时内部不为0的元素相对位置不变。
 * @param {number[]} nums
 * @return {number[]} 
 */
function MoveZero (nums: number[]): number[] {
    let len = nums.length
    // 使用双指针法
    let i = 0, j = 0
    while (i < len) {
        // 非零元素提前放入
        if (nums[i] !== 0) {
            nums[j++] = nums[i]
        }
        i++
    }
    // 填充剩余的0
    while(j < len) {
        nums[j++] = 0
    }
    return nums
}
```

### 按奇偶排序数组

> 此部分代码在 ReorderOddEven.ts 中

分离一个数组中的奇数和偶数，使奇数在前，偶数在后。

```typescript
/**
 * 分离一个数组中的奇数和偶数，使奇数在前，偶数在后。
 * @param {number[]} arr 
 * @return {number[]}
 */
function ReorderOddEven(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr
    }
    // 左侧指针
    let left = 0
    // 右侧指针
    let right = arr.length - 1
    // 当两者未重合时
    while (left < right) {
        // 遍历找到左侧的偶数
        while (arr[left] % 2 !== 0 && left < right) {
            left++
        }
        // 遍历找到右侧的奇数
        while (arr[right] % 2 === 0 && right > left) {
            right--
        }
        // 交换位置
        [arr[left], arr[right]] = [arr[right], arr[left]]
    }
    return arr
}
```

### 接雨水

> 此部分代码在 Trap.ts 中

给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

使用双指针法，从最左侧和最右侧依次向另一边遍历，如果右侧高于左侧，那么此时左侧最高处减去此时左侧的高度就是此位置能存的水，右侧同理。

```typescript
/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * @param {number[]} height 
 * @return {number}
 */
function trap(height: number[]): number {
    if (!Array.isArray(height)) {
        return 0;
    }
    // 定义左右指针
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    // 定义左右最高处
    let left_max = 0,
        right_max = 0;
    while(left < right) {
        // 左侧较低
        if (height[left] < height[right]) {
            // 判断左侧是否有较高的，可以形成凹形接水
            height[left] >= left_max ? left_max = height[left] : result += (left_max - height[left]);
            ++left;
        }
        // 右侧较低
        else {
            // 判断右侧是否有较高的，可以形成凹形接水
            height[right] >= right_max ? right_max = height[right] : result += (right_max - height[right]);
            --right;
        }
    }
    return result;
}
```

### 删除排序数组中的重复项

> 此部分代码在 RemoveDuplicates.ts 中

给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

```javascript
/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p1 = 0;
    let p2 = 0;
    let len = nums.length;
    while(p2 < len) {
        // 排除重复项
        while(nums[p2] === nums[p1]) {
            p2++;
        }
        // 此时只保留 p1 位置的重复项
        p1++;
        // 此时从下一项开始
        nums[p1] = nums[p2];
    }
    // 返回不重复的个数
    return p1;
};
```

### 盛最多水的容器

> 此部分代码在 MaxArea.ts 中

给定 *n* 个非负整数 *a*1，*a*2，...，*a*n，每个数代表坐标中的一个点 (*i*, *ai*) 。在坐标内画 *n* 条垂直线，垂直线 *i* 的两个端点分别为 (*i*, *ai*) 和 (*i*, 0)。找出其中的两条线，使得它们与 *x* 轴共同构成的容器可以容纳最多的水。

```typescript
/**
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height: number[]): number {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    // 循环计算容器的存水多少
    while(left < right) {
        // 存水的高度是由较短一侧的高度确定的
        let side = Math.min(height[left], height[right]);
        let len = right - left;
        // 计算容积
        let volume = side * len;
        result = volume > result ? volume : result;
        // 变化较小侧来寻找最大的容积
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return result;
};

export {maxArea}
```




## N数之和问题

> 主要考虑如何相比于暴力解法降低时间复杂度。

### 两数之和

> 此部分代码在 SumTwoNumbers.ts 中

给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

```typescript
/**
 * 给定一个整数数组 arr 和一个目标值 target，在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 * 
 * @param {number[]} arr 
 * @param {number} target 
 * @return {number[]}
 */
function SumTwoNumbers (arr: number[], target: number ):number[]  {
  let len:number = arr.length;
  let result: number[] = [];
  for(let i = 0; i < len-1; i++) {
    for(let j = i+1; j < len; j++){
      if(arr[i] + arr[j] === target) {
        result.push(i,j);
      }
    }
  }
  return result;
}
```

### 三数之和

> 此部分代码在 SumThreeNumbers.ts 中

给定一个包含 n 个整数的数组 arr，判断 arr 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

```typescript
/**
 * 给定一个包含n个整数的数组，找出其中和为0的不重复的三元组
 * @param {number[]} arr 
 * @return {number[]}
 */
function SumThreeNumbers (arr: number[]): number[][] {
    // 存储结果
    const result = []
    // 首先进行排序，便于去重
    arr.sort((a,b) => a-b)
    for(let i = 0; i < arr.length; i++) {
        // 跳过重复
        if (i && arr[i] === arr [i - 1]) {
            continue
        }
        // 从此位向后为寻找数组 找到 left 和 right 索引加上 i 位为 所求目标值
        let left = i + 1
        let right = arr.length - 1
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right]
            // 大于0 右变量向左移动
            if(sum > 0) {
                right--
            }
            // 小于0 左变量向右移动
            else if (sum < 0) {
                left++
            }
            // 符合条件存储结果
            else {
                result.push([arr[i], arr[left], arr[right]])
                left++
                right--
                // 跳过重复值
                while(arr[left] === arr[left - 1]) {
                    left++
                }
                while(arr[right] === arr[right + 1]) {
                    right--
                }
            }
        }
    }
    return result
}
```

### 四数之和

> 此部分代码在 SumFourNumbers.ts

给定一个包含 n 个整数的数组 arr 和一个目标值 target，判断 arr 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

```typescript
/**
 * 给定一个包含 n 个整数的数组 arr 和一个目标值 target，
 * 判断 arr 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * @param {number[]} arr 
 * @param {number} target 
 */
function SumFourNumbers(arr: number[], target: number): number[][] {
        // 存储结果
        const result = []
        if (arr.length < 4) {
            return result
        }
        // 排序，便于去重
        arr.sort((a,b) => a-b)
        for(let i = 0; i < arr.length - 3; i++) {
            // 跳过重复
            if (i > 0 && arr[i] === arr[i - 1]) {
                continue
            }
            // 如果当前连续四个已经超过目标值 则后面已无符合条件的子序列，直接退出循环
            if (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] > target) {
                break
            }
            // 下部分类似于三数之和
            for(let j = i + 1; j < arr.length - 2; j++) {
                // 去除重复情况
                if (j > i + 1 && arr[j] === arr[j - 1]) {
                    continue
                }
                let left = j + 1
                let right = arr.length - 1
                while (left < right) {
                    let sum = arr[i] + arr[j] + arr[left] + arr[right]
                    if (sum === target) {
                        result.push([arr[i], arr[j], arr[left], arr[right]])
                    } 
                    if (sum <= target) {
                        while (arr[left] === arr[++left]);
                    } else {
                        while (arr[right] === arr[--right]);
                    }
                }
            }
        }
        return result
}
```

### 最接近的三数之和

> 此部分代码在 ThreeSumCloest.ts 中

给定一个包括 *n* 个整数的数组 `nums` 和 一个目标值 `target`。找出 `nums` 中的三个整数，使得它们的和与 `target` 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

此处使用方法类似于三数之和，只是此处判断为得到结果与目标值差值的绝对值为判断依据进行判断。

```typescript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums: number[], target: number): number {
    if (nums.length < 3) {
        return null;
    }
    // 排序nums数组
    nums.sort((a,b) => (a-b));
    let abs = Number.MAX_VALUE;
    let result = 0;
    const len = nums.length;
    for(let i = 0; i < len - 2;i++) {
        // 去除重复项
        if (i && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            let newResult = nums[i] + nums[left] + nums[right];
            let newAbs = Math.abs(newResult - target);
            // 如果差值比当前最小差值小 就替换为此时的值
            if (newAbs < abs) {
                abs = newAbs;
                result = newResult;
            }
            if (newResult - target < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
    
};
```





## 二维数组

> 一般会利用矩阵特性使用循环或者递归。

### 顺时针打印矩阵

> 此部分代码在 PrintMartix.ts 中

```typescript
/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * @param {number[][]} arr 
 * @return {number[]}
 */
function PrintMatrix(arr: number[][]): number[] {
    // 设置起点坐标，起点坐标为 [start, start]
    let start = 0
    // 获取行数
    let rows = arr.length
    // 获取列数
    let columns = arr[0].length
    // 存储结果
    const result = []
    // 如果数组不存在或者不为二维数组 直接返回
    if (!rows || !columns) {
        return result
    }
    // 循环到中间层，防止重复
    while (columns > start * 2 && rows > start * 2) {
        printCircle(arr, start, columns, rows, result)
        // 起点坐标向内部沿对角线移动
        start++
    }
    return result
}
/**
 * 沿着顺时针方向打印一圈。
 * @param {number[][]} arr 
 * @param {number} start 
 * @param {number} columns 
 * @param {number} rows 
 * @param {number[]} result 
 */
function printCircle(arr: number[][], start: number, columns: number, rows: number, result: number[]): void {
    // 结束列号
    let x = columns - start - 1
    // 结束行号
    let y = rows - start - 1
    // 能够传入，说明从左到右一定能打印
    // 横向从左到右打印一行
    for(let i = start; i <= x; i++) {
        result.push(arr[start][i])
    }
    // 如果结束行号大于起始行号 则从上到下打印
    if (y > start) {
        // 纵向从上到下一列
        for(let i = start + 1; i <= y; i++) {
            result.push(arr[i][x])
        }
        // 如果结束列号大于起始列号，需要从右向左打印
        if (x > start) {
            // 横向从右到左打印一行
            for(let i = x - 1; i >= start; i--) {
                result.push(arr[y][i])
            }
            // 如果结束行号大于开始行号加1，需要从下向上打印
            if (y > start + 1) {
                for(let i = y - 1; i > start; i--) {
                    result.push(arr[i][start])
                }
            }
        }
    }
}
```

### 对角线遍历

> 此部分代码在 PrintDiagonal.ts 中

给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素。

```typescript
/**
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素
 * @param {number[][]} matrix
 * @return {number[]}
 */
function PrintDiagonal (matrix: number[][]): number[] {
    const result = []
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return result
    }
    // 获取行数
    let rows = matrix.length
    // 获取列数
    let columns = matrix[0].length
    
    for(let i = 0; i < rows + columns - 1; i++) {
        // i 为 0或者偶数时，从下向上遍历
        if (i === 0 || i % 2 === 0) {
            // 查看横坐标是否超过主对角线的情况,对角线上为 x + y = i
            let x = i < rows ? i : rows - 1
            let y = i - x
            while(x >= 0 && y < columns) {
                result.push(matrix[x][y])
                x--
                y++
            }
        } else {
            // 为奇数时向下遍历
            let y = i < columns ? i : columns - 1
            let x = i - y
            while(y >= 0 && x < rows) {
                result.push(matrix[x][y])
                x++
                y--
            }
        }
    }
    return result
}
```

### 岛屿的最大面积

> 此部分代码在 MaxAreaOfIsland.ts 中

给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)

此题要用到**DFS深度遍历**。

```typescript
/**
 * 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。
 * 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
 * @param {number[][]} grid 
 * @return {number}
 */
function maxAreaOfIsland (grid: number[][]): number {
    // 上下延伸
    const dx = [1,-1,0,0];
    // 左右延伸
    const dy = [0,0,-1,1];
    // 存储最大值
    let maxValue = 0;
    // 获取边界长度
    const rows = grid.length;
    const columns = grid[0].length;
    // 深度遍历算法,获取岛屿面积
    const dfs = (grid: number[][], x: number, y: number) => {
        // 判断点是否合法
        if (x < 0 || x >= rows || y < 0 || y >= columns || grid[x][y] === 0) {
            return 0;
        }
        // 统计面积
        let area = 1;
        // 将原值清空，防止重复计算
        grid[x][y] = 0;
        // 遍历上下左右查看是否还有岛屿
        for(let i = 0; i < dx.length; i++) {
            area = area + dfs(grid, x + dx[i], y + dy[i]);
        }
        return area;
    }
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if (grid[i][j] === 1) {
                maxValue = Math.max(maxValue, dfs(grid, i, j));
            }
        }
    }
    return maxValue;
}
```

### 朋友圈

> 此部分代码在 FindCircleNum.ts 中

班上有 N 名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。如果已知 A 是 B 的朋友，B 是 C 的朋友，那么我们可以认为 A 也是 C 的朋友。所谓的朋友圈，是指所有朋友的集合。

给定一个 N * N 的矩阵 M，表示班级中学生之间的朋友关系。如果M[i][j] = 1，表示已知第 i 个和 j 个学生互为朋友关系，否则为不知道。你必须输出所有学生中的已知的朋友圈总数。

此题使用DFS来解决，每次遍历一位同学时将他所有涉及到的同学添加到这个朋友圈，并另外涉及一个数组来标识该同学是否被添加到朋友圈过，之后只遍历不在同一朋友圈的同学即可。每完成一个同学的DFS后朋友圈数量就加一。

```typescript
/**
 * 班上有 N 名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。如果已知 A 是 B 的朋友，B 是 C 的朋友，那么我们可以认为 A 也是 C 的朋友。所谓的朋友圈，是指所有朋友的集合。
 * 给定一个 N * N 的矩阵 M，表示班级中学生之间的朋友关系。如果M[i][j] = 1，表示已知第 i 个和 j 个学生互为朋友关系，否则为不知道。你必须输出所有学生中的已知的朋友圈总数。
 * @param {numer[][]} M 
 * @return {number}
 */
function findCircleNum (M: number[][]): number {
    var count = 0
    var visited = []
    for (var i = 0;i < M.length;i++) {
        if (visited[i] == undefined) {
            dfs(M, visited, i)
            count++
        }
    }
    return count
};

/**
 * 深度遍历，将一个同学的所有朋友圈遍历为已访问
 * @param {number[][]} M 
 * @param {boolean[]} visited 
 * @param {number} i 
 */
function dfs (M:number[][], visited: boolean[] , i: number): void {
    for (var j = 0;j < M.length;j++) {
        if (M[i][j] == 1 && visited[j] == undefined) {
            visited[j] = true
            dfs(M, visited, j)
        }
    }
}
```

### 合并区间

> 此部分代码在 Merge.ts 中

给出一个区间的集合，请合并所有重叠的区间。

我们可以每次都循环遍历一个区间的下一个区间的起始是否在该区间内，如果在那么就合并这两个数组，一直向后遍历到没有可合并的，此时向结果中推入此次遍历合并后的新区间，之后继续向后遍历即可。

```typescript
/**
 * 给出一个区间的集合，合并所有重叠的区间。
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge (intervals: number[][]): number[][] {
    let result = [];
    let len = intervals.length;
    if (len === 0) {
        return [];
    }
    // 按照区间开始位置排序
    intervals.sort((a,b) => a[0] - b[0]);
    let i = 0;
    // 遍历区间
    while (i < len) {
        let currentLeft = intervals[i][0];
        let currentRight = intervals[i][1];
        // 向右遍历 只要有起始位置小于前一个结束位置的，证明有重合
        while(i < len -1 && intervals[i+1][0] <= currentRight) {
            i++;
            currentRight = Math.max(currentRight, intervals[i][1]);
        }
        // 向结果中推入一个与后面不会再重合的区间
        result.push([currentLeft, currentRight]);
        i++;
    }
    return result;
}
```



## 数据统计

> 此类问题主要考察使用高效算法对数组进行统计或者计算。

### 数组中出现的超过数组长度一半的数字

> 此部分代码在 MoreThanHalf.ts中

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

 如果找到了就输出这个数字，如果不存在输出0。

```typescript
/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 如果找到了就输出这个数字，如果不存在输出0
 * @param {number[]} numbers 
 * @return {number}
 */
function MoreThanHalfNum (numbers: number[]):number {
    if (!numbers && numbers.length < 1 ) {
        return 0
    } else {
        let length = numbers.length
        // 开辟额外空间存储出现次数
        let count = {}
        for(let i = 0; i < length; i++) {
            // 用属性值存放出现次数，如果已存在此属性说明重复，累计次数
            if (count['the' + numbers[i]]) {
                count['the' + numbers[i]]++
            } else {
                count['the' + numbers[i]] = 1
            }
            // 如果超过半数 则返回
            if(count['the' + numbers[i]] > length / 2) {
                return numbers[i]
            }
        }
        // 不存在 就返回0
        return 0
    }
}
```

另一种解法

```typescript
/**
 * 优化空间利用率，不额外开辟空间，时间复杂度依然为O(n)
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 如果找到了就输出这个数字，如果不存在输出0。
 * @param {number[]} numbers 
 * @return {number}
 */
function MoreThanHalfNum2(numbers: number[]): number {
    if (!numbers && numbers.length < 1 ) {
        return 0;
    } else {
        // 获取数组长度
        let len = numbers.length;
        // 从第一个开始统计
        let result = numbers[0];
        // 统计出现次数
        let times = 1;
        // 从第二个开始进行循环
        for(let i = 1; i < len; i++) {
            // 如果出现次数归零，则重新开始统计当前格的出现此处
            if (times === 0) {
                result = numbers[i]
                times = 1
            } 
            // 如果相同 出现次数加1
            else if (numbers[i] === result) {
                times++
            }
            // 如果不同 出现此处减1
            else {
                times--
            }
        }

        // 我们要找的数字出现次数比其他出现次数总和还要多
        // 因此我们要找的数字是最后将这个次数设置为1的对应数字。
        return result;

    }
}
```

### 连续子数组的最大和

> 此部分代码在 FindGreatestSum.ts 中

输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值，若不存在则返回0

```typescript
/**
 * 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。
 * 求所有子数组的和的最大值，若不存在，返回0
 * 
 * @param {number[]} array 
 * @return {number}
 */
function FindGreatestSum (array: number[]):number {
    if (!array || array.length < 1) {
        return 0
    } else {
        // 存储子数组总和
        let sum = array[0]
        // 存储子数组数组最大值
        let max = array[0]
        for(let i = 1; i < array.length; i++) {
            // sum 小于0，则当前sum值对后面累加无贡献，即开启新的子数组求和
            if (sum < 0) {
                sum = array[i]
            } else {
                sum = sum + array[i]
            }
            // 取最大值
            max = sum > max ? sum : max
        }
        return max
    }
}
```

## 判断是否为扑克牌顺子

> 此部分代码在 IsContinuous.ts 中

判断传入的一组扑克牌是否为一个顺子,2-10为数字本身，A为1，J为11，Q为12，K为13，大小王可为任意数字。

```typescript
/**
 * 判断传入的一组扑克牌是否为一个顺子,2-10为数字本身，A为1，J为11，Q为12，K为13，大小王可为任意数字。
 * @param {number[]} numbers 
 * @return {boolean}
 */
function IsContinuous (numbers: number[]): boolean {
    // 判断边界条件
    if (numbers === null || numbers.length < 1) {
        return false;
    }
    // 首先对numbers进行排序
    numbers = numbers.sort((a,b) => (a-b));
    let len = numbers.length;
    // 内部含有大小王的个数 大小王用0表示
    let numberOfZero = 0;
    // 内部间隔大小 2,4 表示1个间隔 2,5表示两个间隔
    let numberOfGap = 0;
    // 统计这组牌中大小王的个数
    for(let i = 0; i < len && numbers[i] === 0; i++) {
        numberOfZero++;
    }
    // 统计间隔大小
    let small = numberOfZero;
    let big = small + 1;
    while(big < len) {
        // 如果有对子 那么就不会为顺子
        if (numbers[small] === numbers[big]) {
            return false;
        }
        numberOfGap += numbers[big] - numbers[small] - 1;
        small = big;
        big++;
    }
    // 如果间隔数大于大小王的个数 那么就不为顺子
    return numberOfGap > numberOfZero ? false : true
}
```

## 寻找两个有序数组的中位数

> 此部分代码在 findMedianSortedArrays.ts

给定两个大小为 m 和 n 的有序数组 `nums1` 和 `nums2`。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

我们此时求中位数，这里对于两个有序数组也是一样的，假设两个有序数组的长度分别为m和n，由于两个数组长度之和 m+n 的奇偶不确定，因此需要分情况来讨论，对于奇数的情况，直接找到最中间的数即可，偶数的话需要求最中间两个数的平均值。为了简化代码，不分情况讨论，我们使用一个小trick，我们分别找第 (m+n+1) / 2 个，和 (m+n+2) / 2 个，然后求其平均值即可，这对奇偶数均适用。加入 m+n 为奇数的话，那么其实 (m+n+1) / 2 和 (m+n+2) / 2 的值相等，相当于两个相同的数字相加再除以2，还是其本身。

之后我们要实现的其实就是在一个分开的有序数组中找到第N个数字，之后对N使用二分，每次都在两个数组中找到第 N/2 数，并且处理一些边界问题，最后得到两个数求得平均值即可。

```typescript
/**
 * 在两个有序数组中寻找中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1: number[], nums2: number[]) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    // 奇偶不确定 我们使用分别找到 (len1 + len2 + 1) / 2 个 和 (len1 + len2 + 2) / 2 个的情况，获得其平均数
    // 如果是 奇数 则两个数相等， 如果为偶数则为两个数 [整数情况]
    let left = Math.floor((len1 + len2 + 1) / 2)
    let right = Math.floor((len1 + len2 + 2) / 2)
    return (findHelper(nums1, 0, nums2, 0, left) + findHelper(nums1, 0, nums2, 0, right)) / 2.0;
};

/**
 * 从两个有序数组的指定位置开始寻找目标数
 * @param {number[]} nums1
 * @param {number} i
 * @param {number[]} nums2
 * @param {number} j
 * @param {number} target
 * @return {number}
 */
var findHelper = function (nums1: number[], i: number, nums2: number[], j: number, target: number) {
    // 超过了数组1的长度 则直接从数组2中返回
    if (i >= nums1.length) return nums2[j + target - 1];
    if (j >= nums2.length) return nums1[i + target - 1];
    // 如果所找为1 则只是求数组2第一项和数组1第一项哪个小
    if (target === 1) {
        return nums1[i] <= nums2[j] ? nums1[i] : nums2[j];
    }
    // 使用二分法 对 target 二分 找到每个数组中的  target / 2 个数字
    // 求两个数组对应的中位数 查看对应索引是否已经超过数组长度
    let mid1 = (i + target / 2 - 1 < nums1.length) ? nums1[i + Math.floor(target / 2 ) - 1] : Number.MAX_VALUE
    let mid2 = (j + target / 2 - 1 < nums2.length) ? nums2[j + Math.floor(target / 2 ) - 1] : Number.MAX_VALUE
    if (mid1 < mid2) {
        return findHelper(nums1, i +  Math.floor(target / 2), nums2, j,  target - Math.floor(target/2))
    } else {
        return findHelper(nums1, i, nums2, j +  Math.floor(target / 2),  target - Math.floor(target/2))
    }
}
```

