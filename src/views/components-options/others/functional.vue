<template>
<div class=''>
    <functional-component :data="data"></functional-component>
    <button @click="change('img')">图片组件</button>
    <button @click="change('video')">视频组件</button>
    <button @click="change('text')">文本组件</button>
</div>
</template>

<script>
import functionalComponent from './functional-component';
export default {
  components: {
    functionalComponent
  },
  data () {
    return {
       data: {},
    }
  },
  computed: {},
  watch: {},
  methods: {
    change: function (type) {
      console.log("输入类型：" + type);
      switch (type) {
        case 'img':
          this.data = {
            type: 'img',
            url: 'http://pic-bucket.ws.126.net/photo/0001/2019-02-07/E7D8PON900AO0001NOS.jpg'
          }
          break;
        case 'video':
          this.data = {
            type: 'video',
            url: 'http://wxapp.cp31.ott.cibntv.net/6773887A7F94A71DF718E212C/03002002005B836E73A0C5708529E09C1952A1-1FCF-4289-875D-AEE23D77530D.mp4?ccode=0517&duration=393&expire=18000&psid=bbd36054f9dd2b21efc4121e320f05a0&ups_client_netip=65600b48&ups_ts=1549519607&ups_userid=21780671&utid=eWrCEmi2cFsCAWoLI41wnWhW&vid=XMzc5OTM0OTAyMA&vkey=A1b479ba34ca90bcc61e3d6c3b2da5a8e&iv=1&sp='
          }
          break;
        case 'text':
          this.data = {
            type: 'text',
            content: '《流浪地球》中的科学：太阳何时吞并地球？科学家已经给出时间表'
          }
          break;
        default:
          console.log("data 类型不合法：" + type);
      }
    }
  },
  mounted () {
    this.change('img');
  }
}
</script>
<style lang='scss' scoped>

</style>
