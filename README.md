# uoss
[![npm](https://img.shields.io/npm/v/npm.svg)](https://github.com/dctxf/uoss)
[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/dctxf/uoss)
[![GitHub stars](https://img.shields.io/github/stars/badges/shields.svg?style=social&label=Star&style=plastic)](https://github.com/dctxf/uoss)

上传文件到阿里云oss

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

## 关注我

[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/dctxf)
[![GitHub stars](https://img.shields.io/github/stars/badges/shields.svg?style=social&label=Star)](https://github.com/dctxf/uoss)