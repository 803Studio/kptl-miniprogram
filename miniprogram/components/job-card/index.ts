Component({
  properties: {
    info: {
      type: Object
    }
  },
  data: {},
  methods: {
    handleClick() {
      this.triggerEvent('click', {id: this.properties.info.id})
    }
  }
})
