import {fetchHttp} from "@wzk/api"

export function getUserInfo(data: any) {
    return fetchHttp.get('/api/v1/userInfo', data)
}