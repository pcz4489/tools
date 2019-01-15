function convertBase64ToBlob(base64) {
    const base64Arr = base64.split(',')
    let imgtype = ''
    let base64String = ''
    if (base64Arr.length > 1) {
      base64String = base64Arr[1]
      imgtype = base64Arr[0].substring(base64Arr[0].indexOf(':') + 1, base64Arr[0].indexOf(';'))
    }
    // 将base64解码
    const bytes = atob(base64String)
    const bytesCode = new ArrayBuffer(bytes.length)
    // 转换为类型化数组
    const byteArray = new Uint8Array(bytesCode)

    // 将base64转换为ascii码
    for (let i = 0; i < bytes.length; i += 1) {
      byteArray[i] = bytes.charCodeAt(i)
    }

    // 生成Blob对象（文件对象)
    return new Blob([bytesCode], { type: imgtype })
  }
export default convertBase64ToBlob
