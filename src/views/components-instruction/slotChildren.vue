
<script>
export default {
  components: {},
  data () {
    return {
      name: "这是作用域插槽",
      name1: '这是作用域插槽的简写'
    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted () {
    console.log(this.$slots)
    console.log(this.$scopedSlots)
  },
  render (h) {
    return h(
      'div',
      {
        class: 'default'
      },
      [
        this.$slots.default,
        this.$slots.haveName,
        this.$slots.clearWhite,
        this.$scopedSlots.actionScope(this.name),
        this.$scopedSlots.clearWhiteScope(this.name1)
      ]
    )
  }
}
</script>
<style lang='scss' scoped>

</style>
