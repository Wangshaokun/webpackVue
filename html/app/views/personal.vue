<template>
    <div class="personal">
        <article class="HeadPortrait">
            <a href="javascript:void(0)" @click="resigerClick()">{{personalText.Member[personalText.MemId]}}</a>
            <a class="personalA" v-bind:href="personalText.hrefA" v-on:click="personalClcik()">
                <figure>
                    <p><img v-bind:src="personalText.imgSrc"/></p>
                    <figcaption>{{personalText.name}}</figcaption>
                </figure>
            </a>
        </article>
        <div class="Income">
            <ul>
                <li><section class="IncomeMarry"><a href=""><p>本月收入</p><p><span>{{personalText.monthMarry}}</span>元</p></a></section></li>
                <li><section class="IncomeMarry"><a href=""><p>累计收入</p><p><span>{{personalText.Cumulative}}</span>元</p></a></section></li>
                <li><section class="IncomeMarry"><a href=""><p><a href="#">提现</a>账户余额</p><p><span>{{personalText.balance}}</span>元</p></a></section></li>
            </ul>
        </div>
        <div class="parData" v-bind:class="{'parTrue':parDataTrue}">
            <div class="parDataMenu">
                <ul>
                    <li class="indexDisplay" v-for="(parFor,index) in parFors" v-on:click="cellphoneClick(index)">
                        <p>{{parFor.title}}</p>
                        <p class="indexFiex"><a href="javascript:void(0)"><input type="text" v-model="parFor.modelText"/></a></p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="callBack" v-bind:class="{'callBackTrue':callponeTrue}">
            <div class="callBMian">
                <div class="callBtitle">
                    <p>当前手机号</p>
                    <p>138****5678</p>
                </div>
                <div class="callBMun">
                    <ul>
                        <li class="indexDisplay">
                            <p>新手机号</p>
                            <p class="indexFiex"><input type="text" placeholder="您的新手机号码" v-model="callPlartilar" v-on:blur="inputCall()"/></p>
                        </li>
                        <li class="indexDisplay">
                            <p>验证码</p>
                            <p class="indexFiex"><input type="text" placeholder="填写验证码" v-model="VerCode"/></p>
                            <p v-on:click="securityClick()">{{security}}</p>
                        </li>
                    </ul>
                </div>
                <div class="callBBtn" v-on:click="confirm()"><a href="javascript:void(0)">确定</a></div>
            </div>
        </div>
        <div class="Mobileed" v-bind:class="{'Mobileeded':phoneTrue}">
            <div class="phoneed">
                <div class="MobileedMun">
                    <p><img src="./../images/icon/queD.png"/></p>
                    <p>更换成功</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let VerificationDom = document.getElementsByClassName("Verification");
    export default({
         data(){
             return{
                 personalText:{
                     MemId:0,
                     hrefA:'#',
                     imgSrc:require('../../web/images/persone/tx.jpg'),
                     name:'微信名称',
                     Member:['未注册','普通会员','高级会员'],
                     monthMarry:'100,000.00',
                     Cumulative:"999,000.00",
                     balance:'100,000.00'
                 },
                 parFors:[
                    {title:"姓名",url:"javascript:void(0)",modelText:"张三"},
                    {title:"身份证号",url:"javascript:void(0)",modelText:"1123**********8567"},
                    {title:"手机号",url:"javascript:void(0)",modelText:"138****5678"},
                    {title:"邀请码",url:"javascript:void(0)",modelText:"87756545357868709"}
                 ],
                 callPlartilar:"",
                 VerCode:"",
                 security:"发送验证码",
                 timer:0,
                 stop:false,
                 interval:null,
                 stopClick:true,
                 parDataTrue:false,
                 callponeTrue:false,
                 callTrue:false,
                 phoneTrue:false
             }
         },
         computed:{
            
         },
         methods:{
             personalClcik(){
                this.parDataTrue = true;
             },
             cellphoneClick(index){
                if(index == 2){
                    this.callponeTrue = true;
                    this.parDataTrue = false;
                }
             },
             VerDom(){
                VerificationDom[0].style.display = "block";
             },
             upadte(){
                //this.timer <= 0 ? this.timer = 30 : this.timer--;
                if(this.timer <= 0){
                    this.security = "发送验证码";
                    this.stopClick = true;
                }else{
                    this.timer--;
                    this.security = this.timer+"s后重发";
                }
             },
             resigerClick(){
                 this.VerDom();
             },
             inputCall(){
                if(this.callPlartilar == ""){
                    let callBoxJosn = [{BoxName:'确定',BoxUrl:'javascript:void(0)'}];
                    BoxProm.TestName("手机号码不能为空",callBoxJosn);
                    BoxProm.TestList();
                    this.VerDom();
                    return;
                }
             },
             securityClick(){
                 if(this.stopClick == true){
                    this.stopClick = false;
                    this.timer = 30;
                    if(this.stop == false){
                        this.interval = setInterval(this.upadte,1000);
                    }else{
                        clearInterval(this.Interval);
                    }
                    this.stop = !this.stop;
                 }else{
                     return;
                 }
             },
             confirm(){
                 if(this.callPlartilar == ""){
                    let callBoxJosn = [{BoxName:'确定',BoxUrl:'javascript:void(0)'}];
                    BoxProm.TestName("手机号码不能为空",callBoxJosn);
                    BoxProm.TestList();
                    this.VerDom();
                    return;
                 }else if(this.VerCode == ""){
                    let callBoxJosn = [{BoxName:'确定',BoxUrl:'javascript:void(0)'}];
                    BoxProm.TestName("验证码不能为空",callBoxJosn);
                    BoxProm.TestList();
                    this.VerDom();
                    return
                 }else{
                     this.phoneTrue = true;
                     setTimeout(function() {
                         console.log(1);
                         this.phoneTrue = false;
                         this.callponeTrue = false;
                     }, 3000);
                 }

             }
         }
    })
    let proNav = require('../../web/webmodule/productNav');
    let NavArr = [
        {NavName:"活动介绍",NavUrl:"../activity.html"},
        {NavName:"热销产品",NavUrl:"../ProductList.html"},
        {NavName:"个人中心",NavUrl:"../personal.html"}
    ];
    proNav.NavName(2,NavArr);
    proNav.NavList();

    let BoxProm = require('../../web/webmodule/test_Alert');
    let BoxJosn = [
        {BoxName:'取消',BoxUrl:'javascript:void(0)'},
        {BoxName:'立即注册',BoxUrl:'../register.html'}
    ];
    let BoxText = '<p>未注册</p><p>注册后才可以使用此功能</p>';
    BoxProm.TestName(BoxText,BoxJosn);
    BoxProm.TestList();

</script>