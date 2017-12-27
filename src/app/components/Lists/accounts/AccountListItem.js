export default {
  functional: true,

  props: {
    account: {
      type: Object,
      required: true
    }
  },

  render: (h, { props }) => (
    <div class="group px-4 py-4 flex items-center hover:bg-indigo-darker">
      <div class="w-3/4">
        <div class="text-white mb-1">
          { props.account.name }
        </div>
        <div class="text-indigo text-sm opacity-75">
          XXXX-XXXX-XXXX-{ props.account.number }
        </div>
      </div>
      <div class="w-1/4 text-white text-lg">
          ${ props.account.balance }
      </div>
    </div>
  )
}
