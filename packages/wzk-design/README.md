# 基于vue3的组件库

## 零、使用方式

- 安装组件库： `npm install @cheekhan/design --save`
- 导入组件：`import {wzkImgCut} from "@cheekhan/design"`

## 一、图片裁剪组件库

> 组件库基于 cropperJS 进行开发

### 组件 props

- `uploadUrl?:string` : 截图后，进行图片上传的链接。为空则不上传

### 事件 emits

- `crop` ：裁剪事件。返回裁剪图片的blob。可以用于上传，或者转为base64(URL.createObjectURL(blob))后进行展示

- `upload-err` ：如果配置了上传链接，则会在上传失败时触发。

