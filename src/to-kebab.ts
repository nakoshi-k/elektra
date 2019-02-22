const toKebab = (str : string) => {
    return str.replace(/([^_-])([A-Z])/g,"$1-$2")
    .replace(/_/gi,"-").toLowerCase()
}

export default toKebab
