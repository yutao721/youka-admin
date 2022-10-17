<template>
  <div class="app-container">
    <h3 class="text-3xl my-10">富文本上传示例</h3>

    <div class="my-10">
      <h3 class="my-5 text-xl">1.wangeditor单独使用</h3>
      <wangeditor v-model="remark"></wangeditor>
    </div>

    <div class="my-10">
      <h3 class="my-5 text-xl">2.wangeditor在element表单中使用</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name" required>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="活动形式1" prop="desc1" required>
          <div>
            <wangeditor v-model="ruleForm.desc1"></wangeditor>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

    </div>

    <div class="my-10">
      <h3 class="my-5 text-xl">3.FormRenderer中使用</h3>
      <form-renderer
          class="my-10 w-1/2"
          ref="form"
          label-width="190px"
          :items="items"
          :readonly="false"
          v-model="form">
      </form-renderer>
      <div class="flex justify-center">
        <el-button type="primary" @click="handleNextClick">提交认证信息</el-button>
      </div>
    </div>

    <div class="my-10">
      <h3 class="my-5 text-xl">4.wangeditor单独使用readonly</h3>
      <wangeditor v-model="remark" :readonly="true"></wangeditor>
    </div>

  </div>
</template>

<script>
  import wangeditor from '@/components/Editor/wangeditor';
  import FormRenderer from '@/components/FormRenderer/index';

  export default {
    components: { wangeditor, FormRenderer },
    data() {
      return {
        remark: '富文本上传示例',
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          desc2: '',
          desc1: ''
        },
        rules: {
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ],
          desc1: [
            { required: true, message: '请填写活动形式1', trigger: 'blur' }
          ]
        },
        form: {
          verifyProcess: 10,
          socialCreditCode: '123124',
          checkboxKey: [],
          radioKey: '',
          password: '',
          confirmPasswordKey: '',
          remark2: ''
        },
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

        ]
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
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

<style scoped>

</style>
