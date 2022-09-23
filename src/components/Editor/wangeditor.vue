<template>
  <div style="border: 1px solid #ccc;">
    <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editor"
        :defaultConfig="toolbarConfig"
        :mode="mode"
    />
    <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="html"
        ref="slotTypeRef"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="onCreated"
        @onChange="onChange"
    />
  </div>
</template>

<script>
  import Vue from 'vue'
  import '@wangeditor/editor/dist/css/style.css'
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
  import axios from 'axios';
  import { uploadFile } from '@/plugins/uploadFile';
  import emitter from 'element-ui/lib/mixins/emitter';

  let uploading = false;
  let fileName = '';
  let progress = 0;
  let cancelTokenSource = null;


  export default Vue.extend({
    mixins: [emitter],
    props: {
      value: {
        type: String,
        required: true
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    components: { Editor, Toolbar },
    watch: {
      html(value) {
        console.log(value);
      },
      readonly(value) {
        if (value) {
          this.editor.disable();
        } else {
          this.editor.enable();
        }
      }
    },
    data() {
      return {
        editor: null,
        html: this.value,
        toolbarConfig: {},
        editorConfig: {
          placeholder: '请输入内容...',
          autoFocus: false,
          MENU_CONF: {
            uploadImage: {
              // 自定义上传
              async customUpload(file, insert) {
                const extensions = ['.jpg', '.jpeg', '.png', '.gif'];
                if (!extensions.some((x) => file.name.toLowerCase().endsWith(x))) {
                  this.$message(`文件后缀必须是${extensions.join('/')}`);
                  return;
                }
                const maxSize = 2 * 1024 * 1024;
                if (file.size > maxSize) {
                  this.$message(`文件必须小于${maxSize / 1024 / 1024}mb`);
                  return;
                }
                insert(await uploadFile(12, file));
              }
            },
            uploadVideo: {
              // 自定义上传
              async customUpload(file, insert) {
                console.log(file);
                const extensions = ['.mp4'];
                if (!extensions.some((x) => file.name.toLowerCase().endsWith(x))) {
                  this.$message(`文件后缀必须是${extensions.join('/')}`);
                  return;
                }
                const maxSize = 100 * 1024 * 1024;
                if (file.size > maxSize) {
                  this.$message(`文件必须小于${maxSize / 1024 / 1024}mb`);
                  return;
                }
                fileName = file.name;
                uploading = true;
                try {
                  cancelTokenSource = axios.CancelToken.source();
                  insert(
                    await uploadFile(
                      12,
                      file,
                      ({ total, loaded }) => {
                        progress = ( ( loaded / total ) * 100 ) | 0;
                      },
                      cancelTokenSource.token
                    )
                  );
                } catch (e) {
                  console.error(e);
                } finally {
                  uploading = false;
                  progress = 0;
                  cancelTokenSource = null;
                }
              }
            }
          }
        },
        mode: 'default' // or 'simple'
      }
    },
    methods: {

      onCreated(editor) {
        this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
      },

      onChange(editor) {
        console.log('onChange', editor.getHtml()) // onChange 时获取编辑器最新内容
        let html = editor.getHtml();
        if (html !== this.value) {
          this.$emit('input', html);
          this.dispatch('ElFormItem', 'el.form.change', [html]);
          this.dispatch('ElFormItem', 'el.form.blur', [html]);
        }
      }
    },
    created() {
      // 解决表单校验 无法触发props 校验的问题
      this.$nextTick(() => {
        const editor = this.editor
        if (editor == null) return
        editor.blur()
        console.log(this.readonly) // onChange 时获取编辑器最新内容
      })

    },

    beforeDestroy() {
      const editor = this.editor
      if (editor == null) return
      editor.destroy() // 组件销毁时，及时销毁编辑器
    }
  })
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style>
  .w-e-full-screen-container {
    z-index: 10000;
  }
</style>
