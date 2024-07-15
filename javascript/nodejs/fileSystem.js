// const fs = require('fs')
// 判断文件或者文件夹
// fs.stat('test.js', (err, stats) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(stats)
//   console.log(stats.isFile()) // true
//   console.log(stats.isDirectory()) // false
//   console.log(stats.isSymbolicLink()) // false
// })

// 创建目录
// fs.mkdir('logs', err => {
//   if (err) {
//     console.error(err)
//     return
//   } else {
//     console.log('创建目录成功')
//   }
// })

// 删除目录
// fs.rmdir('logs', err => {
//   if (err) {
//     console.error(err)
//     return
//   } else {
//     console.log('删除目录成功')
//   }
// })

// 创建写入文件
// fs.writeFile('logs/hello.log', 'Hello World!\n', err => {
//   if (err) {
//     console.error(err)
//     return
//   } else {
//     console.log('写入文件成功')
//   }
// })

// 追加文件
// fs.appendFile('logs/hello.log', 'Hello again again again!\n', err => {
//   if (err) {
//     console.error(err)
//     return
//   } else {
//     console.log('追加文件成功')
//   }
// })

// 读取文件
// fs.readFile('logs/hello.log', 'utf-8', (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   } else {
//     console.log(data)
//   }
// })

// 删除文件
// fs.unlink('logs/hello.log', err => {
//   if (err) {
//     console.error(err)
//     return
//   } else {
//     console.log('删除文件成功')
//   }
// })

// 读取目录
// fs.readdir('logs', (err, files) => {
//   if (err) {
//     console.error(err)
//     return
//   } else {
//     console.log(files)
//   }
// })

// 重命名
// fs.rename('logs/hello.log', 'logs/hello2.log', err => {
//   if (err) {
//     console.error(err)
//     return
//   } else {
//     console.log('重命名成功')
//   }
// })

// 判断服务器上面有没有upload目录，如果没有创建upload目录，有不做操作
// const path = './upload'
// fs.stat(path, (err, stats) => {
//   if (err) {
//     mkdir(path)
//     return
//   }
//   if (stats.isDirectory()) {
//     console.log('upload目录已存在')
//   } else {
//     fs.unlink(path, err => {
//       if (!err) {
//         mkdir(path)
//       }
//     })
//   }
// })

// function mkdir(dir) {
//   fs.mkdir(dir, err => {
//       if(err) {
//           console.log(err);
//           return
//       }
//   })
// }

// 将wwwroot文件下的所以子目录放到一个数组中并打印
// const fs = require('fs')
// const path = './wwwroot'
// const dirs = fs.readdirSync(path).filter(file => fs.statSync(path + '/' + file).isDirectory())
// console.log(dirs)

// 从文件流中读取数据
// const fs = require('fs')
// const path = './logs/hello.log'
// // 如果没有logs/hello.log文件，创建
// if (!fs.existsSync(path)) {
//   fs.writeFileSync(path, 'Hello World!\n')
// }
// fs.createReadStream('logs/hello.log').on('data', (chunk, err) => {
//   console.log(chunk.toString())
// })

// 写入utf-8编码的数据
// const fs = require('fs')
// const data = '这是从数据库中获取的数据'
// const writerStream = fs.createWriteStream('output.txt')
// writerStream.write(data, 'UTF8')
// // 标记文件末尾
// writerStream.end()
// writerStream.on('finish', () => {
//   console.log('写入完成')
// })
// writerStream.on('error', (err) => {
//   console.log(err.stack)

// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）
// function alternateLights() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('红灯亮')
//       resolve()
//     }, 3000)
//   }).then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('黄灯亮')
//         resolve()
//       }, 2000)
//     })
//   }).then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('绿灯亮')
//         resolve()
//       }, 1000)
//     })
//   }).finally(() => {
//     alternateLights()
//   })
// }

// alternateLights()

// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替随机重复亮灯？（用Promise实现）
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

// async function randomLightUp() {
//   const colors = ['red', 'yellow', 'green']
//   const time = [3000, 2000, 1000]
  
