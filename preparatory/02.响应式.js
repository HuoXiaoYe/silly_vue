


function defineReactive(target, attr, enumerable, value) {
    Object.defineProperty(target, attr, {
        get() {
            console.log(`你想得到${attr}的值`)
            return value
        },
        set(newVal) {
            console.log(`你想设置${attr}的值`)
            value = newVal
        },
        enumerable: !!enumerable,
        configurable: true,
        // value
    })
}
function reactive(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            defineReactive(obj, key, true, obj[key]);
            if (typeof obj[key] === "object") {
                reactive(obj[key])
            }
        }
    }
}


