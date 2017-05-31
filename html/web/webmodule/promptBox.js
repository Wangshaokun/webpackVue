/**
 * Created by Administrator on 2017/5/11.
 */
let BoxObj,BoxText,Boxjson;
exports.BoxName = function(BoxObjed,BoxTexted,Boxjsoned){
    BoxObj = BoxObjed;
    BoxText = BoxTexted;
    Boxjson = Boxjsoned;
};
exports.BoxMethod = function(){
    let str = '',
        BoxJsonLen = Boxjson.length,
        strHtml = '',
        _BoxObj = document.getElementsByClassName(BoxObj)[0];
    str += '<div class="BoxMun"><div class="BoxTitle">' + BoxText + '</div><div class="BoxBtn"></div></div>';
    _BoxObj.innerHTML = str;
    for(let i = 0; i < BoxJsonLen; i++){
        strHtml += '<a href=' + BoxJosn.BoxJosn[i].BoxUrl + '>' + Boxjson[i].BoxTitle + '</a>'
    }
    let BoxBtn = document.getElementsByClassName('BoxBtn')[0];
    BoxBtn.innerHTML = strHtml;
    let BoxA = document.getElementsByTagName('a');
    BoxA[0].onclick = function(){
        _BoxObj.style.display = 'none';
    };
    return _BoxObj
};