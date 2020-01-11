let ARRAY_METHOD = [
    'push',
    'pop',
    'shift',
    'unshift',
    'reverse',
    'sort',
    'splice',
];

let Arr = [];

let array_method = []

ARRAY_METHOD.forEach(method => {
    array_method.prototype = new Array();
    array_method[method] = function () {
        console.log("调用的是拦截的方法")
        let res = Array.prototype[method].apply(this, Array.from(arguments))
        return res
    }
})

Arr.__proto__ = array_method