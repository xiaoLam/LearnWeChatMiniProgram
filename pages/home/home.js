// pages/home/home.js
Page({
  // 像vue一样在data中定义好变量
  data: {
    name : "xiaoLam",
    age : 18,
    students:[
      {name: "xiaohong", age: 11},
      {name: "xiaoming", age: 12},
      {name: "xiaojun", age: 10},
    ],
    counter: 0
  },
  // 直接在Page中传入的对象中编写对应的点击事件
  increBtn() {
    // 1.错误的做法
    /* this.data.counter + 1
    console.log(this.data.counter); */
    // 如果是这种做法的话, 会发现data中的counter确实有增加, 但是页面中的counter并没有增加
    // 原因是因为小程序中并没有像vue一样通过definProperty来监听data数据的改变的
    // 如果想要页面也跟着更改的话, 那么就需要使用 this.setDate()来操作

    // 2.正确的做法
    this.setData({
      counter: this.data.counter + 1,
    })
    console.log(this.data.counter);
  },
  decreBtn() {
    this.setData({
     counter : this.data.counter - 1
    })
  }
})