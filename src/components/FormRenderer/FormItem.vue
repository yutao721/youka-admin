<template>
  <el-form-item v-if="!hidden" :class="{'is-no-asterisk': item.type === 'group',group: item.type === 'group',inline: item.inline,}" :prop="item.key" :required="item.required">

    <template v-if="item.label" #label>
      {{ item.label }}
      <el-tooltip v-if="item.tooltip" popper-class="form-item-tooltip" placement="top" :content="item.tooltip">
        <i class="el-icon-question"/>
      </el-tooltip>
    </template>

    <template v-if="item.type === 'group'">
      <form-item ref="list" v-for="item in item.list" :key="item.key" class="item" :item="item" v-model="value"/>
    </template>

    <template v-else-if="item.type === 'image'">
      <upload-image v-model="value[item.key]"
                    :disabled="item.disabled"
                    :multiple="item.multiple"
                    :fileSize="item.fileSize"
                    :fileType="item.fileType"
                    :isShowTip="item.isShowTip"
                    :limit="item.limit"
                    :readonly="formRenderer.readonly"/>
    </template>

    <template v-else-if="item.type === 'files'">
      <upload-file v-model="value[item.key]"
                   :disabled="item.disabled"
                   :multiple="item.multiple"
                   :fileSize="item.fileSize"
                   :fileType="item.fileType"
                   :isShowTip="item.isShowTip"
                   :limit="item.limit"
                   :readonly="formRenderer.readonly">
        {{ item.button || '点击上传' }}
      </upload-file>
    </template>

    <el-radio-group v-else-if="item.type === 'radio'" v-model="value[item.key]" :disabled="item.disabled">
      <span v-for="radio in item.list" :key="radio.value" class="radio-container" :class="{block: item.block,}">
        <el-radio class="radio" :class="{border: item.border,readonly: formRenderer.readonly,}" :label="radio.value" :border="item.border">
          {{ radio.label }}
          <div v-if="radio.description" class="description">{{ radio.description }}</div>
        </el-radio>
        <slot :item="item" :radio="radio"/>
      </span>
    </el-radio-group>

    <el-checkbox-group v-else-if="item.type === 'checkbox'" v-model="value[item.key]" :disabled="item.disabled">
      <span v-for="checkbox in item.list" :key="checkbox.value" class="radio-container" :class="{block: item.block,}">
        <el-checkbox class="checkbox" :class="{border: item.border,readonly: formRenderer.readonly,}" :label="checkbox.value" :border="item.border">
          {{ checkbox.label }}
          <div v-if="checkbox.description" class="description">{{ checkbox.description }}</div>
        </el-checkbox>

        <slot :item="item" :checkbox="checkbox"/>
      </span>
    </el-checkbox-group>

    <el-row v-else-if="formRenderer.readonly || item.type === 'readonly'" class="row" type="flex" align="middle">
      <span>{{ value[item.key] }}</span>
      <slot :item="item"/>
    </el-row>

    <el-row v-else-if="item.type === 'verifyCode'" type="flex">
      <el-input class="grow"
                :name="item.key"
                v-model="value[item.key]"
                :placeholder="placeholder ||`发送至${value[item.mobile].substring(0, 3)}****${value[item.mobile].substring(7)}`">
      </el-input>
      <get-verify-code style="margin-left: 10px" :type="item.itype" :mobile="value[item.mobile]"/>
    </el-row>


    <el-date-picker v-else-if="item.type === 'datetime'"
                    type="datetime"
                    v-model="value[item.key]"
                    :value-format="item.valueFormat || 'yyyy-MM-dd HH:mm:ss'"
                    :placeholder="placeholder || `请输入${item.label}`"
                    :picker-options="{ disabledDate: item.disabledDate }"/>

    <el-row v-else-if="item.type === 'date'" class="row" type="flex" align="middle">
      <el-date-picker type="date"
                      :disabled="disabled"
                      v-model="value[item.key]"
                      :value-format="item.valueFormat || 'yyyy-MM-dd'"
                      :placeholder="placeholder || `请输入${item.label}`"
                      :picker-options="{ disabledDate: item.disabledDate }"/>
      <slot :item="item"/>
    </el-row>

    <el-row v-else-if="item.type === 'datetimerange'" class="row" type="flex" align="middle">
      <el-date-picker type="datetimerange"
                      v-model="value[item.key]"
                      :value-format="item.valueFormat || 'yyyy-MM-dd HH:mm:ss'"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :picker-options="{ disabledDate: item.disabledDate }"/>
      <slot :item="item"/>
    </el-row>

    <el-row v-else-if="item.type === 'daterange'" class="row" type="flex" align="middle">
      <el-date-picker
          type="daterange"
          v-model="value[item.key]"
          :value-format="item.valueFormat || 'yyyy-MM-dd'"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="{ disabledDate: item.disabledDate }"/>
      <slot :item="item"/>
    </el-row>

    <limit v-else-if="item.type === 'limit'" :unlimited="item.unlimited" v-model="value[item.key]"/>

    <el-select v-else-if="item.type === 'select'"
               :placeholder="placeholder || `请选择${item.label}`"
               :disabled="disabled"
               :multiple="item.limit !== 1"
               :multiple-limit="item.limit || 0"
               :filterable="item.filterable || selectRemote"
               :remote="selectRemote"
               :remote-method="selectRemoteMethod"
               :loading="selectRemoteLoading"
               v-model="value[item.key]">
      <el-option v-for="item in selectRemote ? selectRemoteList : item.list"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value"/>
    </el-select>

    <el-cascader v-else-if="item.type === 'cascade'"
                 :placeholder="placeholder || `请选择${item.label}`"
                 :props="item.props"
                 :options="item.list"
                 :disabled="disabled"
                 v-model="value[item.key]"/>

    <!--    <editor v-else-if="item.type === 'richText'" v-model="value[item.key]"/>-->

    <el-input v-else-if="item.type === 'confirmPassword'"
              type="password"
              :name="item.key"
              :disabled="disabled"
              :placeholder="placeholder || `请输入${item.label}`"
              v-model="value[item.key]"/>

    <el-row v-else class="row" type="flex" align="middle">
      <el-input class="input"
                :name="item.key"
                :type="item.type"
                :disabled="disabled"
                :placeholder="placeholder || `请输入${item.label}`"
                :maxlength="item.max"
                show-word-limit
                v-model="value[item.key]"/>
      <slot :item="item"/>
    </el-row>
  </el-form-item>
