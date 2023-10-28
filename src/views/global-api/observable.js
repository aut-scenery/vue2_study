import Vue from 'vue';
const customerData = Vue.observable({
  count: 0
}) 
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
  render (h) {
    console.log(customerData)
    return h(
      'button',
      {
        on: {
          click: () => {
            customerData.count++;
            console.log(customerData.count);
          }
        },
        style: {
          display: 'block',
        }
      },
      `click number is ${ customerData.count }`
    )
  },
  mounted () {
    
  }
}

