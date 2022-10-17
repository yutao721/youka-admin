import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  // redirect: '/table/complex-table',
  name: 'Table',
  meta: { title: 'Table', icon: 'table|svg' },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/demo/table/dynamic-table/index'),
      name: 'DynamicTable',
      meta: { title: '动态Table' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/demo/table/drag-table'),
      name: 'DragTable',
      meta: { title: '拖拽Table' }
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/demo/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: { title: 'table编辑' }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/demo/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: '综合Table' }
    }
  ]
}
export default tableRouter
