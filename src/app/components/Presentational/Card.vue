<template functional>
  <div :class="props.className" class="bg-indigo-darkest border-indigo-darkest shadow-md rounded">
    <header class="bg-indigo-darker border-b border-indigo-darkest shadow flex justify-between rounded-tl rounded-tr px-4">
      <slot name="header"></slot>
    </header>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lunar-card',

    functional: true,

    props: {
      className: {
        type: [String, Array],
      }
    }
  }
</script>
