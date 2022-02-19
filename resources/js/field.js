
import FormField from './components/FormField.vue';
import IndexField from './components/IndexField.vue';
import DetailField from './components/DetailField.vue';

Nova.booting((Vue, router) => {
    Vue.component('index-novafieldcheckboxes', IndexField);
    Vue.component('detail-novafieldcheckboxes', DetailField);
    Vue.component('form-novafieldcheckboxes', FormField);
});
