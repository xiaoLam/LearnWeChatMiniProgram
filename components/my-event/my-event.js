// components/my-event/my-event.js
Component({
  methods: {
    handleIncrement() {
      // 像vue一样像外发送事件, 只不过名字不一样
      // 通过 this.triggerEvent发送事件
      // triggerEvent发送事件也是像vue一样携带数据
      this.triggerEvent("counterIncrement", {name :"xiaoLam", age: 18})
    }
  }
})
