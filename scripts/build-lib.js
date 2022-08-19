/**
 * 针对函数库、组件库 等，进行打包
 */

// const esbuild = require("esbuild");
// const {
//     dtsPlugin
// } = require('esbuild-plugin-d.ts')
const fs = require('fs')
// const fse = require("fs-extra");
const {
    resolve,
    // dirname
} = require('path')
const minimist = require('minimist');
const execa = require("execa")

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
    const r = execa.commandSync(`pnpm --filter ${target} run build`);
    console.log(r.stdout)

}

exports = module.exports = {
    handleAll,
    handleTarget
}