// pages/detail/detail.js
Page({
  onLoad: function (options) {
    // 通过navigator组件中url传递过来的数据在 onLoad生命周期函数中的 options参数中
    console.log(options);
  },
  // 页面卸载的时候会调用onUnload生命周期函数
  // 可以在这个生命周期函数中给返回的页面传递数据
  onUnload: function() {
    const pages = getCurrentPages() // 获取当前程序所有活跃的页面
    const prePage = pages[pages.length - 2] // 获取上一个页面
    console.log(prePage);
    prePage.setData({ // 修改上一个页面的数据
      message : "你好我是传递的数据"
    })
  }
})