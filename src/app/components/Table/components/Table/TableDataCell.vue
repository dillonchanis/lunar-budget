<template>
  <td v-if="editID === row.id && column.active && editable"
      class="lunar-table__cell--editable lunar-table__cell"
      :colspan="colSpan">
    <input type="text"
           class="lunar-table__input"
           v-model="row[column.value]">
  </td>
  <td v-else-if="column.active"
      class="lunar-table__cell"
      :colspan="colSpan"
      @dblclick="editRow(row)">
    {{ value(row, column.value) }}
  </td>
</template>

<script>
import { get } from 'lodash'

export default {
  name: 'lunar-table-cell',

  props: {
    column: {
      type: Object
    },
    editable: {
      type: Boolean,
      default: false
    },
    editID: {
      type: Number,
      default: null
    },
    row: {
      type: Object
    },
    colSpan: {
      type: String
    }
  },

  methods: {
    editRow (row) {
      this.$emit('toggleEdit', row)
    },
    value (row, column) {
      return get(row, column)
    }
  },

  mounted () {
    this.edit = this.editable
  }
}
</script>
