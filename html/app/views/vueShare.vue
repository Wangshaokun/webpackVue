<template id="template-home">
    <div class="Register MumberTer">
        <div class="RegisterImg"><img src="../../web/images/register/logo.png"/></div>
        <div class="NumberTtitle">你将注册为{{numberName}}</div>
        <ul>
            <li v-for="(item,index) in items">
                <div class="RegisterName indexDisplay">
                    <p>{{item.TexName}}</p>
                    <p class="indexFiex"><input type="text" :placeholder="item.TexName" value="" v-model="items[index].value" v-bind:data-index="index" v-on:blur="inputBlur()" /> </p>
                </div>
            </li>
            <li class="Verification">
                <input type="button" :disabled="disabled" :value="text"  @click="send"  />
            </li>
        </ul>
        <div class="RegisterBtn"><a href="javascript:void(0)" v-on:click="RegBtn()">提交</a> </div>
        <div class="NumberFixe" v-show="FixeShow">
            <div class="NumberFixe_icon"><p></p></div>
            <div class="NumberText">
                <p>注册成功</p>
                <p>您的身份是{{numberName}}</p>
            </div>
            <a href="NumberFan">返回</a>
        </div>
    </div>
</template>

<style>

</style>
<script>
    export default{
        data(){
            return {
                //inputText:null,
                numID:0,
                items: [
                    { TexName: '手机号' },
                    { TexName: '验证码' }
                ],
                checkTrue:false,
                inputArr:["",""],
                thisTime:30,
                disabled:false,
                time:0,
                FixeShow:false
            }
        },
        methods:{
            inputBlur:function(e){
                let tag = event.target;
                let index = tag.getAttribute('data-index');
                this.inputArr.splice(index,(index+1),this.items[index].value);
            },
            run:function () {
                this.time = this.thisTime;
                this.timer();
            },
            timer:function () {
                if(this.time > 0){
                    this.time--;
                    setTimeout(this.timer ,1000);
                }
            },
            send:function () {
                if(this.inputArr[0] === "undefined" ||  this.inputArr[0] === ""){
                    console.log("手机号错误");
                    return
                }else{
                    this.disabled = true;
                    setTimeout(this.sended, 1000);
                }
            },
            sended(){
              this.run();
              this.disabled = false;
            },
            RegBtn:function(){
                if(this.inputArr[0] === "" || this.inputArr[0] === "undefined" || this.inputArr[0] === "null"){
                    console.log("手机号错误");
                    return
                }
                let pattern = /^1[34578]\d{9}$/;
                if (!pattern.test(this.inputArr[0])) {
                    console.log("你输入的手机格式有误，请重新输入");
                    return
                }
                if(this.inputArr[1] === "" || this.inputArr[1] ==="undefined" || this.inputArr[1] === "null"){
                    console.log("验证码错误");
                    return
                }else{
                    console.log("注册成功");
                    this.FixeShow = true;
                }

                //获取数据
                let formData = JSON.stringify(this.inputArr);
                this.$http({
                    method:"POST",
                    url:"http://192.168.20.26:7998/index",
                    data:formData,
                    //headers:{"X-Requested-With": "XMLHttpRequest"},
                    emulateJSON: true
                }).then((data) => {
                    console.log("data");
                },(error) => {
                    console.log("error");
                })
            }
        },
        computed: {
            text: function () {
                return this.time > 0 ?  ' 重新获取('+this.time+')'  : '获取验证码';
            },
            numberName:function () {
                return this.numID > 0 ? '高级会员' : '普通会员'
            }
        }
    }

</script>
d