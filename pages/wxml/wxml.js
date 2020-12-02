// pages/wxml/wxml.js
Page({
  data: {
    message : "你好你好",
    name: "xiaoLam",
    age : 18,
    tall : 1.88,
    nowTime : new Date().toLocaleString(),
    isActive : false,
    isShow : true,
    scroe: 50
  },
   onLoad() {
     setInterval(() => {
       this.setData({
        nowTime : new Date().toLocaleString()
      }) 
     }, 1000);
   },
   handleTextColor() {
     this.setData({
      isActive : !this.data.isActive
     })
   },
   handleShow() {
    this.setData({
      isShow : !this.data.isShow
    })
   },
   handleScroe() {
     this.setData({
       scroe : this.data.scroe + 10
     })
   }
})