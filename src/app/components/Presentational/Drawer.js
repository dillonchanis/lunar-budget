/* eslint-disable no-unused-vars */
const OpenDrawer = {
  props: {
    isOpen: {
      type: Boolean,
      default: true
    },
    render: {
      default: h => null
    }
  },

  render () {
    return this.$props.render({
      open: this.isOpen
    })
  }
}

export default {
  functional: true,

  render: (h, { props, slots }) => (
    <OpenDrawer
      isOpen={ props.isOpen }
      render={({ open }) => {
        if (open) {
          return (
            <transition name="lunar-drawer" mode="out-in">
              <div class="absolute bg-indigo-darkest shadow-lg pin-t pin-r border-l border-scampi w-2/5 h-screen">
                <div class="p-4">
                 { slots().default }
                </div>
              </div>
            </transition>
          )
        }
      }
    } />
  )
}
