const base = require('../base')

// 联想智选
const pName = 'com.lenovo.club.app'

/**
 * 打开
 */
let open = () => {
  // 启动
  base.app.relaunch(pName)
  base.sys.allowToOpen()
  // 等待应用打开
  waitForPackage(pName)
  
  // 出现新版本提示时点击“不再提示”
  const closeUpdateTip = id('btn_left').findOne(4000)
  if (closeUpdateTip) {
    closeUpdateTip.click()
  }
}

let sign = () => {
  open();

  // 点击“我的”
  id('tab_title').className('android.widget.TextView').text('我的').findOne().parent().click()
  // 点击“签到”
  id("personal_toolbar_sign_tv").findOne().click()
}

module.exports = {
  sign: sign
}
