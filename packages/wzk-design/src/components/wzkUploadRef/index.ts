import {ref} from "vue"
import {imgInfo} from "./types"
import imgDemo from "../../assets/m-01.png"


const images = ref<imgInfo[]>([]); // 所有的图片
const showDialog = ref(false); // 进行弹窗
const isBreak = ref(true); // 是否在非标准的容器中，默认是非标准容器，不展示上传

// 获取图片信息
function getImages() {
    console.log('调用了方法');
    showDialog.value = true;
    // dev 环境下，随机是否为标准容器
    isBreak.value = (Math.random() > 0.5);
    console.log(isBreak.value)
    images.value = [
        {
            src: imgDemo,
            name: "图片01",
            size: 999,
            type: 'jpg',
            isCloud: false,
            isUploading: false,
            isUploadSuccess: false
        },
        {
            src: imgDemo,
            name: "图片02",
            size: 999,
            type: 'jpg',
            isCloud: true,
            isUploading: false,
            isUploadSuccess: false
        },
        {
            src: imgDemo,
            name: "图片03",
            size: 999,
            type: 'jpg',
            isCloud: false,
            isUploading: true,
            isUploadSuccess: false
        },
        {
            src: imgDemo,
            name: "图片04",
            size: 999,
            type: 'jpg',
            isCloud: false,
            isUploading: false,
            isUploadSuccess: true
        },
    ]
}


export {
    images,
    showDialog,
    isBreak,
    getImages
}

export default function () {
    return {
        images,
        showDialog,
        isBreak,
        getImages
    }
}