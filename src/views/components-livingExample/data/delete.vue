<template>
  <div class='delete'>
    <div>
      <div>非响应式</div>
      <div>name: {{ person.name }}</div>
      <div>age: {{ person.age }}</div>
      <button @click="deleteAge">非响应删除年龄</button>
    </div>
    <div>
      <div>响应式</div>
      <div>name: {{ people.name }}</div>
      <div>age: {{ people.age }}</div>
      <button @click="deleteAge1">响应式删除年龄</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      person: {
        name: 'John',
        age: 27,
        children: [
          {
            name: 'Amy',
            age: 4
          }
        ]
      },
      people: {
        name: 'Sam',
        age: 2
      },
    }
  },
  computed: {},
  watch: {},
  methods: {
    deleteAge () {
      delete this.person.age
    },
    deleteAge1 () {
      this.$delete(this.people, 'age')
    }
  },
  mounted () {

  }
}
</script>
<style lang='scss' scoped>
.delete {
  display: flex;
  width: 800px;
  height: 800px;
}
</style>
