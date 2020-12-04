// pages/home/home.js
Page({
  data: {
    counter : 0,
    isShow: true
  },
  // 接收数据通过event参数
  counterIncrement(event) {
    // 从子组件传递过来的数据就存放在event事件对象中的detail对象中
    console.log(event);
    this.setData({
      counter : this.data.counter + 1
    }) 
  },
  handleTabClick(event) {
    console.log(event);
  },

  handleCpnIncre() {
    // 无论在page或者在组件中的对象都有 this.selectComponent() 这个方法, 该方法可以获取到对应组件对象, 从而获取对应组件中的数据, 或者调用其中的方法
    // 方法中传入想要获取的组件的 class 或者 id(建议id)
    const my_sel =  this.selectComponent("#my-selCpn")
    console.log(my_sel);

    // 直接修改组件中的数据(不推荐)
    /* my_sel.setData({
      counter : my_sel.data.counter + 10
    }) */

    // 如果想要修改组件中的数据, 不要直接修改, 而是应该通过调用组件中的方法来达到修改的目的
    // 首先在组件中的methods中定义好对应的方法, 在page中调用
    my_sel.increCounter(10)
  },
  
  handleCpnShow() {
    this.setData({
      isShow : !this.data.isShow
    }) 
  }
})