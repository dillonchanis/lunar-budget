<template functional>
  <div class="flex items-center">
    {{ props.text }}
  </div>
</template>

<script>
  export default {
    name: 'lunar-list-item',

    functional: true,

    props: {
      text: {
        type: [String, Number],
        required: true
      }
    }
  }
</script>
