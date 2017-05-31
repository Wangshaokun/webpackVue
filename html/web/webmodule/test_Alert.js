/**
 * Created by Administrator on 2017/5/18.
 */
let version,TestHtml,_BoxJosn,TestBack,TestMian,TestMianHeight,cancel,TestBtn;
exports.TestName = function(versioned,BoxJosn){
    version = versioned;
    _BoxJosn = BoxJosn;
};
exports.TestList = function(){
    if(_BoxJosn.length == 2){
        TestHtml = '<div class="TestBai"><div class="TestMian"><div class="TestTitle">' + version + '</div><ul class="indexDisplay"><li><a href="' + _BoxJosn[0].BoxUrl + '">' + _BoxJosn[0].BoxName + '</a></li><li><a href="' + _BoxJosn[1].BoxUrl + '">' + _BoxJosn[1].BoxName + '</a></li></ul></div></div>';
    }else{
        TestHtml = '<div class="TestBai"><div class="TestMian"><div class="TestTitle">' + version + '</div><div class="TestBtn"><a href="' + _BoxJosn[0].BoxUrl + '">' + _BoxJosn[0].BoxName + '</a></div></div></div>';
    }
    TestBack = document.getElementsByClassName("Verification")[0];
    TestBack.innerHTML = TestHtml;
    TestMian = document.getElementsByClassName("TestMian")[0];
    //TestMianHeight = TestMian.;
    cancel = TestMian.getElementsByTagName("li");
    TestBtn = document.getElementsByClassName("TestBtn")[0];
    if(_BoxJosn.length == 2){
        cancel[0].addEventListener('click',function(){
            TestBack.style.display = "none";
        });
    }else{
        TestBtn.addEventListener('click',function(){
            TestBack.style.display = "none";
        })       
    }
};
