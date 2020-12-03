// pages/home/home.js
Page({
  data: {
    titles : ['衣服', '裤子', '鞋子']
  },
  handleBtnTap() {
    console.log("按钮发生点击");
  },
  handleTouchStart() {
    console.log("handleTouchStart");
  },
  handleTouchMove() {
    console.log("handleTouchMove");
  },
  handleTap() {
    console.log("handleTap");
  },
  handleLongpress() {
    console.log("handleLongpress");
  },
  handleTouchEnd() {
    console.log("handleTouchEnd");
  },
  handleEventClick(event) {
    console.log(event);
  },
  itemClick(event) {
    console.log(event);
    const index = event.target.dataset.index;
    const item = event.target.dataset.item;
    console.log(index, item);
  },

  handleCaptureBind1() {
    console.log('handleCaptureBind1');
  },
  handleBind1() {
    console.log('handleBind1');
  },
  handleCaptureBind2() {
    console.log('handleCaptureBind2');
  },
  handleBind2() {
    console.log('handleBind2');
  },
  handleCaptureBind3() {
    console.log('handleCaptureBind3');
  },
  handleBind3() {
    console.log('handleBind3');
  },
})
