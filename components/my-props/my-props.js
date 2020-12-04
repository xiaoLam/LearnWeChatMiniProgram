// components/my-props/my-props.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 普通的写法
    // title : String,
    // 对象写法(推荐)
    title : {
      type : String,
      // 通过value设置默认值
      value: "我是默认标题",
      // 通过observer来监听值的改变
      observer: function(newValue, oldValue) {
      console.log(newValue, oldValue);
      }
    }
  },
  externalClasses: ["titleclass"]
})
