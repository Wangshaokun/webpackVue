<template id="template-home">
    <div class="RecordMian">
        <ul>
            <li v-for="recordList in recordLists">
                <div class="RecordMun">
                    <div class="RecordNumber indexDisplay">
                        <p class="indexFiex">订单编号：<span>{{recordList.Number}}</span></p>
                        <p>
                            <!--v-bind:class="{'spanVisible':state.stateTrue}"-->
                            <span v-bind:class="{'spanVisible':recordList.stateTrue}">{{recordList.state[recordList.Vid]}}</span>
                        </p>
                    </div>
                    <div class="RecordContent indexDisplay">
                        <div class="RecorImg" v-bind:class="{'RecorImgThree':recordList.ImgTrue}" v-html="recordList.ImgTitle"></div>
                        <div class="RecorText indexFiex">
                            <p>{{recordList.titleed}}</p>
                            <p><span>¥ {{recordList.marry}}</span>{{recordList.timeed}}</p>
                        </div>
                    </div>
                    <div class="RecorBtn" v-bind:class="{'RecorHidden':recordList.stateTrue}">
                        <a href="javascript:void(0)" @click="amputate()">删除订单</a>
                        <a href="javascript:void(0)">继续完成</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                states:[],
                recordLists:[
                    {Number:'002188675530008', ImgTitle: '福佑<br/>金生', titleed:'太平福佑金生终身寿险（分红型）', marry:'10,000.00', timeed:'2017-12-12 16:00', Vid:0, state:['未完成','待支付','已支付','已生效','已退保'], stateTrue:false, ImgTrue:false},
                    {Number:'002188675530008', ImgTitle: '福佑<br/>金生', titleed:'太平福佑金生终身寿险（利益型）', marry:'10,000.00', timeed:'2017-12-12 16:00', Vid:1, state:['未完成','待支付','已支付','已生效','已退保'], stateTrue:false, ImgTrue:false},
                    {Number:'002188675530008', ImgTitle: '爱运动', titleed:'太平福佑金生终身寿险（分红型）', marry:'10,000.00', timeed:'2017-12-12 16:00', Vid:2, state:['未完成','待支付','已支付','已生效','已退保'], stateTrue:false, ImgTrue:false},
                    {Number:'002188675530008', ImgTitle: '卓越<br/>世享', titleed:'太平福佑金生终身寿险（利益型）', marry:'10,000.00', timeed:'2017-12-12 16:00', Vid:3, state:['未完成','待支付','已支付','已生效','已退保'], stateTrue:false, ImgTrue:false},
                    {Number:'002188675530008', ImgTitle: '卓越<br/>世享', titleed:'太平福佑金生终身寿险（分红型）', marry:'10,000.00', timeed:'2017-12-12 16:00', Vid:4, state:['未完成','待支付','已支付','已生效','已退保'], stateTrue:false, ImgTrue:false}
                ]
            }
        },
        created:function(){
//            let len = this.recordLists.length;
            for( let i in this.recordLists){
               this.recordLists[i].Vid < 2 ? this.recordLists[i].stateTrue = true  : this.recordLists[i].stateTrue = false;
               this.recordLists[i].ImgTitle.length < 4 ? this.recordLists[i].ImgTrue = true : this.recordLists[i].ImgTrue = false;
            }
        },
        methods:{
            amputate(){
                let TestBack = document.getElementById('TestBack');
                TestBack.style.display = "block";
            }
        }
    }
    let proNav = require('../../web/webmodule/test_Alert');
    proNav.TestName('删除订单');
    proNav.TestList();
</script>