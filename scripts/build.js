/**
 * 针对函数库、组件库 等，进行打包
 */

const esbuild = require("esbuild");
// const {
//     dtsPlugin
// } = require('esbuild-plugin-d.ts')
const fs = require('fs')
const fse = require("fs-extra");
const {
    resolve,
    dirname
} = require('path')
const minimist = require('minimist');

const libs = {
    "xk-api": true,
    "xk-store": true,
    "xk-ui": true,
    "shared": true,
    "console-3": false
}

// 解析 target
const args = minimist(process.argv);
const target = args.target;
const pkg_root = resolve('./packages');

if (target) {
    handleTarget(target)
} else {
    handleAll()
}
// 没有target时，打包所有
function handleAll() {
    console.log(`给所有模块打包，读取-${pkg_root}-子工程：`);
    fs.readdir(pkg_root, (e, subs) => {
        if (e) {
            console.log('读取子文件失败')
            return
        }
        console.log(subs)
        subs.forEach((target) => {
            if (libs[target]) handleTarget(target)
        })
    })
}

// 有target的时候，单独打包target
function handleTarget(target) {
    console.log(`target is ${target},is building ...`)
    // target_root
    const target_root = resolve(pkg_root, target);
    const target_conf = require(resolve(target_root, 'package.json'))
    const target_index = resolve(target_root, './src/index.ts')

    fse.emptyDir(dirname(resolve(target_root, target_conf.main))).then(_ => {
        esbuild.build({
            entryPoints: [target_index], // 入口
            bundle: false, // 内联打包
            external: [], // 外联模块列表
            format: 'esm', // 打包格式
            loader: {}, // loader
            minify: false, // 压缩代码
            // outdir:'', // 输出目录
            outfile: resolve(target_root, target_conf.main), // 输出文件名，单文件时使用
            platform: "neutral", // 默认的输出平台
            sourcemap: true,
            treeShaking: true,
            // plugins: [dtsPlugin()]
        })
    }).catch(e => {
        console.log('清空文件夹失败')
        console.log(e)
    })
}

exports = module.exports = {
    handleAll,
    handleTarget
}