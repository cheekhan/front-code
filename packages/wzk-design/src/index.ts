import {createApp} from "vue"
import 'element-plus/dist/index.css';

import wzkImgCut from "./components/wzkImgCut/index.vue";
// import wzkCropper from "./components/wzkCropper/index.vue";
import wzkLogin from "./components/wzkLogin/index.vue";


export {
    wzkImgCut,
    // wzkCropper,
    wzkLogin,
}

export default function xkDesignElement() {
    return {
        wzkImgCut: createApp(wzkImgCut),
        // wzkCropper: createApp(wzkCropper),
        wzkLogin: createApp(wzkLogin)
    }
}