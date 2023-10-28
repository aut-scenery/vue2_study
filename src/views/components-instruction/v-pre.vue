<template>
  <div class=''>
    <!-- v-pre指令说明：跳过这个元素和它的子元素的编译过程。可以用来显示原始标签。跳过大量没有指令的节点会加快编译。 -->
    <div class="pre">
      <div class="have" v-pre>
        <h1>这是加了v-pre的效果</h1>
        <div>
          <p>{{ message }}</p>{{ message }}
        </div>
        <!--pre标签能识别json对象中的\n\t等转义字符，展示原始的JSON对象结构。 -->
        <div>{{ dataJson }}</div>
      </div>
      <div class="nohave">
        <h1>这是没有加的效果</h1>
        <div>
          <p>{{ message }}</p>{{ message }}
        </div>
        <h2>不能识别json对象中的\n\t等转义字符</h2>
        <div>{{ dataJson }}</div>
        <h2>pre标签能识别json对象中的\n\t等转义字符，展示原始的JSON对象结构。</h2>
        <pre>{{ dataJson }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      message: 'Hello, world!',
      dataJson: {
        name: '张三',
        age: 18
      }
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
.pre {
  display: flex;
  width: 800px;
  height: 800px;
  div {
    width: 400px;
  }
}
</style>
