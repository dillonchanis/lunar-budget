<template>
  <header class="lunar-table__header">
    <LunarTableFilter v-if="withFilter" :query="filter" @input="updateFilter" />

    <div class="lunar-table__options">
      <a class="options-link" href="#" @click.prevent="toggle">
        cog
      </a>
    </div>
  </header>
</template>

<script>
  import { LunarTableFilter } from '..'

  export default {
    name: 'lunar-table-header',

    components: {
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
