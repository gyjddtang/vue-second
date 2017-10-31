<script>
  export default {
    name: 'voice',
    data () {
      return {
        num: 10
      }
    },
    mounted () {
      console.log(process.env.NODE_ENV)   // 运行的环境
    },
    methods: {
      test () {
        console.log('test')
      }
    },
    render (h) {
      return (
        <div class="voiceContainer">
          <h1 onClick={ this.test }>{ this.num }</h1>
        </div>
      )
    }
  }
</script>
