/* eslint-disable no-unused-vars */
import TransactionListItem from './TransactionListItem'

export default {
  functional: true,

  props: {
    transactions: {
      type: Array,
      required: true
    }
  },

  render: (h, { props }) => (
    props.transactions.map(transaction => <TransactionListItem transaction={ transaction } key={ transaction.id } />)
  )
}
