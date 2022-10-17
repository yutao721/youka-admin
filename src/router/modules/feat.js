import Layout from '@/layout'
import ParentView from '@/components/ParentView/index';

const featRouter = {
    'name': 'Feat',
    'path': '/feat',
    'hidden': false,
    'redirect': 'noRedirect',
    'component': Layout,
    'alwaysShow': true,
    'meta': { 'title': '功能', 'icon': 'tool|svg', 'noCache': false, 'link': null },
    'children': [
      {
        'name': 'Icon',
        'path': 'icon',
        'hidden': false,
        component: () => import('@/views/demo/feat/icon/index'),
        'meta': { 'title': '图标', 'icon': 'ion:settings-outline', 'noCache': false, 'link': null }
      },
      {
        'name': 'Windi',
        'path': 'windi',
        'hidden': false,
        component: () => import('@/views/demo/feat/windi/index'),
        'meta': { 'title': 'windi', 'icon': 'simple-icons:windicss', 'noCache': false, 'link': null }
      },
      {
        'name': 'Upload',
        'path': 'upload',
        'hidden': false,
        'component': ParentView,
        'redirect': 'noRedirect',
        'alwaysShow': true,
        'meta': { 'title': '上传组件', 'icon': 'bytesize:upload', 'noCache': false, 'link': null },
        'children': [
          {
            'name': 'UploadImage',
            'path': 'uploadImage',
            'hidden': false,
            component: () => import('@/views/demo/feat/upload/uploadImage'),
            'meta': { 'title': '上传图片', 'icon': 'bi:image-fill', 'noCache': false, 'link': null }
          },
          {
            'name': 'UploadFile',
            'path': 'uploadFile',
            'hidden': false,
            component: () => import('@/views/demo/feat/upload/uploadFile'),
            'meta': { 'title': '上传文件', 'icon': 'icon-park-solid:image-files', 'noCache': false, 'link': null }
          }
        ]
      },
      {
        'name': 'Editor',
        'path': 'editor',
        'hidden': false,
        component: () => import('@/views/demo/feat/editor/index'),
        'meta': { 'title': '富文本', 'icon': 'dashicons:editor-paste-word', 'noCache': false, 'link': null }
      },
      {
        'name': 'Clipboard',
        'path': 'clipboard',
        'hidden': false,
        component: () => import('@/views/demo/feat/clipboard/index'),
        'meta': { 'title': 'clipboard', 'icon': 'clipboard|svg', 'noCache': false, 'link': null }
      },
      {
        'name': 'Pdf',
        'path': 'pdf',
        'hidden': false,
        component: () => import('@/views/demo/feat/pdf/index'),
        'meta': { 'title': 'PDF', 'icon': 'pdf|svg', 'noCache': false, 'link': null }
      },
      {
        path: '/pdf/download',
        component: () => import('@/views/demo/feat/pdf/download'),
        hidden: true
      }
    ]
  }
export default featRouter
