/**
 * Created by Administrator on 2017/5/2.
 */
import Pro from '../../app/views/ProductList.vue'
import Vue from '../../app/build/vue/Vue.js'
Vue.config.debug = true;//开启错误提示
import resource from '../../app/build/vue/vue-resource.js'
Vue.use(resource);

let product = Vue.extend({

});
Vue.component('pro-duct',product);
new Vue({
    el: '.Product_List',
    components: {
        'pro-duct': Pro
    }
});