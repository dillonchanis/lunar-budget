/* eslint-disable no-unused-vars */
import { mapActions } from 'vuex'

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

  methods: {
    ...mapActions({
      close: 'drawer/reset'
    })
  },

  render () {
    return this.$props.render({
      open: this.isOpen,
      close: this.close
    })
  }
}

export default {
  functional: true,

  render: (h, { props, slots }) => (
      <OpenDrawer
        isOpen={ props.isOpen }
        render={({ open, close }) => {
          if (open) {
            return (
              <transition name="lunar-drawer" mode="out-in">
                <div style="width: 500px"
                    class="absolute bg-indigo-darkest shadow-lg pin-t pin-r border-l border-scampi h-full z-30"
                    onClick={ e => e.stopPropagation() }>
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
