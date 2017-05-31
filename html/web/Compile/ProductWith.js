/**
 * Created by Administrator on 2017/5/3.
 */
import proW from '../../app/views/ProductWith.vue';
import Vue from '../../app/build/vue/Vue';
Vue.config.debug = true;
import resource from '../../app/build/vue/vue-resource';

let prowith = Vue.extend({

});
Vue.component('pro-with',prowith);
new Vue({
    el:".Product_With",
    components:{
        'pro-with':proW
    }
});