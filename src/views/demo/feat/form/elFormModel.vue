<template>
  <div class="app-container">
    <div class="my-10 px-5 text-bold text-lg text-black">
      <h1>ElFormModel组件
        <el-link type="primary" href="https://www.npmjs.com/package/el-form-model" target="_blank">文档地址</el-link>
      </h1>
    </div>

    <el-form-model
        ref="myForm"
        label-width="100px"
        :inline="false"
        :data="formData"
        :items="items"
    >
      <template v-slot:optionSlot="{ label, value }">
        <i class="el-icon-edit" />{{ label }}: {{ value }}
      </template>
      <template v-slot:myCustomContent="{ item, formRef }">
        自定义内容区域 / {{ item.label }}
      </template>
    </el-form-model>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        formData: {
          myInput: 'apple',
          myAutocomplete: 'banana',
          mySelect: 0,
          myCascader: ['zhinan', 'shejiyuanze'],
          myTime: 1628072756566,
          myDate: '2020-01-01',
          myDates: ['2020-01-01', '2020-01-02'],
          myDatetime: 1628072756566,
          myMonth: '2020-01',
          myYear: '2020',
          myDateRangeStart: '2020-01-01',
          myDateRangeEnd: '2020-12-31',
          myDatetimeRangeStart: 1628072756566,
          myDatetimeRangeEnd: 1688072756566,
          myMonthRangeStart: '2020-01',
          myMonthRangeEnd: '2020-12',
          myTextarea: 'orange',
          myRadio: 1,
          myCheckbox: [0, 1],
          myCount: 3,
          mySwitch: true,
          mySlider: 56,
          myRate: 5
        },
        items: [{
          label: '输入框',
          prop: 'myInput',
          type: 'input' // input、number、password、tel、email、url、search
        }, {
          labels: ['输入框1', '输入框2', '输入框3'], // 仅行内表单生效
          props: ['myInput1', 'myInput2', 'myInput3'],
          type: 'input', // input、number、password、tel、email、url、search、autocomplete、count、select、time、date、dates、datetime、month、year、radio、checkbox、switch、rate、color
          labelMultiple: true
        }, {
          label: '自动补全',
          prop: 'myAutocomplete',
          type: 'autocomplete',
          fetchSuggestions: this.querySearch
        }, {
          label: '下拉框',
          prop: 'mySelect',
          type: 'select',
          options: [
            { label: '选项1', value: 0 },
            { label: '选项2', value: 1 },
            { label: 'optionSlot', value: 2, type: 'slot' }
          ]
        }, {
          label: '级联选择器',
          prop: 'myCascader',
          type: 'cascader',
          options: [{
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则'
            }]
          }]
        }, {
          label: '时间',
          prop: 'myTime',
          type: 'time',
          valueFormat: 'timestamp'
        }, {
          label: '日期',
          prop: 'myDate',
          type: 'date',
          valueFormat: 'yyyy-MM-dd'
        }, {
          label: '多个日期',
          prop: 'myDates',
          type: 'dates',
          valueFormat: 'yyyy-MM-dd'
        }, {
          label: '日期时间',
          prop: 'myDatetime',
          type: 'datetime',
          valueFormat: 'timestamp'
        }, {
          label: '月份',
          prop: 'myMonth',
          type: 'month',
          valueFormat: 'yyyy-MM'
        }, {
          label: '年份',
          prop: 'myYear',
          type: 'year',
          valueFormat: 'yyyy'
        }, {
          label: '日期范围',
          props: ['myDateRangeStart', 'myDateRangeEnd'],
          type: 'daterange',
          valueFormat: 'yyyy-MM-dd'
        }, {
          label: '日期时间范围',
          props: ['myDatetimeRangeStart', 'myDatetimeRangeEnd'],
          type: 'datetimerange',
          valueFormat: 'timestamp'
        }, {
          label: '月份范围',
          props: ['myMonthRangeStart', 'myMonthRangeEnd'],
          type: 'monthrange',
          valueFormat: 'yyyy-MM'
        }, {
          label: '长文本框',
          prop: 'myTextarea',
          type: 'textarea', // 行内表单不生效
          autosize: {
            minRows: 2, maxRows: 6
          }
        }, {
          label: '单选框',
          prop: 'myRadio',
          type: 'radio',
          options: [
            { label: '选项1', value: 0 },
            { label: '选项2', value: 1 }
          ],
        }, {
          label: '多选框',
          prop: 'myCheckbox',
          type: 'checkbox',
          options: [
            { label: '选项1', value: 0 },
            { label: '选项2', value: 1 }
          ]
        }, {
          label: '计数器',
          prop: 'myCount',
          type: 'count'
        }, {
          label: '开关',
          prop: 'mySwitch',
          type: 'switch'
        }, {
          label: '滑块',
          prop: 'mySlider',
          type: 'slider' // 行内表单不生效
        }, {
          label: '评分',
          prop: 'myRate',
          type: 'rate'
        }, {
          label: '颜色',
          prop: 'myColor',
          type: 'color'
        }, {
          label: '自定义内容',
          prop: 'myCustomContent',
          type: 'slot'
        }]
      }
    }
  }
</script>
