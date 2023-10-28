
export default {
  components: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted () {

  },
  render (h) {
    throw new Error('oops')
  },
  // 捕获render中的错误
  renderError (h, err) {
    return h('pre', { style: { color: 'red' }}, err.stack)
  }
}

