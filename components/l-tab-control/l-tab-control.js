// components/l-tab-control/l-tab-control.js
Component({
  properties: {
    titles : {
      type : Array,
      value : []
    }
  },
  data: {
    itemIndex : 0
  },
  methods: {
    handleItemClick(event) {
      const index = event.currentTarget.dataset.index
      const item = event.currentTarget.dataset.item
      this.setData({
        itemIndex : index
      })
      this.triggerEvent("itemClick",{index, item})
    }
  }
})
