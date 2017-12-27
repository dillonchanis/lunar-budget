/* eslint-disable no-unused-vars */
import TransactionListItem from './TransactionListItem'

export default {
  functional: true,

  props: {
    faIcons: {
      required: true
    },
    transactions: {
      type: Array,
      required: true
    }
  },

  render: (h, { props }) => (
    props.transactions
      .map(transaction => {
        return <TransactionListItem transaction={ transaction }
                                    key={ transaction.id }
                                    faIcons={ props.faIcons } />
      })
  )
}
