/**
 * Created by Administrator on 2017/5/10.
 */
import Rco from '../../app/views/Record.vue'
import Vue from '../../app/build/vue/Vue.js'
Vue.config.debug = true;//开启错误提示

let extend = Vue.extend({

});
Vue.component('ext-end',extend);
new Vue({
    el: '.Record',
    components: {
        'ext-end': Rco
    }
});