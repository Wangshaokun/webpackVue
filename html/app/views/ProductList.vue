<template id="template-home">
    <div class="productClass">
        <ul>
            <li v-for="listPro in listPros">
                <a href="ProductWith.html">
                    <div class="prolist">
                        <div class="prolistImg"><img v-bind:src="listPro.listImg" alt="产品图"></div>
                        <article class="proListText indexDisplay">
                            <section class="indexFiex">
                                <p>{{listPro.listTitle}}</p>
                                <p>{{listPro.listDispy}}</p>
                            </section>
                            <section class="indexJust"><p>¥ {{listPro.listmarry}} <span>起</span></p></section>
                        </article>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                listPros:[
                    {listImg:require('../../web/images/product/prolistImg.jpg'),listTitle:'四海八荒旅游意外险',listDispy:"百万医疗+50种疾病+续保至95岁",listmarry:"99"},
                    {listImg:require('../../web/images/product/prolistImg.jpg'),listTitle:'四海八荒旅游意外险（至尊版）',listDispy:"百万医疗+50种疾病+续保至95岁",listmarry:"199"},
                    {listImg:require('../../web/images/product/prolistImg.jpg'),listTitle:'四海八荒旅游意外险',listDispy:"百万医疗+50种疾病+续保至95岁",listmarry:"99"},
                    {listImg:require('../../web/images/product/prolistImg.jpg'),listTitle:'四海八荒旅游意外险',listDispy:"百万医疗+50种疾病+续保至95岁",listmarry:"99"},
                    {listImg:require('../../web/images/product/prolistImg.jpg'),listTitle:'四海八荒旅游意外险（至尊版）',listDispy:"百万医疗+50种疾病+续保至95岁",listmarry:"199"}
                ]

            }
        }
    }
    let proNav = require('../../web/webmodule/productNav');
    let NavArr = [
        {NavName:"活动介绍",NavUrl:"../activity.html"},
        {NavName:"热销产品",NavUrl:"../ProductList.html"},
        {NavName:"个人中心",NavUrl:"../personal.html"}
    ];
    proNav.NavName(1,NavArr);
    proNav.NavList();
</script>