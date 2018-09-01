import Vue from 'vue'

Vue.config.devtools = true

Nova.booting((Vue, router) => {
    Vue.component('index-novafieldcheckboxes', require('./components/IndexField'));
    Vue.component('detail-novafieldcheckboxes', require('./components/DetailField'));
    Vue.component('form-novafieldcheckboxes', require('./components/FormField'));
})
