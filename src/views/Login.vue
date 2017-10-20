<template>
  <div class="loginContainer">
    <el-form :model="loginForm" label-width="100px" ref="loginForm" @submit.native.prevent="formSubmit">
      <el-form-item label="用户名">
        <el-input v-model.trim="loginForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model.trim="loginForm.password" :maxlength="12" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { setStorage } from '../units/common'

  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          phone: 'admin',
          password: 'gznb314159'
        },
        loginRules: {
          phone: [
            { required: true, trigger: 'blur' }
          ],
          passwordNum: [
            { validator: this.pasValidator, trigger: 'blur' },
            { min: 6, max: 12, message: '长度为6-12位' }
          ]
        }
      }
    },
    methods: {
      ...mapActions('login', [
        'login'
      ]),

      formSubmit () {
        this.$refs.loginForm.validate(res => {
          if (res) {
            let form = new FormData()
            form.append('phone', this.loginForm.phone)
            form.append('password', this.loginForm.password)

            this.login(form)
              .then(({ additionalProperties, data }) => {
                setStorage('user', this.loginForm.phone)
                setStorage('sessionId', additionalProperties.sessionId)
                setStorage('token', additionalProperties.token)
                this.$router.push('app')
              }, err => {
                console.log(err)
              })
          }
        })
      }
    }
  }
</script>
