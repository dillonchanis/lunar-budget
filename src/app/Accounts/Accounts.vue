<template>
  <div v-if="accounts.length">
    Accounts.
  </div>
  <div v-else>
    <router-link :to="{ name: 'account-form' }" class="no-underline">
      <LunarBadgeAlert>
        <span slot="badge">Hey!</span>
        You have no accounts. Let's set you up now.
      </LunarBadgeAlert>
    </router-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { LunarAlert, LunarBadgeAlert } from '@/app/components/Presentational'

  export default {
    name: 'lunar-accounts',

    components: {
      LunarAlert,
      LunarBadgeAlert
    },

    data () {
      return {
        accounts: []
      }
    },

    computed: {
      ...mapGetters({
        getAccounts: 'accounts/getAccounts'
      })
    }
  }
</script>
