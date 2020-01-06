

let ARRAY_METHOD = [
    'push',
    'pop',
    'shift',
    'unshift',
    'reverse',
    'sort',
    'splice',
];
let array_method = []
ARRAY_METHOD.forEach(method => {
    array_method.prototype = new Array();
    array_method[method] = function () {
        console.log("调用的是拦截的方法")
        reactive(arguments)
        let res = Array.prototype[method].apply(this, Array.from(arguments))
        return res
    }
})


function defineReactive(target, attr, enumerable, value) {
    Object.defineProperty(target, attr, {
        get() {
            console.log(`你想得到${attr}的值===${value}`)
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

    if (typeof obj === "object") {
        if (obj.hasOwnProperty(key)) {
            defineReactive(obj, key, true, obj[key]);
            if (Array.isArray(obj[key])) {
                obj[key].__proto__ = array_method
            }
            if (typeof obj[key] === "object") {
                reactive(obj[key])
            }
        }
    }


}


