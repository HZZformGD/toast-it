var ToastTpl = require('./toast.vue').default; // loader 默认启用 esModule 因此要加default
var Toast = {}
Toast.install = (Vue, opts) => {
    if (document.getElementsByClassName('alertBox').length) {
        return
    }
    let tpl = Vue.extend(ToastTpl)
    let $vm = new tpl()
    let mountedTpl = $vm.$mount().$el
    document.body.appendChild(mountedTpl)

    Vue.prototype.$toast = {
        show(opts) {
            if (typeof opts === 'string') {
                $vm.text = opts
            }
            if (typeof opts === 'object') {
                Object.assign($vm, opts)
            }
            $vm.toggleIt({show:true},(e)=> {
                if (e) {
                    typeof opts.success == 'function'&& opts.success(e)
                } else {
                    typeof opts.error == 'function'&& opts.error(e)
                }
            })
        },
        hide() {
            $vm.toggleIt(false)
        }
    }
}

export default Toast
