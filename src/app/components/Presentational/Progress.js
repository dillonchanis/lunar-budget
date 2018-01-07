export default {
  name: 'lunar-progress',

  functional: true,

  props: {
    fill: {
      type: Number,
      default: '0'
    }
  },

  render: (h, { props }) => {
    const fillStyle = { width: props.fill + '%' }
    return (
      <div class="w-full bg-indigo-darker shadow">
        <div class="bg-indigo py-1"
            style={ fillStyle }>
          <span class="sr-only">{ props.fill }%</span>
        </div>
      </div>
    )
  }
}
