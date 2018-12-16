// 例：输入 0, 返回星期日 
export function makeMap (arr = [], flag = false) {
    const map = Object.create(null)
    arr.forEach((item, index) => {
        !flag ? map[index] = item : map[item] = index
    })
    return key => map[key]
}