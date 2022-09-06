/**
 * 抽离的主逻辑
 * TODO :
 *  1.解决多个引用时，冲突的问题
 */
import {propsType, indexTypes} from "./types"
import {ref} from "vue"
import {getFileToBase64} from "./utils"
import {nanoid} from "nanoid"

export default function (props: propsType): indexTypes {
    const selfKey = ref(1)
    const sourceBase64 = ref("")
    const containerId = ref(nanoid());


    function exit() {
        selfKey.value += 1;
        sourceBase64.value = ''

    }

    function handleClickGetFile() {
        getFileToBase64().then((base64: string) => {
            sourceBase64.value = base64
        })
    }

    return {
        selfKey, sourceBase64, exit, handleClickGetFile, containerId
    }
}