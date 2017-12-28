<template>
  <div v-if="accounts.length">
    Accounts.
  </div>
  <div v-else>
    <a class="no-underline" @click.prevent="showForm" href="#">
    <LunarBadgeAlert>
      <span slot="badge">Hey!</span>
      You have no accounts. Let's set you up now.
    </LunarBadgeAlert>
    </a>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { LunarAlert, LunarBadgeAlert } from '@/app/components/Presentational'

  import LunarAccountForm from './AccountForm'

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
    }
  }
</script>
