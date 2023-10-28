<template>
<div class=''>
  <button @click="a++">a +</button>
  <button @click="b++">b+</button>
  <button @click="person.student.age++">age +</button>
  <div>
    a: {{ a }}
  </div>
  <div>
    b: {{ b }}
  </div>
  <div>
    age: {{ person.student.age }}
  </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
       a: 1,
       b: 2,
       person: {
         student: {
          age: 12,
         }
       }
    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted () {
   this.$watch('person.student.age', (newVal, oldVal) => {
    console.log(newVal, oldVal)
   })
   this.$watch(function () {
    return this.a + this.b
   }, (newVal, oldVal) => {
    console.log(newVal, oldVal)
   })
  }
}
</script>
<style lang='scss' scoped>
button {
  width: 50px;
  height: 20px;
  margin-left: 20px;
}
</style>
