/*
 * @Author: dctxf
 * @Date:   2017-05-15 16:17:24
 * @Last Modified by:   dctxf
 * @Last Modified time: 2017-05-16 15:11:25
 */

'use strict';
const co = require('co');
const OSS = require('ali-oss');
const UOSS = function (config) {
  this.endpoint = config.END_POINT;
  this.accessKeyId = config.ACCESS_KEY_ID;
  this.accessKeySecret = config.ACCESS_KEY_SECRET;
  this.bucket = config.BUCKET;
  this.path = config.path;
};
UOSS.prototype.upload = function () {
  const client = new OSS({
    this.endpoint = config.END_POINT;
    this.accessKeyId = config.ACCESS_KEY_ID;
    this.accessKeySecret = config.ACCESS_KEY_SECRET;
    this.bucket = config.BUCKET;
    this.path = config.path;
  });
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

