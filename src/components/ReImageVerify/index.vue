<!-- 前端校验验证码 -->

<template>
  <div>
    <canvas ref="domRef" width="120" height="34" class="cursor-pointer" @click="getImgCode" />
  </div>
</template>

<script>

function draw(dom, width, height) {
  let imgCode = "";

  const NUMBER_STRING = "0123456789";

  const ctx = dom.getContext("2d");
  if (!ctx) return imgCode;

  ctx.fillStyle = randomColor(180, 230);
  ctx.fillRect(0, 0, width, height);
  for (let i = 0; i < 4; i += 1) {
    const text = NUMBER_STRING[randomNum(0, NUMBER_STRING.length)];
    imgCode += text;
    const fontSize = randomNum(18, 41);
    const deg = randomNum(-30, 30);
    ctx.font = `${fontSize}px Simhei`;
    ctx.textBaseline = "top";
    ctx.fillStyle = randomColor(80, 150);
    ctx.save();
    ctx.translate(30 * i + 15, 15);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(text, -15 + 5, -15);
    ctx.restore();
  }
  for (let i = 0; i < 5; i += 1) {
    ctx.beginPath();
    ctx.moveTo(randomNum(0, width), randomNum(0, height));
    ctx.lineTo(randomNum(0, width), randomNum(0, height));
    ctx.strokeStyle = randomColor(180, 230);
    ctx.closePath();
    ctx.stroke();
  }
  for (let i = 0; i < 41; i += 1) {
    ctx.beginPath();
    ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = randomColor(150, 200);
    ctx.fill();
  }
  return imgCode;
}

function randomNum(min, max) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
}

function randomColor(min, max) {
  const r = randomNum(min, max);
  const g = randomNum(min, max);
  const b = randomNum(min, max);
  return `rgb(${r},${g},${b})`;
}

export default {
  name: "ReImageVerify",
  props: {
    code: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      domRef: '',
      imgCode: ''
    }
  },

  watch: {
    'code': function (newValue) {
      this.setImgCode(newValue)
    },

    'imgCode': function (newValue) {
      this.$emit('update:code', newValue)
    }
  },

  mounted() {
    this.getImgCode()
  },

  methods: {

    setImgCode(code) {
      this.imgCode = code;
    },

    getImgCode() {
      if (!this.$refs.domRef) return;
      this.imgCode = draw(this.$refs.domRef, 120, 38);
    },
  }
}
</script>

