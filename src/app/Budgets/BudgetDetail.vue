<template>
  <div>
    <LunarRow>
      <LunarColumn size="w-full">
        <div class="mb-4">
          <router-link class="text-indigo no-underline" to="/budgets">
            &lt;&lt; Back to Budgets
          </router-link>
        </div>
        <div class="flex items-center mb-2">
          <h2 class="text-indigo-lightest text-2xl font-hairline">
            {{ budget.name }}
          </h2>
        </div>

        <div class="mb-2 text-indigo-lightest">
          ${{ budget.spent }} of ${{ budget.amount }} spent
        </div>

        <div>
          <p class="text-indigo-lightest">
            Next Reset: {{ timeRemaining }} days
          </p>
        </div>
      </LunarColumn>
    </LunarRow>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import { dateDiff } from '@/app/utils'
  import { LunarRow, LunarColumn } from '@/app/components/Layout'

  export default {
    components: {
      LunarRow,
      LunarColumn
    },

    data () {
      return {
        budget: []
      }
    },

    computed: {
      ...mapGetters({
        budgets: 'budgets/getBudgets'
      }),
      timeRemaining() {
        const { start, end } = this.budget.time
        return dateDiff(start, end)
      }
    },

    mounted () {
      this.budget = this.budgets.filter(budget => budget.id === Number(this.$route.params.id))[0]
    }
  }
</script>
