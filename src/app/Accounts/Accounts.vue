<template>
  <div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'lunar-accounts',

    computed: {
      ...mapGetters({
        getAccounts: 'accounts/getAccounts'
      })
    }
  }
</script>
