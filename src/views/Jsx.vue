
<script>
export default {
  components: {},
  render () {
  return this.$createElement('div', {
    attrs: {
      class: this.class,
      style: 'font-size: 26px; '
    }
  },
  [
    '这是一个div'
  ]
   )
  },
  data () {
    return {
      class: 'box'
    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted () {
    
  }
}
</script>
<style lang='scss' scoped>
.box {
  color: red;
}
</style>
