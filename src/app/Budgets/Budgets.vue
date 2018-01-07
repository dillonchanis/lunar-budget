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

    <LunarRow v-if="budgets.length">
      <LunarColumn size="w-full sm:w-1/4" v-for="budget in budgets" :key="budget.id">
        <LunarCard className="elevation">
          <div class="p-4">
            <h4 class="text-indigo-lightest font-hairline mb-2">{{ budget.name }}</h4>

            <div class="mt-4 mb-4">
              <LunarProgress :fill="progress(budget.spent, budget.amount)" />
            </div>

            <div class="bg-indigo-darker p-2 text-indigo-lightest text-left">
              <p>
                ${{ budget.spent }} / ${{ budget.amount }}
              </p>
              <p class="text-indigo-lighter text-sm opacity-50">
                {{ daysRemaining(budget.time.start, budget.time.end) }} days remain
              </p>
            </div>
          </div>
        </LunarCard>
      </LunarColumn>
    </LunarRow>
    <LunarRow v-else>
      <LunarColumn size="w-full">
        <p class="text-indigo-lightest">
          It looks like you have no budgets set!
        </p>
      </LunarColumn>
    </LunarRow>
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faPlus, faSuitcase } from '@fortawesome/fontawesome-free-solid'
  import { mapActions, mapGetters } from 'vuex'

  import { dateDiff } from '@/app/utils'
  import LunarBudgetForm from './BudgetForm'
  import { LunarRow, LunarColumn } from '@/app/components/Layout'
  import { LunarCard, LunarProgress } from '@/app/components/Presentational'

  export default {
    name: 'lunar-budgets',

    components: {
      FontAwesomeIcon,
      LunarRow,
      LunarColumn,
      LunarCard,
      LunarProgress
    },

    data () {
      return {
        budgets: []
      }
    },

    computed: {
      ...mapGetters({
        getBudgets: 'budgets/getBudgets'
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
      progress: (spent, total) => ((spent / total) * 100),
      daysRemaining: (start, end) => dateDiff(start, end),
      showForm () {
        this.toggleDrawer()
        this.setDrawer(LunarBudgetForm)
      }
    },

    mounted () {
      this.budgets = this.getBudgets
    }
  }
</script>
