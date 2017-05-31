<template id="template-home">
    <div class="prowith_mian">
        <div class="prowith_img">
            <img src="../../web/images/product/prolistImg01.jpg" alt="产品图"/>
            <!--<div class="proImgBack"></div>-->
            <!--<div class="proImgText">-->
                <!--<p>{{proWith_title.title}}</p>-->
                <!--<p><b>{{proWith_title.describe}}</b>  |  <span>¥{{proWith_title.marry}}起</span></p>-->
            <!--</div>-->
        </div>
        <ul class="proCenterNav indexDisplay">
            <li class="indexFiex" v-for="(proNav,index) in proNavs" v-bind:class="{'navColor':proNav.navTrue}" >
                <a href="javascript:void(0)" @click="NavClick(index)">{{proNav.navTitle}}</a>
            </li>
        </ul>
        <div class="proContent">
            <div class="ContentProduct" v-bind:class="[proNav.navTrue ? 'Visible' : 'Hidden']" v-for="proNav in proNavs" v-html="proNav.ContentText" ></div>
        </div>
    </div>
</template>

<script>
    let ProductHtml = '<div class="VisiTitle">保障详情</div><div class="tableList"><table cellpadding="0" cellspacing="0" class="tableContent"><tr><td>产品名称</td><td>太平超e保医疗保险</td></tr><tr><td>保障区域</td><td>中国大陆（不含港、澳、台）</td></tr><tr><td>医疗机构</td><td>中国大陆境内二级（含二级）以上公立医院普通部</td></tr><tr> <td>一般医疗<br/>年免赔额</td><td>1万</td></tr><tr><td>恶性肿瘤<br/>医疗年免赔额</td><td>无</td></tr><tr><td>一般医疗<br/>年限额</td><td>300万</td></tr><tr><td>恶性肿瘤<br/>医疗年限额</td><td>300万</td></tr><tr><td>给付比例</td><td>100% 有社保但未先行赔付，给予60%赔付</td></tr><tr><td>恶性肿瘤<br/>住院津贴日额</td><td>200元/日（最高以200日为限）</td></tr></table></div><div class="VisiTitle">常见问题</div><div class="tableList tableListed"><ul class="tabUl"><li><div class="jssue"><div class="jssueTitle">Q：在哪些医院治疗，可以获得理赔？</div><div class="jssueAnswer"><p>A: 被保险人因意外伤害或者疾病在中华人民共和国境内（不含港、澳、台地区）二级及以上公立医院普通部接受住院、特殊门诊、门诊手术治疗的，可以赔付个人支付的、必要且合理的医疗费用。</p></div></div></li><li><div class="jssue"><div class="jssueTitle">Q：所有的医院费用都可以赔付吗？</div><div class="jssueAnswer"><p>A: 对于保障范围内的医疗费用中个人支付（含社保个人账户支付和现金支付）超过1万元的部分，无论是否属于医保范围，均可100%赔付，最高赔付金额为300万元。因恶性肿瘤住院，无免赔额，更有保额翻倍，高达600万，以及最高4万的恶性肿瘤住院津贴保险金。</p></div></div></li><li><div class="jssue"><div class="jssueTitle">Q:以“有社保”身份投保，但未在社保报销的，会影响理赔吗？</div><div class="jssueAnswer"><p>A:以“有社保”身份投保但未在社保报销的，赔付比例60%。当年度产生的、赔付范围内的医疗费用，自付部分只要累计超过1万，则1万以上的医疗费用由太平人寿赔付。社保个人账户支付的金额可计入免赔额，但社保统筹或公费医疗报销部分不能计入免赔额。赔付公式：赔款=（医疗费用-取得的其他补偿-年免赔额）*60%。</p></div></div></li><li><div class="jssue"><div class="jssueTitle">Q：年免赔额1万元，怎么理解？</div><div class="jssueAnswer"><p>A: 当年度产生的、赔付范围内的医疗费用，自付部分只要累计超过1万，则1万以上的医疗费用由太平人寿赔付。社保个人账户支付的金额可计入免赔额，但社保统筹或公费医疗报销部分不能计入免赔额。</p></div></div></li><li><div class="jssue"><div class="jssueTitle">Q：如果发生恶性肿瘤，医疗费中1万元以下的部分可以赔付么？</div><div class="jssueAnswer"><p>A:可以赔付。根据条款规定若被保险人在等待期后初次确诊罹患恶性肿瘤且接受医院治疗的，对于自确诊之日起剩余保单年度内发生的合同约定的恶性肿瘤医疗费用，在给付保险金时，不再扣除年免赔额。若续保，则后续保单年度内发生的合同约定的恶性肿瘤相关的医疗费用，在给付保险金时也不再扣除年免赔额。也就是说不但本保险期间在确诊恶性肿瘤之后的相关费用理赔时不再扣除1万元，而且续保年度中因恶性肿瘤治疗发生理赔时也都不扣除1万元年免赔额。</p></div></div></li><li><div class="jssue"><div class="jssueTitle">Q：理赔过还可以续保吗？</div><div class="jssueAnswer"><p>A: 在保险销售期间，只要没有欺骗行为，首次投保成功后，后续无论被保险人身体状况是否发生变化、无论是否发生理赔，每年都能按照续保当时公布的费率表继续买（我们不对单个人进行加费、除外责任或拒保），续保的最高年龄不超过80岁。如果被保险人的年龄超过80周岁或本产品统一停售，我们将不再接受续保。</p></div></div></li><li><div class="jssue"><div class="jssueTitle">Q：保险期满应该如何续保？</div><div class="jssueAnswer"><p>A:若我们在保险合同期满前未收到您停止续保本合同的书面申请，我们将从您授权的银行账户中自动扣取续期保费，并为您自动办理相关续保手续，新续保的合同自本合同期满日零时起生效。续保无等待期，也无需重新健康告知。您也可以通过“太平人寿95589”微信服务号自助交纳续期保费。</p></div></div></li><li><div class="jssue"><div class="jssueTitle">Q：投保前已经生病可以赔付吗？</div><div class="jssueAnswer"><p>A: 不可以。本险种不接受带病投保的行为。投保前已患有的疾病以及症状，均不属于保障范围。</p></div></div></li><li><div class="jssue"><div class="jssueTitle">Q：保费支付成功后如何获得保单？</div><div class="jssueAnswer"><p>A: 我们为您提供电子保单，根据《中华人民共和国合同法》第十一条规定，数据电文是合法的合同表现形式，电子保单和纸质保单具有同等法律效力。保单承保后，我们将以短信方式告知您电子保单下载地址及下载密码。您可至太平人寿官网查询并下载电子保单。</p></div></div></li><li><div class="jssue"><div class="jssueTitle">Q：如果我有信息需要变更，如何变更？</div><div class="jssueAnswer"><p>A：您可以拨打95589官方客服电话咨询变更信息办理流程，或前往太平人寿就近网点进行办理。</p></div></div></li></ul><div class="arrow-top" data-id="0"><p></p></div></div>';
    export default{
        data(){
            return{
                proWith_title:{
                    title:"四海八荒旅行意外险",
                    describe:"承诺续保",
                    marry:99
                },
                proNavs:[
                    {
                        navTitle:'产品介绍',
                        ContentText:'<p><img src="images/img/1.jpg"/></p><p><img src="images/img/2.jpg"/></p><p><img src="images/img/3.jpg"/></p><p><img src="images/img/4.jpg"/></p><p><img src="images/img/5.jpg"/><p><img src="images/img/6.jpg"/></p>',
                        navTrue:true
                    },
                    {
                        navTitle:'详细说明',
                        ContentText:ProductHtml,
                        navTrue:false
                    },
                ]
            }
        },
        methods:{
            navFor(){
                let thisLen = this.proNavs.length;
                for(let i = 0; i < thisLen; i++){
                    this.proNavs[i].navTrue = false;
                }
            },
            NavClick(index){
                this.navFor();
                this.proNavs[index].navTrue = true;
            }
        }
    }
    setTimeout(function(){
        let proCenterNav = document.querySelector('.proCenterNav'),
            proCenterTopHeihgt = proCenterNav.offsetTop,
            winScrollTop,
            winSTopHeight;

        window.onscroll = function(){
            winScrollTop = window.pageYOffset;
            winSTopHeight = proCenterTopHeihgt - winScrollTop;
            if( winSTopHeight < 0 ){
                proCenterNav.setAttribute('class','proCenterNav indexDisplay proCenterFixed');
            }else{
                proCenterNav.setAttribute('class','proCenterNav indexDisplay');
            }
        };
    },1000);
    let proNav = require('../../web/webmodule/productNav');
    let NavArr = [
        {NavName:"客服",NavUrl:"javascript:void(0)"},
        {NavName:"转发",NavUrl:"javascript:void(0)"},
        {NavName:"购买记录",NavUrl:"../Record.html"},
        {NavName:"立即购买",NavUrl:"javascript:void(0)"}
    ];
    proNav.NavName(-1,NavArr);
    proNav.NavList();
</script>