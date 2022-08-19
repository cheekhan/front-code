/**
 * 处理从 input 读取的文件，并返回一个base64
 */

export default function (): Promise<string> {
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