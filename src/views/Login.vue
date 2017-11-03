<template>
  <section class="loginContainer">
    <el-form
      :model="loginForm"
      :rules="loginRules"
      status-icon
      label-width="100px"
      ref="loginForm"
      @submit.native.prevent="formSubmit"
    >
      <el-form-item label="用户名" prop="phone">
        <el-input v-model.trim="loginForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model.trim="loginForm.password" :maxlength="12" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { setStorage } from '../units/common'

  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          phone: void 0,
          password: void 0
        },
        loginRules: {
          phone: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度为6-12位' }
          ]
        }
      }
    },
    computed: {
      ...mapState('login', [
        'addRoutes'
      ])
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
//                this.$router.addRoutes(this.addRoutes)   // 动态添加路由
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
