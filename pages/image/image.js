// pages/image/image.js
Page({
  data: {
    imagePath: ""
  },
  chooseImage() {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        console.log(res);
        this.setData({
          imagePath : res.tempFilePaths[0]
        })
      }
    })
  },
  imageLoad() {
    console.log("图片加载了");
  }
})