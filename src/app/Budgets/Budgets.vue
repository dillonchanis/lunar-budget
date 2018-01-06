<template>
  <div>
    <LunarRow>
      <LunarColumn size="w-full">
        <div class="flex items-center">
          <h2 class="text-indigo-lightest text-2xl font-hairline">
            Budgets
          </h2>

          <button class="ml-4 btn-primary py-2 px-2 text-xs" @click="showForm">
            <FontAwesomeIcon :icon="faPlus" size="xs" />
            <span class="inline-block ml-1">Add Budget</span>
          </button>
        </div>
      </LunarColumn>
    </LunarRow>

    <LunarRow v-if="accounts.length">
      <LunarColumn size="w-full">
        <LunarCard>
          <h4 class="card-header" slot="header">
            <div class="card-header-icon">
              <FontAwesomeIcon style="width: 1.2em" :icon="faSuitcase" />
            </div>
            Your Budgets
          </h4>

          <LunarAccountList :accounts="accounts" />
        </LunarCard>
      </LunarColumn>
    </LunarRow>
    <LunarRow v-else>
      <p class="text-indigo-lightest">
        It looks like you have no budgets set!
      </p>
    </LunarRow>
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faPlus, faSuitcase } from '@fortawesome/fontawesome-free-solid'
  import { mapActions, mapGetters } from 'vuex'

  import LunarBudgetForm from './BudgetForm'
  import { LunarAccountList } from '@/app/components/Lists'
  import { LunarRow, LunarColumn } from '@/app/components/Layout'
  import { LunarCard } from '@/app/components/Presentational'

  export default {
    name: 'lunar-budgets',

    components: {
      FontAwesomeIcon,
      LunarAccountList,
      LunarRow,
      LunarColumn,
      LunarCard
    },

    data () {
      return {
        accounts: []
      }
    },

    computed: {
      ...mapGetters({
        getAccounts: 'accounts/getAccounts'
      }),

      faPlus () {
        return faPlus
      },

      faSuitcase () {
        return faSuitcase
      }
    },

    methods: {
      ...mapActions({
        toggleDrawer: 'drawer/toggle',
        setDrawer: 'drawer/setComponent'
      }),
      showForm () {
        this.toggleDrawer()
        this.setDrawer(LunarBudgetForm)
      }
    },

    mounted () {
      this.accounts = this.getAccounts
    }
  }
</script>
