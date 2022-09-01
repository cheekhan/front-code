import {createHmac} from "node:crypto"

const TC = Math.floor(new Date().getTime() / 1000 / 30);
const key = 'keystroked';

const hmac = createHmac('sha1', key)
hmac.update(TC + '')

console.log(hmac.digest())

