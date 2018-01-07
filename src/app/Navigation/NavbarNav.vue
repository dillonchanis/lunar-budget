<template>
  <div class="shadow-md bg-indigo-darker">
    <div class="container mx-auto px-4">
      <div class="sm:flex">
        <div v-for="page in pages" :key="page.name" class="flex mr-6">
          <router-link class="items-center py-6 border-b no-underline mr-6 opacity-50 sm:opacity-100"
                      :class="[
                        currentUrl === page.path
                          ? 'border-white text-white opacity-100'
                          : 'border-transparent hover:border-indigo-lighter text-indigo-lightest sm:text-indigo-light hover:text-indigo-lighter'
                      ]"
                      :to="page.path">
            <FontAwesomeIcon class="mr-1" :icon="page.icon" />
            {{ page.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faHome, faUniversity, faCreditCard, faCog } from '@fortawesome/fontawesome-free-solid'

  export default {
    name: 'lunar-navbar-nav',

    components: {
      FontAwesomeIcon
    },

    computed: {
      currentUrl () {
        return this.$route.path
      }
    },

    data () {
      return {
        pages: [
          { name: 'Dashboard', path: '/', icon: faHome },
          { name: 'Budgets', path: '/budgets', icon: faUniversity },
          { name: 'Transactions', path: '/transactions', icon: faCreditCard },
          { name: 'Settings', path: '/settings', icon: faCog }
        ]
      }
    }
  }
</script>
