/**
 * Created by Administrator on 2017/5/2.
 */
let id,navBottomText;
exports.NavName = function(idNum,navBText){
    id = idNum;
    navBottomText = navBText;
};
exports.NavList = function () {
    let proLen = navBottomText.length;
    let str = "";

    for( let i = 0; i < proLen; i++ ){
        str += '<a class="indexFiex" href="' + navBottomText[i].NavUrl + '">' + navBottomText[i].NavName + '</a>'
    }
    let ProNav = document.querySelector(".ProNav");
    ProNav.innerHTML = str;
    id < 0 ? false : ProNav.getElementsByTagName("a")[id].setAttribute('class','indexFiex on');

};

