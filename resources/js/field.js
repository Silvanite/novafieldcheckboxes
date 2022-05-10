import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((Vue) => {
    Vue.component('index-novafieldcheckboxes', IndexField)
    Vue.component('detail-novafieldcheckboxes', DetailField)
    Vue.component('form-novafieldcheckboxes', FormField)
})
