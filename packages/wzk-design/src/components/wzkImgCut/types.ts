import {Ref} from "vue"
import Cropper from "cropperjs"

// 组件的 props 类型
export interface propsType {
    uploadUrl?: string
}

// 组件事件类型
export interface emitsType {
    (e: 'crop', blob: Blob): void,

    (e: "upload-err", msg: any): void
}


// 主逻辑返回值
export interface indexTypes {
    selfKey: Ref<number>,// 刷新组件用的key
    sourceBase64: Ref<string>, // 图片加载后的base64链接

    exit(): void, // 退出函数
    handleClickGetFile(): void, // 上传一个原图
}

// 剪切逻辑返回值
export interface cropperTypes {
    cropper: Ref<Cropper | null>, // 裁剪组件实例
    imgUploading: Ref<boolean>, // 是否正在上传图片
    draw(id: string): Ref<Cropper>, // 图片加载完，绘制画布
    crop(inputCropper?: Ref<Cropper>): Promise<Blob>,//画布操作函数
    zoomIn(inputCropper?: Ref<Cropper>): void,//放大背景图
    zoomOut(inputCropper?: Ref<Cropper>): void,// 缩小背景图
    rotate(inputCropper?: Ref<Cropper>): void,// 旋转背景图
    reset(inputCropper?: Ref<Cropper>): void,// 清空所有修改
}

// 编辑器初始化参数
export type CropperOptions = Cropper.Options