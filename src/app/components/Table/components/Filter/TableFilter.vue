<template>
  <div class="lunar-table__filter">
    <label class="sr-only" for="filter">Filter</label>
    <input tabindex="0"
           aria-label="Search"
           placeholder="Search"
           id="filter"
           name="filter"
           class="lunar-table__input"
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
