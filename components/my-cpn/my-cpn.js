// components/my-cpn/my-cpn.js
Component({
  data: {
    message : "我是自定义组件的内容"
  },
  // 通过设置options中的styleIsolation属性的值来控制组件和页面之间的样式相互影响的方式
  options: {
    // 设置为isolated(默认值) 表示不会相互影响
    // styleIsolation: "isolatied",
    // 设置为 apply-shared 表示页面会影响组件, 而组件不会影响页面
    // styleIsolation : "apply-shared",
    // 设置为shared 两者会相互影响
    styleIsolation : "shared"
  }
})
