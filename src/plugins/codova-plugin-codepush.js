exports.install = function (Vue, options, cb) {
    document.addEventListener('deviceready', () => {

        if (typeof navigator.camera === 'undefined') {
            return cb(false)
        }

        // pass through the codePush object
        Vue.cordova.codePush = navigator.codePush

        return cb(true)

    }, false)
}
