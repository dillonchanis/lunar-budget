<template>
  <div>
    <LunarRow>
      <LunarColumn size="w-full">
        <h2 class="text-white text-2xl font-hairline mb-2">
          Welcome, {{ user.name }}!
        </h2>
      </LunarColumn>
    </LunarRow>

    <LunarRow>
      <LunarColumn size="w-full">
        <LunarCard>
          <h4 class="text-indigo-lightest font-normal py-4" slot="header">
            <div class="bg-indigo shadow-lg py-2 px-2 rounded-full inline-block mr-2">
              <FontAwesomeIcon style="width: 1.2em" :icon="calendarIcon" />
            </div>
            Your Spending This Week
          </h4>

          <div class="py-2 px-2">
            <ExpenseChart :height="350" :width="1180" :chart-data="chartData" />
          </div>
        </LunarCard>
      </LunarColumn>
    </LunarRow>

    <LunarRow>
      <LunarColumn size="w-full sm:w-1/2">
        <LunarCard>
          <h4 class="text-indigo-lightest font-normal py-4" slot="header">
            <div class="bg-indigo shadow-lg py-2 px-2 rounded-full inline-block mr-2">
              <FontAwesomeIcon :icon="creditCardIcon" />
            </div>
            Recent Transactions
          </h4>

          <LunarTransactionList :transactions="recentTransactions" :faIcons="faArrows" />
        </LunarCard>
      </LunarColumn>

      <LunarColumn size="w-full sm:w-1/2">
        <LunarCard>
          <h4 class="text-indigo-lightest font-normal py-4" slot="header">
            <div class="bg-indigo shadow-lg py-2 px-2 rounded-full inline-block mr-2">
              <FontAwesomeIcon style="width: 1.2em" :icon="accountsIcon" />
            </div>
            Your Accounts
          </h4>

          <LunarAccountList :accounts="accounts" />
        </LunarCard>
      </LunarColumn>
    </LunarRow>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCalendarAlt, faCreditCard, faArrowUp, faArrowDown, faSuitcase } from '@fortawesome/fontawesome-free-solid'

import { LunarRow, LunarColumn } from '@/app/components/Layout'
import { LunarCard } from '@/app/components/Presentational'
import ExpenseChart from '@/app/components/Charts/ExpenseChart.js'
import { LunarAccountList, LunarTransactionList } from '@/app/components/Lists'

export default {
  name: 'dashboard',

  components: {
    FontAwesomeIcon,
    LunarRow,
    LunarColumn,
    LunarCard,
    ExpenseChart,
    LunarAccountList,
    LunarTransactionList
  },

  data () {
    return {
      accounts: [],
      chartData: null,
      recentTransactions: [],
      transactions: [],
      user: {}
    }
  },

  computed: {
    ...mapGetters({
      getAccounts: 'accounts/getAccounts',
      getTransactions: 'transactions/getTransactions',
      getUser: 'user/getUser'
    }),
    accountsIcon () {
      return faSuitcase
    },
    calendarIcon () {
      return faCalendarAlt
    },
    creditCardIcon () {
      return faCreditCard
    },
    faArrows () {
      return {
        down: faArrowDown,
        up: faArrowUp
      }
    }
  },

  methods: {
    createChart () {
      this.chartData = {
        labels: this.getTransactions.map(transaction => transaction.date).reverse(),
        datasets: [
          {
            label: 'Recent Expenses',
            backgroundColor: 'transparent',
            borderColor: '#6574cd',
            data: this.getTransactions.map(transaction => transaction.amount)
          }
        ]
      }
    },
    getIcon (x) {
      return x ? this.downArrowIcon : this.upArrowIcon
    }
  },

  mounted () {
    this.recentTransactions = this.getTransactions.slice(0, 3)
    this.transactions = this.getTransactions
    this.accounts = this.getAccounts
    this.user = this.getUser

    this.createChart()
  }
}
</script>
