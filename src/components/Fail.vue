<template>
  <div class="container">
    <span class="text">那你还点进来干嘛呢？</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        result: []
      }
    },
    methods: {
      roll() {
        this
          .$http.get(`http://144.202.89.43:8989/api/v1alpha1/number?username=${this.input}`)
          .then(function(result){
            this.result.push({
              'name': result.body.username,
              'number': result.body.number
            })
            console.log(result)
          })
          .catch(e=> {
            console.log(e)
          })
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
  }
  .text {
    color: white;
  }
</style>
