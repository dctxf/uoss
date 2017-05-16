/*
 * @Author: dctxf
 * @Date:   2017-05-15 16:17:24
 * @Last Modified by:   dctxf
 * @Last Modified time: 2017-05-16 16:58:35
 */

'use strict';
const co = require('co');
const OSS = require('ali-oss');
const UOSS = function (config) {
  this.client = new OSS({
    endpoint: config.endpoint,
    accessKeyId: config.accessKeyId,
    accessKeySecret: config.accessKeySecret,
    bucket: config.bucket
  });
};
UOSS.prototype.upload = function () {
  const client = this.client;
  co(function* () {
    const result = yield client.list({
      'max-keys': 5
    });
    console.log(result);
  }).catch(function (err) {
    console.log(err);
  });
}
module.exports = UOSS;

