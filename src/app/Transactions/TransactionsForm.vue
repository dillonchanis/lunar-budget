<template>
  <LunarRow>
    <LunarColumn size="w-full">
        <div class="py-2 px-6">
          <LunarRow>
            <LunarColumn size="w-full">
              <div class="text-indigo-lightest text-lg">
                Add Transaction
              </div>
              <div class="block text-indigo-lighter text-sm mt-2">Your transaction information</div>
            </LunarColumn>
            <LunarColumn size="w-full">
              <div class="mb-8">
                <label for="name" class="block uppercase tracking-wide text-indigo-lighter text-xs font-bold mb-2">* Transaction Name :</label>
                <input name="name"
                       type="text"
                       v-model="form.name"
                       class="appearance-none block w-full bg-indigo-darker text-indigo-lightest rounded py-2 px-4 mb-3" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.name">
                  {{ errors.name }}
                </div>
              </div>
              <div class="mb-8">
                <label for="desc" class="block uppercase tracking-wide text-indigo-lighter text-xs font-bold mb-2">* Description :</label>
                <textarea name="desc"
                       type="text"
                       v-model.number="form.desc"
                       class="appearance-none block w-full bg-indigo-darker text-indigo-lightest rounded py-2 px-4 mb-3"></textarea>
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.balance">
                  {{ errors.balance }}
                </div>
              </div>
              <div class="mb-8">
                <label for="account" class="block uppercase tracking-wide text-indigo-lighter text-xs font-bold mb-2">* Account :</label>
                <input name="account"
                       type="text"
                       v-model.number="form.account"
                       class="appearance-none block w-1/2 bg-indigo-darker text-indigo-lightest rounded py-2 px-4 mb-3" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.account">
                  {{ errors.account }}
                </div>
              </div>
              <div class="mb-8">
                <label for="amount" class="block uppercase tracking-wide text-indigo-lighter text-xs font-bold mb-2">* Amount :</label>
                <input name="amount"
                       type="number"
                       class="appearance-none block w-1/2 bg-indigo-darker text-indigo-lightest rounded py-2 px-4 mb-3"
                       v-model="form.amount" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.amount">
                  {{ errors.amount }}
                </div>
              </div>
              <div>
                <label for="expense" class="block uppercase tracking-wide text-indigo-lighter text-xs font-bold mb-2">* Was this an expense? :</label>
                <input name="expense"
                       type="checkbox"
                       v-model="form.expense" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.expense">
                  {{ errors.expense }}
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
  // import { simpleValidate } from '@/app/utils'

  export default {
    name: 'lunar-account-form',

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
        // const validate = simpleValidate(({ value, len }) => value && String(value).length >= len)
        // this.errors = Object.assign(
        //   {},
        //   { name: validate({ len: 5, value: this.form.name, errorMsg: 'A minimum of 5 characters is required.' }) },
        //   { number: validate({ len: 4, value: this.form.number, errorMsg: 'A minimum of 4 characters is required.' }) },
        //   { balance: validate({ len: 1, value: this.form.balance }) }
        // )

        // if (this.formIsValid) {
        //   this.add(this.form)
        //   this.clear()
        // }
        alert('submitted')
      }
    }
  }
</script>
