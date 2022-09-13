import {fetchHttp} from "@cheekhan/api"

export function getUserInfo(data: any) {
    return fetchHttp.get('/api/v1/userInfo', data)
}