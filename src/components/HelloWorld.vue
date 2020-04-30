<template>
  <div>
    <el-input placeholder="请输入姓名" v-model="userName">
      <template slot="prepend">姓名</template>
    </el-input>
    <el-input placeholder="请输入密码" v-model="passWord">
      <template slot="prepend">密码</template>
    </el-input>
    <br>
    <el-button type="primary" @click="login" style="width:310px; margin-top: 20px;">登录</el-button>
  </div>
</template>

<script>
  import { getInfo, login } from '@/api/user'

export default {
  name: 'HelloWorld',
  data () {
    return {
        info: {},
        userName: '',
        passWord: ''
    }
  },
  methods: {
      getUserInfo(){
        getInfo()
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      },
      login(){
        const { userName, passWord } = this;
        login({name: userName, passWord })
          .then(res => {
            console.log(res)
            this.$message({
              message: '恭喜你，登录成功',
              type: 'success'
            });
          })
          .catch(err => {
            this.$message.error('很遗憾。登录失败');
          })
      }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div{
    width: 50%;
    margin: 0 auto;
  }
</style>
