<template>
  <div>
    <component 
      :is="{
        select: 'el-option',
        radio: 'el-radio',
        checkbox: 'el-checkbox'
      }[item.type]"
      v-for="(option, optionsIndex) in item.options"
      :key="item.id + option.value + optionsIndex"
      v-bind="{
        ...option,
        label: item.type === 'select' ? option.label : option.value,
        value: item.type === 'select' ? option.value : null
      }"
    >
      <slot :option="option" />
    </component>
  </div>
</template>

<script>
export default {
  name: 'ElFormModelOptions',
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
