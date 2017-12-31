<template>
  <div class="w-full h-full">
    <label class="sr-only" for="filter">Filter</label>
    <input tabindex="0"
           aria-label="Search"
           placeholder="Search..."
           id="filter"
           name="filter"
           class="w-1/3 h-full appearance-none bg-transparent border-b border-indigo py-2 text-indigo-lightest"
           type="text"
           :query="query"
           @input="updateQuery" />
  </div>
</template>

<script>
  export default {
    name: 'lunar-table-filter',

    props: {
      query: {
        type: String,
        required: true,
        default: ''
      }
    },

    methods: {
      updateQuery (e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>
