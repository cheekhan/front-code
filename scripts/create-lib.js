import fs from 'fs';
import fse from 'fs-extra';
import { resolve } from 'path';
import minimist from 'minimist';
import execa from 'execa';


const root_path = resolve('./packages');
// 解析 target参数
const args = minimist(process.argv);
const package_name = args.g;

if (package_name) {
  checkPackagePath(root_path, package_name).then(_ => {
    const package_path = resolve(root_path, package_name);
    fse.ensureDir(package_path).then(_ => {
      createTsProject(package_path);
    }).catch(e => {
      console.error(`** 创建子工程目录失败：${e}`);
    });
  }).catch(() => console.error('** 子工程名称重复'));

} else {
  console.error('** 请使用参数 -g <工程名> 来创建子工程');
}

/**
 * 检测生成工程名是否重复
 */
function checkPackagePath(root, name) {
  return new Promise((resolve, reject) => {
    fs.readdir(root, (e, files) => {
      if (e) {
        console.error('** 意外原因导致进程停止');
        reject();
      } else {
        const repeat = files.some(v => {
          return v === name;
        });
        if (repeat) {
          reject();
        } else {
          resolve();
        }
      }
    });
  });
}

/**
 * 生成ts的工程 ： 使用rollup构建
 */
function createTsProject(package_path) {
  console.log(`** 在${package_path} 下创建ts工程`);
  // src / index.ts
  const indexTs = `export default { name : '${package_name}'}`;
  fse.outputFile(resolve(package_path, './src/index.ts'), indexTs)
    .catch(e => {
      console.log('创建 src/index.ts 失败');
      console.log(e);
    });
  // rollup.config.js
  const rollupJs = `import typescript2 from 'rollup-plugin-typescript2';    
    export default {
        input: './src/index.ts',
        output: [{
            file: "./dist/index.js",
            format: "esm",
        }],
        plugins: [
            typescript2({
                clean: true,
                useTsconfigDeclarationDir: true,
            }),
        ]
    }`;
  fse.outputFile(resolve(package_path, './rollup.config.js'), rollupJs)
    .catch(e => {
      console.log('创建 rollup.config.js 失败');
      console.log(e);
    });
  // paclage.josn
  fse.outputJson(resolve(package_path, './package.json'), {
    'name': package_name,
    'version': '1.0.0',
    'description': '',
    'main': 'src/index.ts',
    'types': 'dist/type.d.ts',
    'scripts': {
      'dev': 'rollup --config rollup.config.js -w', 'build': 'rollup --config rollup.config.js',
    },
    'keywords': [],
    'author': '',
    'license': 'ISC',
  })
    .catch(e => {
      console.log('创建 paclage.json 失败');
      console.log(e);
    });
  // tsconfig.json
  fse.outputJson(resolve(package_path, './tsconfig.json'), {
    'compilerOptions': {
      'target': 'es2016',
      'module': 'ES6',
      'declaration': true,
      'esModuleInterop': true,
      'forceConsistentCasingInFileNames': true,
      'strict': true,
      'skipLibCheck': true,
      'moduleResolution': true,
    },
  })
    .catch(e => {
      console.log('创建 tsconfig.json 失败');
      console.log(e);
    });
  // type.d.ts
  fse.outputFile(resolve(package_path, './type.d.ts'), '// 全局声明文件')
    .catch(e => {
      console.log('创建 type.d.ts 失败');
      console.log(e);
    });
}