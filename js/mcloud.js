const base = require('../base')

// 和彩云网盘
const pName = 'com.chinamobile.mcloud'

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
  id('actionbar_sign').findOne(5000).click()

  // 如果出现“发现新版本”则关闭
  const bnCancel = id("bn_cancel").findOne(10000)
  if (bnCancel) {
    bnCancel.click()
  }

  // 获取“…及时领取积分…”文本控件
  const identificationTxtBounds = className("android.view.View").text("请及时领取积分，未领取的积分每周一将清零").findOne(7000).bounds()
  click(identificationTxtBounds.centerX(), identificationTxtBounds.centerY() - 50)
  // 点击“好的”
  className("android.view.View").text("好的").findOne(5000).click()
  // 点击“抽奖专区”
  className("android.view.View").text('抽奖专区').findOne(2000).click()
  // 获取“兑换专区”控件
  const exchangeZoneTxtBounds = className("android.widget.TextView").text('兑换专区').findOne(3000).bounds()
  // 点击“点我抽奖”
  click(exchangeZoneTxtBounds.centerX(), exchangeZoneTxtBounds.centerY() * 1709 / 1162 + 100)
  console.log(exchangeZoneTxtBounds.centerX())
  console.log(exchangeZoneTxtBounds.centerY() * 1709 / 1162 + 100)
}

module.exports = {
  sign: sign
}
