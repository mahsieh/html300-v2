// define a mixin for images so that the border is toggled

export default {
    data: () => {
      return {
        borderVisible: false //set borders to invisible to start
      }  
    },
    methods: {
        borderToggle() {
            // troubleshooting console log
            console.log('Toggling the image\'s border')
            // switch the border visibility
            this.borderVisible = !this.borderVisible
        }
    }
}