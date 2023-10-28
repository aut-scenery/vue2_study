<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},
  render (h) {
    return h(
      'div',
      {
        class: 'scopedSlotsChildren'
      },
      [
        this.$slots.header,
        (
        <ul>
          {this.data.map(item => (
            <li>
              {this.$scopedSlots.default(item)}
            </li>
          ))}
        </ul>
       ),
        this.$slots.footer,
      ]
    )
  },
  data () {
    return {
      test: {
        name: 'default'
      }
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
