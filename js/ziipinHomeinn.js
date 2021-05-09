const base = require('../base')

// 首旅如家
const pName = 'com.ziipin.homeinn'

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

  // 点击“权益”
  id('main_tab_property').findOne(5000).click()
  // 点击“签到”
  className("android.widget.TextView").text("签到").findOne(4000).click()
  // 获取“…连续签到…”文本控件
  const identificationTxtBounds = className("android.view.View").text("本月连续签到，将能获得").findOne(3000).bounds()
  // 99、104 分别为测试机型下文本与按钮的左边界的 X 坐标；508、819 分别为测试机型下文本与按钮的上边界的 Y 坐标
  click(identificationTxtBounds.left * 99 / 104 + 50, identificationTxtBounds.top * 508 / 819 + 50)
}

module.exports = {
  sign: sign
}
