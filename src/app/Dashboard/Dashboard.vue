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
            <ExpenseChart :height="150" :chart-data="chartData" />
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

          <div v-for="transaction in recentTransactions" :key="transaction.id" class="group px-4 py-4 flex items-center hover:bg-indigo-darker">
            <div class="shadow-md px-2 py-1 rounded-full mr-4"
                 :class="[ transaction.expense ? 'bg-red-dark' : 'bg-green-dark' ]">
              <FontAwesomeIcon class="text-white" :icon="getIcon(transaction.expense)" size="xs" />
            </div>
            <div class="w-3/4">
              <div class="text-white mb-1">
                {{ transaction.desc | truncate }}
              </div>
              <div class="text-indigo text-sm opacity-75">
                ${{ transaction.amount }} @ {{ transaction.name }} - {{ transaction.date }}
              </div>
            </div>
          </div>
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

          <div v-for="account in accounts" :key="account.id" class="group px-4 py-4 flex items-center hover:bg-indigo-darker">
            <div class="w-3/4">
              <div class="text-white mb-1">
                {{ account.name }}
              </div>
              <div class="text-indigo text-sm opacity-75">
                XXXX-XXXX-XXXX-{{ account.number }}
              </div>
            </div>
            <div class="w-1/4 text-white text-lg">
                ${{ account.balance }}
            </div>
          </div>
        </LunarCard>
      </LunarColumn>
    </LunarRow>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCalendarAlt, faCreditCard, faArrowUp, faArrowDown, faSuitcase } from '@fortawesome/fontawesome-free-solid'

import LunarRow from '@/app/components/Row'
import LunarColumn from '@/app/components/Column'
import LunarCard from '@/app/components/Card'
import ExpenseChart from '@/app/components/Charts/ExpenseChart.js'

export default {
  name: 'dashboard',

  components: {
    FontAwesomeIcon,
    LunarRow,
    LunarColumn,
    LunarCard,
    ExpenseChart
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
    downArrowIcon () {
      return faArrowDown
    },
    upArrowIcon () {
      return faArrowUp
    }
  },

  methods: {
    createChart () {
      this.chartData = {
        labels: this.getTransactions.map(transaction => transaction.date).reverse(),
        datasets: [
          {
            label: 'Recent Expenses',
            backgroundColor: '#6574cd',
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
