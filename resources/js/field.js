import Vue from 'vue'

Vue.config.devtools = true

Nova.booting((Vue, router) => {
    Vue.component('index-nova-field-checkboxes', require('./components/IndexField'));
    Vue.component('detail-nova-field-checkboxes', require('./components/DetailField'));
    Vue.component('form-nova-field-checkboxes', require('./components/FormField'));
})
