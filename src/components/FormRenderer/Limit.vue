<template>
  <div>
    <el-radio-group :value="value" @input="handleTypeChange">
      <el-radio :label="unlimited">不限量</el-radio>
      <el-radio :label="number">
        <span>限量</span>
        <el-input
            class="input"
            :disabled="value === unlimited"
            size="mini"
            :value="number"
            @input="handleNumberChange"
        />
        <span>份</span>
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Limit',

    props: {
      value: {
        type: Number,
        required: true
      },
      unlimited: {
        type: Number,
        default: 999999
      }
    },

    data() {
      return {
        number: 1
      };
    },

    watch: {
      value() {
        if (this.value != this.unlimited) {
          this.number = this.value;
        }
      }
    },

    methods: {
      handleTypeChange(value) {
        this.$emit('input', value);
      },

      handleNumberChange(value) {
        this.number = value;
        this.$emit('input', value);
      }
    }
  });
</script>

<style lang="scss" scoped>
  .input {
    margin: 0 8px;
    width: 80px;
  }
</style>
