<template>
  <LunarRow>
    <LunarColumn size="w-full">
      <LunarCard>
        <h4 class="text-indigo-lightest font-normal py-4" slot="header">
          <div class="bg-indigo shadow-lg py-2 px-2 rounded-full inline-block mr-2">
            <FontAwesomeIcon style="width: 1.2em" :icon="faPlus" />
          </div>
          Add Account
        </h4>

        <div class="py-2 px-6">
          <LunarRow>
            <LunarColumn size="w-1/4">
              <span class="text-indigo-lightest text-lg">Account</span>
            </LunarColumn>
            <LunarColumn size="flex-grow">
              <div class="mb-8">
                <label for="name" class="block mb-2 text-indigo-lightest text-sm">Name</label>
                <input name="name"
                       type="text"
                       v-model="form.name"
                       class="rounded py-1 px-1 bg-indigo-darkest text-indigo-lightest border border-indigo w-1/2" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.name">
                  Please enter an account name.
                </div>
              </div>
              <div class="mb-8">
                <label for="identifier" class="block mb-2 text-indigo-lightest text-sm">Identifier</label>
                <input name="identifier"
                       type="text"
                       v-model.number="form.identifier"
                       class="rounded py-1 px-1 bg-indigo-darkest text-indigo-lightest border border-indigo" />
                <div class="mt-2 text-red-light italic text-sm" v-if="errors.identifier">
                  Please enter an account identifier.
                </div>
              </div>
              <div class="mb-8">
                <label for="balance" class="block mb-2 text-indigo-lightest text-sm">Balance</label>
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
            <router-link to="/accounts">
              <button class="text-indigo text-sm mr-4">
                Cancel
              </button>
            </router-link>

            <button class="bg-indigo hover:bg-indigo-darker text-sm text-white rounded py-2 px-4"
                    @click.prevent="submit">
              Submit
            </button>
          </div>
        </div>
      </LunarCard>
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
      submit () {
        // validate
        // push to vuex accounts array
        // redirect back to /accounts
      }
    }
  }
</script>
