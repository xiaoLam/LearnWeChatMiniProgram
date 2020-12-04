// components/my-mslot/my-mslot.js
Component({
  // component解析
  // -------------properties用于给组件传入数据----------
  properties: {
    title : {
      // 规定传入类型
      type: String,
      // 定义默认值
      value: 0,
      // 监听值的改变, 在这里监听, 参数会传入两个值一个是新值, 一个是旧值
      observer: function(newVal,oldVal) {

      }
    }
  },

  // ------------data用于初始化组件本身的数据-----------
  data: {
    message : "你好"
  },

  // -------------methods用于定义组件中的方法--------
  methods: {
    increNum() {}
  },

  // --------------options用于定义一些配置
  options: {
    // 设置多插槽
    multipleSlots: true,
    // 设置页面和组件的样式关系
    styleIsolation : "shared"
  },

  // --------------externalClasses用于让外部传入一些样式
  externalClasses: [],

  // --------------observers用于监听数据的改变properties/data中的数据都可以----
  // 在这里监听的数据改变的函数只有一个参数, 新值
  observers : {
    title : function (newVal) {},
    message : function (newVal) {}
  },
  
  // ---------------pageLifetimes用于监听页面/使用者组件的生命周期函数----------
  pageLifetimes : {
    show() {
      console.log("页面显示了");
    },
    hide() {
      console.log("页面隐藏了");
    },
    resize() {
      console.log("页面大小发生改变了");
    }
  },

  // -------------------lifetimes用于监听组件本身的生命周期函数-------------
  lifetimes : {
    created() {
      console.log("组件创建出来了");
    },
    attached() {
      console.log("组件被添加至页面了");
    },
    ready() {
      console.log("组件被渲染出来了");
    },
    moved() {
      // 我不知道这个函数怎么触发, 也不常用
      console.log("组件被移到另外一个节点了");
    },
    detached() {
      console.log("组件被移除了");
    }
  },
})
