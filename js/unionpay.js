const base = require('../base')

// 云闪付
const pName = 'com.unionpay'

/**
 * 打开
 */
let open = () => {
  // 启动
  base.app.relaunch(pName)
  base.sys.allowToOpen()
  // 等待应用打开
  waitForPackage(pName)
}

let sign = () => {
  open();

  // 点击“签到”
  id("frog_float_notgif").findOne(3000).click()
  // 点击“立即签到”
  className("android.widget.Button").text("立即签到").findOne(5000).click()
}

module.exports = {
  packageName: pName,
  sign: sign
}
