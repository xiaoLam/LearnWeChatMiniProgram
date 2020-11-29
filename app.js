// 把调用App() 方法称为注册一个小程序示例
App({
  // 小程序初始化完毕后调用
  onLaunch: function (options) {
    // 可以在这里获取用户的信息
    // 实际上onLaunch生命周期函数中也会想onShow有一个参数options
    console.log(options);
  },

  // 小程序显示的时候调用
  onShow: function (options) {
    // 可以在这里判断用户进入小程序的常见
    // options参数中就包含了scene
    console.log(options);
    switch (options.scene) {
      case 1001:
        break;
      case 1005:
        break
    }

    // 可以在这里获取用户的信息
    // 通过 wx.getUserInfo() 接口
    wx.getUserInfo({
      success : (res) => {
        console.log(res);
      }
    })
    // 但是注意wx.getUserInfo() 这个接口有可能在以后被弃用
  },

  // 定义一些共享数据
  gobalData : {
    name : "xiaoLam",
    age : 18
  }
})
