<template>
  <LunarRow>
    <LunarColumn size="w-full">
        <div class="py-2 px-6">
          <LunarRow>
            <LunarColumn size="w-full">
              <div class="text-indigo-lightest text-lg">Account</div>
              <div class="text-indigo-light text-sm mt-2">Basic Account Information</div>
            </LunarColumn>
            <LunarColumn size="w-full">
              <div class="mb-8">
                <label for="name" class="block mb-2 text-indigo-lighter text-sm">Name</label>
                <input name="name"
                       type="text"
                       v-model="form.name"
                       class="rounded py-1 px-1 bg-indigo-darkest text-indigo-lightest border border-indigo w-full" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.name">
                  Please enter an account name.
                </div>
              </div>
              <div class="mb-8">
                <label for="identifier" class="block mb-2 text-indigo-lighter text-sm">Identifier</label>
                <input name="identifier"
                       type="text"
                       v-model.number="form.identifier"
                       class="rounded py-1 px-1 bg-indigo-darkest text-indigo-lightest border border-indigo" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.identifier">
                  Please enter an account identifier.
                </div>
              </div>
              <div class="mb-8">
                <label for="balance" class="block mb-2 text-indigo-lighter text-sm">Balance</label>
                <input name="balance"
                       type="text"
                       v-model.number="form.balance"
                       class="rounded py-1 px-1 bg-indigo-darkest text-indigo-lightest border border-indigo" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.balance">
                  Please enter an account balance.
                </div>
              </div>
            </LunarColumn>
          </LunarRow>
          <div class="text-right px-4 pb-2">
            <button class="text-indigo text-sm mr-4">
              Cancel
            </button>

            <button class="btn-primary"
                    @click.prevent="submit">
              Submit
            </button>
          </div>
        </div>
    </LunarColumn>
  </LunarRow>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faPlus } from '@fortawesome/fontawesome-free-solid'

  import { LunarRow, LunarColumn } from '@/app/components/Layout'
  import { LunarCard } from '@/app/components/Presentational'

  export default {
    name: 'lunar-account-form',

    components: {
      FontAwesomeIcon,
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
      faPlus () {
        return faPlus
      }
    },

    methods: {
      clear () {
        this.form = {}
        this.errors = {}
      },
      submit () {
        // validate
        // push to vuex accounts array
        // redirect back to /accounts
      }
    }
  }
</script>
