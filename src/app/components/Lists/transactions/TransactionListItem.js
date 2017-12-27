import { truncate } from '@/app/utils'

export default {
  functional: true,

  props: {
    transaction: {
      type: Object,
      required: true
    }
  },

  render: (h, { props }) => (
    <div class="group px-4 py-4 flex items-center hover:bg-indigo-darker">
      <div class="shadow-md px-2 py-1 rounded-full mr-4">
        icon here
      </div>
      <div class="w-3/4">
        <div class="text-white mb-1">
          { truncate(props.transaction.desc) }
        </div>
        <div class="text-indigo text-sm opacity-75">
          ${ props.transaction.amount } @ { props.transaction.name } - { props.transaction.date }
        </div>
      </div>
    </div>
  )
}
