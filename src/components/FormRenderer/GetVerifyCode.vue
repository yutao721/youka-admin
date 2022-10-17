<template>
  <el-button size="small" :disabled="countdown !== 0" @click="handleClick">
    {{ countdown === 0 ? '获取验证码' : `${countdown}秒后重发` }}
  </el-button>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    name: 'GetVerifyCode',
    props: ['type', 'mobile'],
    data() {
      return {
        countdown: 0
      };
    },
    methods: {
      async handleClick() {
        this.countdown = 60;
        const intervalId = setInterval(() => {
          this.countdown--;
          if (this.countdown === 0) {
            clearInterval(intervalId);
          }
        }, 1000);
      }
    }
  });
</script>