//   while(true) {
//     const randomIndex = Math.floor(Math.random() * colors.length)
//     const duration = time[randomIndex]
//     console.log(`${colors[randomIndex]}亮起`)
//     await delay(duration)
//     console.log(`${colors[randomIndex]}熄灭`)
//   }
// }


// randomLightUp()


// 异步版本
// const fs = require('fs').promises
// async function listAllFilesAsync(dirpath) {
//   const res = []
//   const names = await fs.readdir(dirpath)
//   for (let name of names) {
//     // 获取文件的状态
//     const stat = await fs.stat(dirpath + '/' + name)
//     // 如果是文件，则添加到结果中
//     if (stat.isFile()) {
//       res.push(name)
//     // 如果是目录，则递归调用
//     } else if (stat.isDirectory()) {
//       res.push(...await listAllFilesAsync(dirpath + '/' + name))
//     }
//   }
//   return res
// }
// async function calcTime() {
//   const start = Date.now()
//   await listAllFilesAsync('./node_modules').then(res => console.table(res))
//   console.log(Date.now() - start)
// }
// calcTime() // 55ms

// 同步版本
// const fs = require('fs')
// function listAllFilesSync(dirpath) {
//   const res = []
//   const names = fs.readdirSync(dirpath)
//   for (let name of names) {
//     const stat = fs.statSync(dirpath + '/' + name)
//     if (stat.isFile()) {
//       res.push(name)
//     } else if (stat.isDirectory()) {
//       res.push(...listAllFilesSync(dirpath + '/' + name))
//     }
//   }
//   return res
// }
// console.time('sync')
// console.table(listAllFilesSync('./node_modules'))
// console.timeEnd('sync') // 41.144ms

// 回调版本
const fs = require('fs')
function listAllFilesCallback(dirpath, callback) {
  const res = []
  fs.readdir(dirpath, (err, names) => {
    if (err) return callback(err)
    let count = names.length
    if (count === 0) return callback(null, res)
    for (let name of names) {
      fs.stat(dirpath + '/' + name, (err, stat) => {
        if (err) return callback(err)
        if (stat.isFile()) {
          res.push(name)
          if (--count === 0) callback(null, res)
        } else if (stat.isDirectory()) {
          listAllFilesCallback(dirpath + '/' + name, (err, res2) => {
            if (err) return callback(err)
            res.push(...res2)
            if (--count === 0) callback(null, res)
          })
        }
      })
    }
  })
}
async function calcTime() {
  const start = Date.now()
  listAllFilesCallback('./node_modules', (err, res) => {
    if (err) throw err
    console.table(res)
    console.log(Date.now() - start)
  })
}
calcTime() // 28ms

// promiseAll并行版本
// const fsp = require('fs').promises
// async function listAllFilesPromises(dirpath) {
//   return fsp.readdir(dirpath).then((names) => {
//     const res = []
//     const targetPaths = names.map(name => dirpath + '/' + name) // 文件映射拼接得到完整路径
//     // 完整路径得到的文件状态调用的promise，传给all等待所有的结果
//     return Promise.all(targetPaths.map(path => fsp.stat(path))).then(stats => {
//       const dirpaths = []
//       for (let i = 0; i < stats.length; i++) {
//         let stat = stats[i]
//         let targetPath = targetPaths[i]
//         if (stat.isFile()) {
//           res.push(targetPath)
//         } else {
//           dirpaths.push(targetPath)
//         }
//       }

//       return Promise.all(dirpaths.map(listAllFilesPromises)).then(subResults => {
//         for (let subResult of subResults) {
//           for (let grandson of subResult) {
//             let r = grandson.split('/')
//             res.push(r[r.length - 1])
//           }
//         }
//         return res
//       })
//     })
//   })
// }
// async function calcTime() {
//   console.time('promiseAll')
//   await listAllFilesPromises('./node_modules').then(res => console.log(res))
//   console.timeEnd('promiseAll')
// }
// calcTime() // 21ms
