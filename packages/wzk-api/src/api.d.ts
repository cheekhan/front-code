// http 对象的初始化参数
export interface HttpConfig {
    timeout?: number, // 超时时间
    baseUrl?: string, // 请求前缀
    headers?: { [p: string]: string }, // 请求头
}

export type BeforeCallList = Array<(config: RequestOptionType) => RequestOptionType>
export type AfterCallList = Array<(res: Response) => any>
export type RequestParams = { [p: string]: string | boolean | number | null | undefined }

//拓展请求构造函数
export interface RequestOptionType extends RequestInit {
    params?: RequestParams, // 查询字符串
}
