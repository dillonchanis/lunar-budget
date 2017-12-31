import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { truncate } from '@/app/utils'

export default {
  functional: true,

  components: {
    FontAwesomeIcon
  },

  props: {
    faIcons: {
      required: true
    },
    transaction: {
      type: Object,
      required: true
    }
  },

  render: (h, { props }) => {
    const { faIcons, transaction } = props

    return (
      <div class="group px-4 py-4 flex items-center hover:bg-indigo-darker">
        <div class="shadow-md px-2 pb-1 rounded-full mr-4 bg-indigo-darkest">
          <FontAwesomeIcon class="text-white"
                           icon={ transaction.expense ? faIcons.down : faIcons.up }
                           size="xs" />
        </div>
        <div class="w-3/4">
          <div class="text-white mb-2">
            { truncate(transaction.desc) }
          </div>
          <div class="text-indigo text-sm opacity-75">
            ${ transaction.amount } @ { transaction.name } - { transaction.date }
          </div>
        </div>
      </div>
    )
  }
}
