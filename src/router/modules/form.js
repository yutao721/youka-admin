import Layout from '@/layout'

const formRouter = {
  'name': 'Form',
  'path': '/form',
  'hidden': false,
  'redirect': 'noRedirect',
  'component': Layout,
  'alwaysShow': true,
  'meta': { 'title': '表单', 'icon': 'tool|svg', 'noCache': false, 'link': null },
  'children': [
    {
      'name': 'Element',
      'path': 'element',
      'hidden': false,
      component: () => import('@/views/demo/feat/form/element'),
      'meta': { 'title': 'element', 'icon': 'logos:element', 'noCache': false, 'link': null }
    },
    {
      'name': 'ElFormSchema',
      'path': 'elFormSchema',
      'hidden': false,
      component: () => import('@/views/demo/feat/form/elFormSchema'),
      'meta': { 'title': 'elFormSchema', 'icon': 'file-icons:json-1', 'noCache': false, 'link': null }
    },
    {
      'name': 'ElFormModel',
      'path': 'elFormModel',
      'hidden': false,
      component: () => import('@/views/demo/feat/form/elFormModel'),
      'meta': { 'title': 'elFormModel', 'icon': 'carbon:model', 'noCache': false, 'link': null }
    },
    {
      'name': 'ElFormRenderer',
      'path': 'elFormRenderer',
      'hidden': false,
      component: () => import('@/views/demo/feat/form/elFormRenderer'),
      'meta': { 'title': 'elFormRenderer', 'icon': 'carbon:model', 'noCache': false, 'link': null }
    }

  ]
}
export default formRouter
