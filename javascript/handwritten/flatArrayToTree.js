const flatArr = [
    { id: '001', parentId: '0', name: '节点1' },
    { id: '0011', parentId: '001', name: '节点1-1' },
  ]
const res = []
//function flatArrToTree() {
//}
const recursion = (flatArr, res, id) => {
    flatArr.forEach(it => {
        if (it.parentId === id) {
            const child = {
                ...it,
                children: []
            }
            recursion(flatArr, child.children, it['id'])
            res.push(child)
        }
    })
    return res
}
console.time()
console.log(recursion(flatArr, res, '0'))
console.timeEnd()