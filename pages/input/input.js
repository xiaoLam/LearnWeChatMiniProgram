// pages/input/input.js
Page({
  data: {

  },
  handleInput(event) {
    console.log("用户输入了",event);
  },
  handleFocus(event) {
    console.log("input获得了焦点", event);
  },
  handleBlur(event) {
    console.log("input失去了焦点",event);
  }
})