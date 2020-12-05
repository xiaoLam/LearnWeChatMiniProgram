// pages/home/home.js

import request from "../../service/network.js"

Page({
  data: {

  },
  onLoad: function (options) {
    // 1. 使用原生的方式进行网络请求
    // this.get_data_origin()

    // 2.使用封装的request进行网络请求
    request({
      url : "/home/data",
      data : {
        type : "sell",
        page : 1
      }
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    }) 

  },

  get_data_origin() {
    //  一般来说在页面加载的时候进行网络请求
  // 通过wx.request API来进行网络请求
  // 注意, 小程序只可以跟指定的域名进行网络通信, 如果只是为了测试, 可以在微信开发者工具中的详情选项中, 勾选不校检合法域名
  // 1. 最简单的网络请求
  wx.request({
    // url 属性, 填写需要请求的url地址
    url: 'http://152.136.185.210:8000/api/w6/recommend',
    // success回调函数, 当请求操作完成后回调
    success(res) {
      console.log(res);
    }
  }),

  // 2. get请求, 并且携带参数
  // 通过data属性, 来携带参数
  wx.request({
    url: 'http://152.136.185.210:8000/api/w6/home/data',
    data: {
      type : "sell",
      page : 1
    },
    success(res) {
      console.log(res);
    }
  }),
  
  // 3.post请求, 并且携带参数
  // 通过 method属性, 来修改默认的请求方法
  wx.request({
    url : "http://httpbin.org/post",
    method : "post",
    data : {
      name : "xiaoLam",
      age : 18
    },
    success(res) {
      console.log(res);
    }
  })
  }
})