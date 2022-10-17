<template>
  <div>
    <el-form ref="loginForm" :model="loginForm" :rules="updateRules" class="login-form">
      <!-- 用户名 -->
      <el-form-item prop="phone">
        <el-input v-model="loginForm.phone" type="text" placeholder="手机号" clearable>
          <svg-icon slot="prefix" icon-class="phone" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>

      <el-form-item prop="verifyCode">
        <el-input v-model="loginForm.verifyCode" type="text" placeholder="验证码" clearable>
          <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
          <div slot="append">
            <el-button class="ml-2" :disabled="isDisabled" @click="handleGetCode">
              {{ !isDisabled ? verifyBtnText : `${countdown}秒后重发` }}
            </el-button>
          </div>
        </el-input>
      </el-form-item>

      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="密码" show-password clearable @keyup.enter.native="handleLogin">
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>

      <!-- 确认密码 -->
      <el-form-item prop="repeatPassword">
        <el-input v-model="loginForm.repeatPassword" type="password" placeholder="确认密码" show-password clearable @keyup.enter.native="handleLogin">
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>


      <el-form-item style="width:100%;">
        <el-button :loading="loading" size="medium" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          <span v-if="!loading">确 定</span>
          <span v-else>加 载 中...</span>
        </el-button>
      </el-form-item>

      <el-form-item style="width:100%;">
        <el-button :loading="loading" size="medium" style="width:100%;" @click="handleBack">返 回</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
import { encrypt, decrypt } from '@/utils/jsencrypt';
import { updateRules } from '../utils/rule'
import loginSettings from '../utils/loginSettings';
let intervalId = null;

export default {
  name: "Update",
  data() {
    const repeatPassword = [
      {
        validator: (rule, value, callback) => {
          if (value === "") {
            callback(new Error("请输入确认密码"));
          } else if (this.loginForm.password !== value) {
            callback(new Error("两次密码不一致!"));
          } else {
            callback();
          }
        },
        trigger: ['blur', 'change']
      }
    ];
    return {
      verifyBtnText: loginSettings.verifyBtnText,
      countdown: 0,
      loginForm: {
        phone: "",
        verifyCode: "",
        password: "",
        repeatPassword: ""
      },
      loading: false,
      updateRules: { repeatPassword, ...updateRules }
    };
  },
  computed: {
    isDisabled() {
      return this.countdown !== 0
    }
  },
  watch: {},
  created() { },

  methods: {

    // 获取验证码
    handleGetCode() {
      if (intervalId) return;
      this.countdown = loginSettings.verifyBtnTime;
      intervalId = setInterval(() => {
        this.countdown--;
        if (this.countdown === 0) {
          clearInterval(intervalId);
        }
      }, 1000);
    },

    // 返回
    handleBack() {
      this.countdown = 0;
      this.verifyBtnText = loginSettings.verifyBtnText;
      clearInterval(intervalId);
      intervalId = null;
      this.$parent.currentPage = 0
    },

    // 确定
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          alert(1)
        }
      });
    }
  }
};
</script>

