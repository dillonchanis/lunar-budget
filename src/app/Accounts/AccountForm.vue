<template>
  <LunarRow>
    <LunarColumn size="w-full">
        <div class="py-2 px-6">
          <LunarRow>
            <LunarColumn size="w-full">
              <div class="text-indigo-lightest text-lg">
                Add Account
              </div>
              <div class="block text-indigo-lighter text-sm mt-2">Basic Account Information</div>
            </LunarColumn>
            <LunarColumn size="w-full">
              <div class="mb-8">
                <label for="name" class="block uppercase tracking-wide text-indigo-lighter text-xs font-bold mb-2">Account Name :</label>
                <input name="name"
                       type="text"
                       v-model="form.name"
                       class="appearance-none block w-full bg-indigo-darker text-indigo-lightest rounded py-2 px-4 mb-3" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.name">
                  {{ errors.name }}
                </div>
              </div>
              <div class="mb-8">
                <label for="number" class="block uppercase tracking-wide text-indigo-lighter text-xs font-bold mb-2">4 Digit Number/ID :</label>
                <input name="number"
                       type="text"
                       v-model.number="form.number"
                       class="appearance-none block w-1/2 bg-indigo-darker text-indigo-lightest rounded py-2 px-4 mb-3" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.number">
                  {{ errors.number }}
                </div>
              </div>
              <div class="mb-8">
                <label for="balance" class="block uppercase tracking-wide text-indigo-lighter text-xs font-bold mb-2">Current Balance :</label>
                <input name="balance"
                       type="text"
                       v-model.number="form.balance"
                       class="appearance-none block w-1/2 bg-indigo-darker text-indigo-lightest rounded py-2 px-4 mb-3" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.balance">
                  {{ errors.balance }}
                </div>
              </div>
              <div>
                <label for="favorite" class="block uppercase tracking-wide text-indigo-lighter text-xs font-bold mb-2">Set As Favorite :</label>
                <input name="favorite"
                       type="checkbox"
                       v-model="form.favorite" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.favorite">
                  {{ errors.favorite }}
                </div>
              </div>
            </LunarColumn>
          </LunarRow>
          <div class="text-right px-4 pb-2">
            <button type="button" class="text-indigo text-sm mr-4">
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
  import { simpleValidate } from '@/app/utils'

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
        const validate = simpleValidate(({ value, len }) => value && String(value).length >= len)
        this.errors = Object.assign(
          {},
          { name: validate({ len: 5, value: this.form.name, errorMsg: 'A minimum of 5 characters is required.' }) },
          { number: validate({ len: 4, value: this.form.number, errorMsg: 'A minimum of 4 characters is required.' }) },
          { balance: validate({ len: 1, value: this.form.balance }) }
        )

        if (this.formIsValid) {
          this.add(this.form)
          this.clear()
        }
      }
    }
  }
</script>
