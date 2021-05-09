// const projectName = 'test/',
const projectName = '',
  // 此处的变量名不能和其他 JS 中的相同，还不知道为什么
  $ = require(projectName + 'base'),
  lenovoClub = require(projectName + 'js/lenovoClub'),
  htinns = require(projectName + 'js/htinns'),
  ziipinHomeinn = require(projectName + 'js/ziipinHomeinn'),
  mcloud = require(projectName + 'js/mcloud'),
  unionpay = require(projectName + 'js/unionpay'),
  eastmoneyFund = require(projectName + 'js/eastmoneyFund')

$.sys.checkOpenAutoService()

// // 联想智选签到
// lenovoClub.sign()
// sleep(1000)
// // 华住会签到
// htinns.sign()
// sleep(1000)
// // 首旅如家签到
// ziipinHomeinn.sign()
// sleep(1000)
// // 和彩云网盘签到
// mcloud.sign()
// sleep(1000)
// // 云闪付签到
// unionpay.sign()
// sleep(1000)
// // 天天基金签到
// eastmoneyFund.sign()
