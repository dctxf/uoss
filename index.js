/*
 * @Author: dctxf
 * @Date:   2017-05-15 16:17:24
 * @Last Modified by:   dctxf
 * @Last Modified time: 2017-05-17 11:42:00
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
UOSS.prototype.list = function (options, callback) {
  const client = this.client;
  options = options || {};
  co(function* () {
    const list = yield client.list(options);
    callback.call(this, list);
  }).catch(function (err) {
    console.log(err);
  })
}
UOSS.prototype.upload = function () {

}
module.exports = UOSS;

