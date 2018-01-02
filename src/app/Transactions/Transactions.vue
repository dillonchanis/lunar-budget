<template>
  <div>
    <LunarRow>
      <LunarColumn size="w-full">
        <div class="flex items-center">
          <h2 class="text-indigo-lightest text-2xl font-hairline">
            Accounts
          </h2>

          <button class="ml-4 btn-primary py-2 px-2 text-xs" @click="showForm">
            <FontAwesomeIcon :icon="faPlus" size="xs" />
            <span class="inline-block ml-1">Add Transaction</span>
          </button>
        </div>
      </LunarColumn>
    </LunarRow>

    <LunarRow v-if="transactions.length">
      <LunarColumn size="w-full">
        <LunarCard>
          <h4 class="card-header" slot="header">
            <div class="card-header-icon">
              <FontAwesomeIcon style="width: 1.2em" :icon="faCreditCard" />
            </div>
            Your Transactions
          </h4>
        </LunarCard>

        <LunarTable :columns="columns" :datasource="transactions" with-filter />
      </LunarColumn>
    </LunarRow>
    <LunarRow v-else>
      <LunarColumn size="w-full">
        <p class="text-indigo-lightest">
          It looks like you have no transactions!
        </p>
      </LunarColumn>
    </LunarRow>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCreditCard, faPlus } from '@fortawesome/fontawesome-free-solid'

import { LunarRow, LunarColumn } from '@/app/components/Layout'
import { LunarCard } from '@/app/components/Presentational'
import LunarTable from '@/app/components/Table/Table'

export default {
  name: 'transactions',

  components: {
    FontAwesomeIcon,
    LunarRow,
    LunarColumn,
    LunarCard,
    LunarTable
  },

  data () {
    return {
      columns: [
        { id: 1, label: 'Date', value: 'date', active: true },
        { id: 2, label: 'Account', value: 'account', active: true },
        { id: 3, label: 'Name', value: 'name', active: true },
        { id: 4, label: 'Desc.', value: 'desc', title: 'Description', active: true },
        { id: 5, label: 'Amount', value: 'amount', active: true }
      ],
      transactions: []
    }
  },

  computed: {
    ...mapGetters({
      getTransactions: 'transactions/getTransactions'
    }),
    faCreditCard () {
      return faCreditCard
    },
    faPlus () {
      return faPlus
    }
  },

  methods: {
    showForm () {

    }
  },

  mounted () {
    this.transactions = this.getTransactions
  }
}
</script>
