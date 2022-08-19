import {
    HttpConfig, RequestOptionType, RequestParams, AfterCallList, BeforeCallList
} from "./type"

class Http {
    protected config?: HttpConfig
    protected beforeCall: BeforeCallList // 请求拦截函数列表
    protected afterCall: AfterCallList // 响应拦截函数列表


    constructor(config?: HttpConfig) {
        this.config = config;
        this.beforeCall = []
        this.afterCall = []
    }

    // 请求前拦截器
    before(cb: (config: RequestInit) => RequestInit) {
        this.beforeCall.push(cb)
    }

    after(cb: (res: Response) => any) {
        this.afterCall.push(cb)
    }

    //封装的请求方法
    protected async request(uri: string, options: RequestOptionType): Promise<Response> {
        //前置拼接options ： 添加初始化时请求头，拦截302，默认跨域不报错
        options.headers = {...this.config?.headers};
        options.mode = "cors";
        //    使用拦截器，进行修改
        this.beforeCall.forEach(cb => {
            options = cb(options)
        })
        let url = this.mergeUrl(uri);
        if (options.params) {
            url += '?'
            for (let [k, v] of Object.entries(options.params)) {
                url += `${k}=${v}&`
            }
        }
        try {
            let res = await fetch(url, options)
            this.afterCall.forEach(cb => {
                res = cb(res)
            })
            return res
        } catch (e) {
            return Promise.reject(e)
        }
    }

    // 计算url
    protected mergeUrl(url: string): string {
        return `${this.config?.baseUrl ? this.config.baseUrl : ""}${url}`
    }

    //get 请求
    get(url: string, data?: any): Promise<Response> {
        const options: RequestOptionType = {
            method: "GET",
            params: data
        }
        return this.request(url, options)
    }

    // post 请求
    post(url: string, data?: BodyInit, params?: RequestParams): Promise<Response> {
        const options: RequestOptionType = {
            method: "POST",
            body: data,
            params,
        }
        return this.request(url, options)
    }

}


export {
    Http
}


let httpInstance: Http | null = null;

export default function (config: HttpConfig): Http {
    if (!httpInstance) {
        httpInstance = new Http(config);
    }
    return httpInstance;
}

/**
 *
 * 一、超时断开功能
 *      1.abort
 *      2.Promise.race
 */
