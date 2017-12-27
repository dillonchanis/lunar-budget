<template functional>
  <div :class="['px-' + props.gutter, props.size, 'my-4']">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'lunar-table-column',

    functional: true,

    props: {
      gutter: {
        type: [String, Number],
        default: 4
      },

      size: {
        type: String,
        default: 'flex-1'
      }
    }
  }
</script>
