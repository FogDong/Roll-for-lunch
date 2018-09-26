<template>
  <div class="container">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>今天</span>
          <input v-model="input" type="text" autocomplete="off" class="el-input__inner">
          <span>上车了吗？</span>
          <div class="btn">
            <el-button plain size="mini" @click.native="roll">上车!</el-button>
            <el-button type="info" plain size="mini" @click.native="fail">不了不了</el-button>
          </div>
        </div>
        <div v-for="o in result" :key="o.name" class="text item">
          <div class="username">{{o.name}}</div>
          <div class="number">{{o.number}}</div>
        </div>
      </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        result: [],
        refresh: ''
      }
    },
    methods: {
      roll() {
        if (this.input) {
          this
          .$http.get(`http://localhost/api/v1alpha1/number?username=${this.input}`)
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
        } else {
          this.$message({
            message: '请输入名字',
            type: 'warning'
          });
        }
      },
      getResult() {
        this.$http.get(`http:/localhost/api/v1alpha1/result`)
        .then(function(result){
          this.result = []
          result.body.map(n => (
            this.result.push({
              'name': n.username,
              'number': n.number
            })
          ))
        })
      },
      fail() {
        this.$router.push({path: '/guna'});
      }
    },
    mounted() {
      console.log(process.env.BACKEND)
      this.getResult()
      this.refresh = self.setInterval(this.getResult, 5000)
    },
    destroyed() {
      window.clearInterval(this.refresh)
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
  }
  .box-card {
    width: 70%;
    max-width: 400px;
    height: 400px;
    margin: 0 auto;
    overflow: auto;
  }
  #my-input{
    border: 0;
    background-color: #42b983;
    height: 60px;
  }
  .btn {
    padding-top: 20px;
  }
  .clear-fix {
    display: flex;
  }
  .el-input__inner {
    width: 150px;
    border-width: 0 0 1px 0;
    border-radius: 0;
    text-align: center;
  }
  .el-autocomplete > div > input {
    background-color: #42b983;
  }
  .el-input {

  }
  a {
    color: #42b983;
  }
  .text {
    margin: 0 auto;
  }
  .username {
    min-width: 60%;
    text-align: center;
    float: left;
  }
  .number {
  }
</style>
