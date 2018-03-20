/*
 * @Author: dctxf
 * @Date:   2017-05-15 16:17:24
 * @Last Modified by: dctxf
 * @Last Modified time: 2018-02-07 17:57:26
 */

'use strict'
const OSS = require('ali-oss').Wrapper
const co = require('co')
const fs = require('fs')
const path = require('path')
const getFiles = (root, baseDir) => {
  const localDir = path.join(root, baseDir)
  const fileList = {}
  const scanDir = dirPath => {
    const files = fs.readdirSync(dirPath)
    files.forEach(filename => {
      let newPath = path.join(dirPath, filename)
      const stats = fs.statSync(newPath)
      if (stats.isFile()) {
        fileList[newPath.replace(localDir, '')] = newPath
      }
      if (stats.isDirectory()) {
        scanDir(newPath)
      }
    })
  }
  scanDir(localDir)
  return fileList
}
const Uoss = function(config) {
  this.client = new OSS({
    endpoint: config.endpoint,
    accessKeyId: config.accessKeyId,
    accessKeySecret: config.accessKeySecret,
    bucket: config.bucket
  })
  this.root = config.root
  this.localDir = config.localDir
  this.remoteDir = config.remoteDir
  this.cdnPath = config.cdnPath
}
Uoss.prototype.list = function(options, callback) {
  const client = this.client
  options = options || {}
  co(function*() {
    const list = yield client.list(options)
    callback.call(this, list)
  }).catch(function(err) {
    console.log(err)
  })
}
Uoss.prototype.upload = (files, remoteDir) => {
  for (let filename in files) {
    let headers = {}
    if (path.extname(filename) === '.html') {
      headers = {
        'Cache-Control': 'no-store'
        // 'Content-Encoding': 'gzip'
      }
    }
    co(function*() {
      let res = yield client.multipartUpload(
        path.join(remoteDir, filename),
        files[filename],
        {
          headers,
          progress: function*(p) {
            // console.log(filename, p)
          }
        }
      )
      let remotePath = 'https://cdn.17doubao.com' + res.name
      console.log(remotePath)
    }).catch(err => {
      console.log(err)
    })
  }
}
module.exports = Uoss
