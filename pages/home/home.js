// pages/home/home.js
// 在App() 中定义了共享数据的话
// 就可以在全局中进行使用了
// 通过 getApp() 方法拿到App示例
const app = getApp();
console.log(app.gobalData.name);
console.log(app.gobalData.age);

// 调用Page() 称为注册页面
Page({
  // ----------------2.初始化页面数据---------
  // 也就是定义data数据
  data: {
    name : "Suolaer",
    age: 36,
    list: []
  },

  // ----------------3.监听wxml中的事件，绑定对应的事件函数----------
  // 在点击获取授权按钮后会回调这个函数
  handleGetUserInfo(event) {
    // 在用户操作页面元素的时候都会给函数传来一个event事件对象
    // 这个event事件对象中就存储了事件的信息
    console.log(event);
  },

  // -----------------1. 监听页面的生命周期函数-------------
  // onLoad函数会在页面加载的时候回调
  onLoad() {
    console.log("页面被加载了");
    // 我们一般在onLoad生命周期函数中请求数据
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/recommend',
      success: (res) => {
        const data = res.data.data.list
        // 切记, 要通过this.setData() 来存储请求过来的数据, 这样才能刷新页面DOM
        this.setData({
          list : data
        })
      }
    })
  },

  // onShow函数会在页面显示的时候回调
  onShow(){
    console.log("页面被显示了");
  },

  // onReady函数会在页面首次渲染完毕的时候回调
  onReady() {
    console.log("页面第一次被渲染");
  },

  // onHide函数会在页面隐藏的时候回调
  onHide() {
    console.log("页面被隐藏了");
  },

  // onUnload会在页面被卸载的时候回调
  // 也就是切换tabBar路由的时候
  onUnload() {
    console.log("页面卸载");
  },

  // -------------------------4.其他的一些监听------------
  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj);
  },
  // 监听下拉到页面的底部
  onReachBottom() {
    console.log("下拉到底部");
  },
  // 监听下拉刷新的事件
  onPullDownRefresh() {
    console.log("下拉刷新");
  }
})