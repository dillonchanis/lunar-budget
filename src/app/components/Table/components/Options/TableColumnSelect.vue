<template>
  <div class="mt-4 mb-2" v-if="settings.open">
    <ul class="block list-reset">
      <li class="inline-flex items-center mr-4" v-for="column in columns" :key="column.key">
        <label class="block text-indigo-lightest">
          <input class="mr-1" type="checkbox" v-model="column.active" />
          <span class="text-sm">{{ column.label }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'lunar-table-column-select',

    props: {
      columns: {
        type: Array,
        required: true
      },
      settings: {
        type: Object,
        required: true
      }
    }
  }
</script>
