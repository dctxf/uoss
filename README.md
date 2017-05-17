# uoss
[![npm](https://img.shields.io/badge/uoss-1.0.1-green.svg)](https://github.com/dctxf/uoss)
[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/dctxf/uoss)

上传文件到阿里云oss

MD！突然感觉写这个没什么意义！

## 安装

```bash
npm i uoss -save
```

## 使用

```js
const UOSS = require('uoss');
const uo = new UOSS({
	endpoint: '阿里云oss endpoint',
    accessKeyId: '阿里云oss accessKeyId',
    accessKeySecret: '阿里云oss accessKeySecret',
    bucket: '阿里云oss bucket'
});
```

## Bugs

[issues](https://github.com/dctxf/uoss/issues)

