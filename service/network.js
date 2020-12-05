// 定义基本URL
const baseURL = "http://152.136.185.210:8000/api/w6"

// 暴露一个封装好的网络请求方法
export default function request(options) {
  // 使用ES6语法, 对象解构
  const {url,method,data} = options
  // 返回一个Promise对象, 使网络请求可以使用.then和.catch回调, 防止回调地狱
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + url,
      method: method || "get",
      data : data || {},
      success : function (res) {
        resolve(res)
      },
      fail: function(err) {
        reject(err)
      }
    })
  })
}