</template>

<script>
  import Vue from 'vue';
  // oss 上传文件组件
  import UploadFile from '../FileUpload/uploadByOss';
  // oss 上传图片组件
  import UploadImage from '../ImageUpload/uploadByOss';
  // 自定义 获取验证码组件
  import GetVerifyCode from './GetVerifyCode.vue';
  // 自定义 组件
  import Limit from './Limit.vue';
  // import RichTextEditor from './RichTextEditor.vue';
  // import editor from '@/components/editor';

  /**
   * @typedef {{key?: string, label: string, type: string, placeholder?: string, hidden?(form): boolean, disabled?: boolean | ((form)=> boolean)}} ItemBase
   * @typedef {ItemBase & {type: 'group', list: Item[]}} GroupItem
   * @typedef {ItemBase & {type: 'files', min?: number, max?: number, maxSize?: number, button?: string, description?: string }} FileListItem
   * @typedef {ItemBase & {type: 'verifyCode', itype: number, mobile: string}} VerifyCodeItem
   * @typedef {ItemBase & {type: 'datetime'}} DateTimeItem
   * @typedef {ItemBase & {type: 'date', disabledDate?(date: Date): boolean }} DateItem
   * @typedef {ItemBase & {type: 'radio', border?:boolean, list: {label: string, value: string}[]}} RadioItem
   * @typedef {ItemBase & {type: 'limit', unlimited?: number }} LimitItem
   * @typedef {ItemBase & {type: 'select', list: {label: string, value: string}[], limit?: number }} SelectItem
   * @typedef {ItemBase & {type: 'cascade', list: any[], props: any }} CascadeItem
   * @typedef {ItemBase & {type?: 'text' | 'number'}} InputItem
   * @typedef {GroupItem | FileListItem | VerifyCodeItem | DateTimeItem | DateItem | RadioItem | LimitItem | SelectItem | InputItem} Item
   */

  export default Vue.extend({
    name: 'FormItem',
    components: { UploadFile, UploadImage, GetVerifyCode, Limit },
    inject: ['formRenderer'],

    props: {
      item: {
        /** @type {import('vue').PropType<Item>} */
        type: Object,
        required: true
      },
      value: {
        type: Object,
        required: true
      },
      labelWidth: {
        type: Number,
        required: false
      }
    },

    data() {
      return {
        selectRemoteList: [],
        selectRemoteLoading: false
      };
    },

    computed: {
      hidden() {
        let { hidden } = this.item;
        if (typeof hidden === 'function') {
          hidden = hidden(this.formRenderer.value, this.formRenderer.data);
        }
        return hidden;
      },

      disabled() {
        let { disabled } = this.item;
        if (typeof disabled === 'function') {
          disabled = disabled(this.formRenderer.value, this.formRenderer.data);
        }
        return disabled;
      },

      placeholder() {
        let { placeholder } = this.item;
        if (typeof placeholder === 'function') {
          placeholder = placeholder(this.formRenderer.value, this.formRenderer.data);
        }
        return placeholder;
      },

      $items() {
        if (this.$refs.control) {
          return { [this.item.key]: this.$refs.control };
        }

        if (this.$refs.list) {
          return Object.fromEntries(
            this.$refs.list.flatMap((x) => Object.entries(x.$items))
          );
        }

        return {};
      },

      selectRemote() {
        return typeof this.item.list === 'function';
      }
    },

    methods: {
      async selectRemoteMethod(keyword) {
        this.selectRemoteLoading = true;
        this.selectRemoteList = await this.item.list(this.value, keyword);
        this.selectRemoteLoading = false;
      }
    }
  });
</script>

<style lang="scss">
  .form-item-tooltip {
    max-width: 300px;
    white-space: pre-wrap;
  }
</style>

<style lang="scss" scoped>
  .group:not(.inline) ::v-deep .el-form-item__label {
    float: none;
  }

  .header:not(:first-child) {
    margin-top: 24px;
    padding-top: 24px;
  }

  .group:not(:first-child) {
    border-top: 1px solid #dcdfe6;
  }

  .item {
    display: inline-block;
    vertical-align: top;
    margin-right: 20px;

    &::before,
    &::after {
      display: none !important;
    }
  }

  .row > *::v-deep + * {
    margin-left: 12px;
  }

  .row .input {
    flex: 1 1 auto;
    width: 0;
  }

  .radio-container {
    &.block {
      display: flex;
      height: 40px;
      align-items: center;
    }

    &:not(.block) {
      margin-right: 30px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .radio.border {
    height: auto;
    padding-bottom: 12px;
    text-align: center;

    ::v-deep {
      .el-radio__input {
        display: none;
      }

      .el-radio__label {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  .radio.readonly {
    display: none;

    &.is-checked {
      display: block;
      margin-left: 0 !important;
    }
  }

  .radio .description {
    margin-top: 4px;
  }
</style>
