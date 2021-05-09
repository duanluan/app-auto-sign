const base = require('../base')

// 天天基金
const pName = 'com.eastmoney.android.fund'

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

  // 点击“我的”
  id("f_id_tab_bottom_5").findOne(3000).click()
  // 点击“签到赚积分”
  className("android.view.View").desc("签到赚积分").findOne(3000).parent().click()
  // 点击“签到领积分”
  className("android.view.View").desc("签到领积分").findOne(3000).parent().click()
}

module.exports = {
  sign: sign
}
