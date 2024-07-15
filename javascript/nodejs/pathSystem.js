const path = require('path');
const process = require('process');

console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'), '获取文件名');
console.log(path.dirname('/foo/bar/baz/asdf/quux.html'), '获取文件所在目录');
console.log(path.extname('/foo/bar/baz/asdf/quux.html'), '获取文件扩展名');
console.log(path.isAbsolute('/foo/bar/baz/asdf/quux.html'), '判断是否是绝对路径');
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '../'), '拼接路径');
console.log(path.normalize('/foo/bar//baz/asdf/quux/../../foo/bar'), '解析..和.分割，正常化路径');
console.log(path.resolve('/foo/bar', './baz'), '在当前工作目录基础上拼接');
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'), '返回从第一个路径到第二个路径的相对路径');
console.log(path.parse('/foo/bar/baz/asdf/quux.html'), '返回一个对象，包含路径的各个部分');
console.log(process.cwd(), '当前工作目录');
console.log(path.sep, '当前系统路径分隔符');
console.log('foo\\bar\\baz'.split(path.sep), 'window路径分隔符');
console.log(path.win32, 'window路径');
console.log(path.posix, 'linux路径');
console.log(process.env.dirname, '环境变量path');