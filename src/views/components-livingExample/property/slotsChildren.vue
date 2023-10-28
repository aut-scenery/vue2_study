
<script>
export default {
  render (createElement) {
    var header = this.$slots.header
    var body = this.$slots.default
    var footer = this.$slots.footer
    return createElement('div', [
      createElement('header', header),
      createElement('main', body),
      createElement('footer', footer)
    ])
  },
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
    console.log(this.$slots, '$slots')
    console.log(this.$scopedSlots, '$scopedSlots')
  }
}
</script>
<style lang='scss' scoped>

</style>
