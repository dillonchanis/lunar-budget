<template>
  <LunarRow>
    <LunarColumn size="w-full">
        <div class="py-2 px-6">
          <LunarRow>
            <LunarColumn size="w-full">
              <div class="text-indigo-lightest text-lg">
                Add Budget
              </div>
              <div class="block text-indigo-lighter text-sm mt-2">Basic Budget Information</div>
            </LunarColumn>
            <LunarColumn size="w-full">
              <div class="mb-8">
                <label for="name" class="block uppercase tracking-wide text-indigo-lighter text-xs font-bold mb-2">* Budget Name :</label>
                <input name="name"
                       type="text"
                       v-model="form.name"
                       class="appearance-none block w-full bg-indigo-darker text-indigo-lightest rounded py-2 px-4 mb-3" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.name">
                  {{ errors.name }}
                </div>
              </div>
              <div class="mb-8">
                <label for="amount" class="block uppercase tracking-wide text-indigo-lighter text-xs font-bold mb-2">* Amount :</label>
                <input name="balance"
                       type="number"
                       v-model.number="form.amount"
                       class="appearance-none block w-1/2 bg-indigo-darker text-indigo-lightest rounded py-2 px-4 mb-3" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.amount">
                  {{ errors.amount }}
                </div>
              </div>
              <div>
                <label for="time" class="block uppercase tracking-wide text-indigo-lighter text-xs font-bold mb-2">* Time Span :</label>
                <select class="appearance-none block w-1/2 bg-indigo-darker text-indigo-lightest rounded py-2 px-4 mb-3"
                        name="time"
                        v-model="form.time">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="half">Half Year</option>
                  <option value="yearly">Yearly</option>
                </select>
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.time">
                  {{ errors.time }}
                </div>
              </div>
            </LunarColumn>
          </LunarRow>
          <div class="text-right px-4 pb-2">
            <button type="button" class="text-indigo text-sm mr-4" @click="closeDrawer">
              Cancel
            </button>

            <button class="btn-primary"
                    type="submit"
                    @click.prevent="submit">
              Submit
            </button>
          </div>
        </div>
    </LunarColumn>
  </LunarRow>
</template>

<script>
  import { mapActions } from 'vuex'
  import { LunarRow, LunarColumn } from '@/app/components/Layout'
  import { LunarCard } from '@/app/components/Presentational'

  export default {
    name: 'lunar-budget-form',

    components: {
      LunarRow,
      LunarColumn,
      LunarCard
    },

    data () {
      return {
        form: {},
        errors: {}
      }
    },

    computed: {
      nameIsValid () {
        return this.errors.name
      },
      numberIsValid () {
        return this.errors.number
      },
      balanceIsValid () {
        return this.errors.balance
      },
      formIsValid () {
        return !this.nameIsValid && !this.numberIsValid && !this.balanceIsValid
      }
    },

    methods: {
      ...mapActions({
        add: 'accounts/addAccount',
        closeDrawer: 'drawer/reset'
      }),
      clear () {
        this.form = {}
        this.errors = {}
        this.closeDrawer()
      },
      submit () {
        // add validation
        this.add(this.form)
        this.clear()
      }
    }
  }
</script>
