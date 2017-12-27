<template functional>
  <div class="flex flex-wrap mb-4" :class="'-mx-' + props.gutter">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'lunar-row',

    functional: true,

    props: {
      gutter: {
        type: [String, Number],
        default: 4
      }
    }
  }
</script>
