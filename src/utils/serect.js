// 引入AES源码js
const CryptoJS = require('crypto-js')

// 默认的KEY与IV如果没有给
const key = CryptoJS.enc.Utf8.parse('AOWQ4P0YEC4YXUKS') // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('O3V2GCL1K2HNZ9Y7') // 十六位十六进制数作为密钥偏移量

// 解密方法
export function Decrypt(word) {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

// 加密方法
export function Encrypt(word) {
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.ciphertext.toString().toUpperCase()
}
