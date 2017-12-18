<template>
  <div class="flex">
    <template v-if="items.length">
      <div v-for="item in items" :key="item">
        <LunarListItem :text="item" />
      </div>
    </template>
    <LunarListItem v-else>{{ emptyMessage }}</LunarListItem>
  </div>
</template>

<script>
  import LunarListItem from './ListItem'

  export default {
    name: 'lunar-list',

    components: {
      LunarListItem
    },

    props: {
      emptyMessage: {
        type: String,
        default: 'No data was found.'
      },
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>
