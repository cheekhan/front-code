/**
 * 裁剪逻辑
 */
import {propsType, emitsType, cropperTypes, CropperOptions} from "./types"
import {ref, Ref} from "vue"
import Cropper from "cropperjs";
import {uploadImg} from "./utils"


const options: CropperOptions = {
    viewMode: 1,
    dragMode: "move",
    guides: false,
    background: false,
    autoCrop: true,
    // ready(event: Cropper.ReadyEvent<EventTarget>) {
    //     cropper.value?.setAspectRatio(1)
    // }
}


export default function (props: propsType): cropperTypes {
    const createCropper = ref<Cropper | null>(null)
    const imgUploading = ref(false); // 是否正在上传
    // 绘制画布
    function draw(id: string): Ref<Cropper> {
        console.log(id)
        const img = document.getElementById(id) as HTMLImageElement;
        const cut = new Cropper(img, options);
        createCropper.value = cut;
        return ref(cut)
    }

    //画布操作函数:成功时，回调blob
    function crop(inputCropper?: Ref<Cropper>): Promise<Blob> {
        const cut = inputCropper ? inputCropper : createCropper;
        if (cut.value) {
            const cropCanvas = cut.value.getCroppedCanvas();
            return new Promise((resolve, reject) => {
                cropCanvas.toBlob(blob => {
                    if (blob) {
                        if (props.uploadUrl) { // 需要上传图片
                            imgUploading.value = true;
                            uploadImg(blob, props.uploadUrl)
                                .then((r: Response) => {
                                    resolve(blob)
                                })
                                .catch(e => {
                                    console.log('上传失败')
                                    reject(e)
                                })
                                .finally(() => {
                                    imgUploading.value = false;
                                });
                        } else { // 直接将图片返回调用方
                            resolve(blob)
                        }
                    } else {
                        reject('未获取到有效的blob')
                    }
                })
            })
        } else {
            return Promise.reject('未获取到有效的cropper实例');
        }
    }

    // 放大背景图
    function zoomIn(inputCropper?: Ref<Cropper>) {
        const cut = inputCropper ? inputCropper : createCropper;
        cut.value?.zoom(0.1);
    }

    // 缩小背景图
    function zoomOut(inputCropper?: Ref<Cropper>) {
        const cut = inputCropper ? inputCropper : createCropper;
        cut.value?.zoom(-0.1)
    }

    // 旋转背景图
    function rotate(inputCropper?: Ref<Cropper>) {
        const cut = inputCropper ? inputCropper : createCropper;
        cut.value?.rotate(90)
    }

    // 清空所有修改
    function reset(inputCropper?: Ref<Cropper>) {
        const cut = inputCropper ? inputCropper : createCropper;
        cut.value?.reset()
    }

    return {
        cropper: createCropper, imgUploading, crop, zoomIn, zoomOut, rotate, reset, draw
    }

}
























