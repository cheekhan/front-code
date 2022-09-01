import {defineStore} from "pinia"

interface usereStoreTypes {
    name: string,
    uid: number,
    avatar: string
}

export default defineStore("userInfo", {
    state: () => {
        return {
            name: "管理员",
            uid: 1,
            avatar: "http://sssss.png"
        }
    },
    getters: {
        userName(state) {
            return `name is :${state.name}`
        }
    },
    actions: {
        save(info: usereStoreTypes) {
            this.name = info.name
            return new Promise((resolve, reject) => {
                resolve('1')
            })
        }
    }
})