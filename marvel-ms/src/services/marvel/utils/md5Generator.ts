var CryptoJS = require("crypto-js");

export const Md5Generator = (ts:any, private_key:any, public_key:any) => {

    return  CryptoJS.MD5(ts + private_key + public_key).toString();

}