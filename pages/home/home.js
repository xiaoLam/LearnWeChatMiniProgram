// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: ""
  },
  handlePushPage() {
    // 通过接口来进行页面跳转
    wx.navigateTo({
      // 如果要传递数据, 也是直接通过 query格式拼接在url上
      url: '/pages/detail/detail?name=xiaoLam',

      // 接口中还有success, fail, complete回调函数
      // 有了这些回调函数, 如果通过接口来返回上一级页面, 就不需要再页面的onUnload生命周期函数中传递数据了, 可以在success回调函数中传递
      success() {
        console.log("跳转成功");
      },
      fail() {},
      complete() {}
    })
  }
})