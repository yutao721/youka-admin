import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  name: 'Components',
  alwaysShow: true,
  meta: { title: '组件', icon: 'component|svg' },
  children: [
    {
      path: 'count-to',
      component: () => import('@/views/demo/components/count-to'),
      name: 'CountToDemo',
      meta: { title: 'CountTo' }
    },
    {
      path: 'dnd-list',
      component: () => import('@/views/demo/components/dnd-list'),
      name: 'DndListDemo',
      meta: { title: 'Dnd列表' }
    },
    {
      path: 'drag-kanban',
      component: () => import('@/views/demo/components/drag-kanban'),
      name: 'DragKanbanDemo',
      meta: { title: 'Drag看板' }
    },
    {
      path: 'back-to-top',
      component: () => import('@/views/demo/components/back-to-top'),
      name: 'BackToTopDemo',
      meta: { title: '返回顶部' }
    },

    {
      path: 'cropper',
      component: () => import('@/views/demo/components/cropper'),
      name: 'Cropper',
      meta: { title: 'cropper' }
    },


  ]
}
export default componentsRouter
