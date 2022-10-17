import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: { title: '图表', icon: 'chart|svg' },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/demo/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: '键盘图表', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/demo/charts/line'),
      name: 'LineChart',
      meta: { title: '折线图', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/demo/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: '混合图表', noCache: true }
    }
  ]
}

export default chartsRouter
