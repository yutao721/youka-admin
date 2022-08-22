<template>
  <div>
    <img :src="bg" class="wave" />
    <div class="login-container">
      <!-- 预留位置 可以配置后台图片 -->
      <div></div>
      <div class="login">
        <h3 class="title">{{ title }}</h3>

        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" v-if="currentPage === 0">
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" type="text" placeholder="账号" clearable>
              <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
            </el-input>
          </el-form-item>

          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="密码" show-password clearable @keyup.enter.native="handleLogin">
              <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
            </el-input>
          </el-form-item>

          <!-- 图形验证码 -->
          <el-form-item prop="code" v-if="captchaEnabled">
            <el-input v-model="loginForm.code" placeholder="验证码" style="width: 63%" clearable @keyup.enter.native="handleLogin">
              <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
            </el-input>

            <div class="login-code">
              <ReImageVerify ref="ReImageVerify" :code.sync="imgCode" />
            </div>

          </el-form-item>

          <el-form-item>
            <div class="w-full flex justify-between items-center">
              <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
              <el-button type="text" @click="handleToUpdate" v-if="isShowForget">忘记密码?</el-button>
            </div>
          </el-form-item>


          <el-form-item style="width:100%;">
            <el-button :loading="loading" size="medium" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
              <span v-if="!loading">登 录</span>
              <span v-else>登 录 中...</span>
            </el-button>
            <div style="float: right;" v-if="register">
              <el-button @click="currentPage = 3" type="text">立即注册</el-button>
            </div>
          </el-form-item>
        </el-form>

        <!-- 忘记密码 -->
        <update v-if="currentPage === 4" />
        <!-- 注册 -->
        <register v-if="currentPage === 3" />

      </div>
    </div>

  </div>
</template>

<script>
import Cookies from "js-cookie";
import ReImageVerify from "@/components/ReImageVerify";
import update from "./components/update.vue";
import register from "./components/register.vue";
import { encrypt, decrypt } from '@/utils/jsencrypt';
import loginSettings from './utils/loginSettings';

// 页面背景图
import bg from '@/assets/login/bg.png';
// 登录页面的title,可以在配置文件中设置
import { title } from '@/config';

export default {
  name: "Login",
  components: {
    ReImageVerify,
    update,
    register
  },
  data() {
    const validatorCode = (rule, value, callback) => {
      if (this.imgCode !== value) {
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      bg: bg,  // 背景
      title: title,// 管理后台标题
      imgCode: '', // 图片校验码
      loginForm: {
        username: "admin",
        password: "admin123",
        rememberMe: false,
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ],
        code: [
          { required: true, trigger: "change", message: "请输入验证码" },
          { required: true, validator: validatorCode, trigger: "change" }
        ]
      },
      loading: false,
      // 验证码开关
      captchaEnabled: loginSettings.captchaEnabled,
      // 注册开关
      register: loginSettings.isShowRegister,
      // 忘记密码开关
      isShowForget: loginSettings.isShowForget,
      redirect: undefined,
      // 1:登录
      currentPage: 0
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    },

    'imgCode': function (val) {
      console.log(val)
    }
  },
  created() {
    this.getCookie();
  },

  methods: {

    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get('rememberMe')
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password === undefined ? this.loginForm.password : decrypt(password),
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      };
    },

    // 忘记密码  
    handleToUpdate() {
      this.currentPage = 4
    },


    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          if (this.loginForm.rememberMe) {
            Cookies.set("username", this.loginForm.username, { expires: 30 });
            Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 });
            Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
          } else {
            Cookies.remove("username");
            Cookies.remove("password");
            Cookies.remove('rememberMe');
          }
          this.$store.dispatch("Login", this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || "/" }).catch(() => { });
          }).catch(() => {
            this.loading = false;
            // 重新生成图片验证码
            if (this.captchaEnabled) {
              this.$refs.ReImageVerify.getImgCode();
            }
          });
        }
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}

.login-container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 18rem;
  padding: 0 2rem;
}

.login {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 400px;
}

.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;

  .el-input {
    height: 38px;

    input {
      height: 38px;
    }
  }

  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}

.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}

.login-code {
  width: 33%;
  height: 38px;
  float: right;

  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
</style>
