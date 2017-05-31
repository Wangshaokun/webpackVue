<template id="template-home">
    <div class="Register">
        <div class="RegisterImg"><img src="../../web/images/register/logo.png"/></div>
        <ul>
            <li v-for="(item,index) in items">
                <div class="RegisterName indexDisplay">
                    <p>{{item.TexName}}</p>
                    <p class="indexFiex"><input type="text" :placeholder="item.TexName" value="" v-model="items[index].value" v-bind:data-index="index" v-on:blur="inputBlur()" /> </p>
                </div>
            </li>
            <li>
                <input type="checkbox"/><i v-on:click="checkClick" v-bind:class="{'selected':checkTrue}" ></i> 我已经知晓并认可<a href="#">《太平保宝用户协议》</a>
            </li>
        </ul>
        <div class="RegisterBtn"><a href="javascript:void(0)" v-on:click="RegBtn()">提交</a> </div>
    </div>
</template>

<script>
    let BoxProm = require('../../web/webmodule/test_Alert');
    let VerificationDom = document.getElementsByClassName("Verification");
    let callBoxJosn;
    export default{
        data(){
            return {
                //inputText:null,
                items: [
                    { TexName: '姓名' },
                    { TexName: '身份证号' }
                ],
                checkTrue:false,
                inputArr:["",""]
               // btnFalse:false
            }
        },
//        created: function(){
//            // 这里是动态生成v-model,这个可以放在网络请求成功里面;
//            let len = 2;
//            for (let i = 0; i < len; i ++) {
//                let item = {value: ''};
//                this.inputArr.push(item);
//            }
//        },
        methods:{
            VerDom:function(){
                VerificationDom[0].style.display = "block";
             },
            checkClick:function(){
                this.checkTrue = !this.checkTrue
            },
            inputBlur:function(e){
                let tag = event.target;
                let index = tag.getAttribute('data-index');
                this.inputArr.splice(index,(index+1),this.items[index].value);
                console.log(this.inputArr.length);
            },
            RegBtn:function(){
                if(this.inputArr[0] === "" || this.inputArr[0] === "underfind" || this.inputArr[0] === "null"){
                    callBoxJosn = [{BoxName:'确定',BoxUrl:'javascript:void(0)'}];
                    BoxProm.TestName("真实姓名不能为空",callBoxJosn);
                    BoxProm.TestList();
                    this.VerDom();
                    return
                }
                let Yreg=/^[a-zA-Z]+$/;
                if( !Yreg.test(this.inputArr[0]) ){
                    if( this.inputArr[0].length < 2 ){
                        callBoxJosn = [{BoxName:'确定',BoxUrl:'javascript:void(0)'}];
                        BoxProm.TestName("你输入的汉字字符不得低于2个",callBoxJosn);
                        BoxProm.TestList();
                        this.VerDom();
                        return
                    }
                }
                if(this.inputArr[1] === "" || this.inputArr[1] === "underfind" || this.inputArr[1] === "null"){
                    callBoxJosn = [{BoxName:'确定',BoxUrl:'javascript:void(0)'}];
                    BoxProm.TestName("真实身份证不能为空",callBoxJosn);
                    BoxProm.TestList();
                    this.VerDom();
                    return
                }
                if( !this.inputArr[1] || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(this.inputArr[1]) ){
                    callBoxJosn = [{BoxName:'确定',BoxUrl:'javascript:void(0)'}];
                    BoxProm.TestName("身份证号格式错误，请重新输入",callBoxJosn);
                    BoxProm.TestList();
                    this.VerDom();
                    return
                }
                if(this.checkTrue){
                    callBoxJosn = [{BoxName:'确定',BoxUrl:'../../Member.html'}];
                    BoxProm.TestName("注册成功",callBoxJosn);
                    BoxProm.TestList();
                    this.VerDom();
                }else{
                    callBoxJosn = [{BoxName:'确定',BoxUrl:'javascript:void(0)'}];
                    BoxProm.TestName("是否同意协议",callBoxJosn);
                    BoxProm.TestList();
                    this.VerDom();
                    return
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
        }
    }
</script>
