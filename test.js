/*
 * @Author: dctxf
 * @Date:   2017-12-27 15:39:40
 * @Last Modified by:   dctxf
 * @Last Modified time: 2017-12-27 15:42:20
 */
import Uoss from './index'
const uoss = new Uoss({
  endpoint: config.endpoint,
  accessKeyId: config.accessKeyId,
  accessKeySecret: config.accessKeySecret,
  bucket: config.bucket
})