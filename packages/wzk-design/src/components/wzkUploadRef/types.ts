// 单个图片信息对象
export interface imgInfo {
    name: string, // 图片名称
    size: number, // 图片大小
    type: string, // 图片格式
    isCloud: boolean, // 是否在云端已存在
    isUploading: boolean, // 是否正在上传
    isUploadSuccess: boolean, // 是否已经上传成功
    src: string, // 图片链接：url或者base64
}