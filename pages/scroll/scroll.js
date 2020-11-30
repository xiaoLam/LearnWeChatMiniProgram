// pages/scroll/scroll.js
Page({
  data: {

  },
  handleScroll(event) {
    console.log("页面滚动了", event);
  },
  handleScrollToUpper(event) {
    console.log("滚动到最上",event);
  },
  handleScrollToLower(event) {
    console.log("滚动到最下", event);
  }
})