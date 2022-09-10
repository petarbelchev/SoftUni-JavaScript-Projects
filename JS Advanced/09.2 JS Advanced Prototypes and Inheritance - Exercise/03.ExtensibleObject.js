function extensibleObject() {
    let proto = {}
    let objForReturn = Object.create(proto)
    objForReturn.extend = function (template) {
        Object.entries(template).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value
            } else {
                objForReturn[key] = value
            }
        })
    }
    return objForReturn
}