/**
 * Created by Administrator on 2017/4/27.
 */
import Shareed from '../../app/views/vueShare.vue'
import Vue from '../../app/build/vue/Vue.js'
Vue.config.debug = true;//开启错误提示
import resource from '../../app/build/vue/vue-resource.js'
Vue.use(resource);

let myAdd = Vue.extend({

});
Vue.component('my-add',myAdd);
new Vue({
    el: '#Member',
    components: {
        'my-add': Shareed
    }
})