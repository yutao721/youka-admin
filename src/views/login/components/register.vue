<template>
  <div>
    <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="register-form">

      <el-form-item prop="username">
        <el-input v-model="registerForm.username" type="text" clearable placeholder="账号">
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model="registerForm.password" type="password" clearable show-password placeholder="密码" @keyup.enter.native="handleRegister">
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>

      <el-form-item prop="confirmPassword">
        <el-input v-model="registerForm.confirmPassword" type="password" clearable show-password placeholder="确认密码" @keyup.enter.native="handleRegister">
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>

      <el-form-item prop="code" v-if="captchaEnabled">
        <el-input v-model="registerForm.code" clearable placeholder="验证码" style="width: 63%" @keyup.enter.native="handleRegister">
          <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
        </el-input>
        <div class="login-code">
          <ReImageVerify ref="ReImageVerify" :code.sync="imgCode" />
        </div>
      </el-form-item>

      <el-form-item style="width:100%;">
        <el-button :loading="loading" size="medium" type="primary" style="width:100%;" @click.native.prevent="handleRegister">
          <span v-if="!loading">注 册</span>
          <span v-else>注 册 中...</span>
        </el-button>
        <div style="float: right;">
          <el-button type="text" @click="handleBack">使用已有账户登录</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { register } from "@/api/login";
import ReImageVerify from "@/components/ReImageVerify";
import loginSettings from '../utils/loginSettings';

export default {
  components: {
    ReImageVerify
  },
  data() {
    const equalToPassword = (rule, value, callback) => {
      if (this.registerForm.password !== value) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    };
    const validatorCode = (rule, value, callback) => {
      if (this.imgCode !== value) {
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      imgCode: "",
      registerForm: {
        username: "",
        password: "",
        confirmPassword: "",
        code: "",
        uuid: ""
      },
      registerRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" },
          { min: 2, max: 20, message: '用户账号长度必须介于 2 和 20 之间', trigger: 'blur' }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" },
          { min: 5, max: 20, message: '用户密码长度必须介于 5 和 20 之间', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, trigger: "blur", message: "请再次输入您的密码" },
          { required: true, validator: equalToPassword, trigger: "blur" }
        ],
        code: [
          { required: true, trigger: "change", message: "请输入验证码" },
          { required: true, validator: validatorCode, trigger: "change" }
        ]
      },
      loading: false,
      captchaEnabled: loginSettings.captchaEnabled
    };
  },
  created() {

  },
  watch: {
    'imgCode': function (val) {
      console.log(val)
    }
  },
  methods: {


    handleBack() {
      this.$parent.currentPage = 0
    },

    handleRegister() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.loading = true;
          register(this.registerForm).then(res => {
            const username = this.registerForm.username;
            this.$alert("<font color='red'>恭喜你，您的账号 " + username + " 注册成功！</font>", '系统提示', {
              dangerouslyUseHTMLString: true,
              type: 'success'
            }).then(() => {
              this.$router.push("/login");
              this.handleBack()
            }).catch(() => { });
          }).catch(() => {
            this.loading = false;
            if (this.captchaEnabled) {
              this.$refs.ReImageVerify.getImgCode();
            }
          })
        }
      });
    }
  }
};
</script>

