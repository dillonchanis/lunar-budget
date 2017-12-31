<template>
  <div class="px-4 py-4">
    <a href="#l-table-content" class="sr-only">Skip to Table's Content</a>
    <LunarTableHeader
      :with-filter="withFilter"
      @input="updateFilter"
      @toggle="toggleSettings" />

    <LunarTableOptions
      :columns="columns"
      :settings="settings" />

    <figure class="w-full max-w-full overflow-auto" :style="{ 'max-height': maxHeight }">
      <table id="l-table-content"
             role="grid"
             tabindex="0"
             class="w-full"
             :aria-colcount="columns.length"
             :aria-rowcount="rows.length">

        <thead>
          <tr class="lunar-table__row" role="row">
            <th class="lunar-table__checkbox-container" v-if="multiSelect">
              <label class="control control--checkbox">
                <input class="lunar-table__checkbox"
                       type="checkbox"
                       @change="toggleSelectAll"
                       :checked="rows.length === selected.records.length">
                <div class="control__indicator"></div>
              </label>
            </th>
            <th v-for="column in columns"
                v-if="column.active"
                :key="column.value"
                class="lunar-table__head-item"
                :class="{ 'head-item--active': sort.by === column.value }"
                role="columnheader"
                tabindex="0"
                :aria-sort="getAriaSort(column)"
                @click="sortTable(column)"
                @keyup.enter="sortTable(column)">
                <FontAwesomeIcon v-if="sort.by === column.value"
                                 :icon="sort.order === 'asc' ? faSortUp : faSortDown" />
                {{ column.label }}
            </th>
            <th v-if="editable">&nbsp;</th>
          </tr>
        </thead>

        <tbody v-if="rows.length" class="lunar-table__body">
          <template v-for="row in rows">
            <tr class="lunar-table__row"
                role="row"
                :key="row.id"
                @click="selectRow(row)">

              <td class="lunar-table__checkbox-container center" v-if="multiSelect">
                <label class="control control--checkbox">
                  <input class="lunar-table__checkbox"
                         type="checkbox"
                         @click="checkRow(row)"
                         :value="row"
                         v-model="selected.records" />
                  <div class="control__indicator"></div>
                </label>
              </td>

              <template v-for="column in columns">
                <slot :name="column.value" :row="row">
                  <LunarTableDataCell
                    :key="column.id"
                    :editable="editable"
                    :column="column"
                    :row="row"
                    :editID="edit.row"
                    @toggleEdit="editRow" />
                </slot>
              </template>

              <td v-if="editable && row.id !== edit.row">
                <a href="#" @click.prevent="editRow(row)">
                  edit
                </a>
              </td>
              <td v-else-if="editable">
                <a href="#" @click.prevent="saveEdit">
                  save
                </a>
                &nbsp;
                <a href="#" @click.prevent="cancelRowEdit">
                  &times;
                </a>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </figure>

    <!-- TODO -->
    <!-- <div class="lunar-table__page-size-container">
      <l-table-page-size :pageSizes="pagination.pageSizes" @change="updatePageSize" />
      <l-table-pagination :pagination="pagination" @pageSwitch="updatePagination" />
    </div> -->
  </div>
</template>

<script>
import { orderBy, isEqual, map as loMap } from 'lodash'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/fontawesome-free-solid'

import {
  LunarTableHeader,
  LunarTableDataCell,
  LunarTableOptions
} from './components'

export default {
  name: 'lunar-table',

  components: {
    FontAwesomeIcon,
    LunarTableHeader,
    LunarTableOptions,
    LunarTableDataCell
  },

  props: {
    columns: {
      type: Array,
      required: false
    },
    datasource: {
      type: [Object, Array],
      required: false
    },
    editable: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 25
    },
    index: {
      type: Number,
      default: 0
    },
    maxHeight: {
      type: String,
      default: '450px'
    },
    noRecords: {
      type: String,
      default: 'No records found.'
    },
    noResults: {
      type: String,
      default: 'No results found.'
    },
    singleSelect: {
      type: Boolean,
      default: false
    },
    multiSelect: {
      type: Boolean,
      default: false
    },
    sortBy: {
      type: String,
      default: 'id'
    },
    withFilter: {
      type: Boolean,
      default: false
    },
    withPageSize: {
      type: Boolean,
      default: true
    },
    withPagination: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      edit: {
        row: null,
        form: {}
      },
      filter: '',
      pagination: {
        limit: this.limit,
        pageSizes: [25, 50, 100, 'All'],
        current: 1,
        total: 10
      },
      response: {
        data: [],
        errors: []
      },
      settings: {
        open: false
      },
      selected: {
        records: [],
        record: {}
      },
      sort: {
        by: this.sortBy,
        order: 'asc'
      }
    }
  },

  computed: {
    faSortUp () {
      return faSortUp
    },
    faSortDown () {
      return faSortDown
    },
    filteredRows () {
      let data = this.response.data.length ? this.response.data : this.datasource
      return data.filter(row => {
        return Object.keys(row).some(key => {
          return String(row[key]).toLowerCase().indexOf(this.filter.toLowerCase()) > -1
        })
      })
    },
    sortedRows () {
      let data = this.filteredRows
      return orderBy(data, item => {
        let value = item[this.sort.by]
        if (!isNaN(Number(value))) {
          return Number(value)
        }
        return String(value).toLowerCase()
      }, this.sort.order)
    },
    rows () {
      return this.sortedRows
    }
  },

  methods: {
    cancelRowEdit () {
      this.edit.form = {}
      this.edit.row = null
      this.$emit('edit-cancel')
    },
    checkRow (row) {
      const index = this.selected.records.indexOf(row)

      if (~index) {
        this.selected.records.splice(index, 1)
      } else {
        this.selected.records.push(row)
      }

      this.$emit('select-row', this.selected.records)
    },
    editRow (row) {
      this.edit.row = row.id
      this.edit.form = row
      this.$emit('edit-row', row)
    },
    getAriaSort (column) {
      return this.sort.by === column.value ? this.sort.order : 'none'
    },
    getRecords () {
      this.response.data = this.datasource
    },
    paginate (records) {
      const offset = (this.pagination.current - 1) * this.pagination.limit
      return records.slice(offset, offset + this.pagination.limit)
    },
    saveEdit () {
      this.$emit('saveEdit', this.edit.form)
      this.cancelRowEdit()
    },
    selectRow (row) {
      if (!this.multiSelect) {
        if (isEqual(this.selected.record, row)) {
          this.selected.record = {}
          this.$emit('select-row', this.selected.record)
          return
        }

        this.selected.record = {}
        this.selected.record = row
        this.$emit('select-row', this.selected.record)
      }
    },
    sortTable (column) {
      this.sort.by = column.value
      this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc'
      this.$emit('sorted', {
        column: column.value,
        order: this.sort.order
      })
    },
    toggleSelectAll () {
      if (this.selected.records.length) {
        this.selected.records = []
      } else {
        this.selected.records = loMap(this.rows)
      }

      this.$emit('select-all', this.selected.records)
    },
    toggleSettings () {
      this.settings.open = !this.settings.open
    },
    updateFilter (filter) {
      this.filter = filter
      this.$emit('update-filter', filter)
    },
    updatePageSize (limit) {
      this.pagination.limit = limit
      this.getRecords()
    },
    updatePagination (page) {
      this.pagination.current = page
      this.getRecords()
    }
  },

  mounted () {
    this.getRecords()
  }
}
</script>
