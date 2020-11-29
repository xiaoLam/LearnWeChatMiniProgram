App({
  // 这里都是一些生命周期函数

  // onLaunch会在小程序初始化完成后触发
  // 我们发现在我们点击右上角的关闭按钮, 再次进入小程序的时候
  // 并没有调用onLaunch, 这是因为小程序会再后台存活两个小时, 如果在两个小时之内再次进入小程序,小程序是不会再次初始化的, 所以是不会调用onLaunch的, 只会调用onShow
  onLaunch: function () {
    console.log("小程序初始化完成, onLaunch")

    // 一般在这个函数里面获取用户的信息等操作
    // 我们发现, 调试器先打印了小程序初始化完成, 再打印页面显示出来了, 最后才打印getUserInfo里面的数据, 这是因为getUserInfo是异步操作
    wx.getUserInfo({
      success : (res) => {
        console.log(res);
      }
    })

    // 手动抛出错误测试onError生命周期函数
    setTimeout(() => {
      throw new Error
    },3000)
  },

  // 这个生命周期函数会在小程序界面显示的时候调用
  onShow: function (options) {
    console.log("页面显示出来了, onShow");
  },

  // 这个生命周期函数会在界面隐藏的时候调用
  onHide: function () {
    console.log("页面被隐藏了, onHide");
  },

  // 这个生命周期函数会在发生错误的时候调用
  onError: function (msg) {
    console.log("出错了, onError");
  }
})
