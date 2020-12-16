import Vue from 'vue';
import VueFormGenerator from "vue-form-generator";
import Multiselect from 'vue-multiselect';

import 'vue-form-generator/dist/vfg.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';

Vue.use(VueFormGenerator);
Vue.component('multiselect', Multiselect);
