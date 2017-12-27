/* eslint-disable no-unused-vars */
import AccountListItem from './AccountListItem'

export default {
  functional: true,

  props: {
    accounts: {
      type: Array,
      required: true
    }
  },

  render: (h, { props }) => (
    props.accounts.map(account => <AccountListItem account={ account } key={ account.id } />)
  )
}
