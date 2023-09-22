<template>
  <div class="login">
    <el-form
      class="login-form"
      :rules="rules"
      label-position="right"
      label-width="80px"
      :model="formData"
      ref="loginForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          prefix-icon="el-icon-user"
          v-model="formData.username"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          prefix-icon="el-icon-s-goods"
          v-model="formData.password"
          show-password
          type="password"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import {login} from '../../api/index'
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      formData: {
        username: "",
        password: "9948d556-1825-416f-934f-b3ce046403e3",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  
  methods: {
    onSubmit() {
      this.$refs.loginForm.validate(async (status) => {
        console.log(status);
        if (status) {
          // console.log('登录')
          const { password } = this.formData;
          // 密码写成 token   用户名随意
          // 9948d556-1825-416f-934f-b3ce046403e3
          // 79b3b12e-9631-467b-9210-c68449c98a35
          // const res = await login(password)
          if (password === "9948d556-1825-416f-934f-b3ce046403e3") {
            // 登陆成功   后端会返回 token  以及用户的信息

            // 将 token  以及用户信息 存储到 浏览器本地   localStorage 
            localStorage.setItem('token', '9948d556-1825-416f-934f-b3ce046403e3')
            localStorage.setItem('userInfo', JSON.stringify({username: 'zz'}))
            this.getInfo()

            this.$router.push("/");
          } else {
            this.$message({
              message: "用户名密码不匹配",
              type: "warning",
              duration: 1000
            });
          }
        }
      });
    },
    ...mapMutations(['getInfo'])
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;
  .login-form {
    width: 400px;
    margin-top: 200px;
  }
}
</style>