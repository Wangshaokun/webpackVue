import App from '../../app/views/register.vue'
import Vue from '../../app/build/vue/Vue.js'
Vue.config.debug = true;//开启错误提示
import resource from '../../app/build/vue/vue-resource.js'
// let App = require('../../app/views/register.vue');
// let Vue = require('../../app/build/vue/Vue.js');
// Vue.config.debug = true;
// let resource = require('../../app/build/vue/vue-resource.js');
Vue.use(resource);
new Vue({
    el: '#indexAPP',
    components: {
        'my-component': App
    }
})

