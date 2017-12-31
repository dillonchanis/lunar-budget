<template>
  <div>
    <LunarRow>
      <LunarColumn size="w-full">
        <div class="flex items-center">
          <h2 class="text-indigo-lightest text-2xl font-hairline">
            Accounts
          </h2>

          <button class="ml-4 btn-primary py-2 px-2 text-xs" @click="showForm">
            <FontAwesomeIcon :icon="faPlus" size="xs" /> <span class="inline-block ml-1">Add Account</span>
          </button>
        </div>
      </LunarColumn>
    </LunarRow>

    <LunarRow v-if="accounts.length">
      <LunarColumn size="w-full">
        <LunarCard>
          <h4 class="text-indigo-lightest font-normal py-4" slot="header">
            <div class="bg-indigo shadow-lg py-2 px-2 rounded-full inline-block mr-2">
              <FontAwesomeIcon style="width: 1.2em" :icon="faSuitcase" />
            </div>
            Your Accounts
          </h4>

          <LunarAccountList :accounts="accounts" />
        </LunarCard>
      </LunarColumn>

      <LunarColumn size="w-full">
        <LunarCard>
          <h4 class="text-indigo-lightest font-normal py-4" slot="header">
            <div class="bg-indigo shadow-lg py-2 px-2 rounded-full inline-block mr-2">
              <FontAwesomeIcon style="width: 1.2em" :icon="faSuitcase" />
            </div>
            Your Accounts
          </h4>

          <LunarTable :columns="columns" :datasource="accounts" with-filter />
        </LunarCard>
      </LunarColumn>
    </LunarRow>
    <LunarRow v-else>
      <p class="text-indigo-lightest">
        It looks like you have no accounts!
      </p>
    </LunarRow>
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faPlus, faSuitcase } from '@fortawesome/fontawesome-free-solid'
  import { mapActions, mapGetters } from 'vuex'

  import LunarAccountForm from './AccountForm'
  import { LunarTable } from '@/app/components/Table'
  import { LunarAccountList } from '@/app/components/Lists'
  import { LunarRow, LunarColumn } from '@/app/components/Layout'
  import { LunarCard } from '@/app/components/Presentational'

  export default {
    name: 'lunar-accounts',

    components: {
      FontAwesomeIcon,
      LunarAccountList,
      LunarRow,
      LunarColumn,
      LunarTable,
      LunarCard
    },

    data () {
      return {
        accounts: [],
        columns: [
          { id: 1, label: 'Name', value: 'name', active: true },
          { id: 2, label: 'Number', value: 'number', active: true },
          { id: 3, label: 'Balance', value: 'balance', active: true }
        ]
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
        this.setDrawer(LunarAccountForm)
      }
    },

    mounted () {
      this.accounts = this.getAccounts
    }
  }
</script>
