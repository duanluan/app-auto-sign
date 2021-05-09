const base = require('../base')

// 华住会
const pName = 'com.htinns'

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

  // 点击“会员”
  className("android.widget.TextView").text("会员").findOne(6000).parent().click()
  // 点击“签到”
  className("android.widget.TextView").text("签到").findOne(2000).parent().click()
  // 当签到页面加载成功时
  if (className("android.view.View").text("会员礼遇").findOne(5000)) {
    // 点击“立即签到领”
    className("android.view.View").text("立即签到领").findOne().click()
  }
}

module.exports = {
  sign: sign
}
