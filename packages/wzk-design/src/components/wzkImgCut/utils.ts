import {nanoid} from "nanoid";

/**
 * 上传图片接口
 * @param blob ： 流
 * @param uploadUrl ： 上传链接
 */
export function uploadImg(blob: Blob, uploadUrl: string): Promise<Response> {
    const formData = new FormData();
    formData.append('file', blob, `${nanoid()}.png`);
    const headers = new Headers()
    headers.append('Content-Type', 'multipart/form-data')
    return new Promise((resolve, reject) => {

        fetch(uploadUrl, {
            method: "POST",
            headers: {},
            body: formData,
        }).then(r => {
            if (r.status < 400) {
                resolve(r)
            } else {
                reject(r)
            }
            resolve(r)
        }).catch(e => {

        })
    })
}

/**
 * 读取一个图片资源，并返回bases64编码
 */
export function getFileToBase64(): Promise<string> {
    return new Promise((resolve, reject) => {
        let input = document.createElement('input') as HTMLInputElement;
        input.type = 'file'
        input.accept = "image/*"
        input.addEventListener('change', e => {
            if (input.files?.length) {
                resolve(fileToImg(input.files[0]))
            } else {
                reject('选择文件失败')
            }
        })
        input.click()
    })
}

/**
 * 内部处理文件的函数
 * @param file
 */
function fileToImg(file: File): Promise<string> {
    if (file.type.startsWith('image')) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.onerror = (e) => {
                console.log(e)
                reject('加载图片错误')
            }
            fileReader.onload = (e) => {
                if (e.target) {
                    resolve((e.target.result as string))
                } else {
                    reject('加载图片错误')
                }
            }
            fileReader.readAsDataURL(file)
        })
    } else {
        return Promise.reject("文件类型错误")
    }
}