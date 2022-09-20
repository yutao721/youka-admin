<template>
  <el-form ref="form"
           class="form"
           :model="value"
           :rules="rules"
           :inline="inline"
           :label-width="labelWidth"
           :label-position="labelPosition"
           :hide-required-asterisk="hideRequiredAsterisk || readonly"
           :validate-on-rule-change="false"
           :size="size">
    <template v-for="item in items">
      <form-item ref="items" :key="item.key" :item="item" v-model="value">
        <template #default="scope">
          <slot v-bind="scope"/>
        </template>
      </form-item>
    </template>
  </el-form>
</template>

<script>
  import Vue from 'vue';
  import FormItem from './FormItem.vue';

  function getRules(item, formRenderer) {
    let hidden = item.hidden;
    if (typeof hidden === 'function') {
      hidden = hidden(formRenderer.value, formRenderer.data);
    }
    if (hidden) {
      return [];
    }

    let disabled = item.disabled;
    if (typeof disabled === 'function') {
      disabled = disabled(formRenderer.value, formRenderer.data);
    }
    if (disabled) {
      return [];
    }

    switch (item.type) {
      case 'group':
        return item.list.flatMap((x) => getRules(x, formRenderer));
      case 'image':
        return [
          [
            item.key,
            [
              {
                required: item.required ?? true,
                message: `请上传${item.label}`,
                trigger: ['blur', 'change']
              }
            ]
          ]
        ];
      case 'files':
        return [
          [
            item.key,
            [
              {
                required: item.required ?? true,
                message: `请上传图片`,
                trigger: ['blur', 'change']
              }
            ]
          ]
        ];
      case 'readonly':
        return [];
      case 'select':
        return [
          [
            item.key,
            [
              {
                required: item.required ?? true,
                message: `请选择${item.label}`,
                trigger: ['blur', 'change']
              }
            ]
          ]
        ];
      case 'confirmPassword':
        return [
          [
            item.key,
            [
              {
                required: item.required ?? true,
                message: `请输入${item.label}`,
                trigger: ['blur', 'change']
              },
              {
                validator: (_, value, callback) => {
                  if (value !== formRenderer.value[item.password]) {
                    callback('两次密码不一致');
                    return;
                  }
                  callback();
                },
                trigger: ['blur', 'change']
              }
            ]
          ]
        ];

      default:
        return [
          [
            item.key,
            [
              ...( item.validator
                ? [
                  {
                    async validator(rule, value, callback) {
                      try {
                        await item.validator(value, formRenderer);
                        callback();
                      } catch (e) {
                        callback(e.message);
                      }
                    },
                    trigger: ['blur', 'change']
                  }
                ]
                : [] ),
              {
                required: item.required ?? true,
                message: `请${( item.type == 'radio' || item.type == 'checkbox' ) ? '勾选' : '输入'}${item.label}`,
                trigger: ['blur', 'change']
              },
              ...( item.type === 'email'
                ? [
                  {
                    type: 'email',
                    message: '请输入有效的邮箱地址',
                    trigger: ['blur', 'change']
                  }
                ]
                : [] ),
              ...( ['text', 'password'].includes(item.type)
                ? [
                  {
                    min: item.min ?? 0,
                    message: `${item.label}过短`,
                    trigger: ['blur', 'change']
                  }
                ]
                : [] ),
              ...( item.rules || [] )
            ]
          ]
        ];
    }
  }

  /**
   * @typedef {{key?: string, label: string, type: string, placeholder?: string}} ItemBase
   */

  export default Vue.extend({
    name: 'FormRenderer',
    components: { FormItem },
    props: {
      items: {
        /** @type {import('vue').PropType<ItemBase[]>} */
        type: Array,
        required: true
      },
      value: {
        type: Object,
        required: true
      },
      errors: {
        type: Object,
        default: () => {
        }
      },
      inline: {
        type: Boolean,
        default: false
      },
      labelWidth: {
        type: String,
        default: '100px'
      },
      labelPosition: {
        type: String,
        default: 'right'
      },
      hideRequiredAsterisk: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'default'
      },
      readonly: {
        type: Boolean,
        default: false
      },
      data: {
        type: null,
        required: false
      }
    },

    computed: {
      rules() {
        if (this.readonly) {
          return {};
        }

        return Object.fromEntries(this.items.flatMap((x) => getRules(x, this)));
      },

      $items() {
        return Object.fromEntries(
          this.$refs.items.flatMap((x) => Object.entries(x.$items))
        );
      }
    },

    provide() {
      return {
        formRenderer: this
      };
    },

    methods: {
      validate() {
        this.$refs.form.clearValidate();
        return this.$refs.form.validate();
      },

      validateField(...args) {
        return new Promise((resolve, reject) =>
          this.$refs.form.validateField(...args, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          })
        );
      },

      clearValidate(...args) {
        return this.$refs.form.clearValidate(...args);
      }
    }
  });
</script>


