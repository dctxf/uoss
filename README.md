# uoss

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