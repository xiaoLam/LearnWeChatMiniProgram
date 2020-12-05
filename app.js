App({
  // 定义全局变量存储token
  globalData: {
    token: ""
  },

  onLaunch: function () {
    // 取出本地storage中存储的token
    const token = wx.getStorageSync('token')
    // 判断token是否存在
    if (token && token.length !== 0) { // token存在
      // 验证token是否过期
      console.log("验证操作");
      this.check_token(token)
    } else { // token不存在, 进行登陆操作
      console.log("登陆操作");
      this.login()
    }
  },

  login() {
    // 登陆操作
    // 通过wx.login接口获取code
    wx.login({
      success: (res) => {
        const code = res.code; // 获取code, 注意这个code时效性只有五分钟
        wx.request({ // 通过wx.request将code发送给开发者服务器
          url: 'http://123.207.32.32:3000/login',
          method: "POST",
          data:{code},
          success: (res) => { // 开发者服务器会返回数据对象, 对象中含有token
            const token = res.data.token  // 获取这个token
            this.globalData.token = token  // 将token存储在全局变量 globalData中
            wx.setStorageSync('token', token) // 将token存储在本地storage中
          },
          fail: (err) => {
            console.log(err);
          }
        })
      }
    })
  },
  
  check_token(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: "POST",
      header: {
        token
      },
      success: (res) => {
        // 通过返回数据中是否含有errCode判断token是否有效
        if(!res.data.errCode) { // token有效
          this.globalData.token = token // token有效的时候将token存储在全局变量中
        } else { // token无效
          this.login() // 重新登陆
        }
      },
      fail: (err) => {
        console.log(err);
      }
    })
  }
})
