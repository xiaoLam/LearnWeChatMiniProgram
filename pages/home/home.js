// pages/home/home.js
Page({
  // toast弹窗
  handleToastClick() {
    wx.showToast({
      // title必填属性, 用于展示的文本
      title: '标题',
      // icon, 修改展示的图标, 默认值为success(对勾), 可以为loading(运动圆圈), none(不显示图标, 这时可以写两行title文本, 其余情况都是七个字符的文本)
      icon: "loading",
      // duration属性, 用于修改toast存留时间, 默认1500毫秒
      duration: 3000,
      // image属性, 值为图片路径, 把展示icon修改为展示图片, 必须为本地图片, 设置了这个属性后会覆盖icon属性
      image: "/assets/image/sunlogo.jpg",
      // mask属性, 设置toast出现的时候, 是否显示透明蒙层，防止触摸穿透, 默认值为false(可以穿透)
      mask : true,
      // success函数, 接口调用成功的时候回调
      success() {
        console.log("接口调用成功了");
      },
      // fail函数, 接口调用失败的时候回调(很少见, 一般都会调用成功)
      fail() {
        console.log("接口调用失败了");
      },
      // complete函数, 在接口调用结束的时候回调, 无论是调用成功还是调用失败都会回调
      complete(){
        console.log("接口调用完毕");
      }
    })
  },

  // modal弹窗
  handleModalClick() {
    wx.showModal({
      // title标题文本
      title: "标题",
      // 内容文本
      content: "内容",
      // cancelColor取消按钮的文本颜色
      cancelColor: 'red',
      // confirmColor确认按钮的文本颜色
      confirmColor : "green",
      // showCancel, 布尔值, 设置是否显示取消按钮
      // showCancel: false,
      // cancelText, 设置取消按钮的文本
      cancelText: "退出",
      // confirmText, 设置确定按钮的文本
      confirmText: "好的",
      // success成功时回调
      // success会传过来一个res参数, res是一个对象, 记录了用户点击了确认按钮还是取消按钮
      success(res) {
        console.log(res);
        if(res.cancel) {
          console.log("用户点击了取消按钮");
        };
        if(res.confirm) {
          console.log("用户点击了确认按钮");
        }
        console.log("调用成功了");
      },
      // fail调用失败时回调
      fail() {
        console.log("调用时失败了");
      },
      // complete调用结束后回调
      complete() {
        console.log("调用结束了");
      }
    })
  },

  // loading弹窗
  handleLoadingClick() {
    wx.showLoading({
      title: '加载中',
      mask: true,
      success() {
        console.log("调用成功了");
      },
      fail() {
        console.log("调用失败了");
      },
      complete() {
        console.log("调用完成了");
      }
    })

    // 注意loading弹窗需要调用wx.hideLoading接口才会关闭
    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {
          console.log(res);
        },
        fail : (err) => {
          console.log(err);
        },
        complete: () => {
          console.log("完成了");
        } 
      })
    },2000)
  },

  // actionSheet弹窗
  handelActionSheetClick() {
    wx.showActionSheet({
      // itemList, 数组中填写需要展示的选项
      itemList: ['相册','拍照'],
      // itemColor, 选项文本颜色
      itemColor : "red",
      // 这里的success函数会传入一个参数res对象, res中的tapIndex属性记录用户选择了哪一个选项
      success(res) {
        console.log(res);
      },
      fail() {},
      complete() {}

    })
  },

  // 设置onShareAppMessage, 分享小程序
  onShareAppMessage(options) {
    // 通过return一个对象, 在该对象中自定义分享的内容
    return {
      // title: 分享的标题
      title: "你好呀",
      // path: 分享的路径, 默认是小程序的首页
      path: "/pages/about/about",
      // imageUrl: 分享显示的图片, 如果没有设置, 则为分享的页面截图
      imageUrl: "/assets/image/sunlogo.jpg"
    }
  },
  // 设置onShareTimeline, 分享当前页面到朋友圈
  onShareTimeline() {
    // 通过return一个对象, 在该对象中自定义分享的内容
    return {
      // title: 分享的标题
      title: "你好呀",
      // query: 当前页面路径携带的参数 如 path?a=1&b=2 的 “?” 后面部分
      // query: "",
      // imageUrl: 分享显示的图片, 如果没有设置, 则为分享的页面截图
      imageUrl: "/assets/image/sunlogo.jpg"
    }
  }
})