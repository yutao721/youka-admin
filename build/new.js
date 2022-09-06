const gulp = require('gulp');
const inquirer = require('inquirer');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const fs = require('fs'); // 导入文件系统模块(fs)语法
const path = require('path'); // path 模块提供了一些用于处理文件路径的小工具
// child_process 模块提供了以与 popen(3) 类似但不完全相同的方式衍生子进程的能力
const child_process = require('child_process');
let queryPageInfo = async () => {
  let answer2 = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: '输入页面的名称',
      validate(input) {
        return Boolean(input);
      }
    },
    {
      type: 'input',
      name: 'desc',
      message: '输入页面的描述',
      validate(input) {
        return Boolean(input);
      }
    },
    {
      type: 'confirm',
      message: '是否添加路由？',
      name: 'isAddRouter'
    }
  ]);
  return Object.assign({}, answer2);
};

let createModule = async info => new Promise((resolve, reject) => {
  console.log('页面名称:', `${info.name}`);
  console.log('页面描述:', `${info.desc}`);
  console.log('创建中....');
  // path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
  let dest = path.resolve(`src/views/${info.name}`);
  // 检查该目录是否存在
  if (fs.existsSync(dest)) {
    console.error('该目录已存在，请重新输入');
    process.exit(0);
  }

  // child_process.exec()完成后将 stdout 和 stderr 传给回调函数， child_process.exec()的同步版本，其将阻塞 Node.js 事件循环
  child_process.execSync(`mkdir  ${dest}`);
  // 开始创建
  gulp.src([
    // 正常文件
    `${__dirname}/template/**/*`
  ])
    // 替换模板内容
    .pipe(replace('{{name}}', info.name))
    .pipe(replace('{{className}}', info.name.replace(/_/g, '-')))
    .pipe(replace('{{desc}}', info.desc))
    .pipe(rename(path => {
      // 只修改文件名
      if (path.extname) {
        path.basename = info.name;
      }
    }))
    .pipe(gulp.dest(dest))
    .on('end', () => {
      // 提示
      console.log(`>>> [${info.name}]文件夹创建完毕，结果在[${dest}]/*中查看`);
      resolve();
    });
});

let registNewRoute = async (answer) => {
  let routePath = `${path.resolve('')}/src/router/index.js`;
  // 在路由文件里添加这句话，代表如果有这个的话就可以添加最新创建的文件路由，保持新创建的文件路由信息在最后
  let routeTag = `// add new route ..`;
  let routeTel = `{
    path: '/${answer.name}',
    component: () => import('../views/${answer.name}/${answer.name}.vue'),
  },
  ${routeTag}`
  // 异步写入文件内容
  fs.writeFileSync(routePath, fs.readFileSync(routePath, 'utf8').replace(routeTag, routeTel));
}

// 入口函数
let main = async () => {
  let moduleInfo = await queryPageInfo();
  console.log(moduleInfo);
  await createModule(moduleInfo);
  if (moduleInfo.isAddRouter) {
    await registNewRoute(moduleInfo);
  }
  console.log('全部创建任务执行完毕');
};

main().then();
