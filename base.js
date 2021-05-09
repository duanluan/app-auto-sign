const base = {
  /**
   * 系统相关
   */
  sys: {
    checkOpenAutoService: () => {
      if (!auto.service) {
        alert("请先启用无障碍服务")
        engines.stopAll()
      }
    },
    /**
     * 提示是否允许打开应用时允许
     * @param {Number} timeout 提示出现的延迟
     */
    allowToOpen: (timeout) => {
      if (!timeout || typeof (timeout) != 'number') {
        timeout = 500
      }
      // 出现尝试打开提示时（MIUI）
      const allowToOpenBtn = id('android:id/button1').findOne(timeout)
      if (allowToOpenBtn) {
        // 点击“允许”
        allowToOpenBtn.click()
      }
    }
  },
  app: {
    /**
     * 获取应用包名
     * @param {*} packageNameOrAppName 应用包名或应用名
     */
    getPackageName: (packageNameOrAppName) => {
      if (!packageNameOrAppName) {
        throw new Error('packageNameOrAppName 不允许为空');
      }
      let packageName;
      // 根据应用名获取包名
      const packageName1 = app.getPackageName(packageNameOrAppName)
      // 如果包名不为空则说明当前参数就是包名
      if (packageName1) {
        packageName = packageName1
      } else {
        packageName = packageNameOrAppName
      }
      return packageName
    },
    /**
     * 结束运行 APP
     * @param {String} packageNameOrAppName 应用包名或应用名
     * @param {Number} stopBtnTimeout 停止按钮的延迟
     * @param {Number} forceStopBtnTimeout 强行停止按钮的延迟
     */
    stop: (packageNameOrAppName, stopBtnTimeout, forceStopBtnTimeout) => {
      if (!stopBtnTimeout || typeof (stopBtnTimeout) != 'number') {
        stopBtnTimeout = 200
      }
      if (!forceStopBtnTimeout || typeof (forceStopBtnTimeout) != 'number') {
        forceStopBtnTimeout = 100
      }

      // 打开应用设置页
      app.openAppSetting(base.app.getPackageName(packageNameOrAppName))
      // 正则查找控件（有待补充）：MIUI 为“结束运行”
      const stopBtn = textMatches(/.*(结束运行).*/).findOne(stopBtnTimeout)
      if (stopBtn.clickable === 'true') {
        stopBtn.click()
      } else {
        stopBtn.parent().click()
      }

      // 出现是否强行停止提示时（MIUI）
      const forceStopBtn = id("button1").findOne(forceStopBtnTimeout)
      if (forceStopBtn) {
        forceStopBtn.click()
      }

      sleep(1000)
      back()
    },
    /**
     * 重启应用
     * @param {String} packageNameOrAppName 
     */
    relaunch: (packageNameOrAppName) => {
      const packageName = base.app.getPackageName(packageNameOrAppName)
      base.app.stop(packageName)
      app.launch(packageName)
    },
  }
}

module.exports = base
