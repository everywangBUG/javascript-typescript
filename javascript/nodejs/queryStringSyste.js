const queryString = require('node:querystring');
console.log(queryString.parse('?foo=bar&abc=xyz&baz=123'), '解析');
console.log(queryString.stringify({ foo: 'bar', abc: 'xyz', baz: 123 }), '序列化');
console.log(queryString.escape('你好世界'), '转义');
console.log(queryString.unescape('%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C'), '反转义');