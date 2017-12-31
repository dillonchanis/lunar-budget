<template>
  <header class="flex flex-row items-center justify-between h-8">
    <LunarTableFilter v-if="withFilter"
                      :query="filter"
                      @input="updateFilter" />

    <div class="lunar-table__options">
      <a class="no-underline text-indigo-lightest" href="#" @click.prevent="toggle">
        <FontAwesomeIcon :icon="faCog" />
      </a>
    </div>
  </header>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faCog } from '@fortawesome/fontawesome-free-solid'
  import { LunarTableFilter } from '..'

  export default {
    name: 'lunar-table-header',

    components: {
      FontAwesomeIcon,
      LunarTableFilter
    },

    props: {
      filter: {
        type: String,
        default: ''
      },
      withFilter: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        open: false
      }
    },

    computed: {
      faCog () {
        return faCog
      }
    },

    methods: {
      toggle () {
        this.open = !this.open
        this.$emit('toggle')
      },
      updateFilter (filter) {
        this.$emit('input', filter)
      }
    }
  }
</script>
