/**
 * Created by Administrator on 2017/5/11.
 */
import Person from '../../app/views/personal.vue'
import Vue from '../../app/build/vue/Vue.js'
Vue.config.debug = true;//开启错误提示

let personal = Vue.extend({

});
Vue.component('per-sonal',personal);

new Vue({
    el:".Personal",
    components:{
        'per-sonal':Person
    }
});
