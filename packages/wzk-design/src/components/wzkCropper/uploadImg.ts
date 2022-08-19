import {
    nanoid
} from "nanoid"

export default function (blob: Blob, uploadUrl: string): Promise<Response> {
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