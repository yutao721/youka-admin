<template>
  <div class="app-container">
    <div class="my-10 px-5 text-bold text-lg text-black">
      <h1>ElFormModel组件</h1>
    </div>

    <form-renderer
        class="my-10 w-1/2"
        ref="form"
        label-width="190px"
        :items="items"
        :readonly="readonly"
        v-model="form">
    </form-renderer>
    <div class="flex justify-center">
      <el-button type="primary" @click="handleNextClick">提交认证信息</el-button>
    </div>
  </div>
</template>

<script>
  import FormRenderer from '@/components/FormRenderer/index';
  import cityCode from '@/utils/city-code.json';

  export default {
    components: { FormRenderer },
    data() {
      return {
        step: 0,
        readonly: false,
        // 表单item
        items: [
          // radio
          {
            key: 'radioKey',
            label: 'radioLabel',
            type: 'radio',
            list: [
              { label: '苹果', value: '1' },
              { label: '香蕉', value: '2' },
              { label: '菠萝', value: '3' },
              { label: '哈密瓜', value: '4' }
            ]
          },
          // checkbox
          {
            key: 'checkboxKey',
            label: 'checkboxLabel',
            type: 'checkbox',
            list: [
              { label: '苹果', value: '1' },
              { label: '香蕉', value: '2' },
              { label: '菠萝', value: '3' },
              { label: '哈密瓜', value: '4' }
            ]
          },

          // cascade
          {
            key: 'cityCode',
            label: '开户行地点',
            type: 'cascade',
            props: {
              emitPath: false
            },
            list: cityCode.map((item) => ( {
              label: item.region,
              value: 'a' + item.code,
              children: item.regionEntitys?.map((item) => ( {
                label: item.region,
                value: item.code
              } ))
            } ))
          },
          // datetime
          {
            key: 'reservationTime',
            label: '开启预热',
            type: 'datetime',
            tooltip: '在该时间之前，项目为代开始阶段，用户无法查看项目详情并预约项目。',
            validator(value, form) {
              if (form.value.startTime) {
                form.validateField(['startTime']);
              }
            }
          },
          // date
          {
            key: 'idOverTime',
            label: '身份证到期时间',
            type: 'date',
            placeholder: '请选择到期时间',
            valueFormat: 'yyyyMMdd',
            disabled(form) {
              return false;
            },
            disabledDate(date) {
              return date < Date.now();
            }
          },
          // daterange
          {
            key: 'time',
            label: '交易时间',
            type: 'daterange'
          },
          // datetimerange
          {
            key: 'time1',
            label: '交易时间1',
            type: 'datetimerange'
          },
          {
            key: 'businessLicense',
            label: '营业执照',
            type: 'image',
            required: true
          },
          {
            key: 'missKey',
            label: '秘钥',
            type: 'files',
            required: true
          },
          {
            key: 'linkedAccttype',
            label: '银行卡类型',
            type: 'radio',
            list: [
              { label: '法人银行卡', value: 'LEGALREPT_BANK_CARD' },
              { label: '对公账户', value: 'ENTERPRISE_BANK_ACCT' }
            ]
          },
          // input text
          {
            key: 'socialCreditCode',
            label: '统一社会信用代码',
            placeholder: '15、18位字母数字',
            type: 'text',
            required: true,
            max: 18,
            validator(value) {
              if (!value || typeof value !== 'string' || ![15, 18].includes(value.length)) {
                throw new Error('请输入15或18位字母数字');
              }
            },
            disabled(form) {
              return false
            }
          },
          {
            key: 'socialCreditOverTime',
            label: '过期时间',
            type: 'date',
            valueFormat: 'yyyyMMdd',
            hidden(form) {
              // return form.type !== 30;
            },
            disabled(form) {
              return form.noSocialCreditOverTime;
            },
            disabledDate(date) {
              return date < Date.now();
            }
          },
          {
            key: 'businessLicenseName',
            label: '营业执照名称',
            type: 'text',
            max: 30,
            disabled(form) {
              return form.verifyProcess === 10 || form.verifyProcess === 20;
            }
          },
          {
            key: 'address',
            label: '详细地址',
            type: 'text',
            max: 50,
            placeholder: '营业执照上经营场所一栏的完整地址',
            rules: [
              {
                min: 4,
                message: '长度必须大于或等于4个字符',
                trigger: 'blur'
              }
            ]
          },
          {
            key: 'email',
            label: '邮箱',
            placeholder: '请输入企业邮箱',
            type: 'email',
            max: 30
          },
          {
            key: 'remark2',
            label: '描述',
            type: 'richText',
            required: true
          }

        ],
        // 表单model
        form: {
          verifyProcess: 10,
          socialCreditCode: '123124',
          checkboxKey: [],
          radioKey: '',
          password: '',
          confirmPasswordKey: '',
          remark2: ''
        }
      }
    },
    methods: {
      async handleNextClick() {
        try {
          await this.$refs.form.validate();
        } catch {
          return;
        }
        // todo 业务逻辑

      }

    }
  }
</script>